import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Phone } from "lucide-react";
import { constructMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = constructMetadata({
  title: "Apply Now",
  description:
    "Apply for a career at Health Systems Sciences. Join our team of engineers, technicians, and compliance specialists.",
  pathname: "/careers/apply-now",
  keywords: [
    "apply HSS",
    "Health Systems Sciences application",
    "environmental testing career application",
    "compliance specialist application",
  ],
});

export default function ApplyNowPage() {
  const pageSchema = webPageSchema({
    title: "Apply Now — Health Systems Sciences",
    description:
      "Apply for a career at Health Systems Sciences. Join our team of engineers, technicians, and compliance specialists.",
    pathname: "/careers/apply-now",
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Careers", href: "/careers" },
    { name: "Apply Now", href: "/careers/apply-now" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-28">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_60%_0%,oklch(0.35_0.08_255/0.3),transparent)]"
          aria-hidden="true"
        />
        <Container className="relative">
          <Link
            href="/careers"
            className="mb-8 inline-flex items-center gap-1.5 text-sm text-primary-foreground/60 transition-colors hover:text-gold"
          >
            <ArrowLeft className="size-3.5" /> Careers
          </Link>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Join Our Team
          </span>
          <h1
            className="font-bold leading-tight text-white"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            Apply Now
          </h1>
          <div className="mt-5 h-1 w-14 rounded-full bg-gold" />
        </Container>
      </section>

      {/* ── Application Form ──────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <Container className="max-w-2xl">
          <div className="mb-10">
            <p className="text-base leading-relaxed text-muted-foreground">
              Thank you for your interest in applying at Health Systems Sciences. Let us know what
              position you&apos;re applying for and why you want that position. Fill out the form
              below and attach your resume as a Microsoft Word document or PDF.
            </p>
            <div className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <Phone className="size-4 text-gold" aria-hidden="true" />
              <span>
                You can also give us a call at{" "}
                <a
                  href="tel:5075949395"
                  className="font-semibold text-primary transition-colors hover:text-gold"
                >
                  (507) 594-9395
                </a>{" "}
                and tell us you&apos;re looking to apply for a job.
              </span>
            </div>
            <p className="mt-4 text-sm font-medium text-foreground">
              We&apos;ll be in touch with you shortly.
            </p>
          </div>

          <form className="space-y-6">
            {/* Applicant Name */}
            <div>
              <label
                htmlFor="applicant-name"
                className="mb-1.5 block text-sm font-semibold text-foreground"
              >
                Applicant Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="applicant-name"
                name="applicant-name"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Your full name"
              />
            </div>

            {/* Applicant Email */}
            <div>
              <label
                htmlFor="applicant-email"
                className="mb-1.5 block text-sm font-semibold text-foreground"
              >
                Applicant Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="applicant-email"
                name="applicant-email"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="you@example.com"
              />
            </div>

            {/* Position */}
            <div>
              <label
                htmlFor="position"
                className="mb-1.5 block text-sm font-semibold text-foreground"
              >
                For what position are you applying for? <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="position"
                name="position"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Position title"
              />
            </div>

            {/* Email Message */}
            <div>
              <label
                htmlFor="message"
                className="mb-1.5 block text-sm font-semibold text-foreground"
              >
                Email Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className="w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Tell us why you're interested in this position..."
              />
            </div>

            {/* File Upload */}
            <div>
              <label
                htmlFor="resume"
                className="mb-1.5 block text-sm font-semibold text-foreground"
              >
                Resume / CV
              </label>
              <div className="flex w-full items-center justify-center">
                <label
                  htmlFor="resume"
                  className="flex w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-border bg-gray-50 px-6 py-8 transition-colors hover:border-primary/30 hover:bg-primary/5"
                >
                  <svg
                    className="mb-3 size-8 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M12 16V4m0 0L8 8m4-4l4 4M4 17v2a1 1 0 001 1h14a1 1 0 001-1v-2"
                    />
                  </svg>
                  <p className="text-sm text-muted-foreground">
                    <span className="font-semibold text-primary">Click to upload</span> or drag and
                    drop
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    PDF or Word document (max 2 GB)
                  </p>
                  <input
                    id="resume"
                    name="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="hidden"
                  />
                </label>
              </div>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg"
            >
              Submit Application
            </button>
          </form>
        </Container>
      </section>
    </>
  );
}
