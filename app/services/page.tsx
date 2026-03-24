import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle, Shield } from "lucide-react";
import { constructMetadata, webPageSchema, breadcrumbSchema, keywordGroups } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { siteContent } from "@/data/siteContent";

const { services } = siteContent;

export const metadata: Metadata = constructMetadata({
  title: "Services — Testing, Certification & Compliance",
  description: services.hero.subheading,
  pathname: "/services",
  keywords: [
    ...keywordGroups.core,
    "testing and certification services",
    "environmental compliance services",
    "cleanroom certification",
    "HVAC testing",
    "industrial hygiene",
    "biosafety cabinet testing",
    "facility compliance",
  ],
});

export default function ServicesPage() {
  const pageSchema = webPageSchema({
    title: "Services — Health Systems Sciences",
    description: services.hero.subheading,
    pathname: "/services",
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
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

      {/* Hero */}
      <section className="relative bg-primary py-20 md:py-28 text-primary-foreground">
        <Container>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            {services.hero.heading}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            {services.hero.subheading}
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl">
            {services.hero.catalogTitle}
          </p>
        </Container>
      </section>

      {/* Service Catalog */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.catalog.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-gold/40 hover:shadow-lg"
              >
                <div className="flex items-start gap-3 mb-4">
                  <Shield className="mt-1 size-5 shrink-0 text-primary" aria-hidden="true" />
                  <h2 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h2>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="space-y-2 text-xs text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 size-3.5 shrink-0 text-gold" aria-hidden="true" />
                    <span><strong className="text-foreground">Standards:</strong> {service.standards}</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-0.5 size-3.5 shrink-0 text-gold" aria-hidden="true" />
                    <span><strong className="text-foreground">Facilities:</strong> {service.facilities}</span>
                  </div>
                </div>

                <span className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:text-gold transition-colors">
                  Learn More <ArrowRight className="size-3.5" />
                </span>
              </Link>
            ))}
          </div>

          <p className="mt-16 text-center text-muted-foreground">
            {services.closingText}
          </p>
        </Container>
      </section>
    </>
  );
}
