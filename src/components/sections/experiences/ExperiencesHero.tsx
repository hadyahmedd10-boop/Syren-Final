import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { HERO_IMAGES } from "@/lib/images";

export default function ExperiencesHero() {
  return (
    <div className="relative min-h-[48vh] md:min-h-[62vh] lg:min-h-[68vh] w-full overflow-hidden pb-4 md:pb-6">
      <Image
        src={HERO_IMAGES.home}
        alt="Bespoke luxury travel experiences meticulously curated for the discerning traveler"
        fill
        priority
        sizes="100vw"
        placeholder="blur"
        className="object-cover object-center scale-105 animate-slow-zoom"
      />
      {/* Soft Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-background dark:to-background" />
      <div className="relative mx-auto max-w-7xl container-x text-center md:text-left">
        <Reveal>
          <span className="mb-4 mt-4 block font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-white/60">
            Collections
          </span>
          <h1 className="mb-5 mt-4 font-serif text-4xl sm:text-5xl tracking-tight text-primary md:text-7xl lg:text-8xl">
            Our Experiences
          </h1>
          <p className="mt-3 max-w-2xl font-sans text-base sm:text-lg font-light leading-relaxed tracking-wide text-white/90 md:text-xl">
            Curated journeys through the soul of Egypt. <br className="hidden md:block" />
            Private. Profound. Personal.
          </p>
        </Reveal>
      </div>
    </div>
  );
}
