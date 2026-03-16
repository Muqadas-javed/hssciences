import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { constructMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { siteContent } from "@/data/siteContent";

const { careers } = siteContent;

export const metadata: Metadata = constructMetadata({
  title: "Careers",
  description:
    "Join the Health Systems Sciences team. Explore career opportunities in testing, certification, and compliance.",
  pathname: "/careers",
});

export default function CareersPage() {
  const pageSchema = webPageSchema({
    title: "Careers — Health Systems Sciences",
    description:
      "Join the Health Systems Sciences team. Explore career opportunities in testing, certification, and compliance.",
    pathname: "/careers",
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Careers", href: "/careers" },
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
            Careers
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            {careers.hero.heading}
          </h1>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            {careers.section.heading}
          </h2>
          <div className="space-y-5">
            {careers.section.paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href={careers.cta.href}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {careers.cta.label}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
