import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Search, Droplets, FlaskConical, FileText, Building2 } from "lucide-react";
import { constructMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = constructMetadata({
  title: "Mold Investigation & Indoor Air Quality Assessment",
  description:
    "HSS provides comprehensive mold investigation, assessment, sampling, and remediation oversight services for healthcare facilities, hospitals, laboratories, government buildings, and commercial properties.",
  pathname: "/mold-investigation-indoor-air-quality-assessment",
});

const coreServices = [
  {
    icon: Search,
    title: "On-Site Assessment & Building Diagnostics",
    items: [
      "Visual inspection of building materials & moisture-prone areas",
      "Water intrusion history review",
      "HVAC cleanliness & filtration observation",
      "Humidity, dew point, and temperature measurements",
    ],
  },
  {
    icon: Droplets,
    title: "Moisture Source Detection",
    items: [
      "Infrared thermal imaging",
      "Moisture meter & hygrometer readings",
      "Drainage / envelope inspection",
      "Condensation pattern analysis",
    ],
  },
  {
    icon: FlaskConical,
    title: "Sampling & Laboratory Analysis",
    items: [
      "Airborne fungal spore trap sampling",
      "Surface tape lifts / swabs",
      "Bulk material testing",
      "Outdoor baseline comparison sampling",
      "Partnered with ISO 17025 accredited laboratories",
    ],
  },
];

const reportingPoints = [
  "Identification of mold type and concentration levels",
  "Source tracing and contributing condition findings",
  "Action levels referenced to industry guidelines (ASHRAE, ACGIH, AIHA)",
  "Practical remediation guidance (no upsell, no scare tactics)",
  "Restoration and verification sampling (post-remediation clearance)",
];

const facilitiesServed = [
  "Hospitals & Healthcare Facilities",
  "VA & DoD Medical Centers",
  "Universities & Research Buildings",
  "Office & Administrative Buildings",
  "Laboratory & Cleanroom Facilities",
  "Commercial & Residential Properties (as requested)",
];

const benefits = [
  { benefit: "Accurate source identification and risk interpretation.", strength: "Experienced Industrial Hygienists & IAQ Specialists" },
  { benefit: "Reliable, defensible data for regulatory and stakeholder review.", strength: "ISO 17025 Accredited Lab Partnerships" },
  { benefit: "We do not sell remediation — guidance is unbiased.", strength: "No Conflict of Interest" },
  { benefit: "Meets federal set-aside & subcontracting requirements.", strength: "SDVOSB Nationwide Support" },
];

export default function MoldInvestigationPage() {
  const pageSchema = webPageSchema({
    title: "Mold Investigation & Indoor Air Quality Assessment — Health Systems Sciences",
    description:
      "HSS provides comprehensive mold investigation, assessment, sampling, and remediation oversight services for healthcare facilities, hospitals, laboratories, government buildings, and commercial properties.",
    pathname: "/mold-investigation-indoor-air-quality-assessment",
  });
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Mold Investigation & Indoor Air Quality Assessment", href: "/mold-investigation-indoor-air-quality-assessment" },
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
                Environmental Health &amp; Safety
              </span>
              <h1
                className="font-bold leading-tight text-white"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              >
                Mold Investigation &amp; Indoor Air Quality Assessment
              </h1>
              <div className="mt-5 h-1 w-14 rounded-full bg-gold" />
              <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
                HSS provides comprehensive mold investigation, assessment, sampling, and remediation
                oversight services for healthcare facilities, hospitals, laboratories, government
                buildings, and commercial properties.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                We identify the source, evaluate the extent, and help develop clear corrective actions
                that restore safe indoor conditions. As a Service-Disabled Veteran–Owned Small
                Business (SDVOSB), we support VA Medical Centers, DoD campuses, academic
                institutions, and private health systems nationwide.
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

            {/* Hero image */}
            <div className="relative hidden lg:block">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://hssciences.com/wp-content/uploads/2025/11/Mold2.jpg"
                  alt="Close-up of mold growth on a surface showing various fungal colonies"
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
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">What We Offer</span>
            <h2 className="mt-3 font-bold text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              Core Mold Investigation Services
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
                <h3 className="font-semibold text-foreground" style={{ fontSize: "1rem" }}>
                  {service.title}
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {service.items.map((item) => (
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

      {/* ── Clear, Defensible Reporting ───────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Reporting points */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Documentation</span>
              <h2 className="mt-3 font-bold text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
                Clear, Defensible Reporting
              </h2>
              <div className="mt-4 h-1 w-12 rounded-full bg-gold" />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Every HSS assessment delivers straightforward, actionable reports — designed for
                facility managers, risk officers, and regulatory reviewers alike.
              </p>
              <ul className="mt-8 space-y-3">
                {reportingPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/15">
                      <FileText className="size-3 text-gold" aria-hidden="true" />
                    </div>
                    <p className="text-sm leading-relaxed text-foreground">{point}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://hssciences.com/wp-content/uploads/2025/11/Mold1.jpg"
                alt="Person inspecting mold growth on a wall wearing gloves and a mask for safety"
                className="h-[440px] w-full object-cover"
              />
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
              Who We Serve
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {facilitiesServed.map((f) => (
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

      {/* ── Why Work With HSS ─────────────────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">The HSS Advantage</span>
            <h2 className="mt-3 font-bold text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              Why Work With HSS
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
                <p className="font-semibold text-gold" style={{ fontSize: "0.8rem", letterSpacing: "0.05em" }}>
                  {row.strength}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{row.benefit}</p>
                <div className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-gold transition-all duration-300 group-hover:w-full" />
              </div>
            ))}
          </div>

          {/* SDVOSB callout */}
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
              Ready to Schedule a Mold Investigation?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Contact our team to discuss your facility&apos;s needs and get a customized assessment plan.
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
