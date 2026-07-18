import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { siteImages } from "@/lib/images";
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
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://homecure.com.pk",
  ),
  title: "HomeCure | Sample Collection at Your Doorstep",
  description:
    "HomeCure provides safe, hygienic, and convenient at-home diagnostic sample collection across Karachi.",
  keywords: [
    "HomeCure",
    "sample collection Karachi",
    "blood sample collection at home",
    "home healthcare Karachi",
    "diagnostic sample collection",
  ],
  openGraph: {
    title: "HomeCure | Sample Collection at Your Doorstep",
    description:
      "Safe, hygienic, and convenient sample collection at home across Karachi.",
    url: "https://homecure.com.pk",
    siteName: "HomeCure",
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
    title: "HomeCure | Sample Collection at Your Doorstep",
    description:
      "Safe, hygienic, and convenient sample collection at home across Karachi.",
    images: [siteImages.hero.src],
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
