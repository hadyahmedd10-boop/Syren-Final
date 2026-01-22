/**
 * Discovered Disk Path: /public/images/itineraries/
 * (Verified all lowercase)
 */

export function getItineraryDayImageSrc(slug: string, dayIndex1Based: number): string {
  const day = String(dayIndex1Based).padStart(2, '0');
  const src = `/images/itineraries/${slug}/day-${day}.jpg`;
  
  if (process.env.NODE_ENV === "development") {
    console.log("[itinerary-image]", { slug, day: dayIndex1Based, src });
  }

  // Cache busting in production if needed (can be toggled)
  // const version = process.env.NEXT_PUBLIC_BUILD_ID || "1";
  // return `${src}?v=${version}`;
  
  return src;
}

export const ITINERARY_FALLBACK_IMAGE = "/images/itineraries/fallback.jpg";
