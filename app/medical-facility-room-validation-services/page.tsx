import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  Wind,
  Thermometer,
  ShieldCheck,
  FileText,
  Building2,
} from "lucide-react";
import { constructMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = constructMetadata({
  title: "Medical Facility & Room Validation Services",
  description:
    "HSS provides comprehensive room validation and environmental performance testing for hospitals, clinics, laboratories, and specialized treatment spaces.",
  pathname: "/medical-facility-room-validation-services",
});

const coreServices = [
  {
    icon: Wind,
    title: "Airflow & Pressurization Verification",
    items: [
      "Room supply/exhaust balance testing",
      "Positive/negative pressure verification",
      "Directional airflow and containment confirmation",
      "Door sweep & leakage influence evaluation",
    ],
  },
  {
    icon: Thermometer,
    title: "Environmental Performance Measurements",
    items: [
      "Temperature and humidity monitoring",
      "Air exchange rate (ACH) calculation",
      "Airflow volume and diffuser performance testing",
      "Filtration and HEPA integrity verification (where applicable)",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Safety & Compliance Alignment",
    items: [
      "Infection Control risk mitigation (ICRA support)",
      "Verification against current facility design intent",
      "Documentation for state and federal regulatory bodies",
    ],
  },
];

const standards = [
  "ASHRAE 170 Healthcare Ventilation Standard",
  "CDC / NIH Isolation Room Requirements",
  "USP 797 / USP 800 Sterile & Hazardous Drug Compounding",
  "CETA Cleanroom & Containment Guidelines",
  "AAMI & AORN clinical environment guidances",
];

const preparedFor = [
  "Joint Commission",
  "State Health Department inspections",
  "VA / DoD compliance review",
  "Internal safety and quality audits",
];

const docPoints = [
  "Pass/fail results tied to clearly defined criteria",
  "Corrective action guidance where adjustments are needed",
  "Trend analysis and repeat testing recommendations",
  "Audit-ready reports suitable for QA, Safety, and Facilities",
];

const facilities = [
  "Hospitals",
  "Surgical Centers",
  "Patient Isolation Suites",
  "Dental Clinics",
  "Treatment & Procedure Rooms",
  "VA & DoD Healthcare Facilities",
];

const benefits = [
  {
    strength: "Experienced Healthcare & Cleanroom Technicians",
    benefit: "Accurate validation and consistent methods.",
  },
  {
    strength: "Unbiased, Standards-Based Evaluation",
    benefit: "We do not sell HVAC services or remediation.",
  },
  {
    strength: "Clear, Actionable Reports",
    benefit: "Practical, real-world corrective recommendations.",
  },
  {
    strength: "Nationwide SDVOSB Support",
    benefit: "Meets federal set-aside and subcontracting requirements.",
  },
];

export default function MedicalFacilityRoomValidationPage() {
  const pageSchema = webPageSchema({
    title:
      "Medical Facility & Room Validation Services — Health Systems Sciences",
    description:
      "HSS provides comprehensive room validation and environmental performance testing for hospitals, clinics, laboratories, and specialized treatment spaces.",
    pathname: "/medical-facility-room-validation-services",
  });
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    {
      name: "Medical Facility & Room Validation Services",
      href: "/medical-facility-room-validation-services",
    },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_60%_0%,oklch(0.35_0.08_255/0.3),transparent)]"
          aria-hidden="true"
        />
        <Container className="relative">
          <Link
            href="/services"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-primary-foreground/60 transition-colors hover:text-gold"
          >
            <ArrowLeft className="size-3.5" /> All Services
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Room Validation
              </span>
              <h1
                className="font-bold leading-tight text-white"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              >
                Medical Facility &amp; Room Validation Services
              </h1>
              <div className="mt-5 h-1 w-14 rounded-full bg-gold" />
              <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
                HSS provides comprehensive room validation and environmental
                performance testing for hospitals, clinics, laboratories, and
                specialized treatment spaces. We verify that rooms operate as
                intended — with correct airflow, pressurization, temperature,
                humidity, and environmental controls — to protect patients,
                staff, and sterile operations.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                As a Service-Disabled Veteran–Owned Small Business (SDVOSB), HSS
                supports VA Medical Centers, DoD healthcare campuses, and
                civilian health systems across the U.S. with reliable,
                standards-based validation services and clear documentation.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/contact-quote"
                  className="inline-flex items-center gap-2 rounded-full bg-gold px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-gold/90 hover:shadow-lg"
                >
                  Request a Quote <ArrowRight className="size-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white/80 transition-all hover:border-white/40 hover:text-white"
                >
                  All Services
                </Link>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://hssciences.com/wp-content/uploads/2025/11/Room-Validation-Services.jpg"
                  alt="Scientist in protective gear working with equipment in a cleanroom laboratory"
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Core Validation Services ──────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              What We Offer
            </span>
            <h2
              className="mt-3 font-bold text-foreground"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Core Validation Services
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {coreServices.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <service.icon className="size-6" aria-hidden="true" />
                </div>
                <h3
                  className="font-semibold text-foreground"
                  style={{ fontSize: "1rem" }}
                >
                  {service.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {service.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <CheckCircle
                        className="mt-0.5 size-4 shrink-0 text-gold"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Standards & Guidelines Referenced ──────────────────── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <ShieldCheck className="size-6" aria-hidden="true" />
              </div>
              <h2
                className="font-bold text-foreground"
                style={{ fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)" }}
              >
                Standards &amp; Guidelines Referenced
              </h2>
              <div className="mt-3 h-1 w-10 rounded-full bg-gold" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Our validation practices align with industry-recognized
                standards to ensure your facility meets the highest safety and
                compliance benchmarks.
              </p>
              <ul className="mt-6 space-y-3">
                {standards.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <CheckCircle
                      className="mt-0.5 size-4 shrink-0 text-gold"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 rounded-xl border border-primary/10 bg-primary/5 p-5">
                <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gold">
                  This ensures your facility is prepared for
                </p>
                <ul className="space-y-2">
                  {preparedFor.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-sm text-muted-foreground"
                    >
                      <CheckCircle
                        className="mt-0.5 size-4 shrink-0 text-primary"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="relative">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://hssciences.com/wp-content/uploads/2025/11/Room-Validation-Services.jpg"
                  alt="Healthcare facility room validation testing in progress"
                  className="h-[420px] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-2xl bg-primary/10" />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Documentation & Reporting ─────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl shadow-lg">
                <img
                  src="https://hssciences.com/wp-content/uploads/2025/11/Untitled-design-20.jpg"
                  alt="Technician documenting validation results in a clinical environment"
                  className="h-[360px] w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-2xl bg-gold/10" />
            </div>
            <div className="order-1 lg:order-2">
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <FileText className="size-6" aria-hidden="true" />
              </div>
              <h2
                className="font-bold text-foreground"
                style={{ fontSize: "clamp(1.35rem, 2.5vw, 1.75rem)" }}
              >
                Documentation &amp; Reporting
              </h2>
              <div className="mt-3 h-1 w-10 rounded-full bg-gold" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                Every validation includes clear, defensible data — no unclear
                language, no guesswork.
              </p>
              <ul className="mt-6 space-y-3">
                {docPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2.5 text-sm text-muted-foreground"
                  >
                    <CheckCircle
                      className="mt-0.5 size-4 shrink-0 text-gold"
                      aria-hidden="true"
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Who We Serve ──────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Our Clients
            </span>
            <h2
              className="mt-3 font-bold text-foreground"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Who We Serve
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {facilities.map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-gray-50 px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-primary/30 hover:bg-primary/5"
              >
                <Building2
                  className="size-3.5 shrink-0 text-gold"
                  aria-hidden="true"
                />
                {f}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Why Partner with HSS ──────────────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              The HSS Advantage
            </span>
            <h2
              className="mt-3 font-bold text-foreground"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}
            >
              Why Partner with HSS
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((row, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-lg"
              >
                <span className="mb-4 inline-flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p
                  className="font-semibold text-gold"
                  style={{ fontSize: "0.8rem", letterSpacing: "0.05em" }}
                >
                  {row.strength}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {row.benefit}
                </p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-gold transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>

          {/* SDVOSB strip */}
          <div className="mt-8 flex flex-col items-center gap-6 rounded-2xl border border-primary/10 bg-primary/5 px-8 py-6 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle
                  className="size-5 text-primary"
                  aria-hidden="true"
                />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">
                  SDVOSB Certified
                </p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Service-Disabled Veteran–Owned Small Business — meets VA / DoD
                  set-aside &amp; subcontracting requirements
                </p>
              </div>
            </div>
            <Link
              href="/contact-quote"
              className="inline-flex shrink-0 items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              Request a Quote <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2
              className="font-bold text-foreground"
              style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}
            >
              Ready to Schedule Your Room Validation?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Contact our team to discuss your facility&apos;s validation needs
              and get a customized testing plan.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact-quote"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                Request a Quote <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-accent"
              >
                View All Services
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
