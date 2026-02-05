"use client";

import { useState, useMemo } from "react";
import { Excursion } from "@/types/excursion";
import ExperienceCard from "@/components/sections/ExperienceCard";
import Reveal from "@/components/motion/Reveal";
import { HERO_IMAGES } from "@/lib/images";
import { CITY_ORDER, normalizeCity } from "@/lib/tours-cities";
import CityFilter from "./CityFilter";

interface ExcursionFilterListProps {
  excursions: Excursion[];
  destinationName: string;
  destinationHeroImage?: any; // StaticImageData or string
}

export default function ExcursionFilterList({
  excursions,
  destinationName,
  destinationHeroImage,
}: ExcursionFilterListProps) {
  const [selectedCity, setSelectedCity] = useState("All Cities");

  // Extract unique cities
  const cities = useMemo(() => {
    const citySet = new Set<string>();
    excursions.forEach((e) => {
      if (e.cities && e.cities.length > 0) {
        e.cities.forEach(c => citySet.add(normalizeCity(c)));
      } else {
        citySet.add(normalizeCity(e.city));
      }
    });
    
    // Sort based on CITY_ORDER
    const uniqueCities = Array.from(citySet).sort((a, b) => {
      const indexA = CITY_ORDER.indexOf(a as any);
      const indexB = CITY_ORDER.indexOf(b as any);
      
      // If both are in CITY_ORDER, sort by index
      if (indexA !== -1 && indexB !== -1) return indexA - indexB;
      
      // If only A is in CITY_ORDER, it comes first
      if (indexA !== -1) return -1;
      
      // If only B is in CITY_ORDER, it comes first
      if (indexB !== -1) return 1;
      
      // Otherwise sort alphabetically
      return a.localeCompare(b);
    });

    // Ensure "All Cities" is always first
    return ["All Cities", ...uniqueCities];
  }, [excursions]);

  // Filter excursions
  const filteredExcursions = useMemo(() => {
    if (selectedCity === "All Cities") return excursions;
    return excursions.filter((e) => {
      return normalizeCity(e.city) === selectedCity || e.cities?.map(normalizeCity).includes(selectedCity);
    });
  }, [excursions, selectedCity]);

  // Render helper for a grid of excursions
  const renderGrid = (excs: Excursion[]) => (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
      {excs.map((exc, index) => {
        const displayImage = exc.image || destinationHeroImage || HERO_IMAGES.home;

        return (
          <Reveal key={exc.slug} delay={0.05 * (index + 1)}>
            <ExperienceCard
              title={exc.title}
              description={exc.shortDescription}
              image={displayImage}
              alt={exc.imageAlt ?? exc.title}
              duration={exc.duration}
              cities={exc.city || destinationName}
              buttonText="View Excursion"
              href={`/excursions/${exc.slug}`}
            />
          </Reveal>
        );
      })}
    </div>
  );

  return (
    <div className="space-y-8">
      {/* City Filter Chips */}
      <CityFilter 
        cities={cities}
        value={selectedCity}
        onChange={setSelectedCity}
      />

      {/* Content Area */}
      {filteredExcursions.length > 0 ? (
        <>
          {/* Grouped View for "All Cities" */}
          {selectedCity === "All Cities" ? (
            <div className="space-y-12">
              {cities.slice(1).map((city) => {
                const cityExcursions = filteredExcursions.filter(
                  (e) => {
                    if (e.cities && e.cities.length > 0) {
                      return e.cities.map(normalizeCity).includes(city);
                    }
                    return normalizeCity(e.city) === city;
                  }
                );

                if (cityExcursions.length === 0) return null;

                return (
                  <div key={city} className="space-y-6">
                    <h3 className="text-sm font-serif text-accent-gold uppercase tracking-widest pl-1">
                      {city}
                    </h3>
                    {renderGrid(cityExcursions)}
                  </div>
                );
              })}
            </div>
          ) : (
            /* Single Grid for Specific City */
            renderGrid(filteredExcursions)
          )}
        </>
      ) : (
        <div className="flex flex-col items-center justify-center py-12 text-center">
          <p className="font-sans text-lg text-text-secondary">
            No excursions found for {selectedCity}
          </p>
        </div>
      )}
    </div>
  );
}
