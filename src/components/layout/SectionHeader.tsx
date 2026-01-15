import React from "react";
import Reveal from "@/components/motion/Reveal";

interface SectionHeaderProps {
  title: React.ReactNode;
  label?: string;
  description?: React.ReactNode;
  align?: "center" | "left" | "responsive";
  className?: string;
  id?: string;
}

/**
 * A reusable header component for sections following the Syren design language:
 * Optional Label -> Title (H2) -> Optional Description -> Gold Divider
 */
export default function SectionHeader({
  title,
  label,
  description,
  align = "center",
  className = "",
  id,
}: SectionHeaderProps) {
  const getAlignmentClasses = () => {
    switch (align) {
      case "left":
        return "text-left";
      case "responsive":
        return "text-center md:text-left";
      case "center":
      default:
        return "text-center";
    }
  };

  const getDividerClasses = () => {
    switch (align) {
      case "left":
        return "";
      case "responsive":
        return "mx-auto md:mx-0";
      case "center":
      default:
        return "mx-auto";
    }
  };

  const getDescriptionClasses = () => {
    const base = "font-sans text-base leading-relaxed text-text-secondary mt-6";
    switch (align) {
      case "left":
        return `${base} max-w-2xl`;
      case "responsive":
        return `${base} max-w-2xl mx-auto md:mx-0`;
      case "center":
      default:
        return `${base} max-w-2xl mx-auto`;
    }
  };

  return (
    <Reveal className={className || "mb-12 md:mb-16"}>
      <div className={`flex flex-col ${getAlignmentClasses()}`}>
        {label && (
          <span className="block font-sans text-[10px] uppercase tracking-[0.4em] text-accent-gold mb-4">
            {label}
          </span>
        )}
        
        <h2 
          id={id}
          className="font-serif text-4xl md:text-5xl tracking-tight text-primary"
        >
          {title}
        </h2>

        <div 
          className={`h-px w-20 bg-accent-gold mt-8 ${getDividerClasses()}`} 
          aria-hidden="true"
        />

        {description && (
          <div className={getDescriptionClasses()}>
            {description}
          </div>
        )}
      </div>
    </Reveal>
  );
}
