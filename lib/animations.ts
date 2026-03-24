import type { Variants, Transition } from "framer-motion";

// ─── Shared transitions ──────────────────────────────────────
export const spring = {
  type: "spring",
  damping: 25,
  stiffness: 300,
} as const satisfies Transition;

export const smooth = {
  duration: 0.5,
  ease: [0.25, 0.1, 0.25, 1],
} as const satisfies Transition;

// ─── Scroll-reveal variants ─────────────────────────────────
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5 } },
};

export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const slideRight: Variants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

// ─── Modern reveal variants ─────────────────────────────────
export const blurFadeUp: Variants = {
  hidden: { opacity: 0, y: 30, filter: "blur(10px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export const slideInFromLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export const slideInFromRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7, ease: [0.25, 0.4, 0.25, 1] },
  },
};

export const scaleRotateIn: Variants = {
  hidden: { opacity: 0, scale: 0.8, rotate: -5 },
  visible: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: { duration: 0.6, ease: [0.34, 1.56, 0.64, 1] },
  },
};

export const flipUp: Variants = {
  hidden: { opacity: 0, rotateX: -90, transformPerspective: 800 },
  visible: {
    opacity: 1,
    rotateX: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] },
  },
};

// ─── Stagger containers ─────────────────────────────────────
export const stagger = (delay = 0.08): Variants => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } },
});

// ─── Card hover ─────────────────────────────────────────────
export const cardHover: Variants = {
  rest: { y: 0, scale: 1 },
  hover: {
    y: -4,
    scale: 1.01,
    transition: { type: "spring", damping: 20, stiffness: 300 },
  },
};

// ─── Button hover ───────────────────────────────────────────
export const buttonHover: Variants = {
  rest: { scale: 1 },
  hover: { scale: 1.03, transition: { type: "spring", damping: 15, stiffness: 400 } },
  tap: { scale: 0.97 },
};

// ─── Viewport defaults ──────────────────────────────────────
export const viewportOnce = { once: true, margin: "-60px" as const };
export const viewportEager = { once: true, margin: "-40px" as const };
