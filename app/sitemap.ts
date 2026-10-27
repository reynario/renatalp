import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/constants";
import { postsPublicados } from "@/lib/posts";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = postsPublicados();
  return [
    { url: `${SITE_URL}/`, changeFrequency: "monthly", priority: 1 },
    ...(posts.length
      ? [{ url: `${SITE_URL}/blog`, changeFrequency: "weekly" as const, priority: 0.7 }]
      : []),
    ...posts.map((p) => ({
      url: `${SITE_URL}/blog/${p.slug}`,
      lastModified: p.atualizadoEm || p.publicadoEm,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
