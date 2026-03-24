import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  ShieldCheck,
  Wind,
  Wrench,
  FileText,
  Building2,
} from "lucide-react";
import { constructMetadata, webPageSchema, breadcrumbSchema, keywordGroups, serviceSchema } from "@/lib/seo";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = constructMetadata({
  title: "Biosafety Cabinet & Chemical Fume Hood Testing",
  description:
    "HSS provides biosafety cabinet (BSC) certification and chemical fume hood performance testing services for healthcare, laboratory, and research environments — tested to NSF/ANSI 49 and ANSI/ASHRAE 110.",
  pathname: "/biosafety-cabinet-and-chemical-fume-hood",
  keywords: [
    ...keywordGroups.biosafety,
    "biosafety cabinet certification",
    "chemical fume hood testing",
    "NSF/ANSI 49",
    "ASHRAE 110 testing",
    "BSC annual certification",
    "laboratory ventilation testing",
    "fume hood face velocity",
  ],
});

const bscItems = [
  "Downflow & inflow velocity testing",
  "HEPA filter integrity and leak scanning (PAO/DOP)",
  "Airflow smoke pattern visualization",
  "Pressure/flow stabilization verification",
  "Alarm and control system functionality checks",
  "Work zone and exhaust containment validation",
  "Decontamination coordination when required",
];

const bscSupports = [
  "Class II, Type A2 & B2 BSCs",
  "Pharmacy sterile compounding PEC units",
  "Research, clinical, and biocontainment lab applications",
];

const fumeHoodItems = [
  "Face velocity measurement & uniformity assessment",
  "Smoke visualization for containment evaluation",
  "Sash performance, alarm, and baffle function checks",
  "Hood pressurization and airflow stability confirmation",
  "Documentation aligned with EH&S and laboratory safety requirements",
];

const fumeHoodSupports = [
  "General laboratory chemical hoods",
  "Perchloric acid hoods",
  "Radioisotope workstations",
  "High-hazard research applications",
];

const repairSteps = [
  "We identify root cause",
  "Document required corrective actions",
  "Coordinate with facility and/or OEM vendors",
  "Verify performance after repair",
];

const complianceBodies = [
  "Joint Commission",
  "College of American Pathologists (CAP)",
  "USP 797 / USP 800",
  "NIH / VA / DoD safety programs",
  "Internal QA and laboratory safety audits",
];

const facilities = [
  "VA & DoD Healthcare and Laboratory Environments",
  "R&D, Biotech, and Pharmaceutical Production Labs",
  "Academic & Government Research Facilities",
  "Hospital & Clinical Laboratories",
  "Compounding Pharmacies",
];

const benefits = [
  { benefit: "Safe, reliable testing every visit.", strength: "Experienced, Certified Technicians" },
  { benefit: "Validated and defensible data.", strength: "Accredited Lab Partnerships" },
  { benefit: "Easy to interpret and use for corrective planning.", strength: "Transparent, Clear Reporting" },
  { benefit: "Coordinated service for multi-site systems.", strength: "Nationwide Support" },
  { benefit: "Meets federal contracting set-aside requirements.", strength: "SDVOSB Certified" },
];

export default function BiosafetyPage() {
  const pageSchema = webPageSchema({
    title: "Biosafety Cabinet & Chemical Fume Hood Testing — Health Systems Sciences",
    description:
      "HSS provides BSC certification and fume hood performance testing for healthcare, laboratory, and research environments.",
    pathname: "/biosafety-cabinet-and-chemical-fume-hood",
  });
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Biosafety Cabinet & Chemical Fume Hood", href: "/biosafety-cabinet-and-chemical-fume-hood" },
  ]);
  const svcSchema = serviceSchema({
    name: "Biosafety Cabinet & Chemical Fume Hood Testing",
    description: "BSC certification and chemical fume hood performance testing for healthcare, laboratory, and research environments — tested to NSF/ANSI 49 and ANSI/ASHRAE 110.",
    pathname: "/biosafety-cabinet-and-chemical-fume-hood",
  });

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(svcSchema) }} />

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
                Laboratory Safety
              </span>
              <h1
                className="font-bold leading-tight text-white"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              >
                Biosafety Cabinet &amp; Chemical Fume Hood Testing
              </h1>
              <div className="mt-5 h-1 w-14 rounded-full bg-gold" />
              <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
                HSS provides biosafety cabinet (BSC) certification and chemical fume hood
                performance testing for healthcare, laboratory, and research environments.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                Our services are tested to NSF/ANSI 49 and ANSI/ASHRAE 110 — delivering clear
                pass/fail criteria, real corrective recommendations, and defensible, audit-ready
                documentation. As a Service-Disabled Veteran–Owned Small Business (SDVOSB), HSS
                supports VA, DoD, hospital, and research clients nationwide.
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
                  src="https://hssciences.com/wp-content/uploads/2025/11/biosafety-cabinet-and-fume-hood.jpg"
                  alt="Biosafety cabinet and fume hood in a laboratory setting"
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── BSC + Fume Hood side-by-side ──────────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">What We Test</span>
            <h2 className="mt-3 font-bold text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              Core Certification Services
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">

            {/* BSC */}
            <div className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5">
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <ShieldCheck className="size-6" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-foreground" style={{ fontSize: "1.1rem" }}>
                Biosafety Cabinet (BSC) Certification
              </h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-gold">
                Tested to NSF/ANSI 49 &amp; Manufacturer Specifications
              </p>
              <ul className="mt-5 space-y-2.5">
                {bscItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-border pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground/60 mb-3">Supports</p>
                <div className="flex flex-wrap gap-2">
                  {bscSupports.map((s) => (
                    <span key={s} className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Fume Hood */}
            <div className="group rounded-2xl border border-border bg-card p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5">
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                <Wind className="size-6" aria-hidden="true" />
              </div>
              <h3 className="font-bold text-foreground" style={{ fontSize: "1.1rem" }}>
                Chemical Fume Hood Performance Testing
              </h3>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-gold">
                Tested to ANSI/ASHRAE 110 &amp; Site-Specific Safety Standards
              </p>
              <ul className="mt-5 space-y-2.5">
                {fumeHoodItems.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-border pt-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-foreground/60 mb-3">Supports</p>
                <div className="flex flex-wrap gap-2">
                  {fumeHoodSupports.map((s) => (
                    <span key={s} className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Repair & Follow-Through + Documentation ───────────── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-2">

            {/* Repair */}
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <Wrench className="size-6" aria-hidden="true" />
              </div>
              <h2 className="font-bold text-foreground" style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>
                Repair, Service &amp; Follow-Through
              </h2>
              <div className="mt-3 h-1 w-10 rounded-full bg-gold" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                HSS does not sell equipment — which means our recommendations are unbiased and
                focused on safety and performance. If deficiencies are found:
              </p>
              <ul className="mt-5 space-y-3">
                {repairSteps.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/15">
                      <CheckCircle className="size-3 text-gold" aria-hidden="true" />
                    </div>
                    <p className="text-sm text-foreground">{step}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-medium text-primary/80">
                No guesswork. No unclear reports. No abandoned findings.
              </p>
            </div>

            {/* Documentation & Compliance */}
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <FileText className="size-6" aria-hidden="true" />
              </div>
              <h2 className="font-bold text-foreground" style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>
                Documentation &amp; Compliance Alignment
              </h2>
              <div className="mt-3 h-1 w-10 rounded-full bg-gold" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Our reports are designed to support the following regulatory bodies and standards.
                Clear pass/fail criteria. Real corrective recommendations. Defensible, traceable,
                audit-ready documentation.
              </p>
              <div className="mt-6 space-y-2.5">
                {complianceBodies.map((b) => (
                  <div key={b} className="flex items-center gap-3">
                    <CheckCircle className="size-4 shrink-0 text-gold" aria-hidden="true" />
                    <p className="text-sm text-foreground">{b}</p>
                  </div>
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

      {/* ── Why HSS ───────────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">The HSS Advantage</span>
            <h2 className="mt-3 font-bold text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              Why HSS
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
              Ready to Schedule BSC or Fume Hood Testing?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Contact our team to discuss your equipment inventory and schedule a certification visit.
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
