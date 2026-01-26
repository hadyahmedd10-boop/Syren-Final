import { NextResponse } from "next/server";
import itineraryManifest from "@/generated/itinerary-manifest.json";
import fs from "fs";
import path from "path";

export async function GET() {
  const missing: string[] = [];
  const present: string[] = [];
  let fsWarning: string | null = null;

  const publicDir = path.join(process.cwd(), "public");

  try {
    const manifest = itineraryManifest as Record<string, string[]>;
    Object.values(manifest).forEach((assets) => {
      assets.forEach((assetPath) => {
        const safePath = assetPath.replace(/^\/+/, "");
        const fullPath = path.join(publicDir, safePath);

        try {
          if (fs.existsSync(fullPath)) {
            present.push(assetPath);
          } else {
            missing.push(assetPath);
          }
        } catch {
          fsWarning = "Filesystem access restricted or error occurred during check.";
        }
      });
    });
  } catch {
    fsWarning = "Failed to initiate asset audit.";
  }

  return NextResponse.json({
    description: "Audit of itinerary image assets using the manifest.",
    warning: fsWarning,
    manifest: itineraryManifest,
    present,
    missing,
    summary: {
      presentCount: present.length,
      missingCount: missing.length,
      totalExpected: present.length + missing.length,
    },
  });
}
