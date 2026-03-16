import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
  className?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  href,
  className,
}: ServiceCardProps) {
  return (
    <div className="h-full motion-safe:transition-transform motion-safe:hover:-translate-y-1">
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-[border-color,box-shadow] hover:border-gold/30 hover:shadow-lg hover:shadow-primary/5 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none",
        className
      )}
    >
      {/* Small gold line at top on hover */}
      <div className="absolute inset-x-0 top-0 h-0.5 bg-gold/50 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
      <div className="mb-4 inline-flex self-start rounded-lg bg-primary/10 p-2.5 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        <Icon className="size-5" aria-hidden="true" />
      </div>
      <h3 className="text-[15px] font-semibold leading-snug text-card-foreground">
        {title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
        {description}
      </p>
      <span
        className="mt-4 inline-flex items-center text-sm font-medium text-primary transition-colors group-hover:text-gold"
        aria-hidden="true"
      >
        Learn more{" "}
        <ArrowRight className="ml-1 size-3.5 transition-transform group-hover:translate-x-1" />
      </span>
    </Link>
    </div>
  );
}
