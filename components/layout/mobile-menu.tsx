"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteContent } from "@/data/siteContent";

const { services, global } = siteContent;
const mobileServices = services.catalog.slice(0, 6);

const navItems = [
  { label: "Services", href: "/services", hasSubmenu: true },
  { label: "About", href: "/about/company-overview" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-quote" },
];

const overlay = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const panel = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { type: "spring" as const, damping: 28, stiffness: 300 } },
  exit: { x: "100%", transition: { duration: 0.25 } },
};

export function MobileMenu({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const [servicesExpanded, setServicesExpanded] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  // Focus the close button when menu opens; trap focus inside panel
  useEffect(() => {
    if (!open) return;
    // Move focus to the close button on open
    closeButtonRef.current?.focus();

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      // Focus trap
      if (e.key === "Tab" && panelRef.current) {
        const focusable = panelRef.current.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            variants={overlay}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
            aria-hidden
          />

          {/* Slide-in panel */}
          <motion.div
            ref={panelRef}
            variants={panel}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-y-0 right-0 z-50 flex w-full max-w-sm flex-col bg-background shadow-2xl lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation"
          >
            {/* Top bar */}
            <div className="flex h-18 items-center justify-between border-b border-border px-5">
              <Image
                src="/images/Health-Systems-Science-Primary-Logo-Retina.png"
                alt="Health Systems Sciences"
                width={160}
                height={40}
                className="h-8 w-auto"
              />
              <button
                type="button"
                ref={closeButtonRef}
                onClick={onClose}
                className="inline-flex size-10 items-center justify-center rounded-md text-foreground/70 transition-colors hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="Close menu"
              >
                <svg
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Nav links */}
            <nav aria-label="Mobile menu" className="flex-1 overflow-y-auto px-5 py-6">
              <ul className="flex flex-col gap-1">
                {navItems.map((item) =>
                  item.hasSubmenu ? (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() => setServicesExpanded((v) => !v)}
                        className="flex w-full items-center justify-between rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
                        aria-expanded={servicesExpanded}
                      >
                        {item.label}
                        <ChevronDown
                          className={cn(
                            "size-4 text-muted-foreground transition-transform duration-200",
                            servicesExpanded && "rotate-180"
                          )}
                        />
                      </button>

                      <AnimatePresence initial={false}>
                        {servicesExpanded && (
                          <motion.ul
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            {mobileServices.map((service) => (
                              <li key={service.title}>
                                <Link
                                  href={service.href}
                                  onClick={onClose}
                                  className="block rounded-lg py-2.5 pl-6 pr-3 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                                >
                                  {service.title}
                                </Link>
                              </li>
                            ))}
                            <li>
                              <Link
                                href="/services"
                                onClick={onClose}
                                className="block rounded-lg py-2.5 pl-6 pr-3 text-sm font-semibold text-primary"
                              >
                                View All Services →
                              </Link>
                            </li>
                          </motion.ul>
                        )}
                      </AnimatePresence>
                    </li>
                  ) : (
                    <li key={item.label}>
                      <Link
                        href={item.href}
                        onClick={onClose}
                        className="block rounded-lg px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
                      >
                        {item.label}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </nav>

            {/* Bottom CTA */}
            <div className="border-t border-border px-5 py-5 space-y-3">
              <a
                href={`tel:${global.phone.replace(/[^\d+]/g, "")}`}
                className="block text-center text-sm font-medium text-muted-foreground hover:text-foreground"
              >
                Call {global.phone}
              </a>
              <Link
                href="/contact-quote"
                onClick={onClose}
                className="flex h-11 w-full items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
