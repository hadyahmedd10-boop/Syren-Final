import ExperienceCard from "./ExperienceCard";
import Reveal from "../motion/Reveal";
import { experiences } from "@/data/experiences";

export default function PopularExperiences() {
  // Use the first 3 experiences for the home page
  const featuredExperiences = experiences.slice(0, 3);

  return (
    <section
      id="experiences"
      className="bg-background scroll-mt-24 section"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <Reveal>
          <div className="text-center mb-6 md:mb-8">
            <span className="block font-sans text-[10px] uppercase tracking-[0.4em] text-accent-gold mb-4">The Action</span>
            <h2
              id="popular-experiences-title"
              className="font-serif text-3xl md:text-5xl tracking-tight text-white"
            >
              Curated Experiences
            </h2>
            <div className="mx-auto mt-8 h-px w-20 bg-accent-gold/40" />
          </div>
        </Reveal>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          {featuredExperiences.map((experience, index) => (
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
    </section>
  );
}
