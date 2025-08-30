export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/header.component";
import { ThemeProvider } from "../components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdul Rehman - Full Stack Developer & Cloud Engineer",
  description: "Professional portfolio of Abdul Rehman, a Full Stack Developer and Cloud Engineer specializing in React, Next.js, AWS, and modern web technologies.",
  keywords: ["Full Stack Developer", "Cloud Engineer", "React", "Next.js", "AWS", "TypeScript", "Portfolio"],
  authors: [{ name: "Abdul Rehman" }],
  creator: "Abdul Rehman",
  openGraph: {
    title: "Abdul Rehman - Full Stack Developer & Cloud Engineer",
    description: "Professional portfolio showcasing modern web development and cloud engineering expertise.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rehman - Full Stack Developer & Cloud Engineer",
    description: "Professional portfolio showcasing modern web development and cloud engineering expertise.",
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
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
