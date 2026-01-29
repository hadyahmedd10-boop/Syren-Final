"use client";

import Reveal from "../../motion/Reveal";
import ExperienceCard from "../ExperienceCard";
import SectionHeader from "../../layout/SectionHeader";
import { experiences } from "@/data/experiences";
import Link from "next/link";

import { Experience } from "@/types/experience";

interface DestinationExperiencesProps {
  destinationName?: string;
  destinationSlug?: string;
  experiences?: Experience[];
  title?: string;
  className?: string;
}

export default function DestinationExperiences({ 
  destinationSlug,
  experiences: providedExperiences,
  title = "Journeys That Belong Here",
  className = "bg-background"
}: DestinationExperiencesProps) {
  // Filter experiences by matching the current destination slug in their destinations array
  const filteredExperiences = providedExperiences || experiences.filter(exp => 
    destinationSlug && exp.destinations.includes(destinationSlug)
  );

  // Dev-only confirmation log
  if (process.env.NODE_ENV === "development") {
    console.log(`[Dev] Destination Experiences for ${destinationSlug}: ${filteredExperiences.length}`);
  }

  if (filteredExperiences.length === 0) return null;

  return (
    <section className={`section ${className}`}>
      <div className="mx-auto max-w-7xl container-x">
        <SectionHeader 
          title={title} 
          label="Curated Journeys" 
          className="mb-4 md:mb-6"
        />

        <div className="grid gap-5 md:gap-6 grid-cols-1 md:grid-cols-3">
          {filteredExperiences.map((experience, index) => (
            <Reveal key={experience.slug} delay={index * 0.1}>
              <ExperienceCard 
                title={experience.title}
                description={experience.description}
                image={experience.heroImage}
                duration={experience.duration}
                cities={experience.cities}
                href={`/experiences/${experience.slug}`}
              />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="mt-10 text-center">
          <Link 
            href="/experiences" 
            className="group inline-flex flex-col items-center gap-4"
          >
            <span className="font-sans text-[11px] uppercase tracking-[0.3em] text-white/40 group-hover:text-accent-gold transition-colors duration-500">
              View all experiences in this destination
            </span>
            <div className="h-px w-12 bg-white/10 group-hover:w-24 group-hover:bg-accent-gold transition-all duration-700" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
