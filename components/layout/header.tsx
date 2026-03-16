"use client";

import { useState, useEffect } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { Navbar } from "./navbar";
import { MobileMenu } from "./mobile-menu";
import { siteContent } from "@/data/siteContent";

const { global } = siteContent;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const prev = scrollY.getPrevious() ?? 0;
    setScrolled(latest > 16);
    if (latest > 250 && latest > prev) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  const isHidden = hidden && !mobileOpen;

  return (
    <>
      <motion.header
        animate={{ y: isHidden ? "-100%" : "0%" }}
        transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
        className={cn(
          "sticky top-0 z-40 w-full transition-[background-color,box-shadow,border-color,backdrop-filter] duration-300",
          scrolled
            ? "border-b border-border/50 bg-background/90 shadow-md shadow-primary/5 backdrop-blur-xl"
            : "bg-background"
        )}
      >
        {/* Top utility bar — academic style */}
        <div className="hidden border-b border-primary-foreground/10 bg-primary lg:block">
          <Container className="flex items-center justify-between py-2 text-[13px]">
            <p className="font-medium tracking-[0.08em] text-primary-foreground/80 uppercase text-[11px]">
              {global.tagline}
            </p>
            <div className="flex items-center gap-6 text-primary-foreground/90">
              <a
                href={`mailto:${global.email}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-gold"
              >
                <Mail className="size-3.5" aria-hidden="true" />
                {global.email}
              </a>
              <span className="h-3.5 w-px bg-primary-foreground/20" aria-hidden="true" />
              <a
                href={`tel:${global.phone.replace(/[^\d+]/g, "")}`}
                className="inline-flex items-center gap-1.5 font-semibold transition-colors hover:text-gold"
              >
                <Phone className="size-3.5" aria-hidden="true" />
                {global.phone}
              </a>
            </div>
          </Container>
        </div>

        <Navbar
          onMobileToggle={() => setMobileOpen((v) => !v)}
          mobileOpen={mobileOpen}
        />
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
