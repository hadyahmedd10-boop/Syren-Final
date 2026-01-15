import { createClient } from "@supabase/supabase-js";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { MessageSquare, Quote, Rocket, ArrowRight } from "lucide-react";

export const dynamic = "force-dynamic";

async function getStats() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    throw new Error("Missing Supabase configuration");
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  // Fetch counts
  const [testimonials, quotes] = await Promise.all([
    supabase
      .from("testimonials")
      .select("*", { count: "exact", head: true })
      .eq("approved", false),
    supabase
      .from("quote_requests")
      .select("*", { count: "exact", head: true }),
  ]);

  return {
    pendingTestimonials: testimonials.count || 0,
    newQuotes: quotes.count || 0,
    lastDeploy: "2026-01-16 14:30 UTC", // Manual placeholder
  };
}

export default async function AdminDashboard() {
  const stats = await getStats();

  const cards = [
    {
      title: "Pending Testimonials",
      count: stats.pendingTestimonials,
      icon: <MessageSquare className="text-accent-gold" />,
      link: "/admin/testimonials",
      linkLabel: "Manage Reviews",
    },
    {
      title: "Quote Requests",
      count: stats.newQuotes,
      icon: <Quote className="text-accent-gold" />,
      link: "#", // Add quotes management later if needed
      linkLabel: "View Requests",
    },
    {
      title: "Platform Status",
      count: stats.lastDeploy,
      icon: <Rocket className="text-accent-gold" />,
      label: "Last Deploy",
      isStatus: true,
    },
  ];

  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      <div className="mx-auto max-w-7xl px-6 md:px-8">
        <header className="mb-16">
          <Reveal>
            <span className="font-sans text-[10px] uppercase tracking-[0.4em] text-accent-gold mb-4 block">
              Control Center
            </span>
            <h1 className="font-serif text-4xl md:text-6xl tracking-tight text-white">
              Admin Dashboard
            </h1>
          </Reveal>
        </header>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
          {cards.map((card, index) => (
            <Reveal key={card.title} delay={0.1 * index}>
              <div className="bg-surface border border-border p-8 rounded-2xl flex flex-col h-full group hover:border-accent-gold/30 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-accent-gold/10 group-hover:border-accent-gold/30 transition-all">
                  {card.icon}
                </div>
                
                <h3 className="text-white/60 font-sans text-xs uppercase tracking-[0.2em] mb-2">
                  {card.title}
                </h3>
                
                <div className="text-3xl font-serif text-white mb-8">
                  {card.count}
                </div>

                {card.link && card.link !== "#" ? (
                  <Link 
                    href={card.link}
                    className="mt-auto flex items-center gap-2 text-accent-gold font-sans text-xs uppercase tracking-widest hover:gap-3 transition-all"
                  >
                    {card.linkLabel}
                    <ArrowRight size={14} />
                  </Link>
                ) : card.linkLabel ? (
                  <span className="mt-auto text-white/20 font-sans text-xs uppercase tracking-widest">
                    {card.linkLabel}
                  </span>
                ) : (
                  <span className="mt-auto text-white/40 font-sans text-xs uppercase tracking-widest">
                    {card.label}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
