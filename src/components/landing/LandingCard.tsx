import Image from "next/image";
import Link from "next/link";

interface LandingCardProps {
  title: string;
  subtitle: string;
  image: string;
  slug: string;
  category?: string;
}

export default function LandingCard({
  title,
  subtitle,
  image,
  slug,
  category = "Marketing Landing"
}: LandingCardProps) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden bg-surface transition-all duration-500 ease-out border border-border hover:border-accent-gold/30 hover:-translate-y-1">
      {/* Image Container */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 transition-opacity duration-500 group-hover:bg-black/50" />
        
        {/* Category Badge */}
        <div className="absolute left-6 top-6 z-10">
          <span className="bg-background/80 px-3 py-1 font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-accent-gold backdrop-blur-md border border-accent-gold/20">
            {category}
          </span>
        </div>
      </div>
      
      <div className="flex flex-1 flex-col p-6 md:p-8">
        <div className="mb-4">
          <h3 className="font-serif text-2xl tracking-tight text-white mb-2 group-hover:text-accent-gold transition-colors duration-500">
            {title}
          </h3>
          <p className="font-sans text-[12px] md:text-[13px] leading-relaxed text-white/60 line-clamp-2">
            {subtitle}
          </p>
        </div>
        
        <div className="mt-auto pt-6 border-t border-white/5">
          <Link
            href={`/landing/${slug}`}
            className="syren-btn-secondary w-full text-center py-3"
          >
            View Landing
            <span className="absolute inset-0 z-20" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
