export default function Section({ 
  children, 
  dark = false,
  className = ""
}: { 
  children: React.ReactNode 
  dark?: boolean
  className?: string
}) { 
  return ( 
    <section className={`section ${dark ? 'bg-black' : 'bg-background'} ${className}`}> 
      {children} 
    </section> 
  ) 
}