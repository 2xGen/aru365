import type { Metadata } from "next";
import { Outfit, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-tagline",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aru365 – Best Tours & Excursions in Aruba | Sunset Cruises, ATV, Snorkeling",
  description:
    "Aruba’s dedicated platform for discovering the best tours and excursions. Find, compare, and book snorkeling tours, sunset cruises, ATV adventures, and more — all in one place. Launching soon.",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans min-h-screen">{children}</body>
    </html>
  );
}
