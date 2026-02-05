"use client";

import { useState, useMemo } from "react";
import { excursions } from "@/data/excursions";
import { destinations } from "@/data/destinations";
import { HERO_IMAGES } from "@/lib/images";
import Reveal from "@/components/motion/Reveal";
import ExperienceCard from "@/components/sections/ExperienceCard";
import SectionHeader from "@/components/layout/SectionHeader";
import { cn } from "@/lib/utils";

export default function ToursAndExcursions() {
  const [city, setCity] = useState<string>("All");

  const cities = useMemo(() => {
    // Get unique cities, filter out undefined/null, sort them
    const uniqueCities = Array.from(new Set(excursions.flatMap(x => x.cities || [x.city || "Other"])));
    return ["All", ...uniqueCities.sort()];
  }, []);

  const filtered = useMemo(() => {
    return city === "All" 
      ? excursions 
      : excursions.filter(x => {
          return (x.city || "Other") === city || x.cities?.includes(city);
        });
  }, [city]);

  return (
    <section id="tours-excursions" className="scroll-mt-[140px] section-tight">
      <div className="mx-auto max-w-7xl container-x">
        <SectionHeader
          title="Tours & Excursions"
          description="Premium add-ons curated to elevate your destination experience — private, seamless, and unforgettable."
          className="mb-6 sm:mb-8"
        />

        {/* Filter Bar */}
        <div className="relative z-20 mt-6 mb-8">
           <div className="flex flex-nowrap gap-3 overflow-x-auto pb-2 scrollbar-hide md:flex-wrap md:justify-center">
            {cities.map((c) => (
              <button
                key={c}
                onClick={() => setCity(c)}
                className={cn(
                  "whitespace-nowrap rounded-full px-5 py-2 text-sm font-medium transition-all duration-300",
                  city === c
                    ? "bg-gold text-black shadow-md"
                    : "border border-white/20 bg-transparent text-white/60 hover:border-gold hover:text-white"
                )}
              >
                {c}
              </button>
            ))}
           </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((exc, i) => {
            const destination = destinations.find(d => d.slug === exc.destinationSlug);
            const displayImage = exc.image || destination?.heroImage || HERO_IMAGES.home;

            return (
              <Reveal key={exc.slug} delay={0.05 * i}>
                <ExperienceCard
                  title={exc.title}
                  description={exc.shortDescription}
                  image={displayImage}
                  alt={exc.imageAlt ?? exc.title}
                  duration={exc.duration}
                  buttonText="Discover Excursion"
                  href={`/excursions/${exc.slug}`}
                />
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
