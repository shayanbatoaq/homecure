import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  getTimeSlotMinutes,
  karachiAreas,
  sampleTypes,
  timeSlots,
} from "@/lib/contact-options";

export const runtime = "nodejs";

type BookingRequest = {
  name: string;
  phone: string;
  area: string;
  requiredSample: string;
  preferredDate: string;
  preferredTime: string;
  message: string;
  company?: string;
};

type BookingField = keyof Omit<BookingRequest, "company">;

const successMessage =
  "Your booking request has been sent. We will contact you shortly.";
const defaultSender = "HomeCure <info@homecure.com.pk>";
const defaultRecipient = "info@homecure.com.pk";

const requiredFields: BookingField[] = [
  "name",
  "phone",
  "area",
  "requiredSample",
  "preferredDate",
  "preferredTime",
];

const fieldLabels: Record<BookingField, string> = {
  name: "Name",
  phone: "Phone number",
  area: "Area in Karachi",
  requiredSample: "Required sample/test",
  preferredDate: "Preferred date",
  preferredTime: "Preferred time",
  message: "Message",
};

const phonePattern = /^\+92 [0-9]{3}-[0-9]{7}$/;

function cleanField(value: unknown, maxLength = 500) {
  if (typeof value !== "string") {
    return "";
  }

  return value.trim().slice(0, maxLength);
}

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function getRecipients(value: string | undefined) {
  return (
    value
      ?.split(",")
      .map((email) => email.trim())
      .filter(Boolean) ?? []
  );
}

function optionIncludes(options: readonly string[], value: string) {
  return options.includes(value);
}

function toDateInputValue(date: Date) {
  const year = date.getFullYear();
  const month = `${date.getMonth() + 1}`.padStart(2, "0");
  const day = `${date.getDate()}`.padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function addDays(date: Date, days: number) {
  const nextDate = new Date(date);
  nextDate.setDate(nextDate.getDate() + days);

  return nextDate;
}

function parseDateInput(value: string) {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);

  if (!match) {
    return null;
  }

  const [, yearValue, monthValue, dayValue] = match;
  const year = Number(yearValue);
  const month = Number(monthValue);
  const day = Number(dayValue);
  const date = new Date(year, month - 1, day);

  if (
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ) {
    return null;
  }

  date.setHours(0, 0, 0, 0);

  return date;
}

function getDateLimits() {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const maxDate = addDays(today, 90);

  return {
    today,
    maxDate,
    todayValue: toDateInputValue(today),
  };
}

function buildTextEmail(payload: Omit<BookingRequest, "company">) {
  return [
    "New HomeCure booking request",
    "",
    ...Object.entries(fieldLabels).map(([key, label]) => {
      const value = payload[key as keyof Omit<BookingRequest, "company">];
      return `${label}: ${value || "Not provided"}`;
    }),
  ].join("\n");
}

function buildHtmlEmail(payload: Omit<BookingRequest, "company">) {
  const rows = Object.entries(fieldLabels)
    .map(([key, label]) => {
      const value = payload[key as keyof Omit<BookingRequest, "company">];

      return `
        <tr>
          <td style="padding:12px 16px;border-bottom:1px solid #e8edf2;color:#59616b;font-weight:600;width:190px;">${escapeHtml(label)}</td>
          <td style="padding:12px 16px;border-bottom:1px solid #e8edf2;color:#111827;">${escapeHtml(value || "Not provided").replace(/\n/g, "<br />")}</td>
        </tr>
      `;
    })
    .join("");

  return `
    <div style="font-family:Arial,sans-serif;background:#f6f8fb;padding:28px;">
      <div style="max-width:680px;margin:0 auto;background:#ffffff;border:1px solid #e8edf2;border-radius:16px;overflow:hidden;">
        <div style="background:#111827;color:#ffffff;padding:24px 28px;">
          <p style="margin:0 0 6px;color:#f87171;font-size:12px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;">HomeCure</p>
          <h1 style="margin:0;font-size:24px;line-height:1.3;">New booking request</h1>
        </div>
        <table style="width:100%;border-collapse:collapse;">
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>
  `;
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Please submit the form again." },
      { status: 400 },
    );
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json(
      { message: "Please submit the form again." },
      { status: 400 },
    );
  }

  const rawBody = body as Record<string, unknown>;
  const payload: BookingRequest = {
    name: cleanField(rawBody.name, 100),
    phone: cleanField(rawBody.phone, 60),
    area: cleanField(rawBody.area, 120),
    requiredSample: cleanField(rawBody.requiredSample, 160),
    preferredDate: cleanField(rawBody.preferredDate, 40),
    preferredTime: cleanField(rawBody.preferredTime, 160),
    message: cleanField(rawBody.message, 1200),
    company: cleanField(rawBody.company, 100),
  };

  if (payload.company) {
    return NextResponse.json({ message: successMessage });
  }

  const missingFields = requiredFields.filter((field) => !payload[field]);

  if (missingFields.length > 0) {
    return NextResponse.json(
      {
        message: `Please fill in ${missingFields
          .map((field) => fieldLabels[field])
          .join(", ")}.`,
      },
      { status: 400 },
    );
  }

  if (!phonePattern.test(payload.phone)) {
    return NextResponse.json(
      { message: "Please enter a 10-digit phone number after +92." },
      { status: 400 },
    );
  }

  if (!optionIncludes(karachiAreas, payload.area)) {
    return NextResponse.json(
      { message: "Please select a Karachi area from the dropdown." },
      { status: 400 },
    );
  }

  if (!optionIncludes(sampleTypes, payload.requiredSample)) {
    return NextResponse.json(
      { message: "Please select a sample type from the dropdown." },
      { status: 400 },
    );
  }

  const selectedDate = parseDateInput(payload.preferredDate);
  const { today, maxDate, todayValue } = getDateLimits();

  if (!selectedDate) {
    return NextResponse.json(
      { message: "Please select a valid preferred date." },
      { status: 400 },
    );
  }

  if (selectedDate < today) {
    return NextResponse.json(
      { message: "Please select today or a future date." },
      { status: 400 },
    );
  }

  if (selectedDate > maxDate) {
    return NextResponse.json(
      { message: "Please select a date within the next 90 days." },
      { status: 400 },
    );
  }

  const selectedTimeMinutes = getTimeSlotMinutes(payload.preferredTime);

  if (
    !optionIncludes(timeSlots, payload.preferredTime) ||
    selectedTimeMinutes < 0
  ) {
    return NextResponse.json(
      { message: "Please select a preferred time from the dropdown." },
      { status: 400 },
    );
  }

  if (payload.preferredDate === todayValue) {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    if (selectedTimeMinutes <= currentMinutes) {
      return NextResponse.json(
        { message: "Please select a future time slot." },
        { status: 400 },
      );
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL?.trim() || defaultSender;
  const recipients = getRecipients(process.env.RESEND_TO_EMAIL || defaultRecipient);

  if (!apiKey || !from || recipients.length === 0) {
    console.error("Contact form email settings are incomplete.", {
      hasApiKey: Boolean(apiKey),
      hasFrom: Boolean(from),
      hasRecipients: recipients.length > 0,
    });

    return NextResponse.json(
      {
        message:
          "Booking email is not configured yet. Please use WhatsApp or call us.",
      },
      { status: 500 },
    );
  }

  const resend = new Resend(apiKey);
  const emailPayload = {
    name: payload.name,
    phone: payload.phone,
    area: payload.area,
    requiredSample: payload.requiredSample,
    preferredDate: payload.preferredDate,
    preferredTime: payload.preferredTime,
    message: payload.message,
  };

  try {
    const { error } = await resend.emails.send({
      from,
      to: recipients,
      subject: `HomeCure booking request from ${payload.name}`,
      text: buildTextEmail(emailPayload),
      html: buildHtmlEmail(emailPayload),
    });

    if (error) {
      console.error("Resend failed to send booking request.", error);

      return NextResponse.json(
        {
          message:
            "We could not send your booking request right now. Please try WhatsApp or call us.",
        },
        { status: 502 },
      );
    }
  } catch (error) {
    console.error("Booking request email failed.", error);

    return NextResponse.json(
      {
        message:
          "We could not send your booking request right now. Please try WhatsApp or call us.",
      },
      { status: 502 },
    );
  }

  return NextResponse.json({ message: successMessage });
}
