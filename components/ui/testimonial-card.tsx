import Image from "next/image";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  alt?: string;
  src?: string;
  variant?: "badge" | "chip";
  inverted?: boolean;
  className?: string;
}

export function TestimonialCard({
  name,
  alt,
  src,
  variant = "badge",
  inverted = false,
  className,
}: TestimonialCardProps) {
  return (
    <div
      className={cn(
        "flex items-center justify-center transition-all",
        variant === "badge" && !src &&
          (inverted
            ? "h-20 rounded-lg border border-primary-foreground/10 bg-primary-foreground/5 px-6 hover:border-gold/30 hover:bg-primary-foreground/10"
            : "h-20 rounded-lg border border-border bg-card px-6 hover:border-gold/30 hover:shadow-sm"),
        variant === "badge" && src && "h-28 rounded-lg bg-white px-5",
        variant === "chip" &&
          (inverted
            ? "h-11 rounded-lg bg-primary-foreground/5 px-5 hover:bg-primary-foreground/10"
            : "h-11 rounded-lg bg-muted px-5 hover:bg-muted/80"),
        className
      )}
      aria-label={alt ?? name}
    >
      {src ? (
        <Image
          src={src}
          alt={alt ?? name}
          width={200}
          height={100}
          className="h-22 w-auto object-contain drop-shadow-sm"
        />
      ) : (
        <span
          className={cn(
            "text-center text-xs font-semibold tracking-wide",
            inverted ? "text-primary-foreground/85" : "text-muted-foreground",
            variant === "chip" && "font-medium"
          )}
        >
          {name}
        </span>
      )}
    </div>
  );
}
