import manifest from "@/generated/itinerary-manifest.json";

export async function GET() {
  return Response.json({ itineraries: manifest });
}
