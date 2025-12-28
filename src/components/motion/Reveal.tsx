"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { EASE_REVEAL, fadeInUp } from "@/lib/animations";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
}

export default function Reveal({ children, delay = 0, duration = 0.6, className = "" }: RevealProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      custom={{ duration, delay, ease: EASE_REVEAL }}
      viewport={{ once: true, margin: "-10% 0px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
