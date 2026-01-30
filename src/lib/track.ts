"use client";
import posthog from "posthog-js";

export function trackCta(event: string, props?: Record<string, any>) {
  try {
    posthog.capture(event, props);
  } catch {
    // no-op
  }
}
