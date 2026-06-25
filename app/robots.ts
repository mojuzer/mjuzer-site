import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/content";

// Served at /robots.txt. Base URL derives from SITE_URL in lib/content.ts.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
