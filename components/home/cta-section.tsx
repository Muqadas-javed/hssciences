"use client";

import { ArrowRight, Phone } from "lucide-react";
import { CTABanner } from "@/components/ui/cta-banner";
import { siteContent } from "@/data/siteContent";

const { global } = siteContent;

export function CTASection() {
  return (
    <CTABanner
      heading="Ready to Get Started?"
      subtitle="Whether you need cleanroom certification, air quality testing, or comprehensive EHS solutions — our team of certified professionals is ready to deliver measurable results."
      primaryAction={{
        label: "Request a Quote",
        href: "/contact-quote",
        icon: ArrowRight,
      }}
      secondaryAction={{
        label: global.phone,
        href: `tel:${global.phone.replace(/[^\d]/g, "")}`,
        icon: Phone,
        external: true,
      }}
    />
  );
}
