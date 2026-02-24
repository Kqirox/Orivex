import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";

import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

// ─── Fonts ────────────────────────────────────────────────────────────────────

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    default: "Learnault — Learn & Earn on Stellar",
    template: "%s | Learnault",
  },
  description:
    "A decentralized learn-to-earn platform on Stellar blockchain. Complete educational modules, earn token rewards, and build verifiable credentials.",
  keywords: [
    "learn to earn",
    "stellar blockchain",
    "education",
    "crypto rewards",
    "verifiable credentials",
    "soroban",
    "defi education",
  ],
  authors: [{ name: "Learnault Contributors" }],
  creator: "Learnault",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_APP_URL ?? "https://learnault.app"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Learnault",
    title: "Learnault — Learn & Earn on Stellar",
    description:
      "Democratizing access to financial literacy and digital skills with blockchain-verified credentials.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Learnault — Learn & Earn on Stellar",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Learnault — Learn & Earn on Stellar",
    description:
      "Democratizing access to financial literacy and digital skills with blockchain-verified credentials.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

// ─── Viewport ─────────────────────────────────────────────────────────────────

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakartaSans.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background text-foreground font-sans antialiased">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
