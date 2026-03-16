"use client";

import { motion } from "framer-motion";
import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { fadeUp, stagger as staggerVariant } from "@/lib/animations";

export interface StatItem {
  icon: LucideIcon;
  value: string;
  label: string;
  description?: string;
}

interface StatsGridProps {
  items: StatItem[];
  columns?: 2 | 3 | 4;
  className?: string;
}

export function StatsGrid({
  items,
  columns = 2,
  className,
}: StatsGridProps) {
  return (
    <motion.div
      variants={staggerVariant(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      className={cn(
        "grid gap-4",
        columns === 2 && "grid-cols-2",
        columns === 3 && "grid-cols-2 md:grid-cols-3",
        columns === 4 && "grid-cols-2 md:grid-cols-4",
        className
      )}
    >
      {items.map((stat) => (
        <motion.div
          key={stat.label}
          variants={fadeUp}
          className="group relative overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5"
        >
          {/* Top accent line */}
          <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
          <div className="mb-4 inline-flex rounded-lg bg-primary/10 p-2.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
            <stat.icon className="size-5" aria-hidden="true" />
          </div>
          <div className="text-2xl font-bold text-foreground sm:text-3xl">
            {stat.value}
          </div>
          <div className="mt-1 text-sm font-semibold text-foreground">
            {stat.label}
          </div>
          {stat.description && (
            <div className="mt-0.5 text-xs text-muted-foreground">
              {stat.description}
            </div>
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}
