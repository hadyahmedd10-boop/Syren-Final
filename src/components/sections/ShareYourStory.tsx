'use client' 
 
import { useState, useEffect, useRef } from 'react' 
import Image from 'next/image'
import { HERO_IMAGES } from '@/lib/images'
import { X, ChevronDown, Star } from 'lucide-react' 
import { motion, AnimatePresence } from 'framer-motion'
import { fadeIn, fadeInUp } from '@/lib/animations'
import { z } from 'zod'

export default function ShareYourStory() { 
  const [open, setOpen] = useState(false) 
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [fieldErrors, setFieldErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
    rating?: string;
  }>({});
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const modalRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const isFirstRender = useRef(true)

  const storySchema = z.object({
    name: z.string().trim().min(2, "Please enter your name."),
    email: z.preprocess(
      (val) => (typeof val === "string" && val.trim() === "" ? undefined : val),
      z.string().email("Please enter a valid email.").optional()
    ),
    message: z
      .string()
      .trim()
      .min(20, "Please write at least 20 characters.")
      .max(1000, "Please keep your story under 1000 characters."),
    rating: z.number().min(1, "Please select a rating.").max(5, "Please select a rating."),
    experience_slug: z.preprocess(
      (val) => (typeof val === "string" && val.trim() === "" ? undefined : val),
      z.string().optional()
    ),
    website: z.preprocess(
      (val) => (typeof val === "string" && val.trim() === "" ? undefined : val),
      z.string().optional()
    ),
  })

  // Escape key handling
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        setOpen(false)
      }
    }
    window.addEventListener('keydown', handleEscape)
    return () => window.removeEventListener('keydown', handleEscape)
  }, [open])

  // Focus trap
  useEffect(() => {
    if (open && modalRef.current) {
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      )
      const firstElement = focusableElements[0] as HTMLElement
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement

      const handleTab = (e: KeyboardEvent) => {
        if (e.key !== 'Tab') return

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault()
            lastElement.focus()
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault()
            firstElement.focus()
          }
        }
      }

      const currentModalRef = modalRef.current;
      currentModalRef?.addEventListener('keydown', handleTab)
      firstElement.focus()

      return () => currentModalRef?.removeEventListener('keydown', handleTab)
    } else if (!open && !isFirstRender.current) {
      triggerRef.current?.focus()
    }
    
    if (isFirstRender.current) {
      isFirstRender.current = false;
    }
  }, [open])

  const openModal = () => {
    setStatus("idle")
    setErrorMessage("")
    setFieldErrors({})
    setRating(0)
    setHoverRating(0)
    setOpen(true)
  }

  const closeModal = () => {
    setOpen(false)
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 
    if (status === "loading") {
      return
    }
    const form = e.currentTarget 
    const formData = new FormData(form) 
    const payload = {
      name: String(formData.get('name') ?? '').trim(),
      email: String(formData.get('email') ?? '').trim(),
      message: String(formData.get('message') ?? '').trim(),
      rating,
      experience_slug: String(formData.get('experience_slug') ?? '').trim(),
      website: String(formData.get('website') ?? '').trim(),
    }
    const parsed = storySchema.safeParse(payload)
    if (!parsed.success) {
      const errors = parsed.error.flatten().fieldErrors
      setFieldErrors({
        name: errors.name?.[0],
        email: errors.email?.[0],
        message: errors.message?.[0],
        rating: errors.rating?.[0],
      })
      setStatus("error");
      setErrorMessage("Please review the highlighted fields.");
      return;
    }
    if (payload.website) {
      setStatus("success");
      setErrorMessage("");
      setFieldErrors({});
      form.reset()
      setRating(0)
      setHoverRating(0)
      setTimeout(() => setOpen(false), 2000)
      return;
    }
    setStatus("loading");
    setErrorMessage("");
    setFieldErrors({});

    try {
      const controller = new AbortController()
      const timeoutId = window.setTimeout(() => controller.abort(), 12000)
      const response = await fetch('/api/testimonials', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(parsed.data),
        signal: controller.signal,
      });
      window.clearTimeout(timeoutId)

      const data = await response.json().catch(() => ({}));

      if (response.ok) {
        setStatus("success");
        form.reset()
        setRating(0)
        setHoverRating(0)
        setTimeout(() => setOpen(false), 3000)
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Try again.");
      }
    } catch (err) {
      setStatus("error");
      if (err instanceof Error && err.name === "AbortError") {
        setErrorMessage("Request timed out. Please try again.");
      } else {
        setErrorMessage("Something went wrong. Try again.");
      }
    }
  } 

  return ( 
    <div className="relative z-10"> 
      <div className="flex justify-center mb-8">
        <button 
          ref={triggerRef}
          onClick={() => (open ? closeModal() : openModal())} 
          className="syren-btn-secondary mt-8" 
          aria-expanded={open}
          aria-controls="story-modal"
        > 
          Share your experience with Syren 
        </button> 
      </div>

      <AnimatePresence>
        {open && ( 
          <>
            {/* Backdrop */}
            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit="hidden"
              onClick={closeModal}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
              role="presentation"
            />
            
            <motion.div 
              ref={modalRef}
              id="story-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby="modal-title"
              variants={fadeInUp}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-xl max-h-[85vh] bg-surface p-6 sm:p-8 md:p-12 rounded-2xl border border-border shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-y-auto z-[101]"
            > 
              <div className="absolute inset-0 z-0">
                <Image 
                  src={HERO_IMAGES.home} 
                  alt="An evocative scene of luxury exploration across the timeless landscapes of Egypt" 
                  fill 
                  sizes="100vw"
                  placeholder="blur"
                  className="object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-surface/95 via-surface/75 to-surface/95 backdrop-blur-[3px]" />
                <div className="absolute inset-0 bg-[radial-gradient(120%_80%_at_50%_0%,rgba(207,174,112,0.12),transparent_60%)] opacity-70" />
              </div>

              <div className="relative z-10">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent" />
              
              <button 
                onClick={closeModal}
                className="absolute top-2 right-2 sm:top-0 sm:-right-4 p-2 text-text-secondary hover:text-white hover:bg-white/5 rounded-full transition-all"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              
              <h3 id="modal-title" className="text-3xl font-serif mb-3 text-white">How was your journey?</h3> 
              <p className="text-text-secondary text-sm mb-10 italic opacity-80">Your story inspires the next generation of travelers.</p> 

              {status === "success" && ( 
                <p className="text-green-400 mb-6 bg-green-400/10 py-3 rounded-lg border border-green-400/20 text-sm px-4"> 
                  Thank you! Your review will appear once approved. 
                </p> 
              )} 

              {status === "error" && ( 
                <p className="text-red-400 mb-6 bg-red-400/10 py-3 rounded-lg border border-red-400/20 text-sm px-4"> 
                  {errorMessage}
                </p> 
              )} 

              <form onSubmit={handleSubmit} className="space-y-4"> 
                {/* Honeypot - hidden from users */}
                <input
                  type="text"
                  name="website"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <input 
                      name="name" 
                      placeholder="Your Name" 
                      required 
                      className="syren-input"
                      aria-invalid={!!fieldErrors.name}
                      onChange={() => fieldErrors.name && setFieldErrors(prev => ({ ...prev, name: undefined }))}
                    /> 
                    {fieldErrors.name && (
                      <p className="text-xs text-red-400">{fieldErrors.name}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <input 
                      name="email" 
                      type="email" 
                      placeholder="Email" 
                      className="syren-input"
                      aria-invalid={!!fieldErrors.email}
                      onChange={() => fieldErrors.email && setFieldErrors(prev => ({ ...prev, email: undefined }))}
                    /> 
                    {fieldErrors.email && (
                      <p className="text-xs text-red-400">{fieldErrors.email}</p>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <select name="experience_slug" className="syren-input appearance-none pr-10"> 
                    <option value="">Related experience (optional)</option> 
                    <option value="nile-cruise">Nile Cruise</option> 
                    <option value="desert-retreat">Desert Retreat</option> 
                  </select>
                  <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none" />
                </div>

                <div className="space-y-2">
                  <textarea 
                    name="message" 
                    rows={4} 
                    placeholder="Your story..." 
                    required 
                    className="syren-input"
                    aria-invalid={!!fieldErrors.message}
                    onChange={() => fieldErrors.message && setFieldErrors(prev => ({ ...prev, message: undefined }))}
                  /> 
                  {fieldErrors.message && (
                    <p className="text-xs text-red-400">{fieldErrors.message}</p>
                  )}
                </div>

                <div className="rounded-md border border-border bg-surface/70 px-4 py-3">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs uppercase tracking-[0.3em] text-text-secondary">Rating</span>
                    <div
                      className="flex items-center gap-1"
                      onMouseLeave={() => setHoverRating(0)}
                    >
                      {[1, 2, 3, 4, 5].map((value) => {
                        const filled = (hoverRating || rating) >= value
                        return (
                          <button
                            key={value}
                            type="button"
                            onClick={() => {
                              setRating(value)
                              if (fieldErrors.rating) {
                                setFieldErrors(prev => ({ ...prev, rating: undefined }))
                              }
                            }}
                            onMouseEnter={() => setHoverRating(value)}
                            onFocus={() => setHoverRating(value)}
                            className="rounded-full p-1 transition-colors"
                            aria-label={`${value} star${value > 1 ? 's' : ''}`}
                          >
                            <Star
                              size={18}
                              className={filled ? 'text-accent-gold fill-accent-gold' : 'text-white/20'}
                            />
                          </button>
                        )
                      })}
                    </div>
                  </div>
                  <input
                    type="number"
                    name="rating"
                    min={1}
                    max={5}
                    value={rating}
                    readOnly
                    tabIndex={-1}
                    className="sr-only"
                    required
                  />
                </div>
                {fieldErrors.rating && (
                  <p className="text-xs text-red-400">{fieldErrors.rating}</p>
                )}

                <button 
                  type="submit"
                  disabled={status === "loading"} 
                  className="syren-btn-primary w-full mt-4 disabled:opacity-50 disabled:cursor-not-allowed"
                > 
                  {status === "loading" ? 'Submitting...' : 'Submit Story'} 
                </button> 
              </form> 
              </div>
            </motion.div> 
          </>
        )} 
      </AnimatePresence>
    </div> 
  ) 
}
