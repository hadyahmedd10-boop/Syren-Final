import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nile River Journeys | Syren",
  description: "Experience the sacred flow of the Nile. Private dahabiyas, temple visits, and soul-stirring landscapes.",
  alternates: {
    canonical: "/landing/nile-journey",
  },
};

export default function NileJourneyLanding() { 
  return ( 
    <main className="min-h-screen bg-[#020617]">
      <section className="min-h-[80vh] text-white flex items-center justify-center section bg-background relative overflow-hidden"> 
        {/* Soft emerald glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-emerald-500/5 rounded-full blur-[150px]" />
        
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10"> 
          <span className="text-emerald-400/60 font-sans tracking-[0.3em] uppercase text-sm mb-4 block">The Sacred River</span>
          <h1 className="font-serif text-6xl md:text-8xl mb-6 tracking-tight"> 
            Sacred Lands <br/>of Gods 
          </h1> 
          <p className="text-xl md:text-2xl opacity-80 mb-12 font-sans tracking-wide max-w-2xl mx-auto"> 
            A journey through Egypt’s most powerful temples and the calm flow of the Nile. Slow, majestic, and deeply spiritual.
          </p> 
  
          <Link href="/contact" className="syren-btn px-12 py-4 text-lg border-emerald-400/30 hover:bg-emerald-400/10"> 
            Begin My Pilgrimage 
          </Link> 
        </div> 
      </section> 
    </main>
  ) 
}
