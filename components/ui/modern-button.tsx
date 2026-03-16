import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const modernButtonVariants = cva(
  "group/btn relative inline-flex items-center justify-center font-medium transition-all duration-200 outline-none select-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 motion-safe:hover:scale-[1.03] motion-safe:active:scale-[0.97]",
  {
    variants: {
      variant: {
        primary:
          "bg-primary text-primary-foreground shadow-sm hover:bg-primary/90",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline:
          "border border-border bg-background text-foreground hover:bg-muted hover:border-primary/30",
        ghost:
          "text-foreground hover:bg-muted",
        "primary-inverted":
          "bg-primary-foreground text-primary hover:bg-primary-foreground/90",
        "outline-inverted":
          "border border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10",
      },
      size: {
        sm: "h-9 rounded-lg px-4 text-sm gap-1.5",
        md: "h-10 rounded-lg px-5 text-sm gap-2",
        lg: "h-12 rounded-xl px-8 text-base gap-2",
      },
      arrow: {
        true: "",
        false: "",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      arrow: false,
    },
  }
);

export interface ModernButtonProps
    extends VariantProps<typeof modernButtonVariants> {
  href?: string;
  external?: boolean;
  children?: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
}

export function ModernButton({
  className,
  variant,
  size,
  arrow,
  href,
  external,
  children,
  disabled,
  type = "button",
  onClick,
}: ModernButtonProps) {
  const classes = cn(modernButtonVariants({ variant, size, arrow, className }));

  const content = (
    <>
      {children}
      {arrow && (
        <ArrowRight
          className="size-4 transition-transform group-hover/btn:translate-x-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (href) {
    return external ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
        <span className="sr-only">(opens in new tab)</span>
      </a>
    ) : (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      disabled={disabled}
      type={type}
      onClick={onClick}
    >
      {content}
    </button>
  );
}

export { modernButtonVariants };
