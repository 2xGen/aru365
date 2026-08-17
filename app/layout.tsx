import type { Metadata } from "next";
import { Outfit, DM_Sans, Playfair_Display } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { Header } from "@/components/Header";
import { CookieConsentProvider } from "@/components/CookieConsentContext";
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

const SITE_URL = "https://aru365.com";
const DEFAULT_OG_IMAGE =
  "https://soaacpusdhyxwucjhhpy.supabase.co/storage/v1/object/public/aru365/aru365%20tours%20and%20excursions%20in%20aruba.png";
const defaultTitle = "Aru365 – Best Tours in Aruba | Catamaran, Snorkeling, Sunset Cruises & ATV Tours";
const defaultDescription =
  "Book the best tours and excursions in Aruba. Compare catamaran cruises, snorkeling tours, jet ski rentals, ATV adventures, sunset dinner cruises, and private boat charters — all in one place.";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aru365",
  url: SITE_URL,
  logo: DEFAULT_OG_IMAGE,
  description: defaultDescription,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Aru365",
  url: SITE_URL,
  description: defaultDescription,
  publisher: { "@type": "Organization", name: "Aru365", url: SITE_URL },
};

export const metadata: Metadata = {
  title: defaultTitle,
  description: defaultDescription,
  metadataBase: new URL(SITE_URL),
  robots: { index: true, follow: true },
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en",
    url: SITE_URL,
    siteName: "Aru365",
    title: defaultTitle,
    description: defaultDescription,
    images: [
      {
        url: DEFAULT_OG_IMAGE,
        width: 1200,
        height: 630,
        alt: "Aru365 – Tours and excursions in Aruba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [DEFAULT_OG_IMAGE],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${outfit.variable} ${dmSans.variable} ${playfair.variable}`}>
      <body className="font-sans min-h-screen">
        <CookieConsentProvider>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          />
          <Header />
          {children}
          <Analytics />
        </CookieConsentProvider>
      </body>
    </html>
  );
}
