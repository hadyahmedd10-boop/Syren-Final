"use client";

import { motion, useReducedMotion, Transition } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { getItineraryDayImageSrc, ITINERARY_FALLBACK_IMAGE } from "@/lib/itinerary-images";
import { inferDayHighlights } from "@/lib/highlights";

interface ItineraryItem {
  day: number;
  title: string;
  description: string;
  meals?: string;
  highlights?: string[];
}

interface ItineraryTimelineProps {
  experienceSlug: string;
  experienceTitle: string;
  itinerary: ItineraryItem[];
}

export default function ItineraryTimeline({ 
  experienceSlug, 
  experienceTitle,
  itinerary 
}: ItineraryTimelineProps) {
  const prefersReducedMotion = useReducedMotion();
  const [imageSources, setImageSources] = useState<Record<number, string>>({});

  const handleImageError = (day: number) => {
    setImageSources(prev => ({ ...prev, [day]: ITINERARY_FALLBACK_IMAGE }));
  };
  
  const base = prefersReducedMotion 
    ? { initial: false, whileInView: undefined, transition: undefined } 
    : { 
        initial: { opacity: 0, y: 12 }, 
        whileInView: { opacity: 1, y: 0 }, 
        transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } as Transition, 
      };

  return (
    <div className="space-y-16 md:space-y-24">
      {itinerary.map((item, idx) => {
        const isEven = idx % 2 === 0;
        const initialImg = getItineraryDayImageSrc(experienceSlug, item.day);
        const currentImg = imageSources[item.day] || initialImg;
        const highlights = item.highlights || inferDayHighlights(item);

        return (
          <motion.div 
            key={`${item.day}-${item.title}`}
            {...(prefersReducedMotion ? {} : base)} 
            viewport={{ once: true, amount: 0.25 }} 
            className="relative" 
          >
            <article className="relative md:pl-12">
              {/* Marker */}
              <motion.div 
                initial={prefersReducedMotion ? false : { opacity: 0, y: 6 }} 
                whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }} 
                viewport={{ once: true, amount: 0.25 }} 
                transition={ 
                  prefersReducedMotion 
                    ? undefined 
                    : ({ duration: 0.45, delay: 0.05, ease: [0.22, 1, 0.36, 1] } as Transition)
                }
                className="absolute left-0 top-4 hidden md:flex h-8 w-8 items-center justify-center rounded-full border border-accent-gold/20 bg-surface shadow-[0_0_15px_rgba(196,160,82,0.1)]"
              >
                <span className="text-[10px] font-serif font-medium tracking-[0.22em] text-accent-gold">
                  {String(item.day).padStart(2, "0")}
                </span>
              </motion.div>

              <div className="grid items-stretch gap-8 md:grid-cols-12 md:gap-12">
                {/* Image Block */}
                <motion.div 
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }} 
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }} 
                  viewport={{ once: true, amount: 0.25 }} 
                  transition={ 
                    prefersReducedMotion 
                      ? undefined 
                      : ({ duration: 0.6, delay: 0.18, ease: [0.22, 1, 0.36, 1] } as Transition)
                  }
                  className={`md:col-span-6 min-h-[300px] md:h-full ${isEven ? "md:order-1" : "md:order-2"}`}
                >
                  <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-surface group shadow-2xl">
                    <Image
                      src={currentImg}
                      alt={`Day ${item.day} – ${experienceTitle}`}
                      fill
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      onError={() => handleImageError(item.day)}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Premium Overlays */}
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60" />
                      <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />
                    </>
                    
                    {/* Mobile Day Badge */}
                    <div className="absolute left-4 top-4 md:hidden">
                      <div className="flex flex-col items-center justify-center bg-background/80 backdrop-blur-md border border-accent-gold/20 px-3 py-2 rounded-xl">
                        <span className="font-serif text-xl font-light text-accent-gold leading-none">
                          {item.day < 10 ? `0${item.day}` : item.day}
                        </span>
                        <span className="font-sans text-[8px] font-bold uppercase tracking-[0.2em] text-accent-gold/60 mt-0.5">
                          Day
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Story Card */}
                <motion.div 
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }} 
                  whileInView={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }} 
                  viewport={{ once: true, amount: 0.25 }} 
                  transition={ 
                    prefersReducedMotion 
                      ? undefined 
                      : ({ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] } as Transition)
                  }
                  className={`md:col-span-6 h-full ${isEven ? "md:order-2" : "md:order-1"}`}
                >
                  <div className="h-full rounded-2xl border border-border/50 bg-surface/60 backdrop-blur-sm p-6 md:p-7 hover:border-accent-gold/20 transition-colors duration-500 flex flex-col justify-between">
                    <div>
                      <div className="hidden md:flex items-center gap-4 mb-6">
                        <p className="font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-accent-gold/60">
                          Day {item.day}
                        </p>
                        <div className="h-px flex-1 bg-gradient-to-r from-accent-gold/20 to-transparent" />
                      </div>

                      <h3 className="font-serif text-3xl md:text-4xl tracking-tight text-text-primary mb-6">
                        {item.title}
                      </h3>

                      <p className="font-sans text-base md:text-lg leading-relaxed text-text-secondary font-light">
                        {item.description}
                      </p>

                      {/* Highlights */}
                      {highlights && highlights.length > 0 && (
                        <ul className="mt-8 space-y-3">
                          {highlights.map((h: string) => (
                            <li key={h} className="flex items-start gap-4 text-sm">
                              <span className="mt-2 h-1.5 w-1.5 rounded-full bg-accent-gold/40 shrink-0" />
                              <span className="font-sans text-text-secondary leading-relaxed">{h}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>

                    {/* Meals */}
                    {item.meals && (
                      <div className="mt-10 flex flex-wrap items-center gap-3 pt-6 border-t border-border/10">
                        <span className="rounded-full border border-accent-gold/20 bg-accent-gold/5 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.25em] text-accent-gold/80">
                          Cuisine
                        </span>
                        <span className="font-sans text-xs text-text-primary tracking-wide">{item.meals}</span>
                      </div>
                    )}
                  </div>
                </motion.div>
              </div>
            </article>
          </motion.div>
        );
      })}
    </div>
  );
}
