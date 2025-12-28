'use client'

import { CreditCard, ArrowRight, Loader2 } from "lucide-react"
import { usePostHog } from 'posthog-js/react'
import { useState } from 'react'

interface BookingButtonProps {
  experienceTitle: string
  experienceSlug: string
  price: number
}

export default function BookingButton({ experienceTitle, experienceSlug, price }: BookingButtonProps) {
  const posthog = usePostHog()
  const [loading, setLoading] = useState(false)

  const handleBookingClick = async () => {
    try {
      setLoading(true)
      
      if (posthog) {
        posthog.capture('checkout_clicked', {
          experience_title: experienceTitle,
          experience_slug: experienceSlug,
        })
      }

      const res = await fetch("/api/checkout", { 
        method: "POST", 
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          title: experienceTitle, 
          price: price, 
          slug: experienceSlug,
        }), 
      }) 
      
      const { url, error } = await res.json() 
      
      if (error) {
        throw new Error(error)
      }

      if (url) {
        window.location.href = url 
      }
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : "Something went wrong with the booking. Please try again."
      alert(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button 
      onClick={handleBookingClick}
      disabled={loading}
      className="syren-btn w-full py-6 flex items-center justify-center gap-4 group disabled:opacity-70 disabled:cursor-not-allowed"
    >
      {loading ? (
        <Loader2 size={20} className="animate-spin" />
      ) : (
        <CreditCard size={20} />
      )}
      {loading ? "PREPARING SECURE CHECKOUT..." : "PROCEED TO SECURE BOOKING"}
      {!loading && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
    </button>
  )
}
