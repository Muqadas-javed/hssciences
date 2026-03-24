import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { constructMetadata, webPageSchema, breadcrumbSchema, keywordGroups } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { siteContent } from "@/data/siteContent";

const { customizedSolutions } = siteContent;

export const metadata: Metadata = constructMetadata({
  title: "Customized Solutions",
  description: customizedSolutions.hero.paragraph.slice(0, 160),
  pathname: "/customized-solutions",
  keywords: [
    ...keywordGroups.core,
    "customized compliance solutions",
    "tailored testing services",
    "custom facility certification",
    "specialized environmental testing",
  ],
});

export default function CustomizedSolutionsPage() {
  const pageSchema = webPageSchema({
    title: "Customized Solutions — Health Systems Sciences",
    description: customizedSolutions.hero.paragraph.slice(0, 160),
    pathname: "/customized-solutions",
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Customized Solutions", href: "/customized-solutions" },
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
            Specialized Services
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            {customizedSolutions.hero.heading}
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl">
            {customizedSolutions.hero.paragraph}
          </p>
        </Container>
      </section>

      {/* Sections */}
      <section className="py-16 md:py-24">
        <Container className="max-w-4xl space-y-16">
          {customizedSolutions.sections.map((section, i) => (
            <div key={i}>
              <h2 className="text-2xl font-bold text-foreground mb-2">
                {section.heading}
              </h2>
              <p className="text-sm font-semibold text-primary mb-4">
                {section.subheading}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {section.paragraph}
              </p>
              {"additionalParagraph" in section && section.additionalParagraph && (
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {section.additionalParagraph}
                </p>
              )}
              {"bulletPoints" in section && section.bulletPoints && (
                <ul className="space-y-2 ml-1">
                  {section.bulletPoints.map((point, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 size-1.5 rounded-full bg-gold shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}

          <div className="pt-4">
            <Link
              href={customizedSolutions.hero.cta.href}
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              {customizedSolutions.hero.cta.label}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
