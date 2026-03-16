import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { constructMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = constructMetadata({
  title: "Pharmacy Certification Services",
  description:
    "USP 797, USP 800, USP 825 cleanroom and cabinet certification services for pharmacies nationwide.",
  pathname: "/pharmacy-certification-services/clean-room-cabinet",
});

export default function PharmacyCertificationPage() {
  const pageSchema = webPageSchema({
    title: "Pharmacy Certification Services — Health Systems Sciences",
    description:
      "USP 797, USP 800, USP 825 cleanroom and cabinet certification services for pharmacies nationwide.",
    pathname: "/pharmacy-certification-services/clean-room-cabinet",
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Pharmacy Certification", href: "/pharmacy-certification-services/clean-room-cabinet" },
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

      <section className="relative bg-primary py-20 md:py-28 text-primary-foreground">
        <Container>
          <Link
            href="/services"
            className="inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-gold transition-colors mb-6"
          >
            <ArrowLeft className="size-3.5" />
            All Services
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            Pharmacy Certification Services
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl">
            USP 797, USP 800, and USP 825 cleanroom and cabinet certification
            services for healthcare pharmacies nationwide.
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            Health Systems Sciences provides comprehensive certification testing
            for pharmacy cleanrooms and compounding areas. Our certified
            technicians ensure your facility meets all USP requirements for
            sterile and hazardous drug preparation areas.
          </p>

          <div className="mt-10">
            <Link
              href="/contact-quote"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Request a Quote <ArrowRight className="size-4" />
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
