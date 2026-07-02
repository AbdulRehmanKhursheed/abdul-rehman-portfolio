import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  ("https://abdul-rehman-portfolio-ecru.vercel.app");

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/pdf/", "/api/", "/noor/"] },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
