"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { MapPin, Award, Users, Shield, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/layout";
import { ModernButton } from "@/components/ui/modern-button";
import { siteContent } from "@/data/siteContent";

const { about } = siteContent;

const stats = [
  { icon: MapPin, value: "10+", numericValue: 10, suffix: "+", label: "Service Hubs", description: "Nationwide coverage" },
  { icon: Shield, value: "11", numericValue: 11, suffix: "", label: "Specialized Services", description: "Comprehensive solutions" },
  { icon: Award, value: "6+", numericValue: 6, suffix: "+", label: "Industry Certifications", description: "Recognized excellence" },
  { icon: Users, value: "SDVOSB", numericValue: 0, suffix: "", label: "Veteran Owned", description: "Service-disabled veteran", isText: true },
];

const highlights = [
  "USP 797/800/825 Compliant",
  "ASHRAE & ISO Standards",
  "Certified Technicians",
  "Real-Time Asset Tracking",
];

function AnimatedCounter({ value, suffix, isText, textValue }: { value: number; suffix: string; isText?: boolean; textValue?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 30, stiffness: 100 });
  const [display, setDisplay] = useState("0");

  useEffect(() => {
    if (isInView && !isText) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue, isText]);

  useEffect(() => {
    if (isText) return;
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplay(Math.round(latest).toString());
    });
    return unsubscribe;
  }, [springValue, isText]);

  if (isText) {
    return <span ref={ref}>{textValue}</span>;
  }

  return (
    <span ref={ref}>
      {display}{suffix}
    </span>
  );
}

export function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section ref={sectionRef} aria-labelledby="about-heading" className="relative overflow-hidden py-16 md:py-24">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-gray-50 to-white" aria-hidden="true" />

      <Container className="relative">
        {/* Top: centered header */}
        <motion.div
          initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
          animate={isInView ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">About HSS</span>
          <h2
            className="mt-3 font-bold leading-tight tracking-tight text-foreground"
            id="about-heading"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}
          >
            Expertise That Instills{" "}
            <span className="text-primary">Confidence</span>
          </h2>
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: 48 } : { width: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="mx-auto mt-5 h-1 rounded-full bg-gold"
            aria-hidden="true"
          />
        </motion.div>

        {/* Two-column: text + stats */}
        <div className="mt-14 grid items-start gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Left: paragraphs — slide in from left */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(6px)" }}
            animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <p className="text-base leading-relaxed text-muted-foreground">
              {about.section.paragraphs[0]}
            </p>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              {about.section.paragraphs[2]}
            </p>

            {/* Highlight chips */}
            <div className="mt-8 flex flex-wrap gap-2.5">
              {highlights.map((item, i) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, scale: 0.85 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                  className="inline-flex items-center gap-1.5 rounded-full border border-primary/12 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"
                >
                  <CheckCircle2 className="size-3 text-gold" />
                  {item}
                </motion.span>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-10"
            >
              <ModernButton variant="outline" size="lg" href="/about/company-overview" arrow>
                Learn More About HSS
              </ModernButton>
            </motion.div>
          </motion.div>

          {/* Right: stats grid — slide in from right */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 40, filter: "blur(6px)" }}
                animate={isInView ? { opacity: 1, x: 0, filter: "blur(0px)" } : {}}
                transition={{ duration: 0.6, delay: 0.25 + i * 0.12, ease: [0.25, 0.4, 0.25, 1] }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="group relative overflow-hidden rounded-xl border border-border bg-white p-6 text-center transition-shadow duration-300 hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
              >
                <div className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-gold/60 to-primary/40 transition-transform duration-500 group-hover:scale-x-100" aria-hidden="true" />
                <div className="mx-auto mb-3 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <stat.icon className="size-5" aria-hidden="true" />
                </div>
                <div className="text-2xl font-bold text-foreground">
                  <AnimatedCounter
                    value={stat.numericValue}
                    suffix={stat.suffix}
                    isText={stat.isText}
                    textValue={stat.value}
                  />
                </div>
                <div className="mt-1 text-sm font-semibold text-foreground">{stat.label}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{stat.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
