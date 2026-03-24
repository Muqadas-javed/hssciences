import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  FlaskConical,
  Wind,
  FileText,
  ShieldAlert,
  Building2,
} from "lucide-react";
import { constructMetadata, webPageSchema, breadcrumbSchema, keywordGroups, serviceSchema } from "@/lib/seo";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = constructMetadata({
  title: "Hazardous Material Management & Safety Support",
  description:
    "HSS provides hazardous material management, exposure risk assessment, regulatory compliance support, and facility safety program development for healthcare, laboratory, and research environments.",
  pathname: "/hazardous-material-management",
  keywords: [
    ...keywordGroups.hazmat,
    "hazardous material management",
    "asbestos testing services",
    "lead paint assessment",
    "environmental site assessment",
    "hazmat consulting",
    "spill response planning",
    "regulatory compliance",
  ],
});

const coreServices = [
  {
    icon: FlaskConical,
    title: "Hazard Identification & Inventory",
    items: [
      "Chemical & hazardous drug inventory review",
      "SDS catalog development and alignment",
      "On-site hazard classification and risk profiling",
      "Chemical segregation and storage assessment",
    ],
  },
  {
    icon: Wind,
    title: "Exposure & Containment Control",
    items: [
      "Local exhaust, fume hood & BSC performance review",
      "Ventilation & pressurization verification (USP 800 support)",
      "Hazardous drug surface residue sampling programs",
      "PPE selection guidance and workflow safety evaluation",
    ],
  },
  {
    icon: FileText,
    title: "Regulatory Documentation & Compliance",
    items: [
      "USP 800 Hazardous Drug Handling Program development",
      "OSHA Hazard Communication (HazCom) plan support",
      "Waste handling, packaging, and labeling guidance",
      "Transportation compliance alignment (DOT & EPA)",
    ],
  },
];

const spillResponseItems = [
  "Spill kit selection and placement guidance",
  "Emergency action and response plan development",
  "Staff training support for spill containment procedures",
  "Post-incident environmental verification sampling (as needed)",
  "Decontamination procedures and PPE requirements documentation",
];

const standards = [
  "USP 800 – Hazardous Drug Handling",
  "OSHA – Hazard Communication & Lab Standard",
  "NIOSH / CDC Hazardous Drug Exposure Guidelines",
  "EPA & DOT Hazardous Waste Storage & Transportation Requirements",
  "Joint Commission & State Board of Pharmacy expectations",
];

const facilities = [
  "Oncology & Infusion Pharmacies",
  "Hospital Pharmacies & Clinical Labs",
  "VA & DoD Healthcare Facilities",
  "Research Laboratories & Biocontainment Spaces",
  "Academic & Government Campuses",
  "Pharmaceutical & Biotech Environments",
];

const benefits = [
  {
    strength: "Healthcare & Lab Hazard Expertise",
    benefit: "Practical, safe, and compliant workflow solutions.",
  },
  {
    strength: "Unbiased Recommendations",
    benefit: "We do not sell chemicals, PPE, or disposal services.",
  },
  {
    strength: "Clear, Actionable Reporting",
    benefit: "Easy to understand and implement.",
  },
  {
    strength: "Nationwide SDVOSB Support",
    benefit: "Meets federal contracting and subcontracting requirements.",
  },
];

export default function HazardousMaterialManagementPage() {
  const pageSchema = webPageSchema({
    title: "Hazardous Material Management & Safety Support — Health Systems Sciences",
    description:
      "HSS provides hazardous material management, exposure risk assessment, and facility safety program development for healthcare and laboratory environments.",
    pathname: "/hazardous-material-management",
  });
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Hazardous Material Management", href: "/hazardous-material-management" },
  ]);
  const svcSchema = serviceSchema({
    name: "Hazardous Material Management & Safety Support",
    description: "Hazardous material management, exposure risk assessment, regulatory compliance support, and facility safety program development for healthcare, laboratory, and research environments.",
    pathname: "/hazardous-material-management",
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
                Environmental Health & Safety
              </span>
              <h1
                className="font-bold leading-tight text-white"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              >
                Hazardous Material Management &amp; Safety Support
              </h1>
              <div className="mt-5 h-1 w-14 rounded-full bg-gold" />
              <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
                HSS provides hazardous material management, exposure risk assessment, regulatory
                compliance support, and facility safety program development for healthcare,
                laboratory, research, and industrial environments.
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                We help organizations safely store, handle, transport, and dispose of hazardous
                chemicals and drugs — protecting staff, patients, and facility integrity. As a
                Service-Disabled Veteran–Owned Small Business (SDVOSB), HSS supports VA Medical
                Centers, DoD installations, research campuses, and health systems nationwide.
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
                  src="https://hssciences.com/wp-content/uploads/2025/11/CADILLAC-VALIDATION-PERSONNEL-1.jpg"
                  alt="Scientist in a laboratory setting working with hazardous materials"
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
              Core Hazardous Material Management Services
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

      {/* ── Spill Response + Standards ────────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <Container>
          <div className="grid items-start gap-8 lg:grid-cols-2">

            {/* Spill Response */}
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <ShieldAlert className="size-6" aria-hidden="true" />
              </div>
              <h2 className="font-bold text-foreground" style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>
                Spill Response &amp; Emergency Preparedness
              </h2>
              <div className="mt-3 h-1 w-10 rounded-full bg-gold" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Effective hazardous material management includes being prepared before an incident
                occurs. HSS helps facilities build practical, scalable spill response programs.
              </p>
              <ul className="mt-5 space-y-3">
                {spillResponseItems.map((step) => (
                  <li key={step} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                    <p className="text-sm text-foreground">{step}</p>
                  </li>
                ))}
              </ul>

              <div className="mt-8 overflow-hidden rounded-xl">
                <img
                  src="https://hssciences.com/wp-content/uploads/2025/11/CADILLAC-VALIDATION-PERSONNEL-2.jpg"
                  alt="Researcher in protective gear working in a laboratory"
                  className="h-44 w-full object-cover"
                />
              </div>
            </div>

            {/* Standards */}
            <div className="rounded-2xl border border-border bg-white p-8 shadow-sm">
              <div className="mb-5 inline-flex rounded-xl bg-primary/10 p-3 text-primary">
                <FileText className="size-6" aria-hidden="true" />
              </div>
              <h2 className="font-bold text-foreground" style={{ fontSize: "clamp(1.2rem, 2vw, 1.5rem)" }}>
                Standards &amp; Regulatory Alignment
              </h2>
              <div className="mt-3 h-1 w-10 rounded-full bg-gold" />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                Our programs are built around current federal, state, and accrediting body
                requirements so your facility stays compliant and defensible.
              </p>
              <div className="mt-6 space-y-3">
                {standards.map((s) => (
                  <div key={s} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                    <p className="text-sm text-foreground">{s}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 overflow-hidden rounded-xl">
                <img
                  src="https://hssciences.com/wp-content/uploads/2025/11/CADILLAC-VALIDATION-PERSONNEL-3.jpg"
                  alt="Researchers working in a laboratory"
                  className="h-44 w-full object-cover"
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
              Where We Work
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
              Need a Hazardous Material Management Assessment?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Contact our team to discuss your facility's chemical inventory, hazardous drug
              handling programs, or spill response planning needs.
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
