"use client";

type Props = {
  cities: string[];
  value: string;
  onChange: (city: string) => void;
};

export default function CityFilter({ cities, value, onChange }: Props) {
  return (
    <div 
      className="relative z-10 flex gap-3 overflow-x-auto no-scrollbar whitespace-nowrap pb-2 -mx-4 px-4 md:mx-0 md:px-0 mt-6 mb-8"
      role="group"
      aria-label="Filter tours by city"
    >
      {cities.map((city) => {
        const isActive = value === city;
        
        return (
          <button
            key={city}
            onClick={() => onChange(city)}
            className={`
              rounded-full px-4 py-2
              text-[10px] uppercase tracking-[0.25em] font-bold
              transition-all duration-300
              ${
                isActive
                  ? "bg-accent-gold text-text-dark shadow-[0_0_15px_rgba(196,160,82,0.3)]"
                  : "border border-white/10 bg-transparent text-white/60 hover:border-white/20 hover:text-white"
              }
            `}
            aria-pressed={isActive}
          >
            {city}
          </button>
        );
      })}
    </div>
  );
}
