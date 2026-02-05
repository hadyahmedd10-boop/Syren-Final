import React from "react";
import { ExcursionItineraryStep } from "@/types/excursion";
import { cn } from "@/lib/utils";

interface ExcursionItineraryProps {
  steps: ExcursionItineraryStep[];
}

export default function ExcursionItinerary({ steps }: ExcursionItineraryProps) {
  if (!steps || steps.length === 0) {
    return (
      <section className="py-16 md:py-24 bg-muted/30">
        <div className="container px-4 text-center">
          <p className="text-muted-foreground italic">
            Itinerary details will be confirmed by your concierge.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 md:py-24 bg-muted/30 overflow-hidden">
      <div className="container px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-medium tracking-widest text-primary uppercase mb-2 block">
            STEP BY STEP
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-foreground">
            The Journey Flow
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

          <div className="space-y-12">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className={cn(
                  "relative flex flex-col md:flex-row gap-8 md:gap-0 items-start",
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                )}
              >
                {/* Content Card */}
                <div className="w-full md:w-1/2 pl-12 md:pl-0 md:px-12">
                  <div className="bg-background p-6 rounded-lg border shadow-sm relative group hover:shadow-md transition-all duration-300">
                    {/* Arrow/Connector for Desktop */}
                    <div
                      className={cn(
                        "hidden md:block absolute top-6 w-3 h-3 bg-background border-t border-r rotate-45",
                        index % 2 === 0
                          ? "left-full -translate-x-1.5 border-l-0 border-b-0" // Left card (row-reverse) -> arrow on right
                          : "right-full translate-x-1.5 border-r-0 border-t-0 border-b border-l" // Right card -> arrow on left
                      )}
                      style={{
                        // Manual overrides for the border sides based on position
                        borderTopWidth: index % 2 === 0 ? "1px" : "0px",
                        borderRightWidth: index % 2 === 0 ? "1px" : "0px",
                        borderBottomWidth: index % 2 !== 0 ? "1px" : "0px",
                        borderLeftWidth: index % 2 !== 0 ? "1px" : "0px",
                      }}
                    />

                    {/* Step Content */}
                    <div className="space-y-2">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        {step.tag && (
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary">
                            {step.tag}
                          </span>
                        )}
                      </div>
                      <h3 className="text-lg font-medium text-foreground">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1.5 top-6 w-3 h-3 rounded-full bg-primary border-2 border-background ring-2 ring-primary/20 z-10" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
