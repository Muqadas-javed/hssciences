import type { Metadata } from "next";
import { constructMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = constructMetadata({
  title: "Get Started with a Quote",
  description:
    "Request a personalized quote from Health Systems Sciences. Our specialists will review your information and get back to you promptly with details tailored to your facility's needs.",
  pathname: "/request-form-page",
});

export default function RequestFormPage() {
  const pageSchema = webPageSchema({
    title: "Get Started with a Quote — Health Systems Sciences",
    description:
      "Request a personalized quote from Health Systems Sciences for compliance, testing, and safety services.",
    pathname: "/request-form-page",
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Request a Quote", href: "/request-form-page" },
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
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Request a Quote
          </span>
          <h1
            className="font-bold leading-tight text-white"
            style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)" }}
          >
            Get Started with a Quote
          </h1>
          <div className="mt-5 h-1 w-14 rounded-full bg-gold" />
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Fill out the form below to request a personalized quote. One of our specialists will
            review your information and get back to you promptly with details tailored to your
            facility&apos;s needs.
          </p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/60">
            We&apos;re here to help you meet your compliance, testing, and safety goals quickly and
            efficiently.
          </p>
        </Container>
      </section>

      {/* ── Quote Form ────────────────────────────────────────── */}
      <section className="bg-white py-16 md:py-24">
        <Container className="max-w-2xl">
          <form className="space-y-6">
            {/* Name */}
            <div>
              <label
                htmlFor="quote-name"
                className="mb-1.5 block text-sm font-semibold text-foreground"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="quote-name"
                name="name"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Your full name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="quote-email"
                className="mb-1.5 block text-sm font-semibold text-foreground"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="quote-email"
                name="email"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="you@example.com"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label
                htmlFor="quote-phone"
                className="mb-1.5 block text-sm font-semibold text-foreground"
              >
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="quote-phone"
                name="phone"
                required
                className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* State & City — side by side */}
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="quote-state"
                  className="mb-1.5 block text-sm font-semibold text-foreground"
                >
                  State <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="quote-state"
                  name="state"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="e.g. New Mexico"
                />
              </div>
              <div>
                <label
                  htmlFor="quote-city"
                  className="mb-1.5 block text-sm font-semibold text-foreground"
                >
                  City <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  id="quote-city"
                  name="city"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  placeholder="e.g. Santa Fe"
                />
              </div>
            </div>

            {/* Service Details */}
            <div>
              <label
                htmlFor="quote-details"
                className="mb-1.5 block text-sm font-semibold text-foreground"
              >
                Service Details <span className="text-red-500">*</span>
              </label>
              <textarea
                id="quote-details"
                name="details"
                rows={5}
                required
                className="w-full resize-y rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                placeholder="Describe the services you need, facility type, timeline, etc."
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-gold/90 hover:shadow-lg"
            >
              Request a Quote
            </button>
          </form>
        </Container>
      </section>
    </>
  );
}
