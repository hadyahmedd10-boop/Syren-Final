import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PHProvider } from "@/providers/PostHogProvider";
import PostHogPageView from "@/providers/PostHogPageView";
import { Suspense } from "react";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://syren.travel"),
  title: {
    default: "Syren | Luxury Travel Experiences in Egypt",
    template: "%s | Syren"
  },
  description:
    "Private luxury journeys through Egypt. Discover Cairo, the Nile, the Red Sea, and hidden sanctuaries — curated with soul.",
  alternates: {
    canonical: "./",
  },
  openGraph: {
    title: "Syren Travel",
    description: "Luxury travel, designed with soul.",
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: "Syren",
    images: [{ url: "/og.jpg", width: 1200, height: 630 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Syren Travel",
    description: "Luxury travel, designed with soul.",
    images: ["/og.jpg"],
    creator: "@syren_egypt",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.variable} ${playfair.variable} antialiased`}>
        <PHProvider>
          <Suspense>
            <PostHogPageView />
          </Suspense>
          <Navbar />
          <main id="main-content" role="main" className="pt-20">
            {children}
          </main>
          <Footer />
          <Analytics />
        </PHProvider>
      </body>
    </html>
  );
}
