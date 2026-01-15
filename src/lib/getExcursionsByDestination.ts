import { excursions } from "@/data/excursions"; 
 
export function getExcursionsByDestination(destinationSlug: string) { 
  return excursions.filter((e) => e.destinationSlug === destinationSlug); 
}
