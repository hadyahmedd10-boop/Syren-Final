'use client'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'

const isValidKey = process.env.NEXT_PUBLIC_POSTHOG_KEY && 
                 process.env.NEXT_PUBLIC_POSTHOG_KEY !== 'phc_...' &&
                 !process.env.NEXT_PUBLIC_POSTHOG_KEY.includes('...');

if (typeof window !== 'undefined') {
  if (isValidKey) {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
      person_profiles: 'identified_only',
      capture_pageview: false
    })
  }
}


export function PHProvider({ children }: { children: React.ReactNode }) {
  if (!isValidKey) {
    return <>{children}</>;
  }
  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}
