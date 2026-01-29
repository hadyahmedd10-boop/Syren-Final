import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  image: StaticImageData;
  alt?: string;
  duration?: string;
  cities?: string;
  buttonText?: string;
  href?: string;
  variant?: "primary" | "secondary";
};

// ITINERARY IMAGE FRAME EDIT
export default function ExperienceCard({
  title,
  description,
  image,
  alt,
  duration,
  cities,
  buttonText = "Explore Journey",
  href = "#",
  variant = "primary",
}: Props) {
  return (
    <article className={`group relative flex h-full flex-col overflow-hidden ${
      variant === "primary" ? "syren-card syren-card-hover" : "syren-card-secondary syren-card-hover-secondary"
    }`}>
      {/* Image Container with Consistent Aspect Ratio - Fixed Landscape Frame */}
      <div className="relative h-52 w-full overflow-hidden sm:h-56">
        <Image
          src={image}
          alt={alt ?? `A bespoke luxury journey through ${title} - Curated by Syren`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
          priority={false}
          quality={90}
        />
        
        {/* Premium Overlay */}
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/30" />
        
        {/* Floating Badge */}
        {duration && (
          <div className="absolute left-4 top-4 z-10">
            <span 
              tabIndex={0}
              className="syren-pill bg-background/80 border border-accent-gold/20 text-accent-gold backdrop-blur-md hover:bg-background hover:border-accent-gold/40 hover:shadow-[0_0_15px_rgba(196,160,82,0.2)]"
            >
              {duration}
            </span>
          </div>
        )}
      </div>
      
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-1.5 flex flex-col gap-1">
          {cities && (
            <div className="mb-0.5">
              <span 
                tabIndex={0}
                className="syren-pill border border-accent-gold/10 bg-accent-gold/5 text-text-secondary hover:bg-accent-gold/10 hover:border-accent-gold/30 hover:text-accent-gold hover:shadow-[0_0_10px_rgba(196,160,82,0.1)]"
              >
                {cities}
              </span>
            </div>
          )}
          <h3 className="font-serif text-lg sm:text-xl tracking-tight text-text-primary transition-colors duration-500">
            {title}
          </h3>
        </div>

        <p className="mb-2 flex-1 font-sans text-[12px] sm:text-[13px] leading-relaxed text-white/60 line-clamp-2 md:line-clamp-3">
          {description}
        </p>
        
        <div className="mt-auto pt-2 border-t border-white/5">
          <Link
            href={href}
            className="syren-btn-secondary w-full"
          >
            {buttonText}
            {/* Stretched link to make entire card clickable */}
            <span className="absolute inset-0 z-20" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
