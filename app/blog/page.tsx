import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, User } from "lucide-react";
import { constructMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { siteContent } from "@/data/siteContent";

const { blog } = siteContent;

export const metadata: Metadata = constructMetadata({
  title: "Blog",
  description:
    "Insights, guides, and best practices from Health Systems Sciences on cleanroom testing, industrial hygiene, and environmental compliance.",
  pathname: "/blog",
});

export default function BlogPage() {
  const pageSchema = webPageSchema({
    title: "Blog — Health Systems Sciences",
    description:
      "Insights, guides, and best practices from Health Systems Sciences on cleanroom testing, industrial hygiene, and environmental compliance.",
    pathname: "/blog",
  });

  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbs) }}
      />

      {/* Hero */}
      <section className="relative bg-primary py-20 md:py-28 text-primary-foreground">
        <Container>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold mb-4">
            Insights &amp; Resources
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            {blog.heading}
          </h1>
        </Container>
      </section>

      {/* Quick Links + Posts */}
      <section className="py-16 md:py-24">
        <Container>
          {/* Quick Links */}
          <nav className="mb-12 flex flex-wrap gap-3" aria-label="Quick links">
            {blog.quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg border border-border px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Posts Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blog.recentPosts.map((post) => (
              <article
                key={post.href}
                className="group rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-gold/40 hover:shadow-lg"
              >
                {post.image && (
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}

                <div className="p-5">
                  <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground mb-3">
                    {post.date && (
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="size-3" aria-hidden="true" />
                        {post.date}
                      </span>
                    )}
                    {post.author && (
                      <span className="inline-flex items-center gap-1">
                        <User className="size-3" aria-hidden="true" />
                        {post.author}
                      </span>
                    )}
                  </div>

                  <h2 className="text-base font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                    {post.title}
                  </h2>

                  {post.excerpt && (
                    <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                      {post.excerpt}
                    </p>
                  )}

                  <Link
                    href={post.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-primary hover:text-gold transition-colors"
                  >
                    Read More <ArrowRight className="size-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
