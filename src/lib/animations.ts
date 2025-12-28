/* eslint-disable @typescript-eslint/no-explicit-any */
import { Variants } from "framer-motion";

export const EASE_LUXURY = [0.22, 1, 0.36, 1];
export const EASE_REVEAL = [0.21, 0.47, 0.32, 0.98];

export const fadeInContainer: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { staggerChildren?: number; delayChildren?: number } = {}) => ({
    opacity: 1,
    transition: {
      staggerChildren: custom.staggerChildren ?? 0.2,
      delayChildren: custom.delayChildren ?? 0.3,
    },
  }),
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (custom: { duration?: number; delay?: number; ease?: any } = {}) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: custom.duration ?? 1.2,
      delay: custom.delay ?? 0,
      ease: custom.ease ?? EASE_LUXURY,
    },
  }),
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (custom: { duration?: number; delay?: number } = {}) => ({
    opacity: 1,
    transition: {
      duration: custom.duration ?? 0.8,
      delay: custom.delay ?? 0,
      ease: EASE_LUXURY as any,
    },
  }),
};
