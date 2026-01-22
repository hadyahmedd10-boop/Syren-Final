import { destinations } from "@/data/destinations";
import { excursions } from "@/data/excursions";

/**
 * Validates that all excursions have a destinationSlug that exists in the destinations data.
 * This should only run in development mode.
 */
export function validateExcursionData() {
  if (process.env.NODE_ENV !== "development") return;

  const validDestinationSlugs = new Set(destinations.map((d) => d.slug));

  excursions.forEach((excursion) => {
    if (!validDestinationSlugs.has(excursion.destinationSlug)) {
      console.warn(
        `[Data Validation] Excursion "${excursion.title}" (${excursion.slug}) has an unknown destinationSlug: "${excursion.destinationSlug}".`
      );
    }
  });

  // Also check if excursions listed in destinations actually exist
  destinations.forEach((dest) => {
    dest.excursionSlugs?.forEach((exSlug) => {
      const exists = excursions.some((e) => e.slug === exSlug);
      if (!exists) {
        console.warn(
          `[Data Validation] Destination "${dest.name}" lists excursion slug "${exSlug}" but it was not found in excursions data.`
        );
      }
    });
  });
}
