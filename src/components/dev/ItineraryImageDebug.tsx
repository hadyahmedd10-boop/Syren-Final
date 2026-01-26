"use client";

import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { getItineraryImages } from "@/lib/getItineraryImages";

type ImageStatus = "loading" | "loaded" | "failed";

interface ItineraryImageDebugProps {
  slug: string;
}

export default function ItineraryImageDebug({ slug }: ItineraryImageDebugProps) {
  const searchParams = useSearchParams();
  const debugEnabled = searchParams.get("debugImages") === "1";
  const isProduction = process.env.NODE_ENV === "production";
  const images = useMemo(() => getItineraryImages(slug), [slug]);
  const shouldRender = debugEnabled && !isProduction && images.length > 0;

  const [statuses, setStatuses] = useState<Record<number, ImageStatus>>({});

  if (!shouldRender) {
    return null;
  }

  return (
    <div className="mt-12 rounded-2xl border border-dashed border-accent-gold/30 bg-black/40 p-6">
      <div className="mb-6 flex flex-col gap-2">
        <h3 className="font-serif text-xl text-accent-gold">Itinerary Image Debug</h3>
        <p className="text-xs uppercase tracking-[0.25em] text-white/50">Debug Only</p>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {images.map((src, index) => {
          const day = index + 1;
          const status = statuses[day] ?? "loading";
          return (
            <div key={day} className="rounded-xl border border-white/10 bg-background/60 p-4">
              <div className="mb-3 flex items-center justify-between">
                <span className="text-xs uppercase tracking-[0.2em] text-white/60">Day {day}</span>
                <span className="text-xs text-white/70">
                  {status === "loaded" ? "loaded ✅" : status === "failed" ? "failed ❌" : "loading"}
                </span>
              </div>
              <div className="mb-3 overflow-hidden rounded-lg border border-white/5 bg-black/40">
                <img
                  src={src}
                  alt={`Day ${day} itinerary`}
                  className="h-40 w-full object-cover"
                  onLoad={() => setStatuses((prev) => ({ ...prev, [day]: "loaded" }))}
                  onError={() => setStatuses((prev) => ({ ...prev, [day]: "failed" }))}
                />
              </div>
              <p className="break-all text-[10px] text-white/50">{src}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
