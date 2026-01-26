import ExperienceCard from "./ExperienceCard";
import Reveal from "../motion/Reveal";
import SectionHeader from "../layout/SectionHeader";
import { experiences } from "@/data/experiences";

interface PopularExperiencesProps {
  variant?: 'nightlife' | 'luxury' | 'adventure' | 'cultural' | 'all';
}

export default function PopularExperiences({ variant }: PopularExperiencesProps) {
  // Filter experiences based on variant if provided
  const filteredExperiences = variant === 'all'
    ? experiences
    : variant 
      ? experiences.filter(exp => exp.category === variant)
      : experiences.slice(0, 3);

  const getTitle = () => {
    switch (variant) {
      case 'nightlife': return "Cairo After Dark";
      case 'luxury': return "The Signature Collection";
      case 'adventure': return "Untamed Egypt";
      case 'cultural': return "Timeless Heritage";
      case 'all': return "Our Full Collection";
      default: return "Curated Experiences";
    }
  };

  const getSubtitle = () => {
    switch (variant) {
      case 'nightlife': return "Vibrant";
      case 'luxury': return "Refined";
      case 'adventure': return "Untamed";
      case 'cultural': return "Authentic";
      case 'all': return "Private";
      default: return "Curated";
    }
  };

  return (
    <div
      id={variant ? `experiences-${variant}` : "experiences"}
      className="bg-background scroll-mt-24"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeader 
          title={getTitle()} 
          label={getSubtitle()} 
        />
        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
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
