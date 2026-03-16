"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, Shield } from "lucide-react";
import { Container } from "@/components/layout";
import { ModernButton } from "@/components/ui/modern-button";
import { siteContent } from "@/data/siteContent";

const { home } = siteContent;

export function HeroSection() {
  return (
    <section aria-label="Hero" className="relative flex min-h-[92vh] items-center overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero.jpg"
        alt=""
        fill
        priority
        className="object-cover object-center"
        sizes="100vw"
      />
      {/* Dark overlay for text legibility */}
      <div className="pointer-events-none absolute inset-0 bg-black/55" aria-hidden="true" />
      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" aria-hidden="true" />

      <Container className="relative z-10 py-24 lg:py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-start"
          >
            <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-gold backdrop-blur-sm">
              <Shield className="size-3.5" aria-hidden="true" />
              SDVOSB Certified &bull; Veteran Owned
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center font-bold leading-[1.06] tracking-tight text-primary-foreground pr-12 lg:pr-48 lg:text-left"
            style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
          >
            Certified Testing.{" "}
            <span className="bg-gradient-to-r from-gold to-gold/70 bg-clip-text text-transparent">
              Measurable Performance.
            </span>{" "}
            Trusted Partnership.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-primary-foreground/75 md:text-xl lg:mx-0 lg:text-left"
          >
            {home.hero.subheading}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start"
          >
            <ModernButton variant="primary-inverted" size="lg" href="/contact-quote" arrow>
              Get a Quote
            </ModernButton>
            <ModernButton variant="outline-inverted" size="lg" href="/services">
              Explore Services
            </ModernButton>
          </motion.div>

        </div>
      </Container>

      {/* Founder credit */}
      <div className="absolute bottom-4 right-6 z-10 rounded bg-primary/80 px-4 py-2 text-right backdrop-blur-sm">
        <p className="text-sm font-semibold text-white">David Ausdemore</p>
        <p className="text-xs text-white/70">Founder, Technical Director, and Field Engineer</p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        aria-hidden="true"
      >
        <div className="animate-bounce">
          <ChevronDown className="size-6 text-primary-foreground/30" />
        </div>
      </motion.div>
    </section>
  );
}
