'use client'

import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Reveal from '../motion/Reveal';
import SectionHeader from '../layout/SectionHeader';

const faqs = [
  {
    question: "How do I book a private experience?",
    answer: "You can book directly through our website or contact our curators via WhatsApp for a personalized itinerary. Once we confirm availability, we'll provide a secure payment link."
  },
  {
    question: "Can these experiences be customized?",
    answer: "Absolutely. Every journey we offer is a starting point. Our curators work with you to adjust the pace, destinations, and activities to match your specific interests."
  },
  {
    question: "What is your cancellation policy?",
    answer: "We offer full refunds for cancellations made at least 30 days before your journey begins. For cancellations within 30 days, please refer to our full terms or contact your curator."
  },
  {
    question: "Are international flights included?",
    answer: "Our curated experiences focus on the on-ground journey in Egypt. International airfare is not included, though we handle all domestic transfers and flights within Egypt."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="section bg-surface/30">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        <SectionHeader 
          title="Frequently Asked Questions" 
          label="Information" 
          className="mb-16"
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <Reveal key={index} delay={0.1 * index}>
              <div className="border-b border-white/5 last:border-0">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full py-6 flex items-center justify-between text-left group"
                >
                  <span className="font-serif text-xl text-text-primary group-hover:text-accent-gold transition-colors duration-300">
                    {faq.question}
                  </span>
                  {openIndex === index ? (
                    <Minus size={20} className="text-accent-gold" />
                  ) : (
                    <Plus size={20} className="text-white/40 group-hover:text-accent-gold transition-colors duration-300" />
                  )}
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                  }`}
                >
                  <p className="font-sans text-text-secondary leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
