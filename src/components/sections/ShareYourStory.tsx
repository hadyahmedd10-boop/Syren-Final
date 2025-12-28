'use client' 
 
import { useState } from 'react' 
import { supabase } from '@/lib/supabaseClient' 
import { MessageSquarePlus, X, Sparkles, ChevronDown } from 'lucide-react' 
import { motion, AnimatePresence } from 'framer-motion'

export default function ShareYourStory() { 
  const [open, setOpen] = useState(false) 
  const [loading, setLoading] = useState(false) 
  const [success, setSuccess] = useState(false) 

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 

    if (!supabase) {
      alert("Please configure Supabase to submit stories.")
      return
    }

    setLoading(true) 

    const form = e.currentTarget 
    const formData = new FormData(form) 

    const { error } = await supabase.from('testimonials').insert({ 
      name: formData.get('name'), 
      email: formData.get('email'), 
      message: formData.get('message'), 
      rating: Number(formData.get('rating')),
      experience_slug: formData.get('experience_slug')
    }) 

    setLoading(false) 
    if (!error) { 
      setSuccess(true) 
      form.reset() 
    } 
  } 

  return ( 
    <div className="relative z-10"> 
      <div className="flex justify-center mb-16">
        <button 
          onClick={() => setOpen(!open)} 
          className="group relative flex items-center gap-4 px-8 py-3 rounded-full bg-surface/50 border border-accent-gold/20 text-accent-gold hover:border-accent-gold hover:bg-accent-gold hover:text-black transition-all duration-700 shadow-lg hover:shadow-accent-gold/20"
          title="Share your experience"
        > 
          <div className="relative flex items-center justify-center">
            <motion.div
              animate={{ rotate: open ? 45 : 0 }}
              transition={{ duration: 0.5, ease: "circOut" }}
            >
              <MessageSquarePlus size={18} className="relative z-10" />
            </motion.div>
            
            <motion.div 
              className="absolute -top-1 -right-1 text-accent-gold group-hover:text-black transition-colors"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5] 
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            >
              <Sparkles size={10} fill="currentColor" />
            </motion.div>
          </div>

          <span className="uppercase tracking-[0.4em] text-[11px] font-semibold">Share your experience</span>
          
          <div className="absolute inset-0 rounded-full bg-accent-gold/5 scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left -z-10" />
        </button> 
      </div>

      <AnimatePresence>
        {open && ( 
          <motion.div 
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.5, ease: "backOut" }}
            className="mb-20 max-w-xl mx-auto bg-surface p-12 rounded-3xl border border-border shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] relative overflow-hidden"
          > 
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-gold/40 to-transparent" />
            
            <button 
              onClick={() => setOpen(false)}
              className="absolute top-6 right-6 p-2 text-text-secondary hover:text-white hover:bg-white/5 rounded-full transition-all"
            >
              <X size={20} />
            </button>
            
            <h3 className="text-3xl font-serif mb-3 text-white">How was your journey?</h3> 
            <p className="text-text-secondary text-sm mb-10 italic opacity-80">Your story inspires the next generation of travelers.</p> 

            {success && ( 
              <p className="text-green-400 mb-6 bg-green-400/10 py-3 rounded-lg border border-green-400/20 text-sm"> 
                Thank you! Your review will appear once approved. 
              </p> 
            )} 

            <form onSubmit={handleSubmit} className="space-y-4"> 
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
                {loading ? 'Submitting...' : 'Submit Story'} 
              </button> 
            </form> 
          </motion.div> 
        )} 
      </AnimatePresence>
    </div> 
  ) 
}
