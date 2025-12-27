import Reveal from "../motion/Reveal";
import Image from "next/image";
import Link from "next/link";
import { destinations } from "@/data/destinations";

export default function Destinations() {
  return (
    <section
      id="destinations"
      aria-labelledby="destinations-title"
      className="relative bg-background scroll-mt-24 py-12 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <div className="mb-12 text-center md:mb-16">
          <Reveal>
            <span className="block font-sans text-[9px] uppercase tracking-[0.4em] text-accent-gold mb-3">The Landscape</span>
            <h2
              id="destinations-title"
              className="font-serif text-4xl tracking-tight text-primary md:text-5xl"
            >
              The Map of Syren
            </h2>
            <div className="mx-auto mt-6 h-px w-16 bg-accent-gold/40" />
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-6 lg:gap-8">
          {destinations.map((dest, index) => (
            <Reveal key={dest.slug} delay={0.1 * (index + 1)}>
              <article className={`group relative flex flex-col ${index === 1 ? 'md:mt-8' : ''} transition-all duration-500 ease-out hover:-translate-y-0.5`}>
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-surface border border-border transition-all duration-500 ease-out group-hover:border-primary/30">
                  <Image
                    src={dest.heroImage}
                    alt={dest.name}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                    placeholder="blur"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-90" />
                  
                  {/* Subtle Label for Mobile/Quick Scan */}
                  <div className="absolute bottom-5 left-5 right-5 md:hidden">
                    <h3 className="font-serif text-xl font-medium tracking-tight text-accent-gold">
                      {dest.name}
                    </h3>
                  </div>
                </div>

                <div className="mt-6 flex flex-col text-center md:text-left flex-grow">
                  <div className="relative">
                    <span className="absolute -left-3 -top-5 font-serif text-5xl text-white/5 select-none hidden md:block group-hover:text-primary/10 transition-colors duration-500">
                      0{index + 1}
                    </span>
                    <h3 className="hidden md:block font-serif text-2xl font-medium tracking-tight text-accent-gold relative z-10 transition-colors duration-500">
                      <Link href={`/destinations/${dest.slug}`} className="focus:outline-none">
                        <span className="absolute inset-0 z-20" aria-hidden="true" />
                        {dest.name}
                      </Link>
                    </h3>
                  </div>
                  
                  {/* Mobile Link Overlay */}
                  <Link href={`/destinations/${dest.slug}`} className="absolute inset-0 z-20 md:hidden" aria-label={`View ${dest.name}`}>
                    <span className="sr-only">View {dest.name}</span>
                  </Link>

                  <div className="mt-3 h-px w-10 bg-accent-gold/20 md:w-12 transition-all duration-500 group-hover:w-16 group-hover:bg-primary/40" />
                  <p className="mt-4 font-sans text-xs leading-relaxed text-white/40 md:text-sm line-clamp-2">
                    {dest.description}
                  </p>
                  
                  <div className="mt-auto pt-6">
                    <Link href={`/destinations/${dest.slug}`} className="syren-btn-secondary py-2 text-[9px] w-full md:w-auto text-center block">
                      Explore {dest.name}
                    </Link>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
