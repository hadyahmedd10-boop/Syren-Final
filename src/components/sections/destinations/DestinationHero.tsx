"use client";

import Image, { StaticImageData } from "next/image";
import { motion, type Variants } from "framer-motion";

interface DestinationHeroProps {
  name: string;
  tagline: string;
  image: StaticImageData | string;
}

export default function DestinationHero({ name, tagline, image }: DestinationHeroProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
      <Image
        src={image}
        alt={`${name} - Syren Egypt Destinations`}
        fill
        priority
        className="object-cover object-center scale-105"
        quality={90}
      />
      
      {/* Cinematic Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-background" />
      
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1 
            variants={itemVariants}
            className="font-serif text-white text-5xl md:text-7xl lg:text-8xl leading-none mb-6 tracking-tighter"
          >
            {name}
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-accent-gold font-sans text-sm md:text-lg uppercase tracking-[0.3em] font-light italic"
          >
            {tagline}
          </motion.p>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4"
      >
        <div className="w-px h-12 bg-gradient-to-b from-accent-gold/50 to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ 
              y: [0, 48],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute top-0 left-0 w-full h-1/3 bg-accent-gold"
          />
        </div>
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
