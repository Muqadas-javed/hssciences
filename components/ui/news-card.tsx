import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  title: string;
  href: string;
  image?: string;
  date?: string;
  excerpt?: string;
  className?: string;
}

export function NewsCard({
  title,
  href,
  image,
  date,
  excerpt,
  className,
}: NewsCardProps) {
  return (
    <div className="h-full motion-safe:transition-transform motion-safe:hover:-translate-y-1">
    <Link
      href={href}
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-[border-color,box-shadow] hover:border-gold/30 hover:shadow-lg hover:shadow-primary/5",
        className
      )}
    >
      {image && (
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          <Image
            src={image}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {/* Overlay gradient corner */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
        </div>
      )}
      <div className="flex flex-1 flex-col p-6">
        {date && (
          <time
            dateTime={new Date(date).toISOString().split("T")[0]}
            className="mb-3 flex items-center gap-1.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground"
          >
            <Calendar className="size-3" aria-hidden="true" />
            {date}
          </time>
        )}
        <h3 className="text-[15px] font-semibold leading-snug text-card-foreground transition-colors line-clamp-2 group-hover:text-primary">
          {title}
        </h3>
        {excerpt && (
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-2">
            {excerpt}
          </p>
        )}
        <span
          className="mt-4 inline-flex items-center text-sm font-medium text-primary group-hover:text-gold"
          aria-hidden="true"
        >
          Read article{" "}
          <ArrowRight className="ml-1 size-3.5 transition-transform group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
    </div>
  );
}
