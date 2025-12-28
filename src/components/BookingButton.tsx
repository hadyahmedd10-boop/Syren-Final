'use client'

import { CreditCard, ArrowRight } from "lucide-react"
import { usePostHog } from 'posthog-js/react'

interface BookingButtonProps {
  experienceTitle: string
  experienceSlug: string
}

export default function BookingButton({ experienceTitle, experienceSlug }: BookingButtonProps) {
  const posthog = usePostHog()

  const handleBookingClick = () => {
    if (posthog) {
      posthog.capture('checkout_clicked', {
        experience_title: experienceTitle,
        experience_slug: experienceSlug,
      })
    }
    // Logic for proceeding to booking would go here
    console.log("Proceeding to booking for:", experienceTitle)
  }

  return (
    <button 
      onClick={handleBookingClick}
      className="syren-btn w-full py-6 flex items-center justify-center gap-4 group"
    >
      <CreditCard size={20} />
      PROCEED TO SECURE BOOKING
      <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
    </button>
  )
}
