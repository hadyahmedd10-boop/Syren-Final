'use client'

import { useState } from 'react'
import { Loader2, CreditCard } from 'lucide-react'

interface CheckoutButtonProps {
  itemType: "experience" | "excursion"
  slug: string
  label?: string
}

/**
 * CheckoutButton - A client-side component to initiate Stripe Checkout sessions.
 * Uses existing .syren-btn styling with white background and gold hover as requested.
 */
export default function CheckoutButton({ 
  itemType, 
  slug, 
  label = "Reserve with Stripe" 
}: CheckoutButtonProps) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleCheckout = async () => {
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ itemType, slug }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to initiate checkout')
      }

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url
      } else {
        throw new Error('No checkout URL returned from the server')
      }
    } catch (err) {
      console.error('Checkout error:', err)
      setError(err instanceof Error ? err.message : 'An unexpected error occurred. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col gap-3 w-full max-w-sm">
      <button
        onClick={handleCheckout}
        disabled={loading}
        className="syren-btn bg-white text-black hover:bg-accent-gold disabled:opacity-70 disabled:cursor-not-allowed group w-full flex items-center justify-center gap-2"
        aria-busy={loading}
      >
        {loading ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <CreditCard className="h-4 w-4" />
        )}
        <span className="font-sans font-bold uppercase tracking-[0.2em]">
          {loading ? 'Preparing Checkout...' : label}
        </span>
      </button>
      
      {error && (
        <p className="text-red-500 text-[10px] uppercase tracking-[0.3em] text-center font-semibold animate-pulse">
          {error}
        </p>
      )}
    </div>
  )
}
