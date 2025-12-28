import Image, { type StaticImageData } from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  image: StaticImageData | string;
  alt?: string;
  duration?: string;
  cities?: string;
  buttonText?: string;
  href?: string;
};

export default function ExperienceCard({
  title,
  description,
  image,
  alt,
  duration,
  cities,
  buttonText = "Explore Journey",
  href = "#",
}: Props) {
  const isStatic = typeof image !== "string";
  
  return (
    <article className="group relative flex h-full flex-col overflow-hidden bg-surface transition-all duration-500 ease-out border border-border hover:border-primary/30 hover:-translate-y-1">
      {/* Image Container with Consistent Aspect Ratio */}
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        {isStatic ? (
          <Image
            src={image}
            alt={alt ?? title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            priority={false}
            quality={90}
            placeholder="blur"
          />
        ) : (
          <Image
            src={image as string}
            alt={alt ?? title}
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            priority={false}
            quality={90}
          />
        )}
        
        {/* Subtle Overlay */}
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-500 group-hover:bg-black/30" />
        
        {/* Floating Badge */}
        {duration && (
          <div className="absolute left-6 top-6 z-10">
            <span className="bg-background/80 px-2.5 py-1 font-sans text-[9px] font-bold uppercase tracking-[0.2em] text-accent-gold backdrop-blur-md border border-accent-gold/20">
              {duration}
            </span>
          </div>
        )}
      </div>
      
      <div className="flex flex-1 flex-col p-4 md:p-8">
        <div className="mb-3 flex flex-col gap-1">
          {cities && (
            <span className="font-sans text-[8px] md:text-[9px] font-bold uppercase tracking-[0.3em] text-text-secondary">
              {cities}
            </span>
          )}
          <h3 className="font-serif text-xl md:text-2xl lg:text-3xl tracking-tight text-text-primary transition-colors duration-500">
            {title}
          </h3>
        </div>

        <p className="mb-6 flex-1 font-sans text-[12px] md:text-[13px] leading-relaxed text-white/60">
          {description}
        </p>
        
        <div className="mt-auto pt-5 border-t border-white/5">
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
