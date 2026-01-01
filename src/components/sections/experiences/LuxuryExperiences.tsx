import { experiences } from "@/data/experiences";
import ExperienceCard from "@/components/sections/ExperienceCard";
import Reveal from "@/components/motion/Reveal";

export default function LuxuryExperiences() {
  const luxury = experiences.filter(exp => exp.price && exp.price.amount >= 3000);

  return (
    <div className="mx-auto max-w-7xl px-6 md:px-8">
      <div className="mb-12 text-center md:text-left">
        <Reveal>
          <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent-gold mb-4 block">The Pinnacle</span>
          <h2 className="font-serif text-4xl tracking-tight text-primary md:text-5xl">Luxury Collections</h2>
        </Reveal>
      </div>
      <div className="grid gap-6 md:gap-8 grid-cols-1 md:grid-cols-3">
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
