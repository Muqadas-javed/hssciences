"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment, useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { Container } from "./container";
import { siteContent } from "@/data/siteContent";

const { navigation, services, global } = siteContent;

const megaMenuServices = services.catalog;
const leftColumn = megaMenuServices.slice(0, 6);
const rightColumn = megaMenuServices.slice(6);

interface SubItem {
  label: string;
  href: string;
}

interface NavItem {
  label: string;
  href: string;
  hasMegaMenu?: boolean;
  hasDropdown?: boolean;
  subItems?: SubItem[];
}

const navItems: NavItem[] = [
  { label: "Services", href: "/services", hasMegaMenu: true },
  {
    label: "About us",
    href: "/about/company-overview",
    hasDropdown: true,
    subItems: [
      { label: "Company Overview", href: "/about/company-overview" },
      { label: "HSS Team", href: "/about/hss-team" },
    ],
  },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-quote" },
];

export function Navbar({
  onMobileToggle,
  mobileOpen,
}: {
  onMobileToggle: () => void;
  mobileOpen: boolean;
}) {
  const [megaOpen, setMegaOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const megaRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const aboutTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openMega = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setMegaOpen(true);
  }, []);

  const closeMega = useCallback(() => {
    closeTimer.current = setTimeout(() => setMegaOpen(false), 150);
  }, []);

  const openAbout = useCallback(() => {
    if (aboutTimer.current) clearTimeout(aboutTimer.current);
    setAboutOpen(true);
  }, []);

  const closeAbout = useCallback(() => {
    aboutTimer.current = setTimeout(() => setAboutOpen(false), 150);
  }, []);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMegaOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <nav aria-label="Main navigation" className="relative">
      <Container className="flex h-16 items-center justify-between lg:h-[72px]">
        {/* Logo — academic crest style */}
        <Link href="/" className="flex shrink-0 items-center" aria-label="Health Systems Sciences — Home">
          <Image
            src="/images/Health-Systems-Science-Primary-Logo-Retina.png"
            alt="Health Systems Sciences"
            width={220}
            height={50}
            className="h-10 w-auto lg:h-12"
            priority
          />
        </Link>

        {/* Desktop nav links */}
        <div className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Fragment key={item.label}>
            {item.hasMegaMenu ? (
              <div
                onMouseEnter={openMega}
                onMouseLeave={closeMega}
              >
                <button
                  ref={triggerRef}
                  type="button"
                  onClick={() => setMegaOpen((v) => !v)}
                  aria-expanded={megaOpen}
                  aria-haspopup="true"
                  aria-controls="mega-menu-services"
                  className={cn(
                    "inline-flex items-center gap-1 rounded-md px-3 py-2 text-[14px] font-medium transition-colors",
                    "text-foreground/75 hover:text-foreground hover:bg-accent",
                    megaOpen && "text-primary bg-accent"
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "size-3.5 transition-transform duration-200",
                      megaOpen && "rotate-180"
                    )}
                  />
                </button>
              </div>
            ) : item.hasDropdown ? (
              <div
                className="relative"
                onMouseEnter={openAbout}
                onMouseLeave={closeAbout}
              >
                <button
                  type="button"
                  onClick={() => setAboutOpen((v) => !v)}
                  aria-expanded={aboutOpen}
                  aria-haspopup="true"
                  className={cn(
                    "inline-flex items-center gap-1 rounded-md px-3 py-2 text-[14px] font-medium transition-colors",
                    "text-foreground/75 hover:text-foreground hover:bg-accent",
                    aboutOpen && "text-primary bg-accent"
                  )}
                >
                  {item.label}
                  <ChevronDown
                    className={cn(
                      "size-3.5 transition-transform duration-200",
                      aboutOpen && "rotate-180"
                    )}
                  />
                </button>
                <AnimatePresence>
                  {aboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.15, ease: "easeOut" }}
                      onMouseEnter={openAbout}
                      onMouseLeave={closeAbout}
                      className="absolute left-0 top-full z-50 mt-1 min-w-[180px] overflow-hidden rounded-xl border border-border bg-background py-1.5 shadow-lg shadow-primary/5"
                    >
                      {item.subItems!.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setAboutOpen(false)}
                          className="block whitespace-nowrap px-4 py-2.5 text-sm font-medium text-foreground/75 transition-colors hover:bg-accent hover:text-foreground"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                href={item.href}
                className="rounded-md px-3 py-2 text-[14px] font-medium text-foreground/75 transition-colors hover:bg-accent hover:text-foreground"
              >
                {item.label}
              </Link>
            )}
            </Fragment>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={`tel:${global.phone.replace(/[^\d+]/g, "")}`}
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {global.phone}
          </a>
          <Link
            href="/contact-quote"
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Get a Quote
            <ArrowRight className="size-3.5" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={onMobileToggle}
          className="inline-flex size-10 items-center justify-center rounded-md text-foreground/70 transition-colors hover:bg-accent hover:text-foreground lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <div className="flex w-5 flex-col items-center gap-[5px]">
            <span
              className={cn(
                "block h-[2px] w-full rounded-full bg-current transition-all duration-300",
                mobileOpen && "translate-y-[7px] rotate-45"
              )}
            />
            <span
              className={cn(
                "block h-[2px] w-full rounded-full bg-current transition-all duration-300",
                mobileOpen && "scale-x-0 opacity-0"
              )}
            />
            <span
              className={cn(
                "block h-[2px] w-full rounded-full bg-current transition-all duration-300",
                mobileOpen && "-translate-y-[7px] -rotate-45"
              )}
            />
          </div>
        </button>
      </Container>

      {/* ── Mega Menu ─────────────────────────── */}
      <AnimatePresence>
        {megaOpen && (
          <motion.div
            ref={megaRef}
            id="mega-menu-services"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            onMouseEnter={openMega}
            onMouseLeave={closeMega}
            className="absolute inset-x-0 top-full z-50 border-b border-border/60 bg-background shadow-xl shadow-primary/5"
            role="region"
            aria-label="Services menu"
          >
            <Container className="py-10">
              <div className="grid gap-10 lg:grid-cols-12">
                {/* Service links */}
                <div className="lg:col-span-8">
                  <p className="mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
                    Our Services
                  </p>
                  <div className="grid gap-x-8 gap-y-1 sm:grid-cols-2">
                    {[leftColumn, rightColumn].map((col, ci) => (
                      <div key={ci} className="flex flex-col gap-0.5">
                        {col.map((service) => (
                          <Link
                            key={service.title}
                            href={service.href}
                            onClick={() => setMegaOpen(false)}
                            className="group rounded-lg px-3 py-3 transition-colors hover:bg-accent"
                          >
                            <p className="text-sm font-semibold text-foreground group-hover:text-primary">
                              {service.title}
                            </p>
                            <p className="mt-0.5 line-clamp-1 text-xs text-muted-foreground">
                              {service.description.slice(0, 90)}…
                            </p>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                  <div className="mt-5 border-t border-border pt-4">
                    <Link
                      href="/services"
                      onClick={() => setMegaOpen(false)}
                      className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary hover:underline"
                    >
                      View All Services
                      <ArrowRight className="size-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>

                {/* Featured card */}
                <div className="lg:col-span-4">
                  <div className="rounded-xl border border-gold/20 bg-gradient-to-br from-gold/5 to-transparent p-6">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
                      Featured
                    </p>
                    <h4 className="mt-3 text-base font-bold text-foreground">
                      Pharmacy Certification Services
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {siteContent.home.pharmacyCertification.paragraph.slice(0, 140)}…
                    </p>
                    <Link
                      href="/pharmacy-certification-services/clean-room-cabinet"
                      onClick={() => setMegaOpen(false)}
                      className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary hover:underline"
                    >
                      Learn More
                      <ArrowRight className="size-3" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
