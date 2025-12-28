  import type { Metadata } from "next";
  import Image from "next/image";
  import ExperienceCard from "@/components/sections/ExperienceCard";
  import Reveal from "@/components/motion/Reveal";
  import Script from "next/script";

  // Import images (using the ones we have for now)
  import heroImg from "../../../public/Images/hero.jpg";
  import luxuryImg from "../../../public/Images/luxury.jpg";
  import partyImg from "../../../public/Images/party.jpg";

  import { experiences } from "@/data/experiences";

  export const metadata: Metadata = {
    title: "Experiences",
    description: "Discover our collection of ultra-private, expertly curated Egyptian experiences. From desert expeditions to private yacht charters.",
    openGraph: {
      title: "Our Experiences | Syren Egypt",
      description: "Discover our collection of ultra-private, expertly curated Egyptian experiences.",
      url: "https://syren.com/experiences",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Our Experiences | Syren Egypt",
      description: "Discover our collection of ultra-private, expertly curated Egyptian experiences.",
    },
  };

  export default function ExperiencesPage() {
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": experiences.map((exp, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `https://syren.com/experiences/${exp.slug}`,
        "name": exp.title,
        "description": exp.description,
        "image": typeof exp.heroImage === 'string' ? exp.heroImage : exp.heroImage.src
      }))
    };

    return (
      <main className="min-h-screen bg-background">
        <Script
          id="experiences-json-ld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {/* Cinematic Hero Section */}
        <section className="relative h-[80vh] min-h-[600px] w-full overflow-hidden">
          <Image
            src={heroImg}
            alt="Luxury travel experience in Egypt"
            fill
            priority
            sizes="100vw"
            placeholder="blur"
            className="object-cover object-center scale-105 animate-slow-zoom"
          />
          {/* Soft Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-background dark:to-background" />
          <div className="relative mx-auto max-w-7xl px-6 pt-32 pb-20 md:px-8 md:pt-48">
            <Reveal>
              <span className="mb-4 block font-sans text-[10px] font-bold uppercase tracking-[0.4em] text-white/60">
                Collections
              </span>
              <h1 className="mb-6 font-serif text-5xl tracking-tight text-primary md:text-7xl lg:text-8xl">
                Our Experiences
              </h1>
              <p className="max-w-2xl font-sans text-lg font-light leading-relaxed tracking-wide text-white/90 md:text-xl">
                Curated journeys through the soul of Egypt. <br className="hidden md:block" />
                Private. Profound. Personal.
              </p>
            </Reveal>
          </div>
        </section>

        {/* Introduction */}
        <section className="mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-28">
          <Reveal>
            <div className="text-center">
              <h2 className="mb-8 font-serif text-3xl italic tracking-tight text-primary md:text-4xl">
                Crafting your narrative
              </h2>
              <p className="mx-auto max-w-2xl font-sans text-base leading-relaxed text-text-secondary">
                Every Syren experience is a living masterpiece, designed to transcend the ordinary. 
                From the silent majesty of the desert to the rhythmic pulse of the Nile, 
                we unveil the Egypt that remains hidden to the casual traveler.
              </p>
              <div className="mx-auto mt-12 h-px w-24 bg-accent-gold/30" />
            </div>
          </Reveal>
        </section>

        {/* Experiences Grid */}
        <section className="mx-auto max-w-7xl px-6 md:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:gap-24">
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
                />
              </Reveal>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="relative overflow-hidden bg-background py-20 md:py-28">
          <div className="mx-auto max-w-7xl px-6 md:px-8">
            <Reveal>
              <div className="rounded-2xl border border-border bg-surface p-12 text-center md:p-20">
                <h2 className="mb-6 font-serif text-4xl tracking-tight text-primary md:text-5xl">
                  Still searching for your narrative?
                </h2>
                <p className="mx-auto mb-10 max-w-2xl font-sans text-lg text-text-secondary">
                  Let our master curators design a journey as unique as you are. 
                  Private access, personal touches, and the soul of Egypt.
                </p>
                <a
                  href="https://wa.me/201000000000?text=I%20want%20to%20plan%20a%20bespoke%20journey%20with%20Syren"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="syren-btn inline-block"
                >
                  PLAN YOUR JOURNEY
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
    );
  }
