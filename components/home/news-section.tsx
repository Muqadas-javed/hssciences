"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/layout";
import { SectionHeader } from "@/components/ui/section-header";
import { NewsCard } from "@/components/ui/news-card";
import { ModernButton } from "@/components/ui/modern-button";
import { fadeUp, stagger, viewportEager } from "@/lib/animations";
import { siteContent } from "@/data/siteContent";

const posts = siteContent.blog.recentPosts.slice(0, 3);

export function NewsSection() {
  return (
    <section aria-labelledby="news-heading" className="relative py-24 md:py-36">
      {/* Top accent */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" aria-hidden="true" />

      <Container>
        <SectionHeader
          label="Latest Insights"
          title="News & Research"
          highlight="Research"
          subtitle="Expert perspectives on cleanroom certification, indoor air quality, and environmental health and safety."
          id="news-heading"
        />

        {/* Blog cards */}
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportEager}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {posts.map((post) => (
            <motion.article key={post.title} variants={fadeUp}>
              <NewsCard
                title={post.title}
                href={post.href}
                image={"image" in post ? post.image : undefined}
                date={"date" in post ? post.date : undefined}
                excerpt={"excerpt" in post ? post.excerpt : undefined}
              />
            </motion.article>
          ))}
        </motion.div>

        {/* View all */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-14 text-center"
        >
          <ModernButton variant="outline" size="lg" href="/blog" arrow>
            View All Articles
          </ModernButton>
        </motion.div>
      </Container>
    </section>
  );
}
