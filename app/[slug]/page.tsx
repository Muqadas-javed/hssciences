import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle, Shield, ArrowRight, Calendar, User } from "lucide-react";
import { constructMetadata, webPageSchema, breadcrumbSchema } from "@/lib/seo";
import { Container } from "@/components/layout/container";
import { siteContent } from "@/data/siteContent";

const { services, blog } = siteContent;

function getService(slug: string) {
  return services.catalog.find((s) => s.href === `/${slug}`);
}

function getBlogPost(slug: string) {
  return blog.recentPosts.find((p) => p.href === `/${slug}`);
}

export function generateStaticParams() {
  const serviceSlugs = services.catalog.map((s) => ({
    slug: s.href.replace(/^\//, ""),
  }));
  const blogSlugs = blog.recentPosts.map((p) => ({
    slug: p.href.replace(/^\//, ""),
  }));
  return [...serviceSlugs, ...blogSlugs];
}

export function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  return params.then(({ slug }) => {
    const service = getService(slug);
    if (service) {
      return constructMetadata({
        title: service.title,
        description: service.description.slice(0, 160),
        pathname: service.href,
      });
    }
    const post = getBlogPost(slug);
    if (post) {
      return constructMetadata({
        title: post.title,
        description: post.excerpt?.replace("[...]", "").trim() ?? "",
        pathname: post.href,
      });
    }
    return {};
  });
}

export default async function DynamicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  const post = getBlogPost(slug);

  if (!service && !post) notFound();

  if (service) {
    const pageSchema = webPageSchema({
      title: `${service.title} — Health Systems Sciences`,
      description: service.description.slice(0, 160),
      pathname: service.href,
    });
    const breadcrumbs = breadcrumbSchema([
      { name: "Home", href: "/" },
      { name: "Services", href: "/services" },
      { name: service.title, href: service.href },
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
            <Link
              href="/services"
              className="inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-gold transition-colors mb-6"
            >
              <ArrowLeft className="size-3.5" />
              All Services
            </Link>
            <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
              {service.title}
            </h1>
          </Container>
        </section>

        {/* Content */}
        <section className="py-16 md:py-24">
          <Container className="max-w-3xl">
            <p className="text-muted-foreground leading-relaxed text-lg mb-10">
              {service.description}
            </p>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Shield className="size-5 text-primary" aria-hidden="true" />
                  <h2 className="font-semibold text-foreground">
                    Applicable Standards
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  {service.standards}
                </p>
              </div>

              <div className="rounded-xl border border-border bg-card p-6">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircle className="size-5 text-gold" aria-hidden="true" />
                  <h2 className="font-semibold text-foreground">
                    Facility Types
                  </h2>
                </div>
                <p className="text-sm text-muted-foreground">
                  {service.facilities}
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact-quote"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Request a Quote <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                View All Services
              </Link>
            </div>
          </Container>
        </section>
      </>
    );
  }

  // Blog post
  const blogPost = post!;
  const pageSchema = webPageSchema({
    title: `${blogPost.title} — Health Systems Sciences`,
    description: blogPost.excerpt?.replace("[...]", "").trim() ?? "",
    pathname: blogPost.href,
  });
  const breadcrumbs = breadcrumbSchema([
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: blogPost.title, href: blogPost.href },
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
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-primary-foreground/70 hover:text-gold transition-colors mb-6"
          >
            <ArrowLeft className="size-3.5" />
            All Posts
          </Link>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight max-w-3xl">
            {blogPost.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-primary-foreground/60">
            {"date" in blogPost && blogPost.date && (
              <span className="inline-flex items-center gap-1">
                <Calendar className="size-3.5" aria-hidden="true" />
                {blogPost.date}
              </span>
            )}
            {"author" in blogPost && blogPost.author && (
              <span className="inline-flex items-center gap-1">
                <User className="size-3.5" aria-hidden="true" />
                {blogPost.author}
              </span>
            )}
          </div>
        </Container>
      </section>

      {/* Content */}
      <section className="py-16 md:py-24">
        <Container className="max-w-3xl">
          {"image" in blogPost && blogPost.image && (
            <div className="relative aspect-[16/9] overflow-hidden rounded-xl mb-10">
              <Image
                src={blogPost.image}
                alt={blogPost.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          )}

          {blogPost.excerpt && (
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {blogPost.excerpt}
            </p>
          )}

          <p className="text-muted-foreground">
            Full article content coming soon. Contact us for more information.
          </p>

          <div className="mt-12">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              <ArrowLeft className="size-4" />
              Back to Blog
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
