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
  title: "Abdul Rehman - Senior Software Engineer & Full Stack Developer",
  description: "Professional portfolio of Abdul Rehman, a Senior Software Engineer with 4.5+ years of experience in full-stack development, mobile applications, and cloud infrastructure. Specializing in React, Next.js, Android, AWS, and modern web technologies.",
  keywords: ["Senior Software Engineer", "Full Stack Developer", "React", "Next.js", "Android", "Kotlin", "AWS", "TypeScript", "Mobile Development", "Portfolio", "Pakistan"],
  authors: [{ name: "Abdul Rehman" }],
  creator: "Abdul Rehman",
  openGraph: {
    title: "Abdul Rehman - Senior Software Engineer & Full Stack Developer",
    description: "Professional portfolio showcasing 4+ years of expertise in web development, mobile applications, and cloud engineering. Serving thousands of users with scalable solutions.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rehman - Senior Software Engineer & Full Stack Developer",
    description: "Professional portfolio showcasing 4+ years of expertise in web development, mobile applications, and cloud engineering.",
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
