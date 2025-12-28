"use client";

import Reveal from "../../motion/Reveal";
import ExperienceCard from "../ExperienceCard";
import { experiences } from "@/data/experiences";
import Link from "next/link";

import { Experience } from "@/types/experience";

interface DestinationExperiencesProps {
  destinationName?: string;
  destinationSlug?: string;
  experiences?: Experience[];
}

export default function DestinationExperiences({ 
  destinationSlug,
  experiences: providedExperiences 
}: DestinationExperiencesProps) {
  // Filter experiences by matching the current destination slug in their destinations array
  const filteredExperiences = providedExperiences || experiences.filter(exp => 
    destinationSlug && exp.destinations.includes(destinationSlug)
  ).slice(0, 3);

  if (filteredExperiences.length === 0) return null;

  return (
    <section className="section bg-background">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal className="mb-4 md:mb-6 text-center">
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent-gold mb-4 block">Curated Journeys</span>
          <h2 className="font-serif text-white text-3xl md:text-5xl tracking-tight">
            Journeys That Belong Here
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
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
