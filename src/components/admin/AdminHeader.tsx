"use client";

import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { createClient } from "@/utils/supabase/client";

export default function AdminHeader() {
  const router = useRouter();
  const supabase = createClient();

  const handleLogout = async () => {
    if (supabase) {
      await supabase.auth.signOut();
    }
    document.cookie = "admin_email=; path=/; max-age=0";
    router.push("/login");
    router.refresh();
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/admin" className="font-serif text-xl text-white tracking-tight">
            Syren <span className="text-accent-gold italic">Admin</span>
          </Link>

          <nav className="hidden md:flex items-center gap-6">
            <Link href="/admin/leads" className="text-xs uppercase tracking-widest text-text-secondary hover:text-white transition-colors">
              Leads
            </Link>
            <Link href="/admin/testimonials" className="text-xs uppercase tracking-widest text-text-secondary hover:text-white transition-colors">
              Testimonials
            </Link>
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-text-secondary hover:text-white transition-colors font-sans text-xs uppercase tracking-widest"
        >
          <LogOut size={16} />
          Logout
        </button>
      </div>
    </header>
  );
}
