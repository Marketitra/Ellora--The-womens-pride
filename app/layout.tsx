import type { Metadata } from "next";
import { Lato, Playfair_Display, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

// ── Google Fonts ──────────────────────────────────────────────────────────────

// Body — clean, warm, classic
const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Display — ultra-refined serif with beautiful italics
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// Accent — section labels, pull quotes, decorative text
const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

// ── Metadata ──────────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    default: "Ellora Event Management — Crafting Moments That Last a Lifetime",
    template: "%s | Ellora Event Management",
  },
  description:
    "Ellora specializes in creating memorable, seamlessly executed events — elegant weddings, corporate gatherings, exhibitions, birthday parties, social functions, and stage decor.",
  keywords: [
    "event management",
    "wedding planners",
    "corporate events",
    "event decorators",
    "stage decor",
    "exhibition management",
    "birthday party planners",
    "social functions",
    "Ellora events",
  ],
  authors: [{ name: "Ellora Event Management" }],
  creator: "Ellora Event Management",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://ellora-events.com",
    siteName: "Ellora Event Management",
    title: "Ellora Event Management — Crafting Moments That Last a Lifetime",
    description:
      "Premium event management services — weddings, corporate events, exhibitions, and more.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ellora Event Management",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ellora Event Management",
    description: "Crafting Moments That Last a Lifetime",
    images: ["/og-image.jpg"],
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
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

// ── Root Layout ───────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${lato.variable} ${cormorant.variable} ${playfair.variable}`}
    >
      <body className="font-body bg-white text-brand-black antialiased">
        {children}
      </body>
    </html>
  );
}
