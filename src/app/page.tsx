import Hero from "@/components/sections/Hero";
import PopularExperiences from "@/components/sections/PopularExperiences";
import Testimonials from "@/components/sections/Testimonials";
import Destinations from "@/components/sections/Destinations";
import OurVision from "@/components/sections/OurVision";
import FinalCTA from "@/components/sections/FinalCTA";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Syren — Luxury Travel Experiences in Egypt",
  description:
    "Private luxury journeys through Egypt. Discover Cairo, the Nile, the Red Sea, and hidden sanctuaries — curated for the discerning traveler.",
  openGraph: {
    title: "Syren Travel",
    description: "Luxury travel, designed with soul.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Syren",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Syren",
    "image": `${process.env.NEXT_PUBLIC_SITE_URL}/og.jpg`,
    "@id": process.env.NEXT_PUBLIC_SITE_URL,
    "url": process.env.NEXT_PUBLIC_SITE_URL,
    "telephone": "+201000000000",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Zamalek",
      "addressLocality": "Cairo",
      "addressCountry": "EG"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 30.0444,
      "longitude": 31.2357
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "00:00",
      "closes": "23:59"
    },
    "sameAs": [
      "https://www.instagram.com/syren_egypt",
      "https://twitter.com/syren_egypt"
    ]
  };

  return (
    <main className="min-h-screen bg-background">
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <section>
        <Hero />
      </section>
      
      <section className="section">
        <Destinations />
      </section>

      <section className="section-tight">
        <OurVision />
      </section>

      <section className="section">
        <PopularExperiences />
      </section>

      <section className="section">
        <Testimonials />
      </section>

      <section className="section-tight">
        <FinalCTA />
      </section>
    </main>
  );
}
