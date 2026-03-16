import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Mail } from "lucide-react";
import { constructMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = constructMetadata({
  title: "Apply Now",
  description:
    "Apply for a career at Health Systems Sciences. Join our team of engineers, technicians, and compliance specialists.",
  pathname: "/careers/apply-now",
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

      <section className="relative bg-primary py-20 md:py-28 text-primary-foreground">
        <Container>
          <Link
            href="/careers"
            className="inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-gold transition-colors mb-6"
          >
            <ArrowLeft className="size-3.5" />
            Careers
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Apply Now
          </h1>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          <p className="text-muted-foreground leading-relaxed text-lg mb-8">
            Interested in joining Health Systems Sciences? Send your resume and
            a brief introduction to our team.
          </p>

          <a
            href="mailto:certify@hssciences.com?subject=Career%20Application"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            <Mail className="size-4" />
            Send Your Application
          </a>
        </Container>
      </section>
    </>
  );
}
