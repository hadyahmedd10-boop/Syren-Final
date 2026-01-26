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
}
