import type { Metadata } from "next";
import { constructMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { siteContent } from "@/data/siteContent";

const { about } = siteContent;

export const metadata: Metadata = constructMetadata({
  title: "Company Overview",
  description: about.hero.subheading,
  pathname: "/about/company-overview",
});

export default function AboutPage() {
  const pageSchema = webPageSchema({
    title: "Company Overview — Health Systems Sciences",
    description: about.hero.subheading,
    pathname: "/about/company-overview",
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "About", href: "/about/company-overview" },
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
            {about.hero.heading}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            {about.hero.subheading}
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl">
            {about.hero.teamDescription}
          </p>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <h2 className="text-2xl font-bold text-foreground mb-8">
            {about.section.heading}
          </h2>
          <div className="space-y-6">
            {about.section.paragraphs.map((p, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed">
                {p}
              </p>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
