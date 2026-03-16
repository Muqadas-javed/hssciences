"use client";

import { useState } from "react";
import { Phone, Mail, ArrowRight, MapPin, Clock } from "lucide-react";
import { Container } from "@/components/layout";
import { siteContent } from "@/data/siteContent";

const { global: g } = siteContent;

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
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full bg-white/5 blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 size-[400px] rounded-full bg-white/5 blur-3xl" aria-hidden="true" />

      <Container className="relative">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">

          {/* Left: CTA info */}
          <div className="text-white">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
              Get in Touch
            </span>
            <h2
              className="mt-4 font-bold leading-tight text-white"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)" }}
            >
              Ready to Get Started?
            </h2>
            <div className="mt-4 h-1 w-12 rounded-full bg-gold" aria-hidden="true" />
            <p className="mt-6 text-base leading-relaxed text-white/75">
              Whether you need cleanroom certification, air quality testing, or comprehensive EHS solutions — our team of certified professionals is ready to deliver measurable results.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={`tel:${g.phone.replace(/[^\d]/g, "")}`}
                className="group flex items-center gap-4 rounded-xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-white/15"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold/20 text-gold">
                  <Phone className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-white/50">Call us directly</p>
                  <p className="font-semibold text-white">{g.phone}</p>
                </div>
                <ArrowRight className="ml-auto size-4 text-white/30 transition-transform group-hover:translate-x-1 group-hover:text-gold" />
              </a>

              <a
                href={`mailto:${g.email}`}
                className="group flex items-center gap-4 rounded-xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm transition-all hover:border-gold/40 hover:bg-white/15"
              >
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold/20 text-gold">
                  <Mail className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-white/50">Email us</p>
                  <p className="font-semibold text-white">{g.email}</p>
                </div>
                <ArrowRight className="ml-auto size-4 text-white/30 transition-transform group-hover:translate-x-1 group-hover:text-gold" />
              </a>

              <div className="flex items-start gap-4 rounded-xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold/20 text-gold">
                  <MapPin className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-white/50">Corporate Office</p>
                  <p className="font-semibold text-white">{g.corporateOffice.street}</p>
                  <p className="text-sm text-white/70">{g.corporateOffice.city}, {g.corporateOffice.state} {g.corporateOffice.zip}, USA</p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-white/15 bg-white/10 px-5 py-4 backdrop-blur-sm">
                <div className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-gold/20 text-gold">
                  <Clock className="size-5" />
                </div>
                <div>
                  <p className="text-xs text-white/50">Business Hours</p>
                  <p className="font-semibold text-white">Monday – Friday, 8:00 AM – 5:00 PM MST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <div className="rounded-2xl bg-white p-6 shadow-2xl">
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
                  className="w-full rounded-full bg-primary px-8 py-4 text-sm font-semibold text-white transition-all hover:bg-primary/90 hover:shadow-lg disabled:opacity-60"
                >
                  {status === "submitting" ? "Submitting…" : "Request a Quote"}
                </button>
              </form>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}


