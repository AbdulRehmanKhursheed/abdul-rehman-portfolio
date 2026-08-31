import type { Metadata, Viewport } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import ConditionalHeader from "../components/conditional-header.component";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  ("https://abdul-rehman-portfolio-ecru.vercel.app");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Malik Abdul Rehman Khursheed — Senior Full-Stack Engineer",
  description:
    "Primary engineer on a multi-tenant Next.js 16 commerce platform serving three live merchant brands, and top contributor to its Go BFF. Web performance for emerging-market users: Core Web Vitals Passed, INP 169ms, organic search 0 → 156K clicks.",
  alternates: { canonical: "/" },
  keywords: [
    "Senior Full-Stack Engineer",
    "Senior Frontend Engineer",
    "Go",
    "Multi-tenant SaaS",
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
  authors: [{ name: "Malik Abdul Rehman Khursheed" }],
  creator: "Malik Abdul Rehman Khursheed",
  openGraph: {
    title: "Malik Abdul Rehman Khursheed — Senior Full-Stack Engineer",
    description:
      "Primary engineer on the Keenu One storefront — a multi-tenant Next.js 16 platform with three merchant brands live — and top contributor to its Go BFF. Previously: Core Web Vitals Passed, Lighthouse 92, organic search 0 → 156K clicks at Bazaar.",
    type: "website",
    locale: "en_US",
    siteName: "Malik Abdul Rehman Khursheed",
    url: "/",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Malik Abdul Rehman Khursheed — Senior Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Malik Abdul Rehman Khursheed — Senior Full-Stack Engineer",
    description:
      "Primary engineer on a multi-tenant Next.js 16 commerce platform, three brands live. Core Web Vitals Passed, Lighthouse 92, organic search 0 → 156K clicks.",
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
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
      <body className="font-sans">
        <ConditionalHeader />
        {children}
      </body>
    </html>
  );
}
