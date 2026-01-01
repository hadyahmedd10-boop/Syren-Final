"use client";

import { useEffect, useState, useCallback } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";
import { Testimonial } from "@/types/testimonial";
import { Check, X, Trash2, Star, Loader2, LogOut } from "lucide-react";

export default function AdminTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [actionId, setActionId] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const fetchTestimonials = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/testimonials");
      if (res.status === 401) {
        router.push("/login");
        return;
      }
      const data = await res.json();
      setTestimonials(data);
    } catch {
      // Silent error in UI
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchTestimonials();
  }, [fetchTestimonials]);

  const updateStatus = async (id: string, approved: boolean) => {
    setActionId(id);
    try {
      const res = await fetch("/api/admin/testimonials", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, approved }),
      });
      
      if (res.ok) {
        setTestimonials(prev =>
          prev.map(t => (t.id === id ? { ...t, approved } : t))
        );
      }
    } catch {
      alert("Failed to update status");
    } finally {
      setActionId(null);
    }
  };

  const deleteTestimonial = async (id: string) => {
    if (!confirm("Are you sure you want to delete this testimonial?")) return;
    
    setActionId(id);
    try {
      const res = await fetch(`/api/admin/testimonials?id=${id}`, {
        method: "DELETE",
      });
      
      if (res.ok) {
        setTestimonials(prev => prev.filter(t => t.id !== id));
      }
    } catch {
      alert("Failed to delete testimonial");
    } finally {
      setActionId(null);
    }
  };

  const handleLogout = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }
    router.push("/login");
    router.refresh();
  };

  return (
    <div className="min-h-screen bg-background text-white p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <div>
            <h1 className="text-4xl font-serif text-accent-gold mb-2">Moderation Dashboard</h1>
            <p className="text-text-secondary font-sans text-sm uppercase tracking-widest">Manage Traveler Stories</p>
          </div>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all text-xs uppercase tracking-widest"
          >
            <LogOut size={14} />
            Logout
          </button>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-20 gap-4">
            <Loader2 className="animate-spin text-accent-gold" size={32} />
            <p className="text-text-secondary italic">Loading testimonials...</p>
          </div>
        ) : testimonials.length === 0 ? (
          <div className="text-center py-20 border border-white/5 rounded-3xl bg-surface/30 backdrop-blur-sm">
            <p className="text-text-secondary italic">No testimonials to moderate.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            {testimonials.map((t) => (
              <div 
                key={t.id} 
                className={`group relative p-8 rounded-3xl border transition-all duration-500 bg-surface/30 backdrop-blur-sm ${
                  t.approved ? 'border-green-500/20' : 'border-white/5 hover:border-accent-gold/20'
                }`}
              >
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="flex-grow">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-gold/20 to-transparent border border-accent-gold/10 flex items-center justify-center text-accent-gold font-serif text-lg">
                        {t.name.charAt(0)}
                      </div>
                      <div>
                        <h3 className="font-medium text-lg">{t.name}</h3>
                        <p className="text-text-secondary text-sm">{t.email || "No email provided"}</p>
                      </div>
                      {t.approved && (
                        <span className="ml-2 px-2 py-0.5 bg-green-500/10 text-green-500 text-[10px] uppercase tracking-widest rounded-full border border-green-500/20">
                          Approved
                        </span>
                      )}
                    </div>

                    <div className="flex gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          size={14} 
                          className={`${i < (t.rating || 5) ? 'text-accent-gold fill-accent-gold' : 'text-white/10'}`} 
                        />
                      ))}
                    </div>

                    <p className="text-text-secondary italic leading-relaxed mb-6">&ldquo;{t.message}&rdquo;</p>

                    {t.experience_slug && (
                      <span className="text-accent-gold/60 text-[10px] uppercase tracking-widest bg-accent-gold/5 px-3 py-1 rounded-full border border-accent-gold/10">
                        Experience: {t.experience_slug.replace(/-/g, ' ')}
                      </span>
                    )}
                  </div>

                  <div className="flex md:flex-col gap-3 justify-end">
                    {!t.approved ? (
                      <button
                        disabled={actionId === t.id}
                        onClick={() => updateStatus(t.id, true)}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-accent-gold text-black rounded-full hover:bg-accent-gold/80 transition-all text-xs uppercase tracking-widest font-bold disabled:opacity-50"
                      >
                        {actionId === t.id ? <Loader2 className="animate-spin" size={14} /> : <Check size={14} />}
                        Approve
                      </button>
                    ) : (
                      <button
                        disabled={actionId === t.id}
                        onClick={() => updateStatus(t.id, false)}
                        className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-white border border-white/10 rounded-full hover:bg-white/10 transition-all text-xs uppercase tracking-widest disabled:opacity-50"
                      >
                        {actionId === t.id ? <Loader2 className="animate-spin" size={14} /> : <X size={14} />}
                        Unapprove
                      </button>
                    )}
                    <button
                      disabled={actionId === t.id}
                      onClick={() => deleteTestimonial(t.id)}
                      className="flex items-center justify-center gap-2 px-6 py-3 bg-red-500/10 text-red-500 border border-red-500/20 rounded-full hover:bg-red-500/20 transition-all text-xs uppercase tracking-widest disabled:opacity-50"
                    >
                      {actionId === t.id ? <Loader2 className="animate-spin" size={14} /> : <Trash2 size={14} />}
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}