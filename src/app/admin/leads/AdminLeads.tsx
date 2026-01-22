"use client";

import { useState, useEffect } from "react";
import { format } from "date-fns";
import { Mail, Phone, Calendar, DollarSign, MessageSquare, Globe, Loader2 } from "lucide-react";

interface Inquiry {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
  pathname?: string;
}

interface Quote {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone?: string;
  trip_dates?: string;
  budget?: string;
  message: string;
  status: string;
}

export default function AdminLeads() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<"quotes" | "inquiries">("quotes");

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    try {
      const res = await fetch("/api/admin/leads");
      const data = await res.json();
      if (res.ok) {
        setInquiries(data.inquiries);
        setQuotes(data.quotes);
      }
    } catch (error) {
      console.error("Failed to fetch leads:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <Loader2 className="w-8 h-8 text-accent-gold animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="font-serif text-3xl text-white tracking-tight">Leads Management</h1>
          <p className="text-text-secondary text-sm mt-1">Review and manage your inquiries and quote requests.</p>
        </div>

        <div className="flex bg-white/5 p-1 rounded-lg border border-white/10">
          <button
            onClick={() => setActiveTab("quotes")}
            className={`px-4 py-2 rounded-md text-sm transition-all ${
              activeTab === "quotes" ? "bg-accent-gold text-black font-medium" : "text-text-secondary hover:text-white"
            }`}
          >
            Quotes ({quotes.length})
          </button>
          <button
            onClick={() => setActiveTab("inquiries")}
            className={`px-4 py-2 rounded-md text-sm transition-all ${
              activeTab === "inquiries" ? "bg-accent-gold text-black font-medium" : "text-text-secondary hover:text-white"
            }`}
          >
            Inquiries ({inquiries.length})
          </button>
        </div>
      </div>

      <div className="bg-surface border border-white/5 rounded-2xl overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-white/5 bg-white/[0.02]">
                <th className="px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-accent-gold font-bold">Date</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-accent-gold font-bold">Lead Details</th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-accent-gold font-bold">
                  {activeTab === "quotes" ? "Trip Info" : "Subject"}
                </th>
                <th className="px-6 py-4 text-[10px] uppercase tracking-[0.2em] text-accent-gold font-bold">Message</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {activeTab === "quotes" ? (
                quotes.length > 0 ? (
                  quotes.map((quote) => (
                    <tr key={quote.id} className="hover:bg-white/[0.02] transition-colors group">
                      <td className="px-6 py-6 whitespace-nowrap align-top">
                        <div className="text-sm text-white">{format(new Date(quote.created_at), "MMM d, yyyy")}</div>
                        <div className="text-[10px] text-text-secondary mt-1">{format(new Date(quote.created_at), "HH:mm")}</div>
                      </td>
                      <td className="px-6 py-6 align-top">
                        <div className="space-y-2">
                          <div className="font-medium text-white">{quote.name}</div>
                          <div className="flex items-center gap-2 text-xs text-text-secondary hover:text-white transition-colors">
                            <Mail size={12} className="text-accent-gold" />
                            <a href={`mailto:${quote.email}`}>{quote.email}</a>
                          </div>
                          {quote.phone && (
                            <div className="flex items-center gap-2 text-xs text-text-secondary">
                              <Phone size={12} className="text-accent-gold" />
                              <span>{quote.phone}</span>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-6 align-top">
                        <div className="space-y-2">
                          {quote.trip_dates && (
                            <div className="flex items-center gap-2 text-xs text-text-secondary">
                              <Calendar size={12} className="text-accent-gold" />
                              <span>{quote.trip_dates}</span>
                            </div>
                          )}
                          {quote.budget && (
                            <div className="flex items-center gap-2 text-xs text-text-secondary">
                              <DollarSign size={12} className="text-accent-gold" />
                              <span>{quote.budget}</span>
                            </div>
                          )}
                          <div className="inline-block px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-accent-gold/10 text-accent-gold border border-accent-gold/20">
                            {quote.status}
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-6 align-top max-w-md">
                        <div className="flex gap-2">
                          <MessageSquare size={14} className="text-accent-gold shrink-0 mt-0.5" />
                          <p className="text-sm text-text-secondary leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                            {quote.message}
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={4} className="px-6 py-12 text-center text-text-secondary italic">No quote requests found.</td>
                  </tr>
                )
              ) : inquiries.length > 0 ? (
                inquiries.map((inquiry) => (
                  <tr key={inquiry.id} className="hover:bg-white/[0.02] transition-colors group">
                    <td className="px-6 py-6 whitespace-nowrap align-top">
                      <div className="text-sm text-white">{format(new Date(inquiry.created_at), "MMM d, yyyy")}</div>
                      <div className="text-[10px] text-text-secondary mt-1">{format(new Date(inquiry.created_at), "HH:mm")}</div>
                    </td>
                    <td className="px-6 py-6 align-top">
                      <div className="space-y-2">
                        <div className="font-medium text-white">{inquiry.name}</div>
                        <div className="flex items-center gap-2 text-xs text-text-secondary hover:text-white transition-colors">
                          <Mail size={12} className="text-accent-gold" />
                          <a href={`mailto:${inquiry.email}`}>{inquiry.email}</a>
                        </div>
                        {inquiry.phone && (
                          <div className="flex items-center gap-2 text-xs text-text-secondary">
                            <Phone size={12} className="text-accent-gold" />
                            <span>{inquiry.phone}</span>
                          </div>
                        )}
                        {inquiry.pathname && (
                          <div className="flex items-center gap-2 text-xs text-text-secondary truncate max-w-[200px]">
                            <Globe size={12} className="text-accent-gold" />
                            <span>{inquiry.pathname}</span>
                          </div>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-6 align-top">
                      <div className="text-sm text-white font-medium">{inquiry.subject || "General Inquiry"}</div>
                    </td>
                    <td className="px-6 py-6 align-top max-w-md">
                      <div className="flex gap-2">
                        <MessageSquare size={14} className="text-accent-gold shrink-0 mt-0.5" />
                        <p className="text-sm text-text-secondary leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all">
                          {inquiry.message}
                        </p>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-text-secondary italic">No inquiries found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
