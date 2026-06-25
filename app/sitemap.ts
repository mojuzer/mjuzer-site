import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content";

// Served at /sitemap.xml. Single-page site → one URL (the homepage).
// Base URL derives from SITE_URL in lib/content.ts.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: siteConfig.url,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
