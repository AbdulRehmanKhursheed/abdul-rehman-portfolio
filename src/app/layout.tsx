export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ConditionalHeader from "../components/conditional-header.component";
import { ThemeProvider } from "../components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdul Rehman - Front-End Heavy Full-Stack Engineer (React · Next.js · NestJS)",
  description: "Portfolio of Abdul Rehman — 5 years building high-traffic web apps. Specializing in React, Next.js, NestJS, TypeScript, and AWS. Cut CDN costs $450/mo, improved LCP 40%, boosted order value 47%.",
  keywords: ["Front-End Engineer", "Full Stack Developer", "React", "Next.js", "NestJS", "TypeScript", "AWS", "Redux", "Node.js", "Portfolio", "Pakistan", "Senior Software Engineer"],
  authors: [{ name: "Abdul Rehman" }],
  creator: "Abdul Rehman",
  openGraph: {
    title: "Abdul Rehman - Front-End Heavy Full-Stack Engineer (React · Next.js · NestJS)",
    description: "5 years building and scaling high-traffic web applications. Specialized in React, Next.js, and NestJS with measurable impact across 100k+ active users.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rehman - Front-End Heavy Full-Stack Engineer (React · Next.js · NestJS)",
    description: "5 years building and scaling high-traffic web applications. Specialized in React, Next.js, and NestJS with measurable impact across 100k+ active users.",
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
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="theme-color" content="#3B82F6" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <ConditionalHeader />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
