"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { HERO_IMAGES } from "@/lib/images";

export default function SplashClient() {
  return (
    <main className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center bg-black overflow-hidden">
      {/* Background Image with subtle zoom */}
      <motion.div 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.6 }}
        transition={{ duration: 2.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src={HERO_IMAGES.home}
          alt="Syren Luxury Travel"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <span className="block font-serif text-accent-gold tracking-[0.6em] text-[10px] md:text-[12px] uppercase mb-6 md:mb-8">
            Syren
          </span>
          
          <h1 className="font-serif text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl mb-5 md:mb-6 tracking-tight font-light">
            Egypt, Like you&apos;ve <br /> never seen before
          </h1>
          
          <p className="text-white/60 max-w-xl mx-auto text-sm md:text-base font-light italic mb-10 md:mb-12 tracking-wide">
            Private journeys designed by local experts. Delivered with absolute precision.
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
          >
            <Link
              href="/home"
              className="group relative inline-flex items-center justify-center px-10 py-4 border border-accent-gold/30 text-accent-gold overflow-hidden transition-all hover:border-accent-gold"
            >
              <span className="relative z-10 font-sans text-[11px] font-bold uppercase tracking-[0.3em]">
                Enter Experience
              </span>
              <motion.div 
                className="absolute inset-0 bg-accent-gold"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              />
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative corners */}
      <div className="absolute top-12 left-12 hidden h-12 w-12 border-t border-l border-accent-gold/20 sm:block" />
      <div className="absolute top-12 right-12 hidden h-12 w-12 border-t border-r border-accent-gold/20 sm:block" />
      <div className="absolute bottom-12 left-12 hidden h-12 w-12 border-b border-l border-accent-gold/20 sm:block" />
      <div className="absolute bottom-12 right-12 hidden h-12 w-12 border-b border-r border-accent-gold/20 sm:block" />
    </main>
  );
}
