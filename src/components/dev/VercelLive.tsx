'use client';

import { Analytics } from "@vercel/analytics/react";
import { useEffect, useState } from "react";

/**
 * VercelLive component handles conditional loading of Vercel Analytics and 
 * Vercel Toolbar/Live feedback tools.
 * 
 * Disabled Vercel Live/Feedback outside local dev because it causes 
 * net::ERR_ABORTED /.well-known/vercel/jwe errors in Preview and Production.
 */
export default function VercelLive() {
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    const isDev = process.env.NODE_ENV === "development";
    const enableLive = process.env.NEXT_PUBLIC_ENABLE_VERCEL_LIVE === "true";
    
    if (isDev && enableLive) {
      setShouldRender(true);
    }
  }, []);

  if (!shouldRender) return null;

  return (
    <>
      <Analytics />
      {/* 
        The Vercel Toolbar would be dynamically imported here if needed:
        import("@vercel/toolbar/next").then(({ VercelToolbar }) => { ... })
      */}
    </>
  );
}
