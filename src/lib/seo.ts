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
  image = "/og-image.jpg",
  canonical = "/",
  noIndex = false,
}: SeoProps): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: siteUrl ? siteUrl + canonical : undefined,
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
      canonical: siteUrl ? siteUrl + canonical : undefined,
    },
    ...(noIndex && {
      robots: {
        index: false,
        follow: false,
      },
    }),
  };
}
