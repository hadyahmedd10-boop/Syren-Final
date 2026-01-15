'use client' 
 
import { useState, useEffect, useRef } from 'react' 
import Image from 'next/image'
import image from "../../../public/images/hero/cairo.jpg"
import { X, ChevronDown } from 'lucide-react' 
import { motion, AnimatePresence } from 'framer-motion'
import { fadeIn, fadeInUp } from '@/lib/animations'

export default function ShareYourStory() { 
  const [open, setOpen] = useState(false) 
  const [loading, setLoading] = useState(false) 
  const [success, setSuccess] = useState(false) 
  const modalRef = useRef<HTMLDivElement>(null)
  const triggerRef = useRef<HTMLButtonElement>(null)
  const isFirstRender = useRef(true)

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

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 
    setLoading(true) 
    setSuccess(false)
    
    const form = e.currentTarget 
    const formData = new FormData(form) 

    try {
      const response = await fetch('/api/testimonials/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.get('name'), 
          email: formData.get('email'), 
          message: formData.get('message'), 
          rating: Number(formData.get('rating')),
          experience_slug: formData.get('experience_slug'),
          honeypot: formData.get('honeypot')
        }),
      });

      if (response.ok) {
        setSuccess(true) 
        form.reset()
        setTimeout(() => setOpen(false), 3000)
      } else {
        const data = await response.json();
        alert(data.error || "Something went wrong. Please try again.");
      }
    } catch {
      alert("Failed to submit. Please check your connection.");
    } finally {
      setLoading(false) 
    }
  } 

  return ( 
    <div className="relative z-10"> 
      <div className="flex justify-center mb-8">
        <button 
          ref={triggerRef}
          onClick={() => setOpen(!open)} 
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
              onClick={() => setOpen(false)}
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
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[calc(100%-2rem)] max-w-xl bg-surface p-12 rounded-3xl border border-border shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden z-[101]"
            > 
              <div className="absolute inset-0 z-0">
                <Image 
                  src={image} 
                  alt="Luxury travel in Egypt" 
                  fill 
                  sizes="100vw"
                  placeholder="blur"
                  className="object-cover opacity-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-surface/80 to-surface" />
              </div>

              <div className="relative z-10">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent" />
              
              <button 
                onClick={() => setOpen(false)}
                className="absolute top-0 -right-4 p-2 text-text-secondary hover:text-white hover:bg-white/5 rounded-full transition-all"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
              
              <h3 id="modal-title" className="text-3xl font-serif mb-3 text-white">How was your journey?</h3> 
              <p className="text-text-secondary text-sm mb-10 italic opacity-80">Your story inspires the next generation of travelers.</p> 

              {success && ( 
                <p className="text-green-400 mb-6 bg-green-400/10 py-3 rounded-lg border border-green-400/20 text-sm"> 
                  Thank you! Your review will appear once approved. 
                </p> 
              )} 

              <form onSubmit={handleSubmit} className="space-y-4"> 
                {/* Honeypot - hidden from users */}
                <input
                  type="text"
                  name="honeypot"
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input name="name" placeholder="Your Name" required className="syren-input" /> 
                  <input name="email" type="email" placeholder="Email (optional)" className="syren-input" /> 
                </div>

                <div className="relative">
                  <select name="experience_slug" className="syren-input appearance-none pr-10"> 
                    <option value="">Related experience (optional)</option> 
                    <option value="nile-cruise">Nile Cruise</option> 
                    <option value="desert-retreat">Desert Retreat</option> 
                  </select>
                  <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none" />
                </div>

                <textarea name="message" placeholder="Describe your experience with Syren..." required className="syren-input h-32 resize-none" /> 

                <div className="relative">
                  <select name="rating" required className="syren-input appearance-none pr-10"> 
                    <option value="">Rating</option> 
                    {[5,4,3,2,1].map(r => ( 
                      <option key={r} value={r}>{r} Stars</option> 
                    ))} 
                  </select> 
                  <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-text-secondary pointer-events-none" />
                </div>

                <button disabled={loading} className="syren-btn-primary w-full mt-4"> 
                  {loading ? 'Sending...' : 'Post Experience'} 
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

