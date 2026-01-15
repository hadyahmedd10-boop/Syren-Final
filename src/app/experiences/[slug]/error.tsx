'use client'

import { useEffect } from 'react'
import Reveal from '@/components/motion/Reveal'
import Link from 'next/link'
import SectionHeader from "@/components/layout/SectionHeader";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Experience Page Error:', error)
  }, [error])

  return (
    <main className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-xl w-full text-center">
        <SectionHeader 
          title="Experience Loading Error" 
          label="Something went wrong"
          className="mb-8"
        />
        <Reveal delay={0.1}>
          <p className="text-text-secondary mb-12 leading-relaxed">
            We encountered an issue while loading this journey. This could be a temporary connection problem or a glitch in our system.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => reset()}
              className="syren-btn w-full sm:w-auto"
            >
              TRY AGAIN
            </button>
            <Link
              href="/experiences"
              className="syren-btn-secondary w-full sm:w-auto"
            >
              BACK TO EXPERIENCES
            </Link>
          </div>
        </Reveal>
      </div>
    </main>
  )
}
