import { createClient } from '@supabase/supabase-js' 
import { redirect } from 'next/navigation'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY

const supabase = (supabaseUrl && supabaseUrl !== 'xxxx' && serviceRoleKey) 
  ? createClient(supabaseUrl, serviceRoleKey) 
  : null

export default async function AdminTestimonials() { 
  if (!supabase) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-3xl mb-6">Testimonial Moderation</h1>
        <p className="text-red-500">Supabase is not configured correctly. Please check your environment variables.</p>
      </div>
    )
  }

  const { data } = await supabase 
    .from('testimonials') 
    .select('*') 
    .order('created_at', { ascending: false }) 
 
  return ( 
    <div className="p-10 max-w-5xl mx-auto"> 
      <h1 className="text-3xl font-serif mb-10 text-accent-gold">Testimonial Moderation</h1> 
 
      <div className="space-y-6"> 
        {data?.map(t => ( 
          <div key={t.id} className="bg-surface p-8 rounded-xl border border-border shadow-xl"> 
            <div className="flex justify-between items-start mb-4">
              <div>
                <p className="text-lg font-medium text-white mb-1">{t.name}</p>
                <div className="flex flex-wrap gap-2 items-center">
                  <p className="text-sm text-text-secondary">{t.email || 'No email provided'}</p>
                  {t.experience_slug && (
                    <>
                      <span className="text-border">|</span>
                      <span className="text-[10px] uppercase tracking-wider text-accent-gold bg-accent-gold/10 px-2 py-0.5 rounded">
                        {t.experience_slug}
                      </span>
                    </>
                  )}
                </div>
              </div>
              <span className="text-gold font-sans text-sm">⭐ {t.rating}</span> 
            </div>
            
            <p className="text-text-primary/90 mb-8 leading-relaxed italic">"{t.message}"</p> 
 
            <form action={`/api/approve-testimonial?id=${t.id}`} method="POST" className="flex gap-3"> 
              {!t.approved && ( 
                <button className="syren-btn-primary px-6 py-2 text-[10px]">Approve</button> 
              )} 
              <button 
                formAction={`/api/delete-testimonial?id=${t.id}`} 
                className="px-6 py-2 text-[10px] uppercase tracking-[0.4em] font-medium text-red-500 border border-red-500/30 hover:bg-red-500/10 transition-all rounded-full" 
              > 
                Delete 
              </button> 
            </form> 
          </div> 
        ))} 
        {(!data || data.length === 0) && (
          <p className="text-text-secondary text-center py-20 italic">No testimonials found.</p>
        )}
      </div> 
    </div> 
  ) 
}
