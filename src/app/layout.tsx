export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
export const revalidate = 0;

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/header.component";
import { ThemeProvider } from "../../components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdul Rehman - Full Stack Developer & Cloud Engineer",
  description:
    "Full Stack Developer & Cloud Engineer specializing in React, Next.js, AWS, and enterprise applications. Based in Pakistan.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "AWS",
    "Cloud Engineer",
    "Pakistan",
  ],
  authors: [{ name: "Abdul Rehman" }],
  creator: "Abdul Rehman",
  openGraph: {
    title: "Abdul Rehman - Full Stack Developer & Cloud Engineer",
    description:
      "Full Stack Developer & Cloud Engineer specializing in React, Next.js, AWS, and enterprise applications.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abdul Rehman - Full Stack Developer & Cloud Engineer",
    description:
      "Full Stack Developer & Cloud Engineer specializing in React, Next.js, AWS, and enterprise applications.",
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
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
