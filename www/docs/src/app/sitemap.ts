import type { MetadataRoute } from "next";
import { getAllSidebarPaths } from "@/lib/sidebar";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = process.env.NEXT_PUBLIC_SITE_URL || "https://docs.gorgojs.com";
  const dynamicRoutes = getAllSidebarPaths();

  const sitemapEntries: MetadataRoute.Sitemap = [];

  sitemapEntries.push({
    url: host,
    lastModified: new Date(),
    changeFrequency: "yearly",
    priority: 1,
  });

  dynamicRoutes.forEach((route) => {
    sitemapEntries.push({
      url: `${host}${route}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    });
  });

  return sitemapEntries;
}
