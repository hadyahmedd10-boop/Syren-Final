import Link from "next/link"

export default function Footer() { 
  return ( 
    <footer className="bg-black section-tight border-t border-border"> 
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12"> 
        
        <div> 
          <h3 className="font-serif text-2xl mb-4">Syren</h3> 
          <p className="text-sm opacity-70 font-sans"> 
            Curated journeys through Egypt — guided by soul, crafted with care. 
          </p> 
        </div> 

        <div> 
          <h4 className="mb-4 font-semibold font-sans uppercase tracking-widest text-xs">Explore</h4> 
          <ul className="space-y-2 text-sm opacity-70 font-sans"> 
            <li><Link href="/destinations" className="hover:text-accent-gold transition-colors">Destinations</Link></li> 
            <li><Link href="/experiences" className="hover:text-accent-gold transition-colors">Experiences</Link></li> 
            <li><Link href="/contact" className="hover:text-accent-gold transition-colors">Contact</Link></li> 
          </ul> 
        </div> 

        <div> 
          <h4 className="mb-4 font-semibold font-sans uppercase tracking-widest text-xs">Connect</h4> 
          <p className="text-sm opacity-70 font-sans mb-4"> 
            WhatsApp & Private Concierge available 24/7 
          </p> 
          <form action="https://formsubmit.co/you@email.com" method="POST"> 
            <input placeholder="Email" name="email" className="input mb-2" required /> 
            <button type="submit" className="btn-secondary w-full">Join Updates</button> 
          </form> 
        </div> 
      </div> 

      <div className="text-center mt-16 text-xs opacity-40 font-sans tracking-widest"> 
        © {new Date().getFullYear()} Syren. All rights reserved. 
      </div> 
    </footer> 
  ) 
}
