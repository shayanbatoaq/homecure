import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteImages } from "@/lib/images";
import {
  FACEBOOK_LINK,
  INSTAGRAM_LINK,
  SEO_DESCRIPTION,
  SEO_TITLE,
  SITE_ALTERNATE_NAME,
  SITE_NAME,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: SEO_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SEO_DESCRIPTION,
  keywords: [
    "Home Cure",
    SITE_ALTERNATE_NAME,
    "sample collection Karachi",
    "at home sample collection",
    "at-home sample collection Karachi",
    "home sample collection Karachi",
    "blood sample collection at home",
    "urine sample collection at home",
    "stool sample collection at home",
    "sputum sample collection at home",
    "diagnostic sample collection",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  icons: {
    icon: "/icon.png",
    shortcut: "/favicon.ico",
  },
  openGraph: {
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    images: [
      {
        url: siteImages.hero.src,
        width: 1400,
        height: 950,
        alt: siteImages.hero.alt,
      },
    ],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SEO_TITLE,
    description: SEO_DESCRIPTION,
    images: [siteImages.hero.src],
  },
  other: {
    "geo.region": "PK-SD",
    "geo.placename": "Karachi",
    "business:contact_data:locality": "Karachi",
    "business:contact_data:country_name": "Pakistan",
    "og:see_also": [INSTAGRAM_LINK, FACEBOOK_LINK].join(","),
    "alternate-brand-name": SITE_ALTERNATE_NAME,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body className="min-h-full antialiased">{children}</body>
    </html>
  );
}
