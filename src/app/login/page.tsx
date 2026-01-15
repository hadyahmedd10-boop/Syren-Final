"use client";

import { useState, Suspense } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter, useSearchParams } from "next/navigation";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const supabase = createClient();

  // Determine if there's an error from search params
  const authError = searchParams.get("error") === "not_allowed" 
    ? "Your account is not on the administrative allowlist." 
    : searchParams.get("error") === "unauthorized"
    ? "You do not have administrative access."
    : null;

  const displayError = error || authError;

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!supabase) {
      setError("Supabase is not configured. Please check your environment variables.");
      return;
    }
    setLoading(true);
    setError(null);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      const next = searchParams.get("next") || "/admin/testimonials";
      router.push(next);
      router.refresh();
    }
  };

  return (
    <div className="max-w-md w-full">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-serif text-white mb-2">Syren Admin</h1>
        <p className="text-text-secondary">Please sign in to continue</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-gold transition-colors"
            placeholder="admin@syren.com"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-text-secondary mb-2">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full bg-surface border border-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent-gold transition-colors"
            placeholder="••••••••"
            required
          />
        </div>

        {displayError && (
          <div className="text-red-500 text-sm bg-red-500/10 border border-red-500/20 rounded-lg p-3">
            {displayError}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full syren-btn-primary py-4 rounded-lg font-medium transition-all disabled:opacity-50"
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <Suspense fallback={<div className="text-white">Loading...</div>}>
        <LoginForm />
      </Suspense>
    </div>
  );
}
