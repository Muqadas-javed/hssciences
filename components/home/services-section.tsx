"use client";

import { motion } from "framer-motion";
import {
  FlaskConical,
  Shield,
  Microscope,
  ShieldCheck,
  Building2,
  Wind,
  Filter,
  Search,
} from "lucide-react";
import { Container } from "@/components/layout";
import { SectionHeader } from "@/components/ui/section-header";
import { ServiceCard } from "@/components/ui/service-card";
import { ModernButton } from "@/components/ui/modern-button";
import { fadeUp, stagger, viewportEager } from "@/lib/animations";
import { siteContent } from "@/data/siteContent";

const catalog = siteContent.services.catalog;

const serviceIcons = [
  FlaskConical,
  Shield,
  Microscope,
  ShieldCheck,
  Building2,
  Wind,
  Filter,
  Search,
];

const featured = catalog.slice(0, 8);

export function ServicesSection() {
  return (
    <section aria-labelledby="services-heading" className="relative bg-muted/40 py-24 md:py-36">
      {/* Top border accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" aria-hidden="true" />

      <Container>
        <SectionHeader
          label="Our Services"
          title="Comprehensive Testing & Certification"
          highlight="Certification"
          subtitle={siteContent.services.hero.subheading}
          id="services-heading"
        />

        {/* Card grid */}
        <motion.div
          variants={stagger(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportEager}
          className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4"
        >
          {featured.map((service, i) => (
            <motion.div key={service.title} variants={fadeUp}>
              <ServiceCard
                icon={serviceIcons[i]}
                title={service.title}
                description={service.description}
                href={service.href}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 text-center"
        >
          <ModernButton variant="outline" size="lg" href="/services" arrow>
            View All Services
          </ModernButton>
        </motion.div>
      </Container>
    </section>
  );
}
