import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  ScanLine,
  Wind,
  Layers,
  Wrench,
  FileText,
  Building2,
} from "lucide-react";
import { constructMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = constructMetadata({
  title: "HEPA Filter Testing & Replacement Services",
  description:
    "HSS provides HEPA filter integrity testing, leak scanning, diagnostics, and replacement support for cleanrooms, sterile compounding facilities, laboratories, hospital isolation rooms, and controlled environments.",
  pathname: "/hepa-filter-testing-replacement-services",
});

const coreServices = [
  {
    icon: ScanLine,
    title: "Integrity & Leak Testing",
    items: [
      "PAO / DOP scan testing of installed HEPA filters",
      "Leak identification at filter media, gasket, and housing",
      "Airflow distribution & uniformity assessment",
      "Sealing and frame seating verification",
      "Performance evaluation after cleaning or maintenance",
    ],
  },
  {
    icon: Wind,
    title: "Airflow Performance Checks",
    items: [
      "Air change rate (ACH) verification",
      "Airflow velocity & diffuser balancing",
      "Pressure differential and directional airflow validation",
      "Temperature & humidity performance monitoring",
    ],
  },
  {
    icon: Layers,
    title: "Room & Hood Integration",
    items: [
      "Cleanroom (ISO 5 / 7 / 8) HEPA performance verification",
      "PEC / BSC / Laminar Flow Hood airflow integrity",
      "USP 797 sterile compounding zones",
      "USP 800 hazardous drug negative-pressure rooms",
    ],
  },
];

const replacementSteps = [
  "Identify the correct HEPA specification by model, flow rating, and efficiency",
  "Coordinate with approved OEM or HVAC suppliers",
  "Oversee removal and installation procedures",
  "Perform post-replacement certification testing to confirm compliance",
];

const testingStandards = [
  "ISO 14644 Cleanroom Performance Standards",
  "NSF/ANSI 49 Biological Safety Cabinet Requirements",
  "CETA CAG-003-2006 Cleanroom & PEC Certification",
  "ASHRAE & CDC Healthcare Airflow Guidelines",
];

const readinessFor = [
  "State Board of Pharmacy",
  "CAP Laboratory Accreditation",
  "Joint Commission",
  "VA / DoD Environmental Safety Reviews",
];

const facilities = [
  "Hospital Pharmacies & Cleanrooms",
  "Oncology & Infusion Centers",
  "Sterile Processing Environments",
  "VA & DoD Medical Centers & Research Labs",
  "Academic & Government Research Labs",
  "Biotechnology & Pharmaceutical Cleanrooms",
];

const benefits = [
  {
    strength: "Experienced Cleanroom & Equipment Specialists",
    benefit: "Reliable, accurate, standards-based testing.",
  },
  {
    strength: "Unbiased Recommendations",
    benefit: "We do not sell filters or equipment — no conflict of interest.",
  },
  {
    strength: "Clear, Actionable Reports",
    benefit: "Practical guidance, easy for Facilities & QA to implement.",
  },
  {
    strength: "Nationwide Service",
    benefit: "Consistent support for multi-site healthcare systems.",
  },
  {
    strength: "SDVOSB Certified",
    benefit: "Meets federal contracting and subcontracting requirements.",
  },
];

export default function HepaFilterTestingPage() {
  const pageSchema = webPageSchema({
    title: "HEPA Filter Testing & Replacement Services — Health Systems Sciences",
    description:
      "HSS provides HEPA filter integrity testing, leak scanning, and replacement support for cleanrooms, sterile compounding facilities, and controlled environments.",
    pathname: "/hepa-filter-testing-replacement-services",
  });
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "HEPA Filter Testing & Replacement", href: "/hepa-filter-testing-replacement-services" },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-28">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_60%_0%,oklch(0.35_0.08_255/0.3),transparent)]" aria-hidden="true" />
        <Container className="relative">
          <Link
            href="/services"
            className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/60 transition-colors hover:text-gold mb-8"
          >
            <ArrowLeft className="size-3.5" /> All Services
          </Link>

          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Cleanroom & Controlled Environments
              </span>
              <h1
                className="font-bold leading-tight text-white"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              >
                HEPA Filter Testing &amp; Replacement Services
              </h1>
              <div className="mt-5 h-1 w-14 rounded-full bg-gold" />
              <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
                HSS provides HEPA filter integrity testing, leak scanning, diagnostics, and
                replacement support for cleanrooms, sterile compounding facilities, laboratories,
                hospital isolation rooms, and controlled environments.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                We verify that HEPA filtration and air handling systems are performing as required
                to protect products, personnel, and clinical operations. As a Service-Disabled
                Veteran–Owned Small Business (SDVOSB), HSS supports VA Medical Centers, DoD
                research &amp; healthcare environments, hospital pharmacies, and commercial
                cleanrooms nationwide.
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
                  src="https://hssciences.com/wp-content/uploads/2025/11/Room-Validation-Services-1.jpg"
                  alt="Technician inspecting ceiling ventilation system in a cleanroom"
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Core Services ─────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">What We Do</span>
            <h2 className="mt-3 font-bold text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              Core HEPA Testing Services
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {coreServices.map(({ icon: Icon, title, items }) => (
              <div
                key={title}
                className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                  <Icon className="size-6" aria-hidden="true" />
                </div>
                <h3 className="font-bold text-foreground" style={{ fontSize: "1.05rem" }}>
                  {title}
                </h3>
                <ul className="mt-5 space-y-2.5">
                  {items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <CheckCircle className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Replacement Support + Standards ───────────────────── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-2">

            {/* Replacement Support */}
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <Wrench className="size-6" aria-hidden="true" />
              </div>
              <h2 className="font-bold text-foreground" style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>
                HEPA Filter Replacement Support
              </h2>
              <div className="mt-3 h-1 w-10 rounded-full bg-gold" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                HSS can coordinate and oversee replacement when required. We do not sell filters,
                which means our recommendations are objective and based only on performance
                requirements.
              </p>
              <ul className="mt-5 space-y-3">
                {replacementSteps.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                    <p className="text-sm text-foreground">{step}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Standards */}
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <FileText className="size-6" aria-hidden="true" />
              </div>
              <h2 className="font-bold text-foreground" style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>
                Standards &amp; Compliance Alignment
              </h2>
              <div className="mt-3 h-1 w-10 rounded-full bg-gold" />

              <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-foreground/60">
                Our HEPA testing follows:
              </p>
              <ul className="mt-3 space-y-2.5">
                {testingStandards.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                    <p className="text-sm text-foreground">{s}</p>
                  </li>
                ))}
              </ul>

              <p className="mt-7 text-xs font-semibold uppercase tracking-wider text-foreground/60">
                Ensures readiness for:
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                {readinessFor.map((r) => (
                  <span
                    key={r}
                    className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {r}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Who We Serve ──────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Our Clients</span>
            <h2 className="mt-3 font-bold text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              Facility Types Served
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {facilities.map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-gray-50 px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-primary/30 hover:bg-primary/5"
              >
                <Building2 className="size-3.5 shrink-0 text-gold" aria-hidden="true" />
                {f}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Why HSS ───────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">The HSS Advantage</span>
            <h2 className="mt-3 font-bold text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              Why Work With HSS
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
          </div>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
            {benefits.map((row, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-lg"
              >
                <span className="mb-4 inline-flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="font-semibold text-gold" style={{ fontSize: "0.8rem", letterSpacing: "0.05em" }}>
                  {row.strength}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{row.benefit}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-gold transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-6 rounded-2xl border border-primary/10 bg-primary/5 px-8 py-6 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-3">
              <div className="flex size-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                <CheckCircle className="size-5 text-primary" aria-hidden="true" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-gold">SDVOSB Certified</p>
                <p className="mt-0.5 text-sm text-muted-foreground">
                  Service-Disabled Veteran–Owned Small Business — meets VA / DoD set-aside &amp; subcontracting requirements
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
            <h2 className="font-bold text-foreground" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}>
              Schedule HEPA Filter Testing or Replacement Coordination?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Contact our team to discuss your facility's HEPA certification needs, filter
              inventory, or post-maintenance verification requirements.
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
