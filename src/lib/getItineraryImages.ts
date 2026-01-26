import manifest from "@/generated/itinerary-manifest.json";

const FALLBACK = "/images/hero/luxury.jpg";
export const ITINERARY_FALLBACK_IMAGE = FALLBACK;

export function getItineraryImages(slug: string): string[] {
  return (manifest as Record<string, string[]>)[slug] ?? [];
}

export function getItineraryDayImage(slug: string, day: number): string {
  const images = (manifest as Record<string, string[]>)[slug];
  if (!images) return FALLBACK;
  return images[day - 1] ?? FALLBACK;
}
