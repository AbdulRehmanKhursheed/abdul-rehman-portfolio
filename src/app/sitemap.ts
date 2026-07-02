import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  ("https://abdul-rehman-portfolio-ecru.vercel.app");

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1 },
    { path: "/case-study/bazaar-performance", priority: 0.8 },
    { path: "/case-study/keenu-storefront", priority: 0.8 },
  ];

  return routes.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority,
  }));
}
