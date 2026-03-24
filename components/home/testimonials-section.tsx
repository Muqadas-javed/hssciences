"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/layout";
import { SectionHeader } from "@/components/ui/section-header";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { siteContent } from "@/data/siteContent";

const { home } = siteContent;
const certifications = home.certifications.items;
const clients = home.clients.items;
const totalSolutions = home.totalSolutions;

export function TestimonialsSection() {
  const solutionsRef = useRef<HTMLDivElement>(null);
  const expertiseRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: solutionsProgress } = useScroll({
    target: solutionsRef,
    offset: ["start end", "center center"],
  });
  const { scrollYProgress: expertiseProgress } = useScroll({
    target: expertiseRef,
    offset: ["start end", "center center"],
  });

  const solutionsX = useTransform(solutionsProgress, [0, 1], [80, 0]);
  const solutionsOpacity = useTransform(solutionsProgress, [0, 0.5], [0, 1]);
  const expertiseX = useTransform(expertiseProgress, [0, 1], [-80, 0]);
  const expertiseOpacity = useTransform(expertiseProgress, [0, 0.5], [0, 1]);

  return (
    <>
    <section aria-labelledby="trust-heading" className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-36">
      {/* Background pattern */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,oklch(0.35_0.08_255/0.3),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <Container className="relative">
        <SectionHeader
          label="Trusted Nationwide"
          title="Trusted by Leading Organizations"
          subtitle="From federal agencies to healthcare systems and universities, our certified professionals deliver results that organizations rely on."
          id="trust-heading"
          inverted
          animated={false}
        />

        {/* Certifications */}
      </Container>

      <div className="relative mt-16 bg-white py-10 px-6">
        <p className="mb-8 text-center text-sm font-semibold uppercase tracking-[0.2em] text-primary">
          Certifications & Accreditations
        </p>
        <div className="flex items-center justify-center gap-10 md:gap-16 lg:gap-20">
          {certifications.map((cert) => (
            <div key={cert.name}>
              <TestimonialCard
                name={cert.name}
                alt={cert.alt}
                src={cert.src}
                variant="badge"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Total Solutions Provider */}
      <div ref={solutionsRef} className="p-6 sm:p-10 lg:p-20">
        <motion.div
          style={{ x: solutionsX, opacity: solutionsOpacity }}
          className="relative overflow-hidden rounded-[20px] bg-primary-foreground/10"
        >
          <div className="grid md:grid-cols-2">
            {/* Left – Content */}
            <div className="flex flex-col justify-center px-8 py-14 sm:px-12 md:py-20 lg:px-16">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
              >
                {totalSolutions.heading}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="mt-6 text-base leading-relaxed text-white/80 md:text-lg"
              >
                {totalSolutions.paragraph}
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="mt-10"
              >
                <Link
                  href={totalSolutions.cta.href}
                  className="group inline-flex items-center gap-2 rounded-full bg-white/90 px-8 py-3.5 text-base font-medium text-primary transition-all hover:bg-white hover:shadow-lg hover:gap-3"
                >
                  Discover Solutions
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&raquo;</span>
                </Link>
              </motion.div>
            </div>
            {/* Right – Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative min-h-[300px] p-4 md:min-h-0"
            >
              <img
                src="/images/Industrial-Hygiene.webp"
                alt="Industrial hygiene professional in a cleanroom facility"
                className="h-full w-full rounded-[30px] object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      <Container className="relative">
      </Container>

    </section>

    {/* Clients — full white background */}
    <section className="bg-white py-16 md:py-20">
      <Container>
        <p className="mb-10 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
          Our Clients
        </p>
        <div className="grid grid-rows-2 grid-flow-col gap-5 auto-cols-fr">
          {clients.map((client, i) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.45, delay: i * 0.06 }}
              whileHover={{ scale: 1.07, boxShadow: "0 8px 24px rgba(0,0,0,0.10)" }}
              className="flex items-center justify-center rounded-xl border border-gray-100 bg-white p-3 shadow-sm transition-shadow"
            >
              <TestimonialCard
                name={client.name}
                alt={client.alt}
                src={client.src}
                variant="badge"
              />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>

    {/* Expertise Section */}
    <div ref={expertiseRef} className="bg-primary p-6 sm:p-10 lg:p-20">
      <motion.div
        style={{ x: expertiseX, opacity: expertiseOpacity }}
        className="relative overflow-hidden rounded-[20px] bg-primary-foreground/10"
      >
        <div className="grid md:grid-cols-2">
          {/* Left – Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative min-h-[300px] p-4 md:min-h-0"
          >
            <img
              src="/images/home-expertise.png"
              alt="HSS team expertise in testing and compliance"
              className="h-full w-full rounded-[30px] object-cover"
            />
          </motion.div>
          {/* Right – Content */}
          <div className="flex flex-col justify-center px-8 py-14 sm:px-12 md:py-20 lg:px-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl"
            >
              Expertise That Instills Confidence
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="mt-6 text-base leading-relaxed text-white/80 md:text-lg"
            >
              The Health Systems Sciences team is highly skilled, multi-disciplinary and has years of real world experience. HSS technicians can help you provide a clean and safe environment for workers, products and patients. In addition, HSS has the knowledge to offer technical insight and project management solutions enabling business efficiency and compliance.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10"
            >
              <Link
                href="/about/company-overview"
                className="group inline-flex items-center gap-2 rounded-full bg-white/90 px-8 py-3.5 text-base font-medium text-primary transition-all hover:bg-white hover:shadow-lg hover:gap-3"
              >
                Learn More about the HSS Advantage
                <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">&raquo;</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
    </>
  );
}