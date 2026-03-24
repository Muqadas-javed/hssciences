import type { Metadata } from "next";
import Link from "next/link";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import { constructMetadata, webPageSchema, breadcrumbSchema, keywordGroups } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { siteContent } from "@/data/siteContent";

const { contact, global } = siteContent;

export const metadata: Metadata = constructMetadata({
  title: "Contact / Request a Quote",
  description: contact.paragraph,
  pathname: "/contact-quote",
  keywords: [
    ...keywordGroups.core,
    "request a quote",
    "contact HSS",
    "cleanroom testing quote",
    "facility certification quote",
    "environmental compliance quote",
  ],
});

export default function ContactPage() {
  const pageSchema = webPageSchema({
    title: "Contact / Request a Quote — Health Systems Sciences",
    description: contact.paragraph,
    pathname: "/contact-quote",
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Contact", href: "/contact-quote" },
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
            Get in Touch
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            {contact.heading}
          </h1>
          <p className="mt-4 text-lg text-primary-foreground/70 max-w-2xl">
            {contact.paragraph}
          </p>
        </Container>
      </section>

      {/* Contact Info */}
      <section className="py-16 md:py-24">
        <Container className="max-w-4xl">
          <div className="grid gap-10 md:grid-cols-2">
            {/* Details */}
            <div className="space-y-6">
              <h2 className="text-xl font-bold text-foreground">Office Details</h2>

              <div className="space-y-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{contact.officeDetails}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{contact.hours}</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <a
                    href={`tel:${global.phone.replace(/[^\d+]/g, "")}`}
                    className="hover:text-primary transition-colors"
                  >
                    {contact.phoneLine}
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <a
                    href={`mailto:${global.email}`}
                    className="hover:text-primary transition-colors"
                  >
                    {global.email}
                  </a>
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                {contact.careersNote}{" "}
                <Link href={contact.careersLink.href} className="font-semibold text-primary hover:text-gold transition-colors">
                  {contact.careersLink.label}
                </Link>
              </p>
            </div>

            {/* CTA Card */}
            <div className="rounded-xl border border-border bg-card p-8 flex flex-col items-start justify-center">
              <h3 className="text-lg font-semibold text-foreground mb-3">
                Ready to get started?
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Request a custom quote for your facility testing, certification,
                or compliance needs.
              </p>
              <a
                href={`mailto:${global.email}?subject=Quote%20Request`}
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                {contact.cta.label}
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
