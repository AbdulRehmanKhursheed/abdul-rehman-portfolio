import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "../../components/header.component";
import RegisterSW from "@/hooks/register-sw";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Abdul Rehman's portfolio",
  description: "Abdul Rehman Portfolio WebApp.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0070f3" />
      </head>
      <body className={inter.className}>
        <RegisterSW />
        <Header />
        {children}
      </body>
    </html>
  );
}
