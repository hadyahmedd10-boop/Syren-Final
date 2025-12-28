export default function Section({ 
  children, 
  dark = false 
}: { 
  children: React.ReactNode 
  dark?: boolean 
}) { 
  return ( 
    <section className={`py-28 ${dark ? 'bg-black' : 'bg-neutral-950'}`}> 
      {children} 
    </section> 
  ) 
}