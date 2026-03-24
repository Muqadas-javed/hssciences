import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Wind, Thermometer, Hospital, Shield, Building2 } from "lucide-react";
import { constructMetadata, webPageSchema, breadcrumbSchema, keywordGroups, serviceSchema } from "@/lib/seo";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = constructMetadata({
  title: "HVAC Testing, Adjusting & Balancing",
  description:
    "HSS provides HVAC Testing, Adjusting, and Balancing (TAB) services to verify that building ventilation systems deliver the correct airflow rates, pressurization, and environmental performance required for safe and efficient operation.",
  pathname: "/hvac-testing-adjusting-balancing",
  keywords: [
    ...keywordGroups.hvac,
    "HVAC testing adjusting balancing",
    "TAB services",
    "air balancing services",
    "ventilation performance testing",
    "ASHRAE compliance",
    "duct leakage testing",
    "building commissioning",
  ],
});

const coreServices = [
  {
    icon: Wind,
    title: "System Testing & Verification",
    items: [
      "Supply & return airflow measurement and adjustment",
      "Air change rate (ACH) verification",
      "Room-to-room pressure relationships",
      "Diffuser and grille airflow balancing",
      "Fan performance & motor data evaluation",
      "Filter resistance and static pressure measurements",
    ],
  },
  {
    icon: Thermometer,
    title: "Environmental Performance Checks",
    items: [
      "Temperature & humidity monitoring",
      "Ventilation rate and fresh air volume verification",
      "Occupant comfort troubleshooting",
      "Facility airflow control optimization",
    ],
  },
  {
    icon: Hospital,
    title: "Specialized Healthcare & Controlled Environment TAB",
    items: [
      "Pharmacy cleanrooms (USP 797 / USP 800)",
      "Isolation rooms (AIIR & Protective Environment)",
      "Operating & procedure rooms",
      "Sterile processing and decontamination areas",
      "Laboratory ventilation and fume hood exhaust supply balance",
    ],
  },
];

const standards = [
  { label: "NEBB & AABC", desc: "Test & Balance Procedures" },
  { label: "ASHRAE 62.1 & 170", desc: "Ventilation & Healthcare Airflow Standards" },
  { label: "USP 797 / USP 800", desc: "Compounding Room Pressurization" },
  { label: "CDC & NIH", desc: "Isolation Room Requirements" },
  { label: "Commissioning Support", desc: "Facility Commissioning & Re-commissioning" },
];

const complianceBodies = [
  "Joint Commission",
  "State Health Departments",
  "VA / DoD Safety & Infection Control Programs",
  "Internal QA and Regulatory Audits",
];

const facilities = [
  "Hospital & Outpatient Pharmacies",
  "VA Medical Centers & DoD Healthcare Facilities",
  "Sterile Processing & Pharmacy Cleanrooms",
  "Laboratory & Research Complexes",
  "Academic and Government Facilities",
  "Commercial Office & Healthcare Buildings",
];

const benefits = [
  { benefit: "Accurate investigation, clear interpretation, and realistic controls.", strength: "Experienced Healthcare & Lab Airflow Specialists" },
  { benefit: "Validated data suitable for regulatory review.", strength: "Clear, Actionable Reporting" },
  { benefit: "Recommendations based on safety needs — not vendor incentives.", strength: "No Conflict of Interest" },
  { benefit: "Works seamlessly with federal, healthcare, and research clients.", strength: "Nationwide SDVOSB Service Capability" },
];

export default function HvacTestingPage() {
  const pageSchema = webPageSchema({
    title: "HVAC Testing, Adjusting & Balancing — Health Systems Sciences",
    description:
      "HSS provides HVAC Testing, Adjusting, and Balancing (TAB) services for hospitals, laboratories, compounding pharmacies, government facilities, and commercial buildings nationwide.",
    pathname: "/hvac-testing-adjusting-balancing",
  });
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "HVAC Testing, Adjusting & Balancing", href: "/hvac-testing-adjusting-balancing" },
  ]);
  const svcSchema = serviceSchema({
    name: "HVAC Testing, Adjusting & Balancing",
    description: "HVAC Testing, Adjusting, and Balancing (TAB) services to verify building ventilation systems deliver correct airflow rates, pressurization, and environmental performance.",
    pathname: "/hvac-testing-adjusting-balancing",
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
                Facility Engineering
              </span>
              <h1
                className="font-bold leading-tight text-white"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              >
                HVAC Testing, Adjusting &amp; Balancing (TAB)
              </h1>
              <div className="mt-5 h-1 w-14 rounded-full bg-gold" />
              <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
                HSS provides HVAC Testing, Adjusting, and Balancing (TAB) services to verify that
                building ventilation systems deliver the correct airflow rates, pressurization, and
                environmental performance required for safe and efficient operation.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                We support hospitals, laboratories, compounding pharmacies, government facilities,
                and commercial buildings nationwide. As a Service-Disabled Veteran–Owned Small
                Business (SDVOSB), HSS brings professional testing expertise, reliable documentation,
                and responsive onsite coordination to both new construction and existing facility
                systems.
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
                  src="https://hssciences.com/wp-content/uploads/2025/11/HVAC-Testing.jpg"
                  alt="Technician conducting HVAC performance testing with measurement equipment"
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
              Core TAB Services
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
                Standards &amp; Regulatory Alignment
              </h2>
              <div className="mt-4 h-1 w-12 rounded-full bg-gold" />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Our TAB services align with the most current industry and regulatory guidance —
                ensuring your reports satisfy any inspection or audit.
              </p>

              <div className="mt-8 space-y-3">
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

              <div className="mt-8 rounded-2xl border border-primary/10 bg-primary/5 p-5">
                <p className="text-sm font-semibold text-foreground">Ensures compliance for:</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {complianceBodies.map((b) => (
                    <span
                      key={b}
                      className="inline-flex items-center gap-1.5 rounded-full bg-white border border-border px-3 py-1 text-xs font-medium text-foreground shadow-sm"
                    >
                      <Shield className="size-3 text-gold shrink-0" aria-hidden="true" />
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://hssciences.com/wp-content/uploads/2025/11/HVAC-Testing.jpg"
                alt="Technician conducting HVAC performance testing with measurement equipment"
                className="h-[520px] w-full object-cover"
              />
            </div>
          </div>
        </Container>
      </section>

      {/* ── Who We Support ────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Our Clients</span>
            <h2 className="mt-3 font-bold text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              Who We Support
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
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">The HSS Advantage</span>
            <h2 className="mt-3 font-bold text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
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
              Ready to Schedule Your HVAC TAB Service?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Contact our team to discuss your facility&apos;s ventilation needs and get a customized testing plan.
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
