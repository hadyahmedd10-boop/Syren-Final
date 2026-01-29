import { experiences } from "@/data/experiences";
import ExperienceCard from "@/components/sections/ExperienceCard";
import Reveal from "@/components/motion/Reveal";
import SectionHeader from "@/components/layout/SectionHeader";

export default function ExperiencesGrid() {
  return (
    <div className="bg-background section">
      <div className="mx-auto max-w-7xl container-x">
        <SectionHeader 
          title="Explore Our Journeys" 
          label="Complete Collection" 
          className="mb-6 sm:mb-8"
        />
        <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {experiences.map((experience, index) => (
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
                variant={index < 3 ? "primary" : "secondary"}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
