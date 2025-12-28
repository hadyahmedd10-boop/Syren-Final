import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Exclusive Egyptian Journeys | Syren",
  description: "Bespoke travel experiences in Egypt, curated for those who seek the extraordinary. Private access and seamless luxury.",
  alternates: {
    canonical: "/landing/exclusive",
  },
};

export default function LuxuryLanding() { 
  return ( 
    <main className="min-h-screen bg-black">
      <section className="min-h-[80vh] bg-background text-white flex items-center justify-center section"> 
        <div className="max-w-5xl mx-auto px-6 text-center"> 
          <h1 className="font-serif text-6xl md:text-8xl mb-6 tracking-tight"> 
            Egypt, Curated for the Few 
          </h1> 
          <p className="text-xl md:text-2xl opacity-80 mb-12 font-sans tracking-wide max-w-2xl mx-auto"> 
            Private access. Seamless luxury. Designed entirely around you. 
          </p> 
  
          <Link href="/contact" className="syren-btn px-12 py-4 text-lg"> 
            Design My Journey 
          </Link> 
        </div> 
      </section> 
    </main>
  ) 
}
