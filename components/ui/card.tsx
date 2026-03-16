import { cn } from "@/lib/utils";

interface CardProps {
  hover?: boolean;
  padding?: "sm" | "md" | "lg";
  bare?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function Card({
  hover = false,
  padding = "md",
  bare = false,
  className,
  children,
}: CardProps) {
  const classes = cn(
    "rounded-xl",
    !bare && "border border-border bg-card",
    hover &&
      !bare &&
      "motion-safe:transition-[border-color,box-shadow,transform] hover:border-gold/30 hover:shadow-lg hover:shadow-primary/5 motion-safe:hover:-translate-y-1",
    padding === "sm" && "p-4",
    padding === "md" && "p-6",
    padding === "lg" && "p-8",
    className
  );

  return <div className={classes}>{children}</div>;
}
