import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Linkedin, ArrowRight } from "lucide-react";
import { Container } from "./container";
import { siteContent } from "@/data/siteContent";

const { global, navigation, services } = siteContent;

const serviceLinks = services.catalog.slice(0, 6).map((s) => ({
  label: s.title,
  href: s.href,
}));

const companyLinks = [
  { label: "About Us", href: "/about/company-overview" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
  { label: "Contact / Quote", href: "/contact-quote" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Sitemap", href: "/sitemap.xml" },
];

export function Footer() {
  return (
    <footer role="contentinfo" className="bg-primary text-primary-foreground">
      {/* Gold accent bar */}
      <div className="h-1 bg-gradient-to-r from-gold/60 via-gold to-gold/60" aria-hidden="true" />

      {/* Main Footer Grid */}
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-12">
          {/* Brand column */}
          <div className="lg:col-span-4 space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src="/images/Health-Systems-Science-Primary-Logo-Retina.png"
                alt="Health Systems Sciences"
                width={200}
                height={48}
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-primary-foreground/65">
              Delivering certified testing, validation, and compliance solutions
              for cleanrooms, healthcare, manufacturing, laboratories and other
              critical environments.
            </p>

            {/* Contact details */}
            <ul className="space-y-2.5 text-sm text-primary-foreground/70">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold/70" aria-hidden="true" />
                <span>
                  {global.corporateOffice.street}
                  <br />
                  {global.corporateOffice.city}, {global.corporateOffice.state}{" "}
                  {global.corporateOffice.zip}
                </span>
              </li>
              <li>
                <a
                  href={`tel:${global.phone.replace(/[^\d+]/g, "")}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-gold"
                >
                  <Phone className="size-4 shrink-0 text-gold/70" aria-hidden="true" />
                  {global.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${global.email}`}
                  className="inline-flex items-center gap-2.5 transition-colors hover:text-gold"
                >
                  <Mail className="size-4 shrink-0 text-gold/70" aria-hidden="true" />
                  {global.email}
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="flex items-center gap-3 pt-1">
              <a
                href={global.linkedIn}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="inline-flex size-9 items-center justify-center rounded-lg border border-primary-foreground/15 text-primary-foreground/60 transition-colors hover:bg-primary-foreground/10 hover:text-gold"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4" aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Services column */}
          <nav aria-label="Services" className="lg:col-span-3">
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
              Services
            </h3>
            <ul className="space-y-2.5">
              {serviceLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/65 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/services"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-gold hover:underline"
                >
                  All Services <ArrowRight className="size-3" />
                </Link>
              </li>
            </ul>
          </nav>

          {/* Company column */}
          <nav aria-label="Company" className="lg:col-span-2">
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
              Company
            </h3>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/65 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Service Hubs column */}
          <div className="lg:col-span-3">
            <h3 className="mb-5 text-[11px] font-semibold uppercase tracking-[0.15em] text-gold">
              Service Hubs
            </h3>
            <ul className="columns-2 gap-x-4 space-y-1.5 text-sm text-primary-foreground/60 lg:columns-1 xl:columns-2">
              {global.serviceHubs.map((hub) => (
                <li key={hub} className="break-inside-avoid">
                  {hub}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <Container className="flex flex-col items-center justify-between gap-4 py-6 text-sm sm:flex-row">
          <p className="text-primary-foreground/50">{global.copyright}</p>
          <nav aria-label="Legal">
            <ul className="flex items-center gap-5 text-primary-foreground/50">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </div>
    </footer>
  );
}
