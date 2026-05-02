import type { Metadata } from "next";
import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import ConditionalHeader from "../components/conditional-header.component";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
});

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
  variable: "--font-serif",
});

export const metadata: Metadata = {
  title: "Abdul Rehman — Senior Frontend Engineer (Next.js · React · TypeScript)",
  description:
    "Senior Frontend Engineer at Bazaar Technologies. Web performance for emerging-market users — Core Web Vitals: Passed, Lighthouse 92, organic search 0 → 156K monthly clicks.",
  keywords: [
    "Senior Frontend Engineer",
    "Web Performance",
    "Core Web Vitals",
    "React",
    "Next.js",
    "TypeScript",
    "NestJS",
    "AWS",
    "Pakistan",
  ],
  authors: [{ name: "Abdul Rehman" }],
  creator: "Abdul Rehman",
  openGraph: {
    title: "Abdul Rehman — Senior Frontend Engineer",
    description:
      "Web performance for emerging-market users. Core Web Vitals: Passed, Lighthouse 92, SEO 0 → 156K monthly clicks at Bazaar Technologies.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rehman — Senior Frontend Engineer",
    description:
      "Web performance for emerging-market users. Core Web Vitals: Passed, Lighthouse 92, SEO 0 → 156K monthly clicks at Bazaar Technologies.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${serif.variable}`}>
      <head>
        <meta name="theme-color" content="#fafaf9" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans">
        <ConditionalHeader />
        {children}
      </body>
    </html>
  );
}
