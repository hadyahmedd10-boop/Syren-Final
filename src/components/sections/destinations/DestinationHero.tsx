"use client";

import { StaticImageData } from "next/image";
import HeroShell from "@/components/ui/HeroShell";

interface DestinationHeroProps {
  name: string;
  tagline: string;
  image: StaticImageData;
}

export default function DestinationHero({ name, tagline, image }: DestinationHeroProps) {
  return (
    <HeroShell
      backgroundImage={image.src}
      eyebrow={tagline}
      title={name}
      heightClassName="min-h-[55vh] md:min-h-[70vh] lg:min-h-[75vh]"
    />
  );
}
