import { experiences } from "@/data/experiences";
import ExperienceCard from "@/components/sections/ExperienceCard";
import Reveal from "@/components/motion/Reveal";
import SectionHeader from "@/components/layout/SectionHeader";

export default function LuxuryExperiences() {
  const luxury = experiences.filter(exp => exp.price && exp.price.amount >= 3000);

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-8">
      <SectionHeader 
        title="Luxury Collections" 
        label="The Pinnacle" 
        align="left"
      />
      <div className="grid gap-5 md:gap-6 grid-cols-1 md:grid-cols-3">
        {luxury.map((experience, index) => (
          <Reveal key={experience.slug} delay={0.1 * index}>
            <ExperienceCard
              title={experience.title}
              description={experience.description}
              image={experience.heroImage}
              alt={experience.title}
              duration={experience.duration}
              cities={experience.cities}
              buttonText="Discover Journey"
              href={`/experiences/${experience.slug}`}
            />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
