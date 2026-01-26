'use client';

import { useMemo } from "react";

/**
 * VercelLive component handles conditional loading of 
 * Vercel Toolbar/Live feedback tools.
 * 
 * Strict dev-only guard:
 * 1. Only renders in development mode
 * 2. Only renders on localhost
 * 3. Requires NEXT_PUBLIC_ENABLE_VERCEL_LIVE="true"
 */
export default function VercelLive() {
  const shouldRender = useMemo(() => {
    if (typeof window === "undefined") return false;
    const isDev = process.env.NODE_ENV === "development";
    const enableLive = process.env.NEXT_PUBLIC_ENABLE_VERCEL_LIVE === "true";
    const isLocal = window.location.hostname === "localhost" || window.location.hostname === "127.0.0.1";
    return isDev && isLocal && enableLive;
  }, []);

  if (!shouldRender) return null;

  return (
    <>
      {/* 
        The Vercel Toolbar can be dynamically imported here if needed:
        import("@vercel/toolbar/next").then(({ VercelToolbar }) => { ... })
      */}
    </>
  );
}
