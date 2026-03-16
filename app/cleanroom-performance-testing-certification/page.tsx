import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle, ArrowRight, FlaskConical, Wind, Microscope } from "lucide-react";
import { constructMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = constructMetadata({
  title: "Cleanroom Performance Testing & Certification",
  description:
    "HSS provides comprehensive cleanroom performance testing, certification, and monitoring services for sterile compounding pharmacies, laboratories, research facilities, and healthcare environments.",
  pathname: "/cleanroom-performance-testing-certification",
});

const coreServices = [
  {
    icon: Wind,
    title: "Performance Testing & System Verification",
    items: [
      "ISO 5 / 7 / 8 room classification",
      "Airflow velocity measurement & balancing",
      "Air change rate (ACH) calculation",
      "Temperature & humidity performance checks",
      "Pressure differential & directional airflow verification",
      "Filter integrity and HEPA leak testing (scanning / DOP / PAO)",
    ],
  },
  {
    icon: FlaskConical,
    title: "Engineering Control & Equipment Certification",
    items: [
      "Biological Safety Cabinets (BSCs)",
      "Laminar Flow Workstations (LAFWs)",
      "Compounding Aseptic Isolators (CAIs / CACIs)",
      "Clean Bench & Pharmacy PEC testing",
      "Certified to NSF 49, CETA CAG-003-2006, and manufacturer specifications",
    ],
  },
  {
    icon: Microscope,
    title: "Environmental Monitoring (EM) Programs",
    items: [
      "Non-viable airborne particle counting",
      "Viable air and surface sampling",
      "Post-compounding surface cleanliness verification",
      "Trend reporting, action levels, and corrective response guidance",
      "Personnel monitoring including glove fingertip and gowning assessment",
    ],
  },
];

const standards = [
  { label: "USP 797", desc: "Sterile Compounding" },
  { label: "USP 800", desc: "Hazardous Drug Handling" },
  { label: "CETA CAG-003-2006", desc: "Certification of Sterile Compounding Facilities" },
  { label: "ISO 14644", desc: "Cleanroom performance standards" },
  { label: "NSF 49", desc: "Biological Safety Cabinet standards" },
  { label: "ASHRAE & ACGIH", desc: "Indoor air quality reference guidelines" },
];

const facilities = [
  "Hospital & Outpatient Pharmacies",
  "503A Sterile Compounding Pharmacies",
  "Oncology & Infusion Centers",
  "Academic & Research Laboratories",
  "VA Medical Centers & DoD Healthcare Facilities",
  "Clean manufacturing, testing & biomedical environments",
];

const benefits = [
  { benefit: "Reliable testing and consistent results every service visit.", strength: "Experienced Technicians & Cleanroom Specialists" },
  { benefit: "No jargon — practical recommendations and corrective steps.", strength: "Clear, Actionable Reporting" },
  { benefit: "Defensible Environmental Monitoring results and documentation.", strength: "Accredited Laboratory Partnerships" },
  { benefit: "Flexible scheduling with minimal downtime or workflow disruption.", strength: "Nationwide Response Capability" },
  { benefit: "Meets set-aside and subcontracting participation requirements.", strength: "SDVOSB Status" },
];

export default function CleanroomCertificationPage() {
  const pageSchema = webPageSchema({
    title: "Cleanroom Performance Testing & Certification — Health Systems Sciences",
    description:
      "HSS provides comprehensive cleanroom performance testing, certification, and monitoring services for sterile compounding pharmacies, laboratories, research facilities, and healthcare environments.",
    pathname: "/cleanroom-performance-testing-certification",
  });
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Cleanroom Performance Testing & Certification", href: "/cleanroom-performance-testing-certification" },
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
                Certification Services
              </span>
              <h1
                className="font-bold leading-tight text-white"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              >
                Cleanroom Performance Testing &amp; Certification
              </h1>
              <div className="mt-5 h-1 w-14 rounded-full bg-gold" />
              <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
                HSS provides comprehensive cleanroom performance testing, certification, and monitoring
                services to support sterile compounding pharmacies, laboratories, research facilities,
                and healthcare environments. We ensure your controlled spaces meet regulatory
                performance standards, maintain consistent environmental control, and remain safe for
                personnel, products, and patients.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                As a Service-Disabled Veteran–Owned Small Business (SDVOSB) with nationwide
                experience, HSS delivers responsive scheduling, clear documentation, and defensible
                test data suitable for internal QA programs and external regulatory review.
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
                  src="https://hssciences.com/wp-content/uploads/2025/11/Cleanroom-Performance-Testing-.jpg"
                  alt="Scientist in a lab coat preparing samples in a laboratory cleanroom"
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
              Core Cleanroom Certification Services
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

      {/* ── Standards ─────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <Container>

          {/* Heading */}
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Regulatory Alignment</span>
            <h2 className="mt-3 font-bold text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              Standards &amp; Regulatory Alignment
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              Our cleanroom performance testing aligns with globally recognized standards and
              regulations — ensuring your certification reports withstand scrutiny from any
              regulatory body.
            </p>
          </div>

          {/* Standards grid */}
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {standards.map((s) => (
              <div
                key={s.label}
                className="group relative overflow-hidden rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                {/* Left accent bar */}
                <div className="absolute left-0 top-0 h-full w-1 rounded-l-2xl bg-gradient-to-b from-gold to-gold/30" />
                <p
                  className="pl-4 font-bold text-primary transition-colors group-hover:text-primary"
                  style={{ fontSize: "1.15rem" }}
                >
                  {s.label}
                </p>
                <p className="mt-1 pl-4 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Compliance accepted-by banner */}
          <div className="mt-6 rounded-2xl border border-primary/10 bg-primary/5 px-8 py-5">
            <p className="text-center text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Compliance reports accepted by: </span>
              Joint Commission &nbsp;·&nbsp; State Board of Pharmacy &nbsp;·&nbsp; VA / DoD
              &nbsp;·&nbsp; OSHA &nbsp;·&nbsp; Internal Audit Programs
            </p>
          </div>

          {/* Facilities */}
          <div className="mt-16 text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Where We Work</span>
            <h3
              className="mt-2 font-bold text-foreground"
              style={{ fontSize: "clamp(1.15rem, 2vw, 1.5rem)" }}
            >
              Facilities We Support
            </h3>
            <div className="mx-auto mt-3 h-0.5 w-10 rounded-full bg-gold" />
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {facilities.map((f) => (
                <span
                  key={f}
                  className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  <CheckCircle className="size-3.5 shrink-0 text-gold" aria-hidden="true" />
                  {f}
                </span>
              ))}
            </div>
          </div>

        </Container>
      </section>

      {/* ── Why Partner with HSS ──────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <Container>

          {/* Heading + image row */}
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">The HSS Advantage</span>
              <h2 className="mt-3 font-bold text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
                Why Partner with HSS
              </h2>
              <div className="mt-4 h-1 w-14 rounded-full bg-gold" />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                From initial scheduling to final report delivery, HSS brings veteran-owned
                accountability, technical depth, and nationwide reach to every cleanroom
                certification project.
              </p>
              <div className="mt-8">
                <Link
                  href="/contact-quote"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg"
                >
                  Request a Quote <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://hssciences.com/wp-content/uploads/2025/11/Cleanroom-Performance-Testing-5.jpg"
                alt="Pharmacists in lab coats discussing products in a pharmacy"
                className="h-[380px] w-full object-cover"
              />
            </div>
          </div>

          {/* Benefit cards */}
          <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((row, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-2xl border border-border bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white hover:shadow-lg"
              >
                {/* Number badge */}
                <span className="mb-4 inline-flex size-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Strength label */}
                <p className="font-semibold text-gold" style={{ fontSize: "0.8rem", letterSpacing: "0.05em" }}>
                  {row.strength}
                </p>
                {/* Benefit text */}
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{row.benefit}</p>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-gold transition-all duration-300 group-hover:w-full" />
              </div>
            ))}

            {/* SDVOSB callout card */}
            <div className="flex flex-col items-start justify-between overflow-hidden rounded-2xl bg-primary p-6 text-white sm:col-span-2 lg:col-span-1">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">Veteran-Owned</span>
                <p
                  className="mt-2 font-bold leading-snug text-white"
                  style={{ fontSize: "1.1rem" }}
                >
                  Service-Disabled Veteran–Owned Small Business
                </p>
                <p className="mt-3 text-sm leading-relaxed text-white/70">
                  As a certified SDVOSB, HSS fulfills set-aside and subcontracting requirements for
                  federal healthcare and VA / DoD facilities.
                </p>
              </div>
              <div className="mt-6 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
                <CheckCircle className="size-3.5" aria-hidden="true" /> SDVOSB Certified
              </div>
            </div>
          </div>

        </Container>
      </section>

      {/* ── CTA ───────────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-bold text-foreground" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}>
              Ready to Schedule Your Cleanroom Certification?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Contact our team to discuss your facility needs and get a customized quote.
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
