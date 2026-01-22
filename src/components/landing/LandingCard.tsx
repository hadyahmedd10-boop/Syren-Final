import Image from "next/image";
import Link from "next/link";

interface LandingCardProps {
  title: string;
  subtitle: string;
  image: string;
  slug: string;
  category?: string;
  variant?: "primary" | "secondary";
}

export default function LandingCard({
  title,
  subtitle,
  image,
  slug,
  category = "Marketing Landing",
  variant = "primary"
}: LandingCardProps) {
  return (
    <article className={`group relative flex h-full flex-col overflow-hidden ${
      variant === "primary" ? "syren-card syren-card-hover" : "syren-card-secondary syren-card-hover-secondary"
    }`}>
      {/* Image Container */}
      <div className="relative aspect-[2/1] w-full overflow-hidden">
        <Image
          src={image}
          alt={`Exclusive access to ${title}: ${subtitle}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-center transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/50" />
        
        {/* Category Badge */}
        <div className="absolute left-6 top-6 z-10">
          <span 
            tabIndex={0}
            className="syren-pill bg-background/80 border border-accent-gold/20 text-accent-gold backdrop-blur-md hover:bg-background hover:border-accent-gold/40 hover:shadow-[0_0_15px_rgba(196,160,82,0.2)]"
          >
            {category}
          </span>
        </div>
      </div>
      
      <div className="flex flex-1 flex-col px-4 pt-4 pb-3 md:px-6 md:pt-6 md:pb-5">
        <div className="mb-2">
          <h3 className="font-serif text-2xl tracking-tight text-white mb-1 group-hover:text-accent-gold transition-colors duration-500">
            {title}
          </h3>
          <p className="font-sans text-[12px] md:text-[13px] leading-relaxed text-white/60 line-clamp-2">
            {subtitle}
          </p>
        </div>
        
        <div className="mt-auto pt-2.5 border-t border-white/5">
          <Link
            href={`/landing/${slug}`}
            className="syren-btn-secondary w-full text-center py-2.5"
          >
            View Landing
            <span className="absolute inset-0 z-20" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
