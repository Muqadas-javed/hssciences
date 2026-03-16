import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  FlaskConical,
  MapPin,
  BarChart3,
  UserCheck,
  ShieldCheck,
  FileText,
  Building2,
} from "lucide-react";
import { constructMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = constructMetadata({
  title: "Remote Surface Sampling & Employee Qualification Support",
  description:
    "HSS provides remote surface sampling programs and employee qualification assessments to help pharmacies demonstrate continued compliance with USP 797 and USP 800.",
  pathname: "/remote-surface-sampling",
});

const samplingCards = [
  {
    icon: FlaskConical,
    title: "Sampling Kits & Workflow",
    items: [
      "Pre-assembled sampling kits shipped directly to site",
      "Step-by-step collection procedures for pharmacy or EVS staff",
      "ISO 17025 accredited laboratory analysis",
      "Chain-of-custody documentation included",
    ],
  },
  {
    icon: MapPin,
    title: "Sampling Locations",
    items: [
      "PEC work zone surfaces",
      "High-touch cleanroom areas",
      "Segregated compounding spaces (SCA)",
      "HD compounding & storage areas (USP 800)",
    ],
  },
  {
    icon: BarChart3,
    title: "Reporting & Trending",
    items: [
      "Microbial CFU counts by location",
      "Alert/action limit comparison",
      "Corrective action recommendation guidance",
      "Quarterly & annual trending summaries available",
    ],
  },
];

const qualificationCards = [
  {
    icon: UserCheck,
    title: "Initial & Ongoing Qualification",
    items: [
      "Aseptic technique competency demonstrations",
      "Media fill (process simulation) guidance & review",
      "Gloved fingertip testing protocols & frequency",
      "Surface sampling tied to personnel workflows",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Hazardous Drug Handling Competency (USP 800)",
    items: [
      "HD preparation & transfer technique validation",
      "PPE selection, donning/doffing verification",
      "Hazardous waste handling & decontamination practice reviews",
      "Spill procedure training and assessment",
    ],
  },
  {
    icon: FileText,
    title: "Documentation Provided",
    items: [
      "Competency sign-offs with evaluator verification",
      "Pass/fail scoring criteria",
      "Written corrective coaching guidance",
      "Files aligned for Joint Commission, State Board, VHA, CAP review",
    ],
  },
];

const standards = [
  "USP 797 – Sterile compounding personnel competency & surface EM",
  "USP 800 – Hazardous drug handling, PPE, and residue control",
  "CETA CAG-003 – PEC cleanroom and operational certification practices",
  "ISO 14644 – Cleanroom classification & particulate expectations",
  "Joint Commission / State Board – Survey compliance and documentation readiness",
];

const facilities = [
  "Hospital & Outpatient Pharmacies",
  "VA & DoD Healthcare Facilities",
  "Oncology & Infusion Centers",
  "Academic Medical Centers",
  "503A Compounding Pharmacies",
  "Sterile Processing & Research Facilities",
];

const benefits = [
  {
    strength: "Clear, Easy-to-Follow Workflows",
    benefit: "Staff can collect samples confidently and consistently.",
  },
  {
    strength: "Accredited Laboratory Partnerships",
    benefit: "Defensible results suitable for regulatory review.",
  },
  {
    strength: "Practical Training & Coaching",
    benefit: "Focused on real-world compounding workflows.",
  },
  {
    strength: "SDVOSB Nationwide Support",
    benefit: "Meets federal set-aside & subcontracting requirements.",
  },
];

export default function RemoteSurfaceSamplingPage() {
  const pageSchema = webPageSchema({
    title: "Remote Surface Sampling & Employee Qualification Support — Health Systems Sciences",
    description:
      "HSS provides remote surface sampling programs and employee qualification assessments for USP 797/800 compliance.",
    pathname: "/remote-surface-sampling",
  });
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Remote Surface Sampling", href: "/remote-surface-sampling" },
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
                Pharmacy Compliance
              </span>
              <h1
                className="font-bold leading-tight text-white"
                style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
              >
                Remote Surface Sampling &amp; Employee Qualification Support
              </h1>
              <div className="mt-5 h-1 w-14 rounded-full bg-gold" />
              <p className="mt-6 text-base leading-relaxed text-white/75 md:text-lg">
                HSS provides remote surface sampling programs and employee qualification assessments
                to help pharmacies demonstrate continued compliance with USP 797 (sterile
                compounding) and USP 800 (hazardous drug handling).
              </p>
              <p className="mt-4 text-base leading-relaxed text-white/65">
                We help facilities maintain defensible environmental monitoring data and verify
                personnel competency in safe aseptic technique and hazardous drug handling. As a
                Service-Disabled Veteran–Owned Small Business (SDVOSB), HSS supports VA Medical
                Centers, DoD hospitals, academic medical systems, and independent compounding
                pharmacies nationwide.
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
                  src="https://hssciences.com/wp-content/uploads/2025/11/Remote-Surface-Sampling.jpg"
                  alt="Scientist in protective gear conducting remote surface sampling in a lab environment"
                  className="h-[420px] w-full object-cover"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Remote Surface Sampling Program ───────────────────── */}
      <section className="bg-white py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Between-Visit Compliance</span>
            <h2 className="mt-3 font-bold text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              Remote Surface Sampling Program
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
            <p className="mt-5 text-base text-muted-foreground">
              This service supports continuous compliance when on-site certification is not active.
            </p>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {samplingCards.map(({ icon: Icon, title, items }) => (
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

      {/* ── Employee Qualification Program ────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Personnel Competency</span>
            <h2 className="mt-3 font-bold text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
              Employee Qualification &amp; Competency Program
            </h2>
            <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {qualificationCards.map(({ icon: Icon, title, items }) => (
              <div
                key={title}
                className="group rounded-2xl border border-border bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5"
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

      {/* ── Standards ────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">Regulatory Alignment</span>
              <h2 className="mt-3 font-bold text-foreground" style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>
                Standards &amp; Regulatory Alignment
              </h2>
              <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-gold" />
              <p className="mt-5 text-base text-muted-foreground">
                Our programs align directly with current pharmacy and laboratory compliance standards.
                All documentation is audit-ready and traceable.
              </p>
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-gray-50 p-8">
              <div className="grid gap-3 sm:grid-cols-2">
                {standards.map((s) => (
                  <div key={s} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden="true" />
                    <p className="text-sm text-foreground">{s}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* ── Who We Serve ──────────────────────────────────────── */}
      <section className="bg-gray-50 py-20 md:py-24">
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
                className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-white px-5 py-2.5 text-sm font-medium text-foreground shadow-sm transition-colors hover:border-primary/30 hover:bg-primary/5"
              >
                <Building2 className="size-3.5 shrink-0 text-gold" aria-hidden="true" />
                {f}
              </span>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Why HSS ───────────────────────────────────────────── */}
      <section className="bg-white py-20 md:py-28">
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
                className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:shadow-lg"
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
              Ready to Set Up a Remote Sampling Program?
            </h2>
            <p className="mt-4 text-base text-muted-foreground">
              Contact our team to discuss your facility's environmental monitoring needs or
              employee qualification program requirements.
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
