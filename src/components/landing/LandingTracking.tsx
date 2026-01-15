"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { track } from "@/lib/analytics";

interface LandingTrackingProps {
  pageTitle: string;
}

export default function LandingTracking({ pageTitle }: LandingTrackingProps) {
  const pathname = usePathname();

  useEffect(() => {
    // Track Landing View
    track("landing_view", {
      title: pageTitle,
      path: pathname,
    });

    // Event delegation for clicks
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const ctaLink = target.closest("a");
      
      if (ctaLink) {
        const trackAttr = ctaLink.getAttribute("data-track-cta");
        if (trackAttr) {
          track(`${trackAttr}_cta_click`, {
            title: pageTitle,
            path: pathname,
            href: ctaLink.getAttribute("href"),
            label: ctaLink.innerText.trim(),
          });
        }
      }
    };

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [pageTitle, pathname]);

  return null; // This component doesn't render anything
}
