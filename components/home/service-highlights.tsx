"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { Container } from "@/components/layout";
import { SectionHeader } from "@/components/ui/section-header";
import { siteContent } from "@/data/siteContent";

const cards = siteContent.home.serviceCards;
const images = ["/images/1.jpg", "/images/2.jpg", "/images/3.jpg", "/images/4.jpg"];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.9, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] as const },
  },
};

export function ServiceHighlights() {
  return (
    <section className="relative z-20 bg-gradient-to-b from-white to-gray-50/80 py-16 md:py-20">
      <Container>
        <SectionHeader
          label="What We Do"
          title="Our Core Services"
          highlight="Core Services"
          subtitle="Expertise across cleanroom certification, air quality, ventilation, and industrial hygiene."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {cards.map((card, i) => (
            <ServiceCard
              key={card.heading}
              heading={card.heading}
              subheading={card.subheading}
              image={images[i]}
              index={i}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
}

function ServiceCard({
  heading,
  subheading,
  image,
  index,
}: {
  heading: string;
  subheading: string;
  image: string;
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  // 3D tilt effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [8, -8]), {
    damping: 20,
    stiffness: 150,
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), {
    damping: 20,
    stiffness: 150,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  }

  function handleMouseLeave() {
    mouseX.set(0);
    mouseY.set(0);
    setHovered(false);
  }

  return (
    <motion.div
      ref={cardRef}
      variants={cardVariants}
      className="group relative h-64 cursor-pointer overflow-hidden rounded-2xl shadow-lg sm:h-72"
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 800,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.03 }}
      transition={{ type: "spring", damping: 20, stiffness: 200 }}
    >
      {/* Glowing border on hover */}
      <div className="pointer-events-none absolute inset-0 z-20 rounded-2xl border-2 border-transparent transition-colors duration-500 group-hover:border-gold/40" />

      {/* Shine effect on hover */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{
          background: "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.1) 45%, rgba(255,255,255,0.15) 50%, transparent 55%)",
        }}
        aria-hidden="true"
      />

      {/* Image with zoom */}
      <Image
        src={image}
        alt={heading}
        fill
        className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-black/10 transition-all duration-500 group-hover:from-primary/90 group-hover:via-primary/60 group-hover:to-primary/30" />

      {/* Card number */}
      <div className="absolute left-4 top-4 z-10 flex size-8 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-all duration-300 group-hover:bg-gold/20">
        <span className="text-xs font-bold text-white/70 group-hover:text-gold" style={{ fontSize: "11px" }}>
          0{index + 1}
        </span>
      </div>

      {/* Default: heading */}
      <div
        className={`absolute inset-x-0 bottom-0 z-10 p-5 transition-all duration-400 ${
          hovered ? "translate-y-4 opacity-0" : "translate-y-0 opacity-100"
        }`}
      >
        <h3
          className="font-semibold italic uppercase leading-tight text-white"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif", fontSize: "14px" }}
        >
          {heading}
        </h3>
        <div className="mt-3 h-0.5 w-8 rounded bg-gold/60 transition-all duration-300 group-hover:w-12" />
      </div>

      {/* Hover: subheading */}
      <div
        className={`absolute inset-0 z-10 flex items-center justify-center bg-primary/85 p-6 text-center transition-all duration-300 ${
          hovered ? "opacity-100" : "opacity-0"
        }`}
      >
        <p className="text-sm leading-relaxed text-white/90">
          {subheading}
        </p>
      </div>
    </motion.div>
  );
}
