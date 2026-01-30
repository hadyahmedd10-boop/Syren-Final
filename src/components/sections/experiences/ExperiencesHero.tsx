import HeroShell from "@/components/ui/HeroShell";
import { HERO_IMAGES } from "@/lib/images";

export default function ExperiencesHero() {
  return (
    <HeroShell
      backgroundImage={HERO_IMAGES.home.src}
      eyebrow="Collections"
      title="Our Experiences"
      subtitle={
        <>
          Curated journeys through the soul of Egypt. <br className="hidden md:block" />
          Private. Profound. Personal.
        </>
      }
      heightClassName="min-h-[48vh] md:min-h-[62vh] lg:min-h-[68vh]"
    />
  );
}
