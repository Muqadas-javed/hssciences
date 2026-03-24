import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { constructMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { HeroSection } from "@/components/home/hero-section";
import { AboutSection } from "@/components/home/about-section";
import { ServiceHighlights } from "@/components/home/service-highlights";

const ServicesSection = dynamic(
  () => import("@/components/home/services-section").then((m) => m.ServicesSection),
  { loading: () => <div className="py-20 md:py-32" aria-busy="true" role="status"><span className="sr-only">Loading services…</span></div> }
);
const ResearchSection = dynamic(
  () => import("@/components/home/research-section").then((m) => m.ResearchSection),
  { loading: () => <div className="py-20 md:py-32" aria-busy="true" role="status"><span className="sr-only">Loading research…</span></div> }
);
const TestimonialsSection = dynamic(
  () => import("@/components/home/testimonials-section").then((m) => m.TestimonialsSection),
  { loading: () => <div className="py-20 md:py-32" aria-busy="true" role="status"><span className="sr-only">Loading testimonials…</span></div> }
);
const NewsSection = dynamic(
  () => import("@/components/home/news-section").then((m) => m.NewsSection),
  { loading: () => <div className="py-20 md:py-32" aria-busy="true" role="status"><span className="sr-only">Loading news…</span></div> }
);
const QuoteSection = dynamic(
  () => import("@/components/home/quote-section").then((m) => m.QuoteSection),
  { loading: () => <div className="py-20 md:py-32" aria-busy="true" role="status"><span className="sr-only">Loading quote form…</span></div> }
);

export const metadata: Metadata = constructMetadata({
  description:
    "Health Systems Sciences delivers certified testing, validation, and compliance solutions for cleanrooms, healthcare, manufacturing and laboratories nationwide.",
  pathname: "/",
});

export default function HomePage() {
  const pageSchema = webPageSchema({
    title: "Health Systems Sciences — Certified Testing & Compliance",
    description:
      "Delivering certified testing, validation, and compliance solutions for cleanrooms, healthcare, manufacturing, laboratories and other critical environments.",
    pathname: "/",
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
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
      <HeroSection />
      <ServiceHighlights />
      <AboutSection />
      <ServicesSection />
      <ResearchSection />
      <TestimonialsSection />
      <NewsSection />
      <QuoteSection />
    </>
  );
}
