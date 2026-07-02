import type { Metadata } from "next";

// App legal pages — kept out of search and off the personal brand's OG card.
export const metadata: Metadata = {
  title: "Noor — Privacy Policy",
  description: "Privacy policy for the Noor app.",
  robots: { index: false, follow: false },
  openGraph: { title: "Noor — Privacy Policy" },
  twitter: { card: "summary", title: "Noor — Privacy Policy" },
};

export default function NoorLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
