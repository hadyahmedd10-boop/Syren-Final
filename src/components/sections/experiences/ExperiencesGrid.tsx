import { experiences } from "@/data/experiences";
import ExperienceCard from "@/components/sections/ExperienceCard";
import Reveal from "@/components/motion/Reveal";
import SectionHeader from "@/components/layout/SectionHeader";

export default function ExperiencesGrid() {
  return (
    <section className="section bg-background">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <SectionHeader 
          title="Explore Our Journeys" 
          label="Complete Collection" 
          className="mb-16"
        />
        <div className="grid gap-4 md:gap-6 grid-cols-1 md:grid-cols-3">
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
    </section>
  );
}
