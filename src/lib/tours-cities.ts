export const CITY_ORDER = [ 
  "All Cities", 
  "Cairo", 
  "Luxor", 
  "Aswan", 
  "Hurghada", 
  "Alexandria", 
  "Other", 
] as const; 

export function normalizeCity(city?: string) { 
  const c = (city || "").trim(); 
  return c.length ? c : "Other"; 
}
