import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import ConditionalHeader from "../components/conditional-header.component";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title:
    "Abdul Rehman — Senior Frontend Engineer (Next.js · React · TypeScript)",
  description:
    "Senior Frontend Engineer at Bazaar Technologies. Web performance for emerging-market users — Core Web Vitals: Passed, Lighthouse 92, organic search 0 → 156K monthly clicks. Sole author of the Keenu One storefront.",
  keywords: [
    "Senior Frontend Engineer",
    "Web Performance",
    "Core Web Vitals",
    "React",
    "Next.js",
    "TypeScript",
    "NestJS",
    "AWS",
    "Multi-tenant",
    "Pakistan",
  ],
  authors: [{ name: "Abdul Rehman" }],
  creator: "Abdul Rehman",
  openGraph: {
    title: "Abdul Rehman — Senior Frontend Engineer",
    description:
      "Web performance for emerging-market users. Core Web Vitals: Passed, Lighthouse 92, SEO 0 → 156K monthly clicks at Bazaar. Sole author of the Keenu One storefront.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rehman — Senior Frontend Engineer",
    description:
      "Web performance for emerging-market users. Core Web Vitals: Passed, Lighthouse 92, SEO 0 → 156K monthly clicks at Bazaar.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
    >
      <head>
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="font-sans">
        <ConditionalHeader />
        {children}
      </body>
    </html>
  );
}
