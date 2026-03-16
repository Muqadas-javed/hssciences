import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { constructMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { siteContent } from "@/data/siteContent";

const { ehsServices } = siteContent;

export const metadata: Metadata = constructMetadata({
  title: "Environmental Health & Safety Services",
  description: ehsServices.paragraph.slice(0, 160),
  pathname: "/services/environmental-health-and-safety-2",
});

export default function EHSServicesPage() {
  const pageSchema = webPageSchema({
    title: "Environmental Health & Safety — Health Systems Sciences",
    description: ehsServices.paragraph.slice(0, 160),
    pathname: "/services/environmental-health-and-safety-2",
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Environmental Health & Safety", href: "/services/environmental-health-and-safety-2" },
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
            {ehsServices.hero.heading}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            {ehsServices.hero.subheading}
          </h1>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <Container className="max-w-4xl">
          <p className="text-muted-foreground leading-relaxed mb-12">
            {ehsServices.paragraph}
          </p>

          <div className="grid gap-10 md:grid-cols-2">
            {ehsServices.columns.map((col, i) => (
              <div key={i}>
                <h2 className="text-xl font-bold text-foreground mb-4">
                  {col.heading}
                </h2>
                <ul className="space-y-2">
                  {col.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1.5 rounded-full bg-gold shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <p className="mt-12 text-muted-foreground">{ehsServices.closingText}</p>

          <div className="mt-8">
            <Link
              href={ehsServices.cta.href}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {ehsServices.cta.label}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
