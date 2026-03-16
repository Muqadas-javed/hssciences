import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Wind, FlaskConical, Microscope, ShieldCheck, FileText, Building2 } from "lucide-react";
import { constructMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = constructMetadata({
  title: "USP 797 & USP 800 Cleanroom Certification Services",
  description:
    "HSS provides full-scope certification and testing services to help healthcare facilities maintain compliance with USP 797 (sterile compounding) and USP 800 (hazardous drug handling).",
  pathname: "/usp-797-usp-800-cleanroom-certification-services",
});

const coreServices = [
  {
    icon: Wind,
    title: "Cleanroom & Controlled Environment Certification",
    items: [
      "ISO 5 / 7 / 8 classification",
      "HEPA filter integrity testing (scan & leak testing)",
      "Airflow & velocity measurements",
      "Room pressurization & directional airflow verification",
      "Air change rate (ACH) calculation",
      "Temperature & humidity monitoring",
    ],
  },
  {
    icon: FlaskConical,
    title: "Primary Engineering Control (PEC) Certification",
    items: [
      "Biological Safety Cabinets (BSCs)",
      "Laminar Flow Hoods",
      "Compounding Aseptic Isolators (CAIs / CACIs)",
      "Tested to NSF 49, CETA CAG-003-2006, and manufacturer specifications",
    ],
  },
  {
    icon: Microscope,
    title: "Environmental Monitoring (EM)",
    items: [
      "Non-viable particle counting",
      "Viable air sampling (active and passive)",
      "Surface sampling after compounding activities",
      "Trend reporting, excursion investigation & corrective action guidance",
    ],
  },
];

const usp800Points = [
  "Negative-pressure room verification",
  "HD buffer & ante-room pressurization monitoring",
  "Hood and isolator containment performance testing",
  "Surface wipe sampling for hazardous drug residue (optional program setup)",
  "Workflow, storage, and PPE compliance alignment where applicable",
];

const docPoints = [
  "Certification reports with pass/fail results and corrective recommendations",
  "EM trend summaries for internal QA & regulatory audits",
  "Support for Joint Commission, State Pharmacy Boards, VA, DoD, and internal policy reviews",
];

const facilities = [
  "Hospital Pharmacies",
  "Oncology & Infusion Clinics",
  "Academic Medical Centers",
  "503A Compounding Pharmacies",
  "VA & DoD Healthcare Facilities",
  "Specialty and Outpatient Pharmacies",
];

const benefits = [
  { benefit: "Safe, consistent, compliant certification every visit. Defensible data for regulatory review.", strength: "Experienced Cleanroom & Pharmacy Technicians" },
  { benefit: "Straightforward guidance without jargon.", strength: "Clear, Actionable Reporting" },
  { benefit: "Accredited lab partnerships for reliable, traceable results.", strength: "Accredited Laboratory Partnerships" },
  { benefit: "Meets set-aside participation requirements for federal healthcare systems.", strength: "SDVOSB Nationwide Support" },
];

export default function Usp797Usp800Page() {
  const pageSchema = webPageSchema({
    title: "USP 797 & USP 800 Cleanroom Certification Services — Health Systems Sciences",
    description:
      "HSS provides full-scope certification and testing services for USP 797 sterile compounding and USP 800 hazardous drug handling compliance.",
    pathname: "/usp-797-usp-800-cleanroom-certification-services",
  });
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "USP 797 & USP 800 Cleanroom Certification Services", href: "/usp-797-usp-800-cleanroom-certification-services" },
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
                Pharmacy Certification
              </span>
              <h1
                className="font-bold leading-tight text-white"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              >
                USP 797 &amp; USP 800 Cleanroom Certification Services
              </h1>
              <div className="mt-5 h-1 w-14 rounded-full bg-gold" />
              <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
                HSS provides full-scope certification and testing services to help healthcare
                facilities maintain compliance with USP 797 (sterile compounding) and USP 800
                (hazardous drug handling).
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                We support safe compounding environments, proper engineering controls, and clear
                documentation that withstands regulatory scrutiny. As a Service-Disabled
                Veteran–Owned Small Business (SDVOSB), HSS supports VA Medical Centers, DoD
                facilities, academic hospitals, outpatient pharmacies, and compounding pharmacies
                nationwide.
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
                  src="https://hssciences.com/wp-content/uploads/2025/11/USP-797-USP-800.jpg"
                  alt="Two scientists in protective suits examining samples under a microscope in a lab"
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
              Core Testing &amp; Certification Services
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

      {/* ── USP 800 + Documentation ───────────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-2">

            {/* USP 800 */}
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <ShieldCheck className="size-6" aria-hidden="true" />
              </div>
              <h2 className="font-bold text-foreground" style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>
                USP 800 Hazardous Drug Handling &amp; Containment
              </h2>
              <div className="mt-3 h-1 w-10 rounded-full bg-gold" />
              <ul className="mt-6 space-y-3">
                {usp800Points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Documentation */}
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <FileText className="size-6" aria-hidden="true" />
              </div>
              <h2 className="font-bold text-foreground" style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>
                Documentation &amp; Compliance Support
              </h2>
              <div className="mt-3 h-1 w-10 rounded-full bg-gold" />
              <ul className="mt-6 space-y-3">
                {docPoints.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="mt-8 overflow-hidden rounded-xl">
                <img
                  src="https://hssciences.com/wp-content/uploads/2025/11/Untitled-design-20.jpg"
                  alt="Scientist in protective gear filling out paperwork in a cleanroom environment"
                  className="h-48 w-full object-cover"
                />
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
                <Building2 className="size-3.5 shrink-0 text-gold" aria-hidden="true" />
                {f}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Why Facilities Choose HSS ─────────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">The HSS Advantage</span>
            <h2 className="mt-3 font-bold text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              Why Facilities Choose HSS
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

          {/* SDVOSB strip */}
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
              Ready to Schedule Your USP 797 / USP 800 Certification?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Contact our team to discuss your pharmacy&apos;s compounding environment and get a customized certification plan.
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
