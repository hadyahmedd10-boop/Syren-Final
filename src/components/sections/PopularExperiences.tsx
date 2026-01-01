import ExperienceCard from "./ExperienceCard";
import Reveal from "../motion/Reveal";
import { experiences } from "@/data/experiences";

interface PopularExperiencesProps {
  variant?: 'nightlife' | 'luxury' | 'adventure' | 'cultural';
}

export default function PopularExperiences({ variant }: PopularExperiencesProps) {
  // Filter experiences based on variant if provided, otherwise show first 3
  const filteredExperiences = variant 
    ? experiences.filter(exp => exp.category === variant)
    : experiences.slice(0, 3);

  const getTitle = () => {
    switch (variant) {
      case 'nightlife': return "Cairo After Dark";
      case 'luxury': return "The Signature Collection";
      case 'adventure': return "Untamed Egypt";
      case 'cultural': return "Timeless Heritage";
      default: return "Curated Experiences";
    }
  };

  const getSubtitle = () => {
    switch (variant) {
      case 'nightlife': return "Emotional";
      case 'luxury': return "Luxury";
      case 'adventure': return "Adventure";
      case 'cultural': return "Trust";
      default: return "The Action";
    }
  };

  return (
    <div
      id={variant ? `experiences-${variant}` : "experiences"}
      className="bg-background scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <div className="text-center mb-12 md:mb-16">
            <span className="block font-sans text-[10px] uppercase tracking-[0.4em] text-accent-gold mb-4">{getSubtitle()}</span>
            <h2
              className="font-serif text-3xl md:text-5xl tracking-tight text-white"
            >
              {getTitle()}
            </h2>
            <div className="mx-auto mt-8 h-px w-20 bg-accent-gold/40" />
          </div>
        </Reveal>
        <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
          {filteredExperiences.map((experience, index) => (
            <Reveal key={experience.slug} delay={0.1 * (index + 1)}>
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
      </div>
    </div>
  );
}
