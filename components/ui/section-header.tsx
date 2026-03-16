"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
  id?: string;
  inverted?: boolean;
  animated?: boolean;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  highlight,
  subtitle,
  center = true,
  id,
  inverted = false,
  animated = true,
  className,
}: SectionHeaderProps) {
  let titleMain = title;
  let titleHighlight = "";
  if (highlight && title.includes(highlight)) {
    const idx = title.lastIndexOf(highlight);
    titleMain = title.slice(0, idx);
    titleHighlight = highlight;
  }

  const Wrapper = animated ? motion.div : "div";
  const animationProps = animated
    ? {
        initial: { opacity: 0, y: 20 } as const,
        whileInView: { opacity: 1, y: 0 } as const,
        viewport: { once: true, margin: "-60px" } as const,
        transition: { duration: 0.5 } as const,
      }
    : {};

  return (
    <Wrapper
      {...animationProps}
      className={cn(
        "mx-auto max-w-2xl",
        center && "text-center",
        className
      )}
    >
      {label && (
        <span
          className={cn(
            "text-[11px] font-semibold uppercase tracking-[0.2em]",
            inverted ? "text-gold" : "text-gold"
          )}
        >
          {label}
        </span>
      )}
      <h2
        id={id}
        className={cn(
          "mt-3 text-3xl font-bold tracking-tight sm:text-4xl",
          inverted ? "text-primary-foreground" : "text-foreground"
        )}
      >
        {titleMain}
        {titleHighlight && (
          <span className={inverted ? "text-gold" : "text-primary"}>
            {titleHighlight}
          </span>
        )}
      </h2>
      {subtitle && (
        <p
          className={cn(
            "mt-5 text-lg leading-relaxed",
            inverted ? "text-primary-foreground/70" : "text-muted-foreground"
          )}
        >
          {subtitle}
        </p>
      )}
    </Wrapper>
  );
}
