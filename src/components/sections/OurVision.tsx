import Reveal from "../motion/Reveal";

const stats = [
  { value: "20+", label: "Years of Expertise" },
  { value: "50k+", label: "Bespoke Journeys" },
  { value: "24/7", label: "Private Concierge" },
  { value: "90k+", label: "Yearly Travelers" },
] as const;

export default function OurVision() {
  return (
    <section 
      id="vision" 
      aria-labelledby="vision-title" 
      className="bg-background section scroll-mt-24"
    >
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <Reveal>
          <div className="text-center mb-8 md:mb-12">
            <span className="block font-sans text-[10px] uppercase tracking-[0.4em] text-accent-gold mb-4">The Soul</span>
            <h2
              id="vision-title"
              className="font-serif text-3xl md:text-5xl tracking-tight text-white"
            >
              The Vision of Syren
            </h2>
            <div className="mx-auto mt-8 h-px w-20 bg-accent-gold/40" />
          </div>
        </Reveal>
        
        <div className="space-y-6 max-w-2xl mx-auto">
          <Reveal delay={0.2}>
            <p className="font-serif text-xl md:text-2xl leading-[1.4] text-white text-center italic mb-8">
              &ldquo;We believe that travel is most profound when it feels like a homecoming—a connection that goes beyond the surface to the ancient soul of our home.&rdquo;
            </p>
          </Reveal>
          
          <Reveal delay={0.3}>
            <p className="font-sans text-xs md:text-sm leading-relaxed text-white/60 text-center max-w-xl mx-auto">
              Every journey we curate is a private dialogue between your curiosity and our heritage. By blending deep local insight with a meticulous eye for personalization, we ensure that your experience is as unique as a signature, opening doors to the authentic pulse of Egypt that few ever get to witness.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <p className="font-sans text-xs md:text-sm leading-relaxed text-white/60 text-center max-w-xl mx-auto">
              Our commitment is to your absolute peace of mind, providing a sanctuary of safety and seamless logistics across every landscape. Whether standing in the shadow of the Pyramids or navigating the energy of a Cairo midnight, you are invited to see Egypt through our eyes—with depth, with soul, and with the unwavering care of family.
            </p>
          </Reveal>
        </div>
      </div>

      {/* Statistics Block */}
      <div className="w-full bg-background section-tight border-y border-white/[0.04] relative overflow-hidden">
        {/* Subtle Decorative Background Element */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-accent/20 to-transparent md:hidden" />
        </div>

        <div className="mx-auto max-w-5xl px-6 md:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 md:gap-y-0 items-center justify-center">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={0.1 * (i + 1)}>
                <div className="flex flex-col items-center text-center px-6 relative group">
                  <span className="font-serif text-4xl md:text-5xl font-medium text-primary mb-3 tracking-tight transition-all duration-700 ease-[cubic-bezier(0.21,0.47,0.32,0.98)] group-hover:scale-105">
                    {stat.value}
                  </span>
                  <div className="flex flex-col items-center gap-2">
                    <span className="font-sans text-[9px] md:text-[10px] uppercase tracking-[0.3em] text-text-secondary font-semibold group-hover:text-text-primary transition-colors duration-500">
                      {stat.label}
                    </span>
                    {/* Tiny Decorative Gold Dot */}
                    <div className="h-0.5 w-0.5 rounded-full bg-accent-gold/40 group-hover:bg-accent-gold transition-colors duration-500" />
                  </div>
                  
                  {/* Vertical Divider for Desktop */}
                  {i < stats.length - 1 && (
                    <div className="hidden md:block absolute -right-px top-1/2 -translate-y-1/2 h-12 w-px bg-gradient-to-b from-transparent via-white/[0.06] to-transparent" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
