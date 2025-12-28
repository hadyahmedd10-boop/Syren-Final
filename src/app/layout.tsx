import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { PHProvider } from "@/providers/PostHogProvider";
import PostHogPageView from "@/providers/PostHogPageView";
import { Suspense } from "react";

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
  metadataBase: new URL("https://syren.com"),
  title: {
    default: "Syren | Experience Egypt Differently",
    template: "%s | Syren",
  },
  description:
    "Curated luxury travel experiences in Egypt — private parties, hidden gems, and expert-led local adventures for the discerning traveler.",
  keywords: ["Luxury Travel Egypt", "Private Egypt Tours", "Curated Egyptian Experiences", "Boutique Travel Egypt", "Exclusive Egypt Adventures"],
  authors: [{ name: "Syren" }],
  creator: "Syren",
  publisher: "Syren",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Syren | Experience Egypt Differently",
    description:
      "Curated luxury travel experiences in Egypt — private parties, hidden gems, and expert-led local adventures.",
    url: "https://syren.com",
    siteName: "Syren Egypt",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Syren Luxury Egypt Experiences",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Syren | Experience Egypt Differently",
    description:
      "Curated luxury travel experiences in Egypt — private parties, hidden gems, and expert-led local adventures.",
    images: ["/og-image.jpg"],
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
          <main id="main-content" role="main">{children}</main>
          <Footer />
        </PHProvider>
      </body>
    </html>
  );
}
