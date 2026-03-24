"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, ArrowRight, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/layout";
import { siteContent } from "@/data/siteContent";

const { global: g } = siteContent;

const contactCardVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.25, 0.4, 0.25, 1] as const },
  }),
};

export function QuoteSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    serviceDetails: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");
    setTimeout(() => setStatus("success"), 1000);
  }

  return (
    <section className="relative overflow-hidden bg-primary py-12 md:py-16">
      {/* Animated background decoration */}
      <motion.div
        className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-white/5 blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="pointer-events-none absolute -bottom-40 -left-40 size-[400px] rounded-full bg-white/5 blur-3xl"
        animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">

          {/* Left: CTA info */}
          <motion.div
            initial={{ opacity: 0, x: -40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.25, 0.4, 0.25, 1] }}
            className="text-white"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Get in Touch
            </span>
            <h2
              className="mt-4 font-bold leading-tight text-white"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Ready to Get Started?
            </h2>
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: 48 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mt-4 h-1 rounded-full bg-gold"
              aria-hidden="true"
            />
            <p className="mt-6 text-base leading-relaxed text-white/75">
              Whether you need cleanroom certification, air quality testing, or comprehensive EHS solutions — our team of certified professionals is ready to deliver measurable results.
            </p>

            <div className="mt-6 space-y-3">
              {[
                {
                  href: `tel:${g.phone.replace(/[^\d]/g, "")}`,
                  icon: Phone,
                  label: "Call us directly",
                  value: g.phone,
                  isLink: true,
                },
                {
                  href: `mailto:${g.email}`,
                  icon: Mail,
                  label: "Email us",
                  value: g.email,
                  isLink: true,
                },
                {
                  icon: MapPin,
                  label: "Corporate Office",
                  value: g.corporateOffice.street,
                  extra: `${g.corporateOffice.city}, ${g.corporateOffice.state} ${g.corporateOffice.zip}, USA`,
                },
                {
                  icon: Clock,
                  label: "Business Hours",
                  value: "Monday – Friday, 8:00 AM – 5:00 PM MST",
                },
              ].map((card, i) => {
                const inner = (
                  <>
                    <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold/20 text-gold">
                      <card.icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs text-white/50">{card.label}</p>
                      <p className="font-semibold text-white">{card.value}</p>
                      {card.extra && <p className="text-sm text-white/70">{card.extra}</p>}
                    </div>
                    {card.isLink && (
                      <ArrowRight className="ml-auto size-4 text-white/30 transition-transform group-hover:translate-x-1 group-hover:text-gold" />
                    )}
                  </>
                );

                return (
                  <motion.div
                    key={card.label}
                    custom={i}
                    variants={contactCardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-40px" }}
                  >
                    {card.isLink ? (
                      <a
                        href={card.href}
                        className="group flex items-center gap-4 rounded-xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-white/15"
                      >
                        {inner}
                      </a>
                    ) : (
                      <div className="flex items-start gap-4 rounded-xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm">
                        {inner}
                      </div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 40, filter: "blur(8px)" }}
            whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.25, 0.4, 0.25, 1] }}
            className="rounded-2xl bg-white p-6 shadow-2xl"
          >
            <h3 className="font-bold text-foreground" style={{ fontSize: "1.25rem" }}>
              Get Started with a Quote
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Fill out the form and a specialist will get back to you promptly with details tailored to your facility&apos;s needs.
            </p>

            {status === "success" ? (
              <div className="mt-8 rounded-xl bg-green-50 p-8 text-center">
                <p className="font-semibold text-green-800">Thank you!</p>
                <p className="mt-2 text-sm text-green-700">
                  Your request has been submitted. A specialist will be in touch shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 space-y-3">
                <div>
                  <label htmlFor="quote-name" className="mb-1.5 block text-sm font-medium text-foreground">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="quote-name" name="name" type="text" required placeholder="Full Name"
                    value={formData.name} onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="quote-email" className="mb-1.5 block text-sm font-medium text-foreground">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="quote-email" name="email" type="email" required placeholder="example@example.com"
                    value={formData.email} onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="quote-phone" className="mb-1.5 block text-sm font-medium text-foreground">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="quote-phone" name="phone" type="tel" required placeholder="+1 123-456-7890"
                      value={formData.phone} onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                  <div>
                    <label htmlFor="quote-state" className="mb-1.5 block text-sm font-medium text-foreground">
                      State <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="quote-state" name="state" type="text" required placeholder="Enter your state"
                      value={formData.state} onChange={handleChange}
                      className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="quote-city" className="mb-1.5 block text-sm font-medium text-foreground">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="quote-city" name="city" type="text" required placeholder="Enter your city"
                    value={formData.city} onChange={handleChange}
                    className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <div>
                  <label htmlFor="quote-service" className="mb-1.5 block text-sm font-medium text-foreground">
                    Service Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="quote-service" name="serviceDetails" required rows={4}
                    placeholder="Description of the service required"
                    value={formData.serviceDetails} onChange={handleChange}
                    className="w-full resize-none rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="group relative w-full overflow-hidden rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg disabled:opacity-60"
                >
                  <span className="relative z-10">
                    {status === "submitting" ? "Submitting…" : "Request a Quote"}
                  </span>
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-700 group-hover:translate-x-full" aria-hidden="true" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}


