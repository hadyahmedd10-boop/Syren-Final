import Hero from "@/components/sections/Hero";
import PopularExperiences from "@/components/sections/PopularExperiences";
import Testimonials from "@/components/sections/Testimonials";
import Destinations from "@/components/sections/Destinations";
import OurVision from "@/components/sections/OurVision";
import FinalCTA from "@/components/sections/FinalCTA";
import type { Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Syren | Experience Egypt Beyond the Expected",
  description: "Ultra-private, expertly curated Egyptian journeys. From desert expeditions to private yacht charters, discover the soul of Egypt through local eyes.",
  openGraph: {
    title: "Syren | Experience Egypt Beyond the Expected",
    description: "Ultra-private, expertly curated Egyptian journeys. From desert expeditions to private yacht charters, discover the soul of Egypt through local eyes.",
    url: "https://syren.com",
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Syren",
    "image": "https://syren.com/og-image.jpg",
    "@id": "https://syren.com",
    "url": "https://syren.com",
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
    <>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <div className="section-fade h-32" />
      <Destinations />
      <div className="section-fade h-32" />
      <OurVision />
      <div className="section-fade h-32" />
      <PopularExperiences />
      <div className="section-fade h-32" />
      <Testimonials />
      <div className="section-fade h-32" />
      <FinalCTA />
    </>
  );
}
