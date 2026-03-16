"use client";

import { motion } from "framer-motion";
import { Atom, BarChart3, Cpu, Target } from "lucide-react";
import { Container } from "@/components/layout";
import { SectionHeader } from "@/components/ui/section-header";
import { FeatureCard } from "@/components/ui/feature-card";
import { fadeUp, stagger, viewportEager } from "@/lib/animations";
import { siteContent } from "@/data/siteContent";

const { home } = siteContent;

const pillars = [
  {
    icon: Atom,
    title: "Science-Based Methodology",
    description:
      "Evidence-driven evaluations using ISO, USP, ASHRAE, and OSHA standards for precise, defensible results.",
  },
  {
    icon: Cpu,
    title: "Technology-Enabled Platform",
    description:
      "Streamlined scheduling, automated reporting, and real-time asset tracking for complete operational visibility.",
  },
  {
    icon: Target,
    title: "Precision & Compliance",
    description:
      "Every airflow, pressure reading, and certification verified against industry-recognized benchmarks by certified technicians.",
  },
  {
    icon: BarChart3,
    title: "Measurable Outcomes",
    description:
      "Detailed documentation and traceable results that support audits, accreditation, and continuous quality improvement.",
  },
];

export function ResearchSection() {
  return (
    <section aria-labelledby="research-heading" className="relative overflow-hidden py-24 md:py-36">
      {/* Academic-style background with subtle gradient */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
        {/* Decorative dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, oklch(0.25 0.06 255) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <Container className="relative">
        <SectionHeader
          label="Research &amp; Innovation"
          title="Driven by Science, Powered&nbsp;by&nbsp;Technology"
          highlight="Powered&nbsp;by&nbsp;Technology"
          subtitle={home.expertise.paragraph}
          id="research-heading"
        />

        {/* Pillar cards */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportEager}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {pillars.map((pillar, i) => (
            <motion.div key={pillar.title} variants={fadeUp}>
              <FeatureCard
                icon={pillar.icon}
                title={pillar.title}
                description={pillar.description}
                index={i}
              />
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
