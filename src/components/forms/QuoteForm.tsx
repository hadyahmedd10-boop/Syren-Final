"use client";

import { useState } from "react";
import Reveal from "@/components/motion/Reveal";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";

export default function QuoteForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    trip_dates: "",
    budget: "",
    message: "",
    honeypot: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/notify/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          trip_dates: formData.trip_dates,
          budget: formData.budget,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setFormData({
          name: "",
          email: "",
          phone: "",
          trip_dates: "",
          budget: "",
          message: "",
          honeypot: "",
        });
      } else {
        setStatus("error");
        setErrorMessage(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Try again.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto">
      <Reveal>
        <div className="text-center mb-16 space-y-4">
          <span className="font-serif text-accent-gold tracking-[0.4em] text-xs uppercase">
            Bespoke Journeys
          </span>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white tracking-tight">
            Request a Quote
          </h1>
          <p className="text-white/60 font-light italic text-lg">
            Tell us about your dream Egyptian odyssey.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white/5 p-6 md:p-10 border border-white/10 backdrop-blur-sm rounded-2xl">
          {/* Honeypot - hidden from users */}
          <input
            type="text"
            name="honeypot"
            className="hidden"
            value={formData.honeypot}
            onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-[10px] uppercase tracking-[0.2em] text-accent-gold font-bold">Full Name</label>
              <input
                id="name"
                required
                type="text"
                placeholder="Alexander Great"
                className="w-full bg-white/5 border-b border-white/20 py-3 text-white focus:outline-none focus:border-accent-gold transition-colors font-sans"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] text-accent-gold font-bold">Email Address</label>
              <input
                id="email"
                required
                type="email"
                placeholder="alexander@luxury.com"
                className="w-full bg-white/5 border-b border-white/20 py-3 text-white focus:outline-none focus:border-accent-gold transition-colors font-sans"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="phone" className="text-[10px] uppercase tracking-[0.2em] text-accent-gold font-bold">Phone Number (WhatsApp Preferred)</label>
              <input
                id="phone"
                type="tel"
                placeholder="+1 234 567 890"
                className="w-full bg-white/5 border-b border-white/20 py-3 text-white focus:outline-none focus:border-accent-gold transition-colors font-sans"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="dates" className="text-[10px] uppercase tracking-[0.2em] text-accent-gold font-bold">Estimated Dates</label>
              <input
                id="dates"
                type="text"
                placeholder="Spring 2026"
                className="w-full bg-white/5 border-b border-white/20 py-3 text-white focus:outline-none focus:border-accent-gold transition-colors font-sans"
                value={formData.trip_dates}
                onChange={(e) => setFormData({ ...formData, trip_dates: e.target.value })}
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="budget" className="text-[10px] uppercase tracking-[0.2em] text-accent-gold font-bold">Estimated Budget (Per Person)</label>
            <select
              id="budget"
              className="w-full bg-white/5 border-b border-white/20 py-3 text-white focus:outline-none focus:border-accent-gold transition-colors font-sans"
              value={formData.budget}
              onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
            >
              <option value="" className="bg-background">Select range</option>
              <option value="5k-10k" className="bg-background">$5,000 - $10,000</option>
              <option value="10k-25k" className="bg-background">$10,000 - $25,000</option>
              <option value="25k-50k" className="bg-background">$25,000 - $50,000</option>
              <option value="50k+" className="bg-background">$50,000+</option>
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-[10px] uppercase tracking-[0.2em] text-accent-gold font-bold">Your Vision</label>
            <textarea
              id="message"
              rows={4}
              placeholder="Tell us about the moments you're seeking..."
              className="w-full bg-white/5 border-b border-white/20 py-3 text-white focus:outline-none focus:border-accent-gold transition-colors font-sans resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
          </div>

          {status === "success" && (
            <div className="flex items-center gap-3 text-green-400 bg-green-400/10 p-4 border border-green-400/20">
              <CheckCircle2 size={18} />
              <p className="text-sm">Sent. We&apos;ll reply shortly.</p>
            </div>
          )}

          {status === "error" && (
            <div className="flex items-center gap-3 text-red-400 bg-red-400/10 p-4 border border-red-400/20">
              <AlertCircle size={18} />
              <p className="text-sm">{errorMessage}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={status === "loading"}
            className="syren-btn w-full group flex items-center justify-center gap-3"
          >
            {status === "loading" ? "Processing..." : "Submit Inquiry"}
            <Send size={16} className={`transition-transform duration-300 ${status === "loading" ? 'translate-x-10 opacity-0' : 'group-hover:translate-x-1'}`} />
          </button>
        </form>
      </Reveal>
    </div>
  );
}
