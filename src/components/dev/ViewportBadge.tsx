"use client";

import { useEffect, useState } from "react";

export default function ViewportBadge() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (process.env.NODE_ENV !== "development") return;
    
    setMounted(true);
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  if (process.env.NODE_ENV !== "development" || !mounted) return null;

  return (
    <div className="fixed bottom-1 left-1 z-50 flex items-center gap-2 rounded bg-black/80 px-2 py-1 text-xs font-mono text-white shadow-lg pointer-events-none border border-white/10">
      <span className="text-gray-400">VP:</span>
      <span>
        {dimensions.width}px x {dimensions.height}px
      </span>
      <span className="block sm:hidden text-gray-500">XS</span>
      <span className="hidden sm:block md:hidden text-yellow-400">SM</span>
      <span className="hidden md:block lg:hidden text-blue-400">MD</span>
      <span className="hidden lg:block xl:hidden text-green-400">LG</span>
      <span className="hidden xl:block 2xl:hidden text-purple-400">XL</span>
      <span className="hidden 2xl:block text-red-400">2XL</span>
    </div>
  );
}
