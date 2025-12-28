"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { fadeInContainer, fadeInUp } from "@/lib/animations";
import luxuryImg from "../../../public/images/hero/luxury.jpg";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center">
      <Image
        src={luxuryImg}
        alt="Luxury yacht in the Red Sea - Syren Egypt Experiences"
        fill
        priority
        sizes="100vw"
        quality={85}
        placeholder="blur"
        className="object-cover object-center"
      />
      
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 via-60% to-background" />
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/noise.png')] pointer-events-none" />
      
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
            className="font-serif text-white text-3xl md:text-5xl lg:text-6xl leading-[1.05] mb-8 tracking-tight"
          > 
            Experience Egypt, <br className="hidden md:block" /> like never before! 
          </motion.h1> 
      
          {/* Poetic sub-line */}
          <motion.p 
            variants={fadeInUp}
            className="text-white/70 max-w-xl mx-auto text-[14px] md:text-base font-light italic mb-12 leading-relaxed"
          > 
            Where luxury meets authenticity and every journey is curated for you
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
