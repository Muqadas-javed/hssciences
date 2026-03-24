import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle, Droplets, Building, AlertTriangle, FileText, ClipboardList, Building2 } from "lucide-react";
import { constructMetadata, webPageSchema, breadcrumbSchema, keywordGroups, serviceSchema } from "@/lib/seo";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = constructMetadata({
  title: "Water Testing & Compliance Services",
  description:
    "HSS provides potable water testing, Legionella program support, environmental sampling, and compliance documentation for healthcare facilities, research environments, and institutional campuses.",
  pathname: "/water-testing-and-compliance",
  keywords: [
    ...keywordGroups.water,
    "water testing services",
    "Legionella testing",
    "Legionella risk management",
    "potable water testing",
    "water management plan",
    "healthcare water compliance",
    "water sampling services",
  ],
});

const coreServices = [
  {
    icon: Droplets,
    title: "Potable & Domestic Water System Testing",
    items: [
      "Legionella spp. culture and molecular testing",
      "Total coliforms, E. coli, pseudomonas, HPC",
      "Metal, corrosion, pH, and disinfectant residual evaluation",
      "Fixture & distribution system sampling strategies",
      "ISO 17025 accredited laboratory analysis",
    ],
  },
  {
    icon: Building,
    title: "Cooling Tower & Building Water System Assessment",
    items: [
      "Tower basin and drift control inspection",
      "Biofilm presence assessment",
      "Biocide/control program review",
      "Equipment & piping condition evaluation",
    ],
  },
  {
    icon: AlertTriangle,
    title: "High-Risk Area & Healthcare-Critical Testing",
    items: [
      "Patient care and specialty unit distribution points",
      "Dialysis water systems and equipment",
      "Sterile processing and decontamination equipment feeds",
      "Oncology and immunocompromised treatment spaces",
    ],
  },
];

const legionellaServices = [
  {
    icon: FileText,
    title: "Water Management Plans (WMP)",
    image: "https://hssciences.com/wp-content/uploads/2025/11/Water-Testing-Compliance-Services3.jpg",
    imageAlt: "Scientist holding a beaker with water wearing a protective glove in a laboratory",
    items: [
      "Development, review, and update of ASHRAE 188 compliant plans",
      "On-site system mapping and critical control point identification",
      "Risk assessment of building water systems and distribution networks",
      "Monitoring schedules, control limits, and corrective action protocols",
      "Team roles, responsibilities, and communication procedures",
      "Validation and verification procedures for ongoing compliance",
    ],
  },
  {
    icon: ClipboardList,
    title: "Program Audits & Documentation",
    image: "https://hssciences.com/wp-content/uploads/2025/11/Water-Testing-Compliance-Services4.jpg",
    imageAlt: "Scientist in protective gear using a microscope in a laboratory setting",
    items: [
      "Trend analysis and response action guidance",
      "Remediation verification testing after disinfection or system correction",
      "VA/VHA Directive Legionella Requirements",
      "ASHRAE 188 & CDC Toolkit",
      "CMS QSO-17-30",
      "Joint Commission Environment of Care Standards",
    ],
  },
];

const reportingPoints = [
  "Clear test result summaries",
  "Pass/fail interpretation tied to recognized action thresholds",
  "Practical next-step guidance for facility teams",
  "Documentation suitable for internal QA, external audit, and regulatory survey",
];

const facilities = [
  "Hospitals & Healthcare Networks",
  "VA & DoD Medical Facilities",
  "Long-Term Care & Assisted Living",
  "University & Research Campuses",
  "Commercial & Government Buildings",
  "Laboratory & Life Science Facilities",
];

const benefits = [
  { benefit: "Testing and recommendations tailored to patient-care environments.", strength: "Healthcare-Experienced Environmental Specialists" },
  { benefit: "Defensible results suitable for regulatory review.", strength: "Accredited Laboratory Partnerships" },
  { benefit: "Guidance that facilities, infection control, and engineering can use immediately.", strength: "Clear, Actionable Reporting" },
  { benefit: "Meets federal contracting and subcontracting participation goals.", strength: "SDVOSB Nationwide Support" },
];

export default function WaterTestingPage() {
  const pageSchema = webPageSchema({
    title: "Water Testing & Compliance Services — Health Systems Sciences",
    description:
      "HSS provides potable water testing, Legionella program support, environmental sampling, and compliance documentation for healthcare facilities, research environments, and institutional campuses.",
    pathname: "/water-testing-and-compliance",
  });
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Water Testing & Compliance Services", href: "/water-testing-and-compliance" },
  ]);
  const svcSchema = serviceSchema({
    name: "Water Testing & Compliance Services",
    description: "Potable water testing, Legionella program support, environmental sampling, and compliance documentation for healthcare facilities, research environments, and institutional campuses.",
    pathname: "/water-testing-and-compliance",
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
                Environmental Health &amp; Safety
              </span>
              <h1
                className="font-bold leading-tight text-white"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              >
                Water Testing &amp; Compliance Services
              </h1>
              <div className="mt-5 h-1 w-14 rounded-full bg-gold" />
              <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
                HSS provides potable water testing, Legionella program support, environmental
                sampling, and compliance documentation for healthcare facilities, research
                environments, and institutional campuses.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                We help organizations maintain safe water systems, manage microbial risk, and meet
                regulatory and accrediting requirements. As a Service-Disabled Veteran–Owned Small
                Business (SDVOSB), HSS supports VA Medical Centers, DoD hospitals, academic medical
                systems, and public and private healthcare networks nationwide.
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
                  src="https://hssciences.com/wp-content/uploads/2025/11/Water-Testing-Compliance-Services2.jpg"
                  alt="Female scientist working in a laboratory conducting experiments and using a tablet for data analysis"
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
              Core Water Testing Services
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

      {/* ── Legionella Risk Management ────────────────────────── */}
      <section className="relative overflow-hidden bg-gray-50 py-20 md:py-28">
        <Container className="relative">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Risk Management</span>
            <h2 className="mt-3 font-bold text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              Legionella Risk Management &amp; Compliance Support
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              HSS supports the full cycle of Legionella compliance — from initial water management
              plan development through ongoing monitoring, audit documentation, and post-remediation
              clearance testing.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2">
            {legionellaServices.map((s) => (
              <div
                key={s.title}
                className="group overflow-hidden rounded-2xl border border-border bg-white transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
              >
                <div className="overflow-hidden">
                  <img
                    src={s.image}
                    alt={s.imageAlt}
                    className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8">
                  <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    <s.icon className="size-6" aria-hidden="true" />
                  </div>
                  <h3 className="font-semibold text-foreground" style={{ fontSize: "1rem" }}>
                    {s.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                        <CheckCircle className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Reporting & Interpretation ────────────────────────── */}
      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <img
                src="https://hssciences.com/wp-content/uploads/2025/11/Water-Testing-Compliance-Services5.jpg"
                alt="Scientist holding a flask with blue liquid in a laboratory wearing protective gloves"
                className="h-[380px] w-full object-cover"
              />
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Documentation</span>
              <h2 className="mt-3 font-bold text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
                Reporting &amp; Interpretation
              </h2>
              <div className="mt-4 h-1 w-12 rounded-full bg-gold" />
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Every project includes clear, authoritative documentation. No unclear lab dumps. No
                unsupported recommendations.
              </p>
              <ul className="mt-6 space-y-3">
                {reportingPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <div className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-gold/15">
                      <CheckCircle className="size-3 text-gold" aria-hidden="true" />
                    </div>
                    <p className="text-sm leading-relaxed text-foreground">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Organizations We Serve ────────────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Our Clients</span>
            <h2 className="mt-3 font-bold text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              Organizations We Serve
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
          </div>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {facilities.map((f) => (
              <span
                key={f}
                className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-primary/30 hover:bg-primary/5"
              >
                <Building2 className="size-3.5 shrink-0 text-gold" aria-hidden="true" />
                {f}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Why Work With HSS ─────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
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
                className="group relative overflow-hidden rounded-2xl border border-border bg-gray-50 p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white hover:shadow-lg"
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
      <section className="bg-gray-50 py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-bold text-foreground" style={{ fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)" }}>
              Ready to Schedule Water Testing for Your Facility?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Contact our team to discuss your water system risks and compliance needs.
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
                className="inline-flex items-center gap-2 rounded-full border border-border bg-white px-8 py-3.5 text-sm font-semibold text-foreground transition-all hover:bg-accent"
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
