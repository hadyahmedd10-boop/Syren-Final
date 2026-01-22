"use client";

import React, { useState } from "react";
import { Excursion } from "@/types/excursion";
import AddOns from "./AddOns";
import BookingButton from "../BookingButton";
import { ShieldCheck } from "lucide-react";
import SectionHeader from "../layout/SectionHeader";

interface BookingSectionProps {
  experienceTitle: string;
  experienceSlug: string;
  basePrice: number;
  availableAddOns: Excursion[];
}

export default function BookingSection({
  experienceTitle,
  experienceSlug,
  basePrice,
  availableAddOns,
}: BookingSectionProps) {
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [addOnsTotal, setAddOnsTotal] = useState(0);

  const handleAddOnsChange = (selectedSlugs: string[], totalCents: number) => {
    setSelectedAddOns(selectedSlugs);
    setAddOnsTotal(totalCents / 100); // Convert cents to dollars for the UI and BookingButton
  };

  const totalPrice = basePrice + addOnsTotal;

  return (
    <div className="px-6 pt-6 pb-4 md:px-12 md:pt-12 md:pb-10 border border-accent-gold/20 bg-surface/50 backdrop-blur-sm relative shadow-xl rounded-2xl">
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-background border border-accent-gold/20 px-6 py-2.5 transition-all duration-300 ease-out hover:border-accent-gold/40 hover:shadow-[0_0_15px_rgba(196,160,82,0.1)] group/secure whitespace-nowrap">
        <span 
          tabIndex={0}
          className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-accent-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-gold/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Secure Booking
        </span>
      </div>

      <div className="text-center mb-8">
        <SectionHeader 
          title="Finalize Your Reservation" 
          className="mb-3"
        />
        <div className="flex items-center justify-center gap-3 text-text-secondary/60">
          <ShieldCheck size={16} />
          <span className="font-sans text-[10px] uppercase tracking-[0.2em]">Secured by Stripe</span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="flex justify-between items-end border-b border-white/10 pb-4">
          <div>
            <p className="font-sans text-[10px] uppercase tracking-[0.2em] text-text-secondary/40 mb-1">
              Total Price
            </p>
            <p className="font-serif text-4xl text-accent-gold">
              ${totalPrice.toLocaleString()}
              <span className="text-sm font-sans text-text-secondary/40 ml-2 uppercase tracking-widest font-normal">
                USD / Person
              </span>
            </p>
          </div>
        </div>

        {availableAddOns.length > 0 && (
          <AddOns items={availableAddOns} onChange={handleAddOnsChange} />
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-4 h-4 rounded-full border border-accent-gold/40 flex items-center justify-center mt-1 shrink-0">
              <div className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
            </div>
            <p className="font-sans text-[10px] text-text-secondary/60 uppercase tracking-[0.1em] leading-relaxed">
              Fully refundable up to 30 days before arrival
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-4 h-4 rounded-full border border-accent-gold/40 flex items-center justify-center mt-1 shrink-0">
              <div className="w-1.5 h-1.5 bg-accent-gold rounded-full" />
            </div>
            <p className="font-sans text-[10px] text-text-secondary/60 uppercase tracking-[0.1em] leading-relaxed">
              Secure credit card & bank transfer options
            </p>
          </div>
        </div>

        <BookingButton
          experienceTitle={experienceTitle}
          experienceSlug={experienceSlug}
          price={totalPrice}
          selectedAddOns={selectedAddOns}
        />

        <p className="text-center font-sans text-[10px] uppercase tracking-[0.2em] text-text-secondary/30">
          By proceeding, you agree to our{" "}
          <a href="#" className="underline hover:text-accent-gold transition-colors">
            Terms of Service
          </a>{" "}
          and{" "}
          <a href="#" className="underline hover:text-accent-gold transition-colors">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
}
