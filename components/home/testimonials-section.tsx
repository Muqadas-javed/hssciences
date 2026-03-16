"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/layout";
import { SectionHeader } from "@/components/ui/section-header";
import { TestimonialCard } from "@/components/ui/testimonial-card";
import { siteContent } from "@/data/siteContent";

const { home } = siteContent;
const certifications = home.certifications.items;
const clients = home.clients.items;
const totalSolutions = home.totalSolutions;

export function TestimonialsSection() {
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
      <div className="p-6 sm:p-10 lg:p-20">
        <div className="relative overflow-hidden rounded-[20px] bg-primary-foreground/10">
          <div className="grid md:grid-cols-2">
            {/* Left – Content */}
            <div className="flex flex-col justify-center px-8 py-14 sm:px-12 md:py-20 lg:px-16">
              <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
                {totalSolutions.heading}
              </h2>
              <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
                {totalSolutions.paragraph}
              </p>
              <div className="mt-10">
                <Link
                  href={totalSolutions.cta.href}
                  className="inline-flex items-center gap-2 rounded-full bg-white/90 px-8 py-3.5 text-base font-medium text-primary transition-all hover:bg-white hover:shadow-lg"
                >
                  Discover Solutions
                  <span aria-hidden="true">&raquo;</span>
                </Link>
              </div>
            </div>
            {/* Right – Image */}
            <div className="relative min-h-[300px] p-4 md:min-h-0">
              <img
                src="/images/Industrial-Hygiene.webp"
                alt="Industrial hygiene professional in a cleanroom facility"
                className="h-full w-full rounded-[30px] object-cover"
              />
            </div>
          </div>
        </div>
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
    <div className="bg-primary p-6 sm:p-10 lg:p-20">
      <div className="relative overflow-hidden rounded-[20px] bg-primary-foreground/10">
        <div className="grid md:grid-cols-2">
          {/* Left – Image */}
          <div className="relative min-h-[300px] p-4 md:min-h-0">
            <img
              src="/images/home-expertise.png"
              alt="HSS team expertise in testing and compliance"
              className="h-full w-full rounded-[30px] object-cover"
            />
          </div>
          {/* Right – Content */}
          <div className="flex flex-col justify-center px-8 py-14 sm:px-12 md:py-20 lg:px-16">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Expertise That Instills Confidence
            </h2>
            <p className="mt-6 text-base leading-relaxed text-white/80 md:text-lg">
              The Health Systems Sciences team is highly skilled, multi-disciplinary and has years of real world experience. HSS technicians can help you provide a clean and safe environment for workers, products and patients. In addition, HSS has the knowledge to offer technical insight and project management solutions enabling business efficiency and compliance.
            </p>
            <div className="mt-10">
              <Link
                href="/about/company-overview"
                className="inline-flex items-center gap-2 rounded-full bg-white/90 px-8 py-3.5 text-base font-medium text-primary transition-all hover:bg-white hover:shadow-lg"
              >
                Learn More about the HSS Advantage
                <span aria-hidden="true">&raquo;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}