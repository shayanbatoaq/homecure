"use client";

import {
  ArrowRight,
  CheckCircle2,
  Loader2,
  MessageCircle,
  Phone,
} from "lucide-react";
import type { FormEvent } from "react";
import { useMemo, useState } from "react";
import {
  getTimeSlotMinutes,
  karachiAreas,
  sampleTypes,
  timeSlots,
} from "@/lib/contact-options";

type ContactFormProps = {
  whatsappHref: string;
  phoneHref: string;
};

type FormStatus = {
  type: "idle" | "success" | "error";
  message: string;
};

const phoneLocalPattern = String.raw`^[0-9]{3}-[0-9]{7}$`;

function formatPhoneLocal(value: string) {
  const rawDigits = value.replace(/\D/g, "");
  const digits = (
    rawDigits.startsWith("92") && rawDigits.length > 10
      ? rawDigits.slice(2)
      : rawDigits
  ).slice(0, 10);

  if (digits.length <= 3) {
    return digits;
  }

  return `${digits.slice(0, 3)}-${digits.slice(3)}`;
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

function getAvailableTimeSlots(selectedDate: string, today: string) {
  if (selectedDate !== today) {
    return timeSlots;
  }

  const now = new Date();
  const currentMinutes = now.getHours() * 60 + now.getMinutes();

  return timeSlots.filter((slot) => getTimeSlotMinutes(slot) > currentMinutes);
}

export function ContactForm({ whatsappHref, phoneHref }: ContactFormProps) {
  const [status, setStatus] = useState<FormStatus>({
    type: "idle",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [phoneLocal, setPhoneLocal] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const today = useMemo(() => toDateInputValue(new Date()), []);
  const maxDate = useMemo(() => toDateInputValue(addDays(new Date(), 90)), []);
  const availableTimeSlots = useMemo(
    () => getAvailableTimeSlots(selectedDate, today),
    [selectedDate, today],
  );
  const fullPhone = phoneLocal.length === 11 ? `+92 ${phoneLocal}` : "";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });
      const result = (await response.json().catch(() => ({}))) as {
        message?: string;
      };

      if (!response.ok) {
        throw new Error(
          result.message ?? "We could not send your request right now.",
        );
      }

      form.reset();
      setPhoneLocal("");
      setSelectedDate("");
      setSelectedTime("");
      setStatus({
        type: "success",
        message:
          result.message ??
          "Your booking request has been sent. We will contact you shortly.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "We could not send your request right now.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form className="grid gap-4" onSubmit={handleSubmit}>
      <input
        name="company"
        type="text"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
      />
      <input name="phone" type="hidden" value={fullPhone} />
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-brand-ink">Name</span>
        <input
          name="name"
          type="text"
          autoComplete="name"
          required
          className="min-h-12 rounded-2xl border border-line bg-surface px-4 text-brand-ink outline-none transition placeholder:text-muted/60 focus:border-brand-red focus:bg-white focus:ring-4 focus:ring-brand-red/10"
        />
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-brand-ink">
          Phone number
        </span>
        <div className="flex min-h-12 overflow-hidden rounded-2xl border border-line bg-surface text-brand-ink transition focus-within:border-brand-red focus-within:bg-white focus-within:ring-4 focus-within:ring-brand-red/10">
          <span className="inline-flex items-center border-r border-line px-4 text-sm font-semibold text-muted">
            +92
          </span>
          <input
            name="phoneLocal"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            required
            value={phoneLocal}
            onChange={(event) =>
              setPhoneLocal(formatPhoneLocal(event.target.value))
            }
            placeholder="123-4567890"
            pattern={phoneLocalPattern}
            maxLength={11}
            title="Enter 10 digits after +92, for example 123-4567890"
            className="min-w-0 flex-1 bg-transparent px-4 outline-none placeholder:text-muted/60"
          />
        </div>
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-brand-ink">
          Area in Karachi
        </span>
        <select
          name="area"
          required
          defaultValue=""
          className="min-h-12 rounded-2xl border border-line bg-surface px-4 text-brand-ink outline-none transition focus:border-brand-red focus:bg-white focus:ring-4 focus:ring-brand-red/10"
        >
          <option value="" disabled>
            Select your area
          </option>
          {karachiAreas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>
      </label>
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-brand-ink">
          Required sample/test
        </span>
        <select
          name="requiredSample"
          required
          defaultValue=""
          className="min-h-12 rounded-2xl border border-line bg-surface px-4 text-brand-ink outline-none transition focus:border-brand-red focus:bg-white focus:ring-4 focus:ring-brand-red/10"
        >
          <option value="" disabled>
            Select a sample type
          </option>
          {sampleTypes.map((sampleType) => (
            <option key={sampleType} value={sampleType}>
              {sampleType}
            </option>
          ))}
        </select>
      </label>
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-brand-ink">
            Preferred date
          </span>
          <input
            name="preferredDate"
            type="date"
            required
            min={today}
            max={maxDate}
            value={selectedDate}
            onChange={(event) => {
              const nextDate = event.target.value;
              const nextAvailableSlots = getAvailableTimeSlots(nextDate, today);

              setSelectedDate(nextDate);

              if (!nextAvailableSlots.includes(selectedTime)) {
                setSelectedTime("");
              }
            }}
            className="min-h-12 rounded-2xl border border-line bg-surface px-4 text-brand-ink outline-none transition focus:border-brand-red focus:bg-white focus:ring-4 focus:ring-brand-red/10"
          />
        </label>
        <label className="grid gap-2">
          <span className="text-sm font-semibold text-brand-ink">
            Preferred time
          </span>
          <select
            name="preferredTime"
            required
            value={selectedTime}
            disabled={!selectedDate || availableTimeSlots.length === 0}
            onChange={(event) => setSelectedTime(event.target.value)}
            className="min-h-12 rounded-2xl border border-line bg-surface px-4 text-brand-ink outline-none transition focus:border-brand-red focus:bg-white focus:ring-4 focus:ring-brand-red/10 disabled:cursor-not-allowed disabled:opacity-65"
          >
            <option value="" disabled>
              {selectedDate ? "Select a time" : "Select a date first"}
            </option>
            {selectedDate && availableTimeSlots.length === 0 ? (
              <option value="" disabled>
                No times left today
              </option>
            ) : null}
            {timeSlots.map((time) => (
              availableTimeSlots.includes(time) ? (
                <option key={time} value={time}>
                  {time}
                </option>
              ) : null
            ))}
          </select>
        </label>
      </div>
      <label className="grid gap-2">
        <span className="text-sm font-semibold text-brand-ink">Message</span>
        <textarea
          name="message"
          rows={4}
          className="resize-none rounded-2xl border border-line bg-surface px-4 py-3 text-brand-ink outline-none transition placeholder:text-muted/60 focus:border-brand-red focus:bg-white focus:ring-4 focus:ring-brand-red/10"
        />
      </label>
      {status.message ? (
        <p
          className={`rounded-2xl px-4 py-3 text-sm font-medium ${
            status.type === "success"
              ? "bg-medical-blue/12 text-brand-ink"
              : "bg-brand-red/10 text-brand-red-dark"
          }`}
          role="status"
          aria-live="polite"
        >
          {status.type === "success" ? (
            <CheckCircle2 className="mr-2 inline h-4 w-4 align-text-bottom" />
          ) : null}
          {status.message}
        </p>
      ) : null}
      <div className="mt-3 flex flex-col gap-3 sm:flex-row">
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 flex-1 items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(231,31,33,0.24)] transition hover:-translate-y-0.5 hover:bg-brand-red-dark disabled:cursor-not-allowed disabled:opacity-70 disabled:hover:translate-y-0 disabled:hover:bg-brand-red"
        >
          {isSubmitting ? (
            <>
              Sending
              <Loader2 className="h-4 w-4 animate-spin" />
            </>
          ) : (
            <>
              Send Booking Request
              <ArrowRight className="h-4 w-4" />
            </>
          )}
        </button>
        <a
          href={whatsappHref}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-brand-ink transition hover:-translate-y-0.5 hover:border-brand-red hover:text-brand-red"
        >
          <MessageCircle className="h-4 w-4" />
          WhatsApp
        </a>
        <a
          href={phoneHref}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-semibold text-brand-ink transition hover:-translate-y-0.5 hover:border-brand-red hover:text-brand-red"
        >
          <Phone className="h-4 w-4" />
          Call
        </a>
      </div>
    </form>
  );
}
