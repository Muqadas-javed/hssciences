import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Wind, ShieldAlert, FlaskConical, Building2 } from "lucide-react";
import { constructMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = constructMetadata({
  title: "Industrial Hygiene Assessment & Exposure Monitoring",
  description:
    "HSS provides industrial hygiene assessments, exposure sampling, hazard evaluation, and compliance documentation to support healthcare, laboratory, research, and industrial environments.",
  pathname: "/industrial-hygiene-assessment-exposure-monitoring",
});

const coreServices = [
  {
    icon: Wind,
    title: "Exposure Monitoring & Sampling",
    items: [
      "Airborne chemical & particulate sampling",
      "Hazardous drug exposure (surface & air) sampling",
      "VOCs, aldehydes, sterilants, disinfectants",
      "Welding fumes, metal particulates, lab vapors",
      "Noise dosimetry & sound level mapping",
    ],
  },
  {
    icon: ShieldAlert,
    title: "Workplace Hazard Evaluation",
    items: [
      "Ventilation performance & exhaust capture review",
      "Local control effectiveness (hoods, BSCs, snorkels)",
      "PPE usage and compatibility assessment",
      "Workflow & procedural risk evaluation",
    ],
  },
  {
    icon: FlaskConical,
    title: "Environmental & Facility Assessments",
    items: [
      "Indoor air quality (IAQ) testing",
      "Mold/moisture intrusion investigation",
      "Equipment contamination verification",
      "Post-remediation verification (PRV) testing",
    ],
  },
];

const standards = [
  { label: "OSHA PELs", desc: "Permissible Exposure Limits" },
  { label: "ACGIH TLVs", desc: "Threshold Limit Values" },
  { label: "NIOSH RELs", desc: "Recommended Exposure Limits" },
  { label: "USP 800", desc: "Hazardous Drug Handling Requirements" },
  { label: "ASHRAE / CDC", desc: "Indoor Air Quality Guidelines" },
  { label: "Joint Commission & CAP", desc: "Laboratory Safety Standards" },
];

const facilities = [
  "Hospitals & Outpatient Healthcare",
  "Oncology & Compounding Pharmacies (USP 797/800)",
  "VA & DoD Healthcare & Research Laboratories",
  "Academic & Government Research Campuses",
  "Clinical, Industrial & Manufacturing Facilities",
  "Biotechnology, Pharma, and R&D Environments",
];

const benefits = [
  { benefit: "Accurate investigation, clear interpretation, and realistic controls.", strength: "Experienced Industrial Hygienists" },
  { benefit: "Validated data suitable for regulatory review.", strength: "Accredited Laboratory Partnerships" },
  { benefit: "Recommendations based on safety needs — not vendor incentives.", strength: "Unbiased Results (No Product Sales)" },
  { benefit: "Works seamlessly with federal, healthcare, and research clients.", strength: "Nationwide SDVOSB Support" },
];

export default function IndustrialHygienePage() {
  const pageSchema = webPageSchema({
    title: "Industrial Hygiene Assessment & Exposure Monitoring — Health Systems Sciences",
    description:
      "HSS provides industrial hygiene assessments, exposure sampling, hazard evaluation, and compliance documentation to support healthcare, laboratory, research, and industrial environments.",
    pathname: "/industrial-hygiene-assessment-exposure-monitoring",
  });
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Industrial Hygiene Assessment & Exposure Monitoring", href: "/industrial-hygiene-assessment-exposure-monitoring" },
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
                Industrial Hygiene Assessment &amp; Exposure Monitoring
              </h1>
              <div className="mt-5 h-1 w-14 rounded-full bg-gold" />
              <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
                HSS provides industrial hygiene (IH) assessments, exposure sampling, hazard
                evaluation, and compliance documentation to support healthcare, laboratory, research,
                and industrial environments.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                We help organizations identify risks, measure exposures, and implement practical
                controls that support worker safety and regulatory compliance. As a Service-Disabled
                Veteran–Owned Small Business (SDVOSB), HSS supports VA Medical Centers, DoD
                installations, hospital networks, biomedical labs, and commercial facilities
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

            {/* Hero image */}
            <div className="relative hidden lg:block">
              <div className="overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://hssciences.com/wp-content/uploads/2025/11/CADILLAC-VALIDATION-PERSONNEL-3.png"
                  alt="Industrial hygiene monitoring — validation personnel in a controlled facility"
                  className="h-[420px] w-full object-cover object-top"
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
              Core Industrial Hygiene Services
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

      {/* ── Standards & Compliance ────────────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Regulatory Alignment</span>
              <h2 className="mt-3 font-bold text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
                Standards &amp; Compliance Alignment
              </h2>
              <div className="mt-4 h-1 w-12 rounded-full bg-gold" />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                We align IH services with the most current regulatory and industry guidance — so your
                reports stand up to OSHA inspections, Joint Commission surveys, and internal audits.
                Our reports are clear, defensible, and audit-ready.
              </p>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {standards.map((s) => (
                  <div
                    key={s.label}
                    className="relative overflow-hidden rounded-xl border border-border bg-white p-4 shadow-sm"
                  >
                    <div className="absolute left-0 top-0 h-full w-1 rounded-l-xl bg-gradient-to-b from-gold to-gold/30" />
                    <p className="pl-3 font-bold text-primary" style={{ fontSize: "0.95rem" }}>
                      {s.label}
                    </p>
                    <p className="mt-0.5 pl-3 text-xs text-muted-foreground">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Image */}
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://hssciences.com/wp-content/uploads/2025/11/CADILLAC-VALIDATION-PERSONNEL-4.png"
                alt="Two scientists discussing equipment and taking notes in a laboratory setting"
                className="h-[460px] w-full object-cover object-top"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Industries Served ─────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Our Clients</span>
            <h2 className="mt-3 font-bold text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              Industries &amp; Facilities Served
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

      {/* ── Why Partner with HSS ──────────────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* Left: image */}
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://hssciences.com/wp-content/uploads/2025/11/CADILLAC-VALIDATION-PERSONNEL-2.png"
                alt="Worker cleaning the floor in a sterile production facility wearing protective gear"
                className="h-[420px] w-full object-cover"
              />
            </div>

            {/* Right: benefits */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">The HSS Advantage</span>
              <h2 className="mt-3 font-bold text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
                Why Partner with HSS
              </h2>
              <div className="mt-4 h-1 w-12 rounded-full bg-gold" />

              <div className="mt-8 space-y-4">
                {benefits.map((row, i) => (
                  <div
                    key={i}
                    className="group relative overflow-hidden rounded-2xl border border-border bg-white p-5 transition-all duration-300 hover:border-primary/20 hover:shadow-md"
                  >
                    <span className="mb-2 inline-flex size-7 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <p className="font-semibold text-gold" style={{ fontSize: "0.8rem", letterSpacing: "0.05em" }}>
                      {row.strength}
                    </p>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{row.benefit}</p>
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 rounded-full bg-gold transition-all duration-300 group-hover:w-full" />
                  </div>
                ))}
              </div>

              {/* SDVOSB badge */}
              <div className="mt-6 flex items-center gap-3 rounded-xl border border-primary/10 bg-primary/5 px-5 py-4">
                <CheckCircle className="size-5 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-gold">SDVOSB Certified</p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    Meets VA / DoD set-aside &amp; subcontracting participation requirements
                  </p>
                </div>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact-quote"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg"
                >
                  Request a Quote <ArrowRight className="size-4" />
                </Link>
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
              Ready to Schedule an Industrial Hygiene Assessment?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Contact our team to discuss your facility&apos;s exposure risks and get a customized evaluation plan.
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
