import type { MetadataRoute } from "next"

// Blog posts for news sitemap
const blogPosts = [
  {
    slug: "feco-dosage-plan-complete-protocol",
    title: "FECO Dosage Plan: Complete Protocol",
    date: "2024-11-28",
  },
  {
    slug: "rso-dosage-plan-beginner-to-advanced",
    title: "RSO Dosage Plan: Beginner to Advanced",
    date: "2024-11-25",
  },
  {
    slug: "understanding-cannabis-extraction-methods",
    title: "Understanding Cannabis Extraction Methods",
    date: "2024-11-20",
  },
  {
    slug: "benefits-of-full-spectrum-cannabis-oil",
    title: "Benefits of Full-Spectrum Cannabis Oil",
    date: "2024-11-15",
  },
  {
    slug: "how-to-choose-the-right-cannabis-oil",
    title: "How to Choose the Right Cannabis Oil",
    date: "2024-11-10",
  },
]

export default function sitemap(): MetadataRoute.Sitemap {
  return blogPosts.map((post) => ({
    url: `https://naturalcannabisoil.shop/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))
}
