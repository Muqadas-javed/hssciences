import Link from "next/link";
import { ArrowRight, Phone, type LucideIcon } from "lucide-react";
import { Container } from "@/components/layout";
import { cn } from "@/lib/utils";

interface CTAAction {
  label: string;
  href: string;
  icon?: LucideIcon;
}

interface CTASectionProps {
  id?: string;
  heading: string;
  subtitle: string;
  primaryAction: CTAAction;
  secondaryAction?: CTAAction & { external?: boolean };
  className?: string;
}

export function CTABanner({
  id = "cta-heading",
  heading,
  subtitle,
  primaryAction,
  secondaryAction,
  className,
}: CTASectionProps) {
  return (
    <section
      aria-labelledby={id}
      className={cn(
        "relative overflow-hidden bg-primary py-24 md:py-36",
        className
      )}
    >
      {/* Background accents */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/15" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,oklch(0.45_0.10_255/0.2),transparent)]" />
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.4) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
        {/* Gold accent line */}
        <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-gold/30 via-gold/60 to-gold/30" />
      </div>

      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center text-primary-foreground">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
            Get in Touch
          </span>
          <h2
            id={id}
            className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl"
          >
            {heading}
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-primary-foreground/70">
            {subtitle}
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link
              href={primaryAction.href}
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-gold px-8 text-base font-semibold text-gold-foreground shadow-lg shadow-gold/20 transition-all hover:bg-gold/90 hover:shadow-xl hover:shadow-gold/30 motion-safe:active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
            >
              {primaryAction.label}
              {primaryAction.icon ? (
                <primaryAction.icon className="size-4" aria-hidden="true" />
              ) : (
                <ArrowRight className="size-4" aria-hidden="true" />
              )}
            </Link>

            {secondaryAction &&
              (secondaryAction.external ? (
                <a
                  href={secondaryAction.href}
                  className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {secondaryAction.icon && (
                    <secondaryAction.icon
                      className="size-4"
                      aria-hidden="true"
                    />
                  )}
                  {secondaryAction.label}
                </a>
              ) : (
                <Link
                  href={secondaryAction.href}
                  className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/20 px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  {secondaryAction.icon && (
                    <secondaryAction.icon
                      className="size-4"
                      aria-hidden="true"
                    />
                  )}
                  {secondaryAction.label}
                </Link>
              ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
