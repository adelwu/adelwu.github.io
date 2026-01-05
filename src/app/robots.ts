import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/_next/", "/*.json$", "/404"],
    },
    sitemap: "https://adelwu.com/sitemap.xml",
  };
}
