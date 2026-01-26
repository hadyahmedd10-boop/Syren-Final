import itineraryManifest from "@/generated/itinerary-manifest.json";

export const ITINERARY_FALLBACK_IMAGE = "/images/itineraries/fallback.jpg";

export function getItineraryDayImage(slug: string, dayNumber: number): string {
  const isDev = process.env.NODE_ENV === "development";
  const normalizedSlug = slug.toLowerCase();
  const manifest = itineraryManifest as Record<string, string[]>;
  const images = manifest[normalizedSlug];

  if (!images || images.length === 0) {
    if (isDev) {
      console.warn(`[itinerary-images] Unknown itinerary slug: "${slug}". Using fallback.`);
    }
    return ITINERARY_FALLBACK_IMAGE;
  }

  if (dayNumber < 1 || dayNumber > images.length) {
    if (isDev) {
      console.warn(`[itinerary-images] Day ${dayNumber} out of range for "${normalizedSlug}" (max: ${images.length}). Using fallback.`);
    }
    return ITINERARY_FALLBACK_IMAGE;
  }

  const src = images[dayNumber - 1];
  if (!src) {
    if (isDev) {
      console.warn(`[itinerary-images] Missing image for "${normalizedSlug}" day ${dayNumber}. Using fallback.`);
    }
    return ITINERARY_FALLBACK_IMAGE;
  }

  return src;
}
