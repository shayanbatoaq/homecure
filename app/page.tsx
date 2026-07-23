import {
  ArrowRight,
  CalendarCheck,
  CheckCircle2,
  ClipboardList,
  Clock3,
  Droplet,
  HeartPulse,
  HomeIcon,
  Mail,
  MapPin,
  MessageCircle,
  Microscope,
  Phone,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TestTube2,
} from "lucide-react";
import Image from "next/image";
import { FaFacebookF, FaInstagram } from "react-icons/fa6";
import { ContactForm } from "./components/contact-form";
import { siteImages, type SiteImage } from "@/lib/images";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  CONTACT_PHONE_E164,
  EMAIL_LINK,
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  PHONE_LINK,
  SEO_DESCRIPTION,
  SITE_ALTERNATE_NAME,
  SITE_NAME,
  SITE_URL,
  WHATSAPP_LINK,
} from "@/lib/site";
import { FadeUp, FloatingPanel, SoftReveal } from "./components/motion";

const navigation = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Safety", href: "#safety" },
  { label: "Coverage", href: "#coverage" },
  { label: "Contact", href: "#contact" },
];

const footerContactLinks = [
  { label: CONTACT_EMAIL, href: EMAIL_LINK, icon: Mail },
  { label: CONTACT_PHONE, href: PHONE_LINK, icon: Phone },
  {
    label: "WhatsApp us",
    href: WHATSAPP_LINK,
    icon: MessageCircle,
    external: true,
  },
];

const socialLinks = [
  { label: "Instagram", href: INSTAGRAM_LINK, icon: FaInstagram },
  { label: "Facebook", href: FACEBOOK_LINK, icon: FaFacebookF },
];

const services = [
  {
    title: "Blood Sample Collection",
    description:
      "Safe at-home blood sample collection for routine and diagnostic testing.",
    icon: Droplet,
    image: siteImages.services.blood,
  },
  {
    title: "Urine Sample Collection",
    description:
      "Convenient urine sample pickup handled with proper labeling and hygiene.",
    icon: TestTube2,
    image: siteImages.services.urine,
  },
  {
    title: "Stool Sample Collection",
    description:
      "Reliable stool sample collection support with clear handling guidance.",
    icon: ClipboardList,
    image: siteImages.services.stool,
  },
  {
    title: "Sputum Sample Collection",
    description:
      "At-home sputum sample collection assistance for required diagnostic tests.",
    icon: Microscope,
    image: siteImages.services.sputum,
  },
];

const steps = [
  {
    title: "Contact Home Cure",
    description:
      "Reach out with your sample collection need and your location in Karachi.",
  },
  {
    title: "Share Your Required Test",
    description:
      "Tell us the prescribed test or sample type so the visit is prepared properly.",
  },
  {
    title: "Schedule a Home Visit",
    description:
      "Choose a suitable date and time for trained healthcare staff to visit.",
  },
  {
    title: "Sample Collected Safely",
    description:
      "Samples are collected, labeled, and handled with hygiene at every step.",
  },
];

const benefits = [
  {
    title: "Focused on Sample Collection",
    description:
      "Home Cure is built around diagnostic sample collection at home, keeping the service clear and dependable.",
    icon: Stethoscope,
  },
  {
    title: "Hygienic Handling",
    description:
      "Collection practices emphasize clean handling, proper labeling, and careful sample preparation.",
    icon: ShieldCheck,
  },
  {
    title: "Trained Healthcare Staff",
    description:
      "Home visits are handled by healthcare staff trained for respectful and careful collection.",
    icon: HeartPulse,
  },
  {
    title: "Karachi-Wide Home Visits",
    description:
      "Designed for patients and families across Karachi who need convenient sample pickup at home.",
    icon: MapPin,
  },
];

const safetyPoints = [
  "Sterile handling practices for every scheduled visit",
  "Clear labeling and careful sample preparation",
  "Respectful home visits centered on patient comfort",
  "Guidance for urine, stool, and sputum sample readiness",
];

const floatingCards = [
  {
    label: "Blood, urine, stool & sputum samples",
    className: "left-[calc(75%_-_9rem)] top-40 max-w-[15rem]",
    delay: 0.35,
  },
  {
    label: "Hygienic collection process",
    className: "left-[calc(75%_+_1.5rem)] top-[15.75rem] max-w-[13rem]",
    delay: 0.5,
  },
  {
    label: "Available 7 days a week",
    className: "left-[calc(75%_-_7rem)] top-[21.5rem] max-w-[12rem]",
    delay: 0.65,
  },
];

const faqs = [
  {
    question: "Does Home Cure provide at-home sample collection in Karachi?",
    answer:
      "Yes. Home Cure provides at-home sample collection across Karachi for blood, urine, stool, and sputum samples.",
  },
  {
    question: "How do I book Home Cure sample collection at home?",
    answer:
      "You can book through the form, WhatsApp, phone, or email. Share your area, sample type, preferred date, and preferred time slot.",
  },
  {
    question: "Which sample collection services are available?",
    answer:
      "Home Cure currently supports blood sample collection, urine sample collection, stool sample collection, and sputum sample collection.",
  },
];

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["MedicalBusiness", "LocalBusiness"],
      "@id": `${SITE_URL}/#business`,
      name: SITE_NAME,
      alternateName: SITE_ALTERNATE_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}${siteImages.logo.src}`,
      image: `${SITE_URL}${siteImages.hero.src}`,
      description: SEO_DESCRIPTION,
      telephone: CONTACT_PHONE_E164,
      email: CONTACT_EMAIL,
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karachi",
        addressRegion: "Sindh",
        addressCountry: "PK",
      },
      areaServed: {
        "@type": "City",
        name: "Karachi",
      },
      serviceArea: {
        "@type": "AdministrativeArea",
        name: "Karachi, Sindh",
      },
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "09:00",
          closes: "22:00",
        },
      ],
      sameAs: [INSTAGRAM_LINK, FACEBOOK_LINK],
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: CONTACT_PHONE_E164,
          contactType: "customer service",
          areaServed: "PK-SD",
          availableLanguage: ["English", "Urdu"],
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: SITE_NAME,
      alternateName: SITE_ALTERNATE_NAME,
      url: SITE_URL,
      inLanguage: "en-PK",
      publisher: {
        "@id": `${SITE_URL}/#business`,
      },
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/#at-home-sample-collection`,
      name: "At-home sample collection in Karachi",
      serviceType: "At-home diagnostic sample collection",
      description:
        "Home Cure provides hygienic blood, urine, stool, and sputum sample collection at home across Karachi.",
      provider: {
        "@id": `${SITE_URL}/#business`,
      },
      areaServed: {
        "@type": "City",
        name: "Karachi",
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Home Cure sample collection services",
        itemListElement: services.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service.title,
            description: service.description,
          },
        })),
      },
    },
  ],
};

const structuredDataMarkup = JSON.stringify(structuredData).replace(
  /</g,
  "\\u003c",
);

function SectionIntro({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <FadeUp
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl text-left"
      }
    >
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-red">
        {eyebrow}
      </p>
      <h2 className="text-balance text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 text-pretty text-base leading-8 text-muted sm:text-lg">
          {description}
        </p>
      ) : null}
    </FadeUp>
  );
}

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-brand-red px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(231,31,33,0.28)] transition hover:-translate-y-0.5 hover:bg-brand-red-dark hover:shadow-[0_22px_48px_rgba(231,31,33,0.34)] focus:outline-none focus:ring-2 focus:ring-brand-red focus:ring-offset-2"
    >
      {children}
    </a>
  );
}

function SecondaryButton({
  href,
  children,
  target,
  rel,
}: {
  href: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
}) {
  return (
    <a
      href={href}
      target={target}
      rel={rel}
      className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/35 bg-white/12 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:border-white/60 hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-brand-ink"
    >
      {children}
    </a>
  );
}

function ImageCard({
  image,
  className = "",
  priority = false,
  sizes = "(min-width: 1024px) 48vw, 100vw",
}: {
  image: SiteImage;
  className?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <FadeUp
      className={`group relative overflow-hidden rounded-[2rem] border border-line bg-surface shadow-[0_24px_80px_rgba(8,11,14,0.10)] ${className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={priority}
        sizes={sizes}
        className="object-cover transition duration-700 group-hover:scale-105"
      />
    </FadeUp>
  );
}

export default function Home() {
  return (
    <main className="bg-background text-foreground">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: structuredDataMarkup }}
      />
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/20 bg-white/90 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">
          <a href="#" className="flex items-center gap-3" aria-label="Home Cure">
            <Image
              src={siteImages.navbarLogo.src}
              alt={siteImages.navbarLogo.alt}
              width={434}
              height={177}
              priority
              className="h-16 w-auto"
            />
          </a>
          <nav
            className="hidden items-center gap-8 text-sm font-medium text-brand-ink/72 lg:flex"
            aria-label="Primary navigation"
          >
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="transition hover:text-brand-red"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <a
            href="#contact"
            className="hidden min-h-11 items-center justify-center rounded-full bg-brand-ink px-5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-brand-red sm:inline-flex"
          >
            Book a Home Visit
          </a>
        </div>
      </header>

      <section className="relative min-h-[88svh] overflow-hidden pt-20 text-white">
        <SoftReveal className="absolute inset-0">
          <Image
            src={siteImages.hero.src}
            alt={siteImages.hero.alt}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </SoftReveal>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,11,14,0.88),rgba(8,11,14,0.60)_44%,rgba(8,11,14,0.16))]" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background to-transparent" />

        {floatingCards.map((card) => (
          <FloatingPanel
            key={card.label}
            delay={card.delay}
            className={`absolute hidden rounded-2xl border border-white/20 bg-white/15 p-4 text-sm font-medium leading-6 shadow-2xl backdrop-blur-md xl:block ${card.className}`}
          >
            <span className="flex items-start gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-white" />
              {card.label}
            </span>
          </FloatingPanel>
        ))}

        <div className="relative mx-auto flex min-h-[calc(88svh-5rem)] max-w-7xl items-center px-5 py-20 sm:px-8 lg:px-10">
          <FadeUp className="max-w-3xl">
            <p className="mb-5 inline-flex items-center rounded-full border border-white/20 bg-white/12 px-4 py-2 text-sm font-semibold text-white/90 backdrop-blur">
              Home Cure sample collection across Karachi
            </p>
            <h1 className="text-balance text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl">
              Home Cure At-Home Sample Collection in Karachi
            </h1>
            <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/82 sm:text-xl">
              Home Cure provides safe, hygienic,
              and convenient sample collection across Karachi, helping patients
              avoid unnecessary clinic or lab visits.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <PrimaryButton href="#contact">
                Book a Home Visit
                <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <SecondaryButton
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle className="h-4 w-4" />
                WhatsApp Us
              </SecondaryButton>
            </div>
          </FadeUp>
        </div>
      </section>

      <section id="about" className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionIntro
              eyebrow="About Home Cure"
              title="Making Diagnostic Sample Collection Easier at Home"
              description="Home Cure was created to make essential diagnostic sample collection more convenient for patients and families in Karachi. Our trained healthcare staff visit your home, collect samples safely, and follow strict hygiene practices throughout the process."
            />
            <FadeUp className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                "Home visit sample pickup",
                "Blood, urine, stool, and sputum collection",
                "Clear handling guidance",
                "Patient comfort at home",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-line bg-white p-4 text-sm font-semibold text-brand-ink shadow-sm"
                >
                  <CheckCircle2 className="mb-3 h-5 w-5 text-brand-red" />
                  {item}
                </div>
              ))}
            </FadeUp>
          </div>
          <ImageCard
            image={siteImages.about}
            className="min-h-[460px]"
          />
        </div>
      </section>

      <section
        id="services"
        className="scroll-mt-24 bg-surface px-5 py-24 sm:px-8 lg:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Primary service"
            title="At-Home Sample Collection Services in Karachi"
            description="Home Cure currently focuses on safe and hygienic at-home sample collection only, with support for the most common diagnostic sample types."
            align="center"
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <FadeUp
                  key={service.title}
                  delay={index * 0.06}
                  className="group rounded-3xl border border-line bg-white p-4 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-brand-red/30 hover:shadow-[0_22px_60px_rgba(8,11,14,0.10)]"
                >
                  <div className="relative mb-5 aspect-[4/3] overflow-hidden rounded-2xl bg-surface">
                    <Image
                      src={service.image.src}
                      alt={service.image.alt}
                      fill
                      sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-brand-red/10 text-brand-red transition group-hover:bg-brand-red group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold tracking-tight text-brand-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {service.description}
                  </p>
                </FadeUp>
              );
            })}
          </div>
          <div className="mt-14 grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <ImageCard
              image={siteImages.labeledContainers}
              className="min-h-[420px]"
            />
            <FadeUp className="flex flex-col justify-center rounded-[2rem] bg-brand-ink p-8 text-white shadow-[0_28px_80px_rgba(8,11,14,0.20)] sm:p-10">
              <Sparkles className="mb-6 h-9 w-9 text-brand-red" />
              <h3 className="text-3xl font-semibold tracking-tight">
                One focused service, handled with care.
              </h3>
              <p className="mt-5 leading-8 text-white/75">
                By staying focused on sample collection, Home Cure keeps the
                visit simple, prepared, and centered on hygiene from arrival to
                handoff.
              </p>
            </FadeUp>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="How it works"
            title="Simple Booking. Safe Collection."
            description="The process is intentionally clear for patients, families, and caregivers arranging sample collection from home."
            align="center"
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-4">
            {steps.map((step, index) => (
              <FadeUp
                key={step.title}
                delay={index * 0.08}
                className="relative rounded-3xl border border-line bg-white p-6 shadow-sm"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-medical-blue text-brand-ink">
                  <span className="font-mono text-sm font-bold">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="text-xl font-semibold tracking-tight text-brand-ink">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted">
                  {step.description}
                </p>
              </FadeUp>
            ))}
          </div>
          <ImageCard
            image={siteImages.howItWorks}
            className="mt-12 min-h-[280px] sm:min-h-[340px] lg:min-h-[380px]"
            sizes="(min-width: 1024px) 80vw, 100vw"
          />
        </div>
      </section>

      <section className="bg-brand-ink px-5 py-24 text-white sm:px-8 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr]">
          <ImageCard
            image={siteImages.focus}
            className="min-h-[520px] border-white/10"
          />
          <div className="self-center">
            <FadeUp>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-red">
                Why choose Home Cure
              </p>
              <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
                Calm, convenient sample collection for Karachi homes.
              </h2>
            </FadeUp>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <FadeUp
                    key={benefit.title}
                    delay={index * 0.06}
                    className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-1 hover:bg-white/[0.09]"
                  >
                    <Icon className="mb-5 h-7 w-7 text-brand-red" />
                    <h3 className="text-lg font-semibold">{benefit.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-white/68">
                      {benefit.description}
                    </p>
                  </FadeUp>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="safety"
        className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_1fr]">
          <div>
            <SectionIntro
              eyebrow="Safety and hygiene"
              title="Built Around Hygiene and Patient Comfort"
              description="Each home visit is structured around sterile handling, proper labeling, careful sample collection, and respectful support inside the patient home."
            />
            <div className="mt-8 space-y-3">
              {safetyPoints.map((point, index) => (
                <FadeUp
                  key={point}
                  delay={index * 0.05}
                  className="flex items-start gap-3 rounded-2xl border border-line bg-white p-4 shadow-sm"
                >
                  <ShieldCheck className="mt-0.5 h-5 w-5 shrink-0 text-brand-red" />
                  <p className="text-sm font-medium leading-6 text-brand-ink">
                    {point}
                  </p>
                </FadeUp>
              ))}
            </div>
          </div>
          <ImageCard
            image={siteImages.safety}
            className="min-h-[500px]"
          />
        </div>
      </section>

      <section
        id="coverage"
        className="scroll-mt-24 bg-surface px-5 py-24 sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.78fr_1.22fr]">
          <FadeUp className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-line sm:p-10">
            <MapPin className="mb-6 h-10 w-10 text-brand-red" />
            <h2 className="text-3xl font-semibold tracking-tight text-brand-ink sm:text-4xl">
              Coverage across Karachi
            </h2>
            <p className="mt-5 leading-8 text-muted">
              Home Cure is designed for patients and families across Karachi who
              want diagnostic samples collected at home with a safer, calmer
              process. Book at-home sample collection seven days a week, from
              9:00 AM to 10:00 PM.
            </p>
          </FadeUp>
          <FadeUp className="grid gap-5 sm:grid-cols-3">
            {[
              {
                icon: HomeIcon,
                title: "Home visits",
                text: "Collection is arranged where the patient is comfortable.",
              },
              {
                icon: CalendarCheck,
                title: "Scheduled timing",
                text: "Pick a preferred date and time for the visit.",
              },
              {
                icon: Clock3,
                title: "7 days a week",
                text: "Booking support is shaped around everyday patient needs.",
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="rounded-3xl border border-line bg-white p-6 shadow-sm"
                >
                  <Icon className="mb-5 h-7 w-7 text-medical-blue-strong" />
                  <h3 className="text-lg font-semibold text-brand-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </FadeUp>
        </div>
      </section>

      <section className="px-5 py-24 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionIntro
            eyebrow="Common questions"
            title="At-Home Sample Collection FAQs"
            description="Clear answers for patients and families searching for Home Cure or at-home sample collection in Karachi."
            align="center"
          />
          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {faqs.map((faq, index) => (
              <FadeUp
                key={faq.question}
                delay={index * 0.06}
                className="rounded-3xl border border-line bg-white p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-brand-ink">
                  {faq.question}
                </h3>
                <p className="mt-4 text-sm leading-7 text-muted">
                  {faq.answer}
                </p>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="scroll-mt-24 px-5 py-24 sm:px-8 lg:px-10"
      >
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] border border-line bg-white shadow-[0_28px_90px_rgba(8,11,14,0.10)] lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[420px]">
            <Image
              src={siteImages.contact.src}
              alt={siteImages.contact.alt}
              fill
              sizes="(min-width: 1024px) 42vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-brand-ink/20 to-transparent" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
                Contact
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                Book Your Sample Collection Visit
              </h2>
            </div>
          </div>
          <FadeUp className="p-6 sm:p-8 lg:p-10">
            <ContactForm whatsappHref={WHATSAPP_LINK} phoneHref={PHONE_LINK} />
          </FadeUp>
        </div>
      </section>

      <footer className="border-t border-line bg-brand-ink px-5 py-12 text-white sm:px-8 lg:px-10">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-xl">
              <Image
                src={siteImages.logo.src}
                alt={siteImages.logo.alt}
                width={206}
                height={88}
                className="h-14 w-auto rounded-xl bg-white px-3 py-2"
              />
              <p className="mt-5 leading-8 text-white/68">
                Home Cure provides safe and convenient at-home sample
                collection across Karachi, with a focus on hygiene, comfort,
                and reliable service.
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:justify-self-end">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                  Contact
                </h3>
                <div className="mt-5 grid gap-3 text-sm text-white/72">
                  {footerContactLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        target={item.external ? "_blank" : undefined}
                        rel={item.external ? "noreferrer" : undefined}
                        className="inline-flex items-center gap-3 transition hover:text-white"
                      >
                        <Icon className="h-4 w-4 shrink-0 text-brand-red" />
                        <span>{item.label}</span>
                      </a>
                    );
                  })}
                </div>
                <div className="mt-5 flex gap-3">
                  {socialLinks.map((item) => {
                    const Icon = item.icon;

                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={item.label}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/8 text-white transition hover:-translate-y-0.5 hover:border-brand-red hover:bg-brand-red"
                      >
                        <Icon className="h-4 w-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                  Explore
                </h3>
                <div className="mt-5 grid gap-3 text-sm text-white/72">
                  {navigation.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="transition hover:text-white"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
            <p>&copy; {new Date().getFullYear()} Home Cure. All rights reserved.</p>
            <p>
              Powered by{" "}
              <a
                href="https://patricians.pk"
                target="_blank"
                rel="noreferrer"
                className="font-semibold text-white/80 transition hover:text-white"
              >
                Patricians
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
