"use client";

import React from "react";
import { trackCta } from "@/lib/track";

interface TrackedLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  eventName: string;
  eventProps?: Record<string, any>;
}

export default function TrackedLink({
  children,
  eventName,
  eventProps,
  onClick,
  ...props
}: TrackedLinkProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    trackCta(eventName, eventProps);
    if (onClick) onClick(e);
  };

  return (
    <a onClick={handleClick} {...props}>
      {children}
    </a>
  );
}
