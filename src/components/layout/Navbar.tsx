import Link from "next/link" 
 
 export default function Navbar() { 
   return ( 
     <header className="fixed top-0 z-50 w-full bg-background/80 backdrop-blur border-b border-border"> 
       <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"> 
         
         {/* LOGO */} 
         <Link href="/" className="font-serif text-2xl text-accent-gold"> 
           SYREN 
         </Link> 
 
         {/* LINKS */} 
         <div className="hidden md:flex gap-10 text-sm tracking-wide"> 
           <Link href="/destinations">Destinations</Link> 
           <Link href="/experiences">Experiences</Link> 
           <Link href="/about">About</Link> 
           <Link href="/contact" className="text-accent-gold"> 
             Contact 
           </Link> 
         </div> 
 
         {/* CTA */} 
         <Link href="/experiences" className="syren-btn-primary"> 
           Explore Experiences 
         </Link> 
       </nav> 
     </header> 
   ) 
 }
