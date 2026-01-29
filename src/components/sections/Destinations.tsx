"use client";

import Reveal from "../motion/Reveal";
import SectionHeader from "../layout/SectionHeader";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { destinations } from "@/data/destinations";

export default function Destinations() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === "left" 
        ? scrollLeft - clientWidth * 0.8 
        : scrollLeft + clientWidth * 0.8;
      
      scrollRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth"
      });
    }
  };

  return (
    <div
      id="destinations"
      aria-labelledby="destinations-title"
      className="relative bg-background scroll-mt-24 section"
    >
      <div className="mx-auto max-w-6xl container-x">
        <div className="mb-4 flex flex-col md:flex-row md:items-end md:justify-between md:mb-6">
          <SectionHeader 
            id="destinations-title"
            title="The Map of Syren" 
            label="The Landscape" 
            align="responsive"
            className="mb-0 md:mb-0" // Reset mb since parent has mb-4/md:mb-6
          />

          {/* Desktop Navigation Buttons */}
          <div className="hidden md:flex gap-4 mt-8 md:mt-0">
            <button
              onClick={() => scroll("left")}
              className="p-3 rounded-full border border-border hover:border-accent-gold hover:text-accent-gold transition-all duration-300"
              aria-label="Scroll left"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-3 rounded-full border border-border hover:border-accent-gold hover:text-accent-gold transition-all duration-300"
              aria-label="Scroll right"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto pb-6 gap-4 md:gap-6 snap-x snap-mandatory scrollbar-hide -mx-[var(--container-x)] px-[var(--container-x)]"
        >
        {destinations.map((dest, index) => {
          return (
              <div key={dest.slug} className="min-w-[85%] md:min-w-[45%] lg:min-w-[30%] snap-center">
              <Reveal delay={0.1 * (index + 1)}>
                <article className="group relative flex flex-col syren-card-hover h-full transition-all duration-500 ease-out">
                  <div className="relative aspect-[4/5] overflow-hidden syren-card group-hover:border-primary/30">
                    <Image
                      src={dest.heroImage}
                      alt={`Discover the timeless allure of ${dest.name} with Syren's private curation`}
                      fill
                      sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                      className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
                      placeholder="blur"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
                    
                    {/* Subtle Label for Mobile/Quick Scan */}
                    <div className="absolute bottom-5 left-5 right-5 md:hidden">
                      <h3 className="font-serif text-lg font-medium tracking-tight text-accent-gold">
                        {dest.name}
                      </h3>
                    </div>
                  </div>

                  <div className="mt-2.5 flex flex-col text-center md:text-left flex-grow">
                    <div className="relative">
                      <span className="absolute -left-3 -top-5 font-serif text-5xl text-white/5 select-none hidden md:block group-hover:text-primary/10 transition-colors duration-500">
                        0{index + 1}
                      </span>
                      <h3 className="hidden md:block font-serif text-2xl font-medium tracking-tight text-accent-gold relative z-10 transition-colors duration-500">
                        <Link href={`/destinations/${dest.slug}`} className="focus:outline-none">
                          <span className="absolute inset-0 z-20" aria-hidden="true" />
                          {dest.name}
                        </Link>
                      </h3>
                    </div>
                    
                    {/* Mobile Link Overlay */}
                    <Link href={`/destinations/${dest.slug}`} className="absolute inset-0 z-20 md:hidden" aria-label={`View ${dest.name}`}>
                      <span className="sr-only">View {dest.name}</span>
                    </Link>

                    <div className="mt-1 h-px w-10 bg-accent-gold/20 md:w-12 mx-auto md:mx-0 transition-all duration-500 group-hover:w-16 group-hover:bg-primary/40" />
                    
                    <p className="mt-1.5 font-sans text-[11px] leading-relaxed text-white/60 md:text-sm line-clamp-2">
                      {dest.description}
                    </p>
                    
                    <div className="mt-auto pt-2.5">
                      <Link href={`/destinations/${dest.slug}`} className="syren-btn-secondary py-2 text-[10px] w-full md:w-auto text-center block">
                        Explore {dest.name}
                      </Link>
                    </div>
                  </div>
                </article>
              </Reveal>
            </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
