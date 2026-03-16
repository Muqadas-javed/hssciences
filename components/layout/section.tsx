"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Container } from "./container";

interface SectionProps {
  className?: string;
  narrow?: boolean;
  containerClassName?: string;
  children?: React.ReactNode;
}

export function Section({
  className,
  containerClassName,
  narrow = false,
  children,
}: SectionProps) {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={cn("py-16 md:py-24", className)}
    >
      <Container narrow={narrow} className={containerClassName}>
        {children}
      </Container>
    </motion.section>
  );
}

export function SectionHeader({
  title,
  subtitle,
  center = true,
  className,
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "mb-12 md:mb-16",
        center && "text-center",
        className
      )}
    >
      <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-muted-foreground mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
