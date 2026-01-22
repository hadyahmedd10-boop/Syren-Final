"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInContainer, fadeInUp } from "@/lib/animations";
import { StaticImageData } from "next/image";
import { HERO_IMAGES } from "@/lib/images";

export default function Hero() {
  useEffect(() => {
    // Force scroll to top on mount (e.g., page reload)
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="hero" className="relative min-h-[55vh] flex items-center py-20">
      <Image
        src={HERO_IMAGES.home}
        alt="A private luxury yacht navigating the crystal-clear waters of the Red Sea - A signature Syren experience"
        fill
        priority
        sizes="100vw"
        quality={85}
        placeholder="blur"
        className="object-cover object-center"
      />
      
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 via-60% to-background" />
      
      <div className="relative mx-auto max-w-5xl px-6 text-center w-full z-10">
        <motion.div
          variants={fadeInContainer}
          initial="hidden"
          animate="visible"
        >
          {/* Editorial Brand Label */}
          <motion.span 
            variants={fadeInUp}
            className="block font-serif text-accent-gold tracking-[0.5em] text-[11px] md:text-[12px] uppercase mb-6 opacity-90"
          > 
            Syren
          </motion.span> 
      
          {/* Powerful Short Headline */}
          <motion.h1 
            variants={fadeInUp}
            className="font-serif text-white text-4xl md:text-6xl lg:text-7xl leading-[1.05] mb-8 tracking-tight"
          > 
            The Egypt You’ve Dreamed of, <br className="hidden md:block" /> Perfected.
          </motion.h1> 
      
          {/* Poetic sub-line */}
          <motion.p 
            variants={fadeInUp}
            className="text-white/70 max-w-xl mx-auto text-base md:text-lg font-light italic mb-12 leading-relaxed"
          > 
            Private, soul-stirring journeys curated for the most discerning travelers.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="#destinations"
              className="syren-btn min-w-[180px] sm:min-w-[220px]"
            >
              Begin Your Journey
            </Link>
            <Link
              href="/experiences"
              className="syren-btn-secondary min-w-[180px] sm:min-w-[220px]"
            >
              View Experiences
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Section Bridge Fade */}
      <div className="absolute bottom-0 left-0 w-full h-8 md:h-12 bg-gradient-to-t from-background via-background/80 to-transparent" />
    </section>
  );
}
