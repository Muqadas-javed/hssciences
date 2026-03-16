import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card } from "./card";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  center?: boolean;
  index?: number;
  className?: string;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  center = true,
  index = 0,
  className,
}: FeatureCardProps) {
  return (
    <Card
      hover
      padding="lg"
      className={cn(
        "group relative overflow-hidden",
        center && "text-center",
        className
      )}
    >
      {/* Gold top accent on hover */}
      <div
        className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
        aria-hidden="true"
      />
      {/* Subtle number watermark */}
      <span
        className="absolute -right-2 -top-4 text-[80px] font-bold leading-none text-primary/[0.03] select-none"
        aria-hidden="true"
      >
        {String(index + 1).padStart(2, "0")}
      </span>
      <div
        className={cn(
          "relative mb-5 inline-flex rounded-xl bg-primary/10 p-3.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground",
          center && "mx-auto"
        )}
      >
        <Icon className="size-6" aria-hidden="true" />
      </div>
      <h3 className="text-base font-semibold text-card-foreground">
        {title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </Card>
  );
}
