import type { Metadata } from "next";
import { Syne, Inter } from "next/font/google";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
} as const;

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orivex - Learn. Earn. Verify.",
  description:
    "Orivex is the decentralized learn-to-earn platform on Stellar. Earn USDC / XLM and build portable on-chain credentials for every milestone.",
  keywords: ["Orivex", "learn-to-earn", "Stellar", "Soroban", "education"],
  authors: [{ name: "Orivex Contributors" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${syne.variable} ${inter.variable} font-body antialiased`}
      >
          {children}
      </body>
    </html>
  );
}
