import type { Metadata } from "next";
import { constructMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { Container } from "@/components/layout/container";

export const metadata: Metadata = constructMetadata({
  title: "Privacy Policy",
  description:
    "Privacy policy for Health Systems Sciences. Learn how we collect, use, and protect your information.",
  pathname: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  const pageSchema = webPageSchema({
    title: "Privacy Policy — Health Systems Sciences",
    description:
      "Privacy policy for Health Systems Sciences. Learn how we collect, use, and protect your information.",
    pathname: "/privacy-policy",
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Privacy Policy", href: "/privacy-policy" },
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
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Privacy Policy
          </h1>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <Container className="prose prose-neutral max-w-3xl">
          <h2>Information We Collect</h2>
          <p>
            We may collect personal information that you voluntarily provide when
            you contact us, request a quote, or use our services. This may
            include your name, email address, phone number, company name, and
            project details.
          </p>

          <h2>How We Use Your Information</h2>
          <p>
            We use the information we collect to respond to your inquiries,
            provide our testing and certification services, send relevant
            communications, and improve our website and services.
          </p>

          <h2>Information Sharing</h2>
          <p>
            We do not sell or rent your personal information to third parties. We
            may share information with trusted service providers who assist us in
            operating our website and conducting our business, provided they
            agree to keep this information confidential.
          </p>

          <h2>Data Security</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information against unauthorized access, alteration, disclosure, or
            destruction.
          </p>

          <h2>Cookies</h2>
          <p>
            Our website may use cookies to enhance your browsing experience.
            You can choose to disable cookies through your browser settings.
          </p>

          <h2>Changes to This Policy</h2>
          <p>
            We reserve the right to update this privacy policy at any time.
            Changes will be posted on this page with an updated effective date.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have questions about this privacy policy, please contact us
            at{" "}
            <a href="mailto:certify@hssciences.com">certify@hssciences.com</a>{" "}
            or call us at (507) 594-9395.
          </p>
        </Container>
      </section>
    </>
  );
}
