import { Metadata } from "next";

interface SeoProps {
  title: string;
  description: string;
  image?: string;
  canonical?: string;
  noIndex?: boolean;
}

export function constructMetadata({
  title,
  description,
  image = "/og.jpg",
  canonical = "/",
  noIndex = false,
}: SeoProps): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://syren.travel";
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: siteUrl + canonical,
      siteName: "Syren",
      images: [{ url: image }],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
    alternates: {
      canonical: siteUrl + canonical,
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
