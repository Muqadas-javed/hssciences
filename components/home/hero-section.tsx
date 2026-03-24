"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Shield } from "lucide-react";
import { Container } from "@/components/layout";
import { ModernButton } from "@/components/ui/modern-button";
import { siteContent } from "@/data/siteContent";

const { home } = siteContent;

// Floating particle positions (static so no random on each render)
const particles = [
  { x: "10%", y: "20%", size: 4, delay: 0 },
  { x: "25%", y: "70%", size: 3, delay: 1.2 },
  { x: "65%", y: "15%", size: 5, delay: 0.5 },
  { x: "80%", y: "60%", size: 3, delay: 2 },
  { x: "45%", y: "85%", size: 4, delay: 1.5 },
  { x: "90%", y: "30%", size: 3, delay: 0.8 },
];

export function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax: image zooms slightly & shifts as you scroll
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.5], [0.55, 0.75]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={sectionRef}
      aria-label="Hero"
      className="relative flex min-h-[92vh] items-center overflow-hidden"
    >
      {/* Parallax background image */}
      <motion.div
        className="absolute inset-0"
        style={{ scale: imageScale, y: imageY }}
      >
        <Image
          src="/images/hero.jpg"
          alt="HSS technician performing certified cleanroom testing and environmental compliance services"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </motion.div>

      {/* Dark overlay with scroll-based darkening */}
      <motion.div
        className="pointer-events-none absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-transparent" aria-hidden="true" />

      {/* Floating particles */}
      <div className="pointer-events-none absolute inset-0 z-[5]" aria-hidden="true">
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gold/30"
            style={{ left: p.x, top: p.y, width: p.size, height: p.size }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Animated gradient line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 z-10 h-[2px]"
        style={{
          background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
        }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.5, delay: 1.8, ease: "easeOut" }}
        aria-hidden="true"
      />

      <motion.div style={{ y: contentY }} className="relative z-10 w-full">
        <Container className="py-24 lg:py-32">
          <div className="max-w-5xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-medium text-gold backdrop-blur-sm">
                <Shield className="size-3.5" aria-hidden="true" />
                SDVOSB Certified &bull; Veteran Owned
              </span>
            </motion.div>

            {/* Heading — letter-by-letter animation */}
            {(() => {
              // Two explicit lines
              const lines: { text: string; highlight: boolean }[][] = [
                [
                  { text: "Certified Testing. ", highlight: false },
                  { text: "Measurable", highlight: true },
                ],
                [
                  { text: "Performance.", highlight: true },
                  { text: " Trusted Partnership.", highlight: false },
                ],
              ];

              let charIndex = 0;

              return (
                <h1
                  className="text-center font-bold leading-[1.15] tracking-tight text-primary-foreground lg:text-left"
                  style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}
                >
                  {lines.map((line, lineIdx) => (
                    <span key={lineIdx} className="block">
                      {line.map((seg) =>
                        [...seg.text].map((ch) => {
                          const i = charIndex++;
                          return (
                            <motion.span
                              key={i}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{
                                duration: 0.03,
                                delay: 0.15 + i * 0.025,
                                ease: "easeOut",
                              }}
                              className={
                                seg.highlight
                                  ? "bg-gradient-to-r from-gold to-gold/70 bg-clip-text text-transparent"
                                  : undefined
                              }
                              style={{ display: "inline-block", whiteSpace: "pre" }}
                            >
                              {ch}
                            </motion.span>
                          );
                        })
                      )}
                    </span>
                  ))}
                </h1>
              );
            })()}

            {/* Subheading with blur-in */}
            <motion.p
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, delay: 1.6 }}
              className="mx-auto mt-8 max-w-2xl text-center text-lg leading-relaxed text-primary-foreground/75 md:text-xl lg:mx-0 lg:text-left"
            >
              {home.hero.subheading}
            </motion.p>

            {/* CTAs with stagger */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.9 }}
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
      </motion.div>

      {/* Founder credit */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 2.2 }}
        className="absolute bottom-4 right-6 z-10 rounded bg-primary/80 px-4 py-2 text-right backdrop-blur-sm"
      >
        <p className="text-sm font-semibold text-white">David Ausdemore</p>
        <p className="text-xs text-white/70">Founder, Technical Director, and Field Engineer</p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
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
