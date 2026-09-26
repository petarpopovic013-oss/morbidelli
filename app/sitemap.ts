import type { MetadataRoute } from "next";
import { getMotorcycles } from "./actions/motorcycles";
import { getNews } from "./actions/news";
import { absoluteUrl } from "./lib/seo";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [motorcycles, news] = await Promise.all([getMotorcycles(), getNews()]);
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: absoluteUrl("/"), lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/o-nama"), lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: absoluteUrl("/dodatna-oprema"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/prodajna-mesta"), lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: absoluteUrl("/novosti"), lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: absoluteUrl("/kontakt"), lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];

  const motorcyclePages: MetadataRoute.Sitemap = motorcycles.map((motorcycle) => ({
    url: absoluteUrl(`/motocikli/${motorcycle.slug}`),
    lastModified: motorcycle.created_at ? new Date(motorcycle.created_at) : now,
    changeFrequency: "weekly",
    priority: 0.9,
    images: motorcycle.image_url ? [motorcycle.image_url] : undefined,
  }));

  const newsPages: MetadataRoute.Sitemap = news.map((item) => ({
    url: absoluteUrl(`/novosti/${item.slug}`),
    lastModified: new Date(item.date || item.created_at),
    changeFrequency: "monthly",
    priority: 0.7,
    images: item.images?.length ? item.images : undefined,
  }));

  return [...staticPages, ...motorcyclePages, ...newsPages];
}
