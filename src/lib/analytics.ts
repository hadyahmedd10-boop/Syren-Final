/**
 * Analytics utility for Syren
 * Stub implementation for development tracking
 */

type EventPayload = Record<string, string | number | boolean | null | undefined>;

export function track(eventName: string, payload?: EventPayload) {
  // Only log in development
  if (process.env.NODE_ENV === 'development') {
    console.log(`[Analytics] Track Event: ${eventName}`, payload || '');
  }

  // Future integration points:
  // - window.gtag('event', eventName, payload)
  // - window.fbq('trackCustom', eventName, payload)
}
