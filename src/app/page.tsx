import type { Metadata } from "next";
import SplashClient from "@/components/landing/SplashClient";

export const metadata: Metadata = {
  title: "Syren | Private Journeys & Bespoke Experiences",
  description: "Experience the extraordinary with Syren's curated private journeys. From luxury Nile cruises to exclusive desert escapes.",
};

export default function SplashPage() {
  return <SplashClient />;
}
