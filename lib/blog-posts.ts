export interface Author {
  name: string
  image: string
  title: string
  bio: string
}

export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  metaDescription?: string
  content?: string
  author: Author
  publishDate: string
  publishedAt: string
  readTime: string
  category: string
  featuredImage: string
  images?: string[]
  tags: string[]
}

const defaultAuthor: Author = {
  name: "Natural Cannabis Oil Team",
  image: "/images/default-avatar.png",
  title: "Cannabis Education Specialist",
  bio: "Our team of cannabis experts is dedicated to providing accurate, research-based information about cannabis oils, their benefits, and safe usage guidelines.",
}

export const blogPosts: BlogPost[] = [
  {
    slug: "rick-simpson-oil",
    title: "Rick Simpson Oil (RSO): Benefits, Risks, Dosage, and Everything You Need to Know",
    excerpt:
      "A comprehensive guide to understanding RSO, its potential benefits for symptom management, safe usage guidelines, and important considerations for patients.",
    metaDescription:
      "Learn everything about Rick Simpson Oil (RSO): what it is, therapeutic benefits, dosing guidelines, risks, and how to use it safely. Complete guide with FAQs.",
    author: defaultAuthor,
    publishDate: "December 1, 2024",
    publishedAt: "2024-12-01",
    readTime: "15 min read",
    category: "Education",
    featuredImage: "/images/rso-capsules-product.jpg",
    images: [
      "/images/rso-capsules-product.jpg",
      "/images/rso-capsules-6000mg.jpg",
      "/images/cannabis-capsules-real.jpg",
    ],
    tags: ["RSO", "Cannabis Oil", "Patient Education", "Dosing Guide", "Symptom Relief"],
  },
  {
    slug: "full-extract-cannabis-oil",
    title: "The Ultimate Guide to Full Extract Cannabis Oil (FECO): Benefits, Dosing, and What to Expect",
    excerpt:
      "Everything you need to know about FECO, including its composition, therapeutic applications, dosing guidelines, and how it compares to other cannabis extracts.",
    metaDescription:
      "Complete guide to FECO (Full Extract Cannabis Oil): understand cannabinoid ratios, pricing factors, premium quality indicators, dosing guidelines, and FAQs. Lab-tested products available.",
    author: defaultAuthor,
    publishDate: "December 3, 2024",
    publishedAt: "2024-12-03",
    readTime: "12 min read",
    category: "Education",
    featuredImage: "/images/cannabis-essential-oils.jpg",
    images: [
      "/images/cannabis-essential-oils.jpg",
      "/images/rso-syringes-clear.jpg",
      "/images/cannabis-oils-collection.jpg",
    ],
    tags: ["FECO", "Cannabis Oil", "Full Extract", "Dosing Guide", "Cannabinoids"],
  },
  {
    slug: "rso",
    title: "RSO Guide: Rick Simpson Oil Explained - Benefits, Uses, and Safe Dosing",
    excerpt:
      "Complete RSO guide covering Rick Simpson's original method, modern extraction techniques, benefits for pain and wellness, safe dosing protocols, and where to buy quality RSO.",
    metaDescription:
      "RSO Guide 2025: Learn about Rick Simpson Oil benefits, extraction methods, safe dosing, side effects, and where to buy lab-tested RSO online. Complete educational resource.",
    author: defaultAuthor,
    publishDate: "January 10, 2025",
    publishedAt: "2025-01-10",
    readTime: "18 min read",
    category: "Education",
    featuredImage: "/images/rso-science-education.jpg",
    images: [
      "/images/rso-science-education.jpg",
      "/images/rso-capsules-6000mg.jpg",
      "/images/cannabis-capsules-real.jpg",
    ],
    tags: [
      "RSO guide",
      "Rick Simpson Oil",
      "RSO benefits",
      "RSO dosing",
      "cannabis oil education",
      "buy RSO online",
      "RSO for pain",
      "full spectrum cannabis oil",
    ],
  },
  {
    slug: "feco",
    title: "FECO Explained: Full Extract Cannabis Oil Benefits, Dosing, and Comparison to RSO",
    excerpt:
      "Comprehensive FECO guide: Learn what Full Extract Cannabis Oil is, how it differs from RSO, extraction methods, dosing protocols, benefits for pain and sleep, and purchasing tips.",
    metaDescription:
      "FECO Guide 2025: Full Extract Cannabis Oil explained. Learn about FECO vs RSO, ethanol extraction, dosing guide, benefits, side effects, and where to buy premium FECO online.",
    author: defaultAuthor,
    publishDate: "January 12, 2025",
    publishedAt: "2025-01-12",
    readTime: "16 min read",
    category: "Education",
    featuredImage: "/images/cannabis-oils-collection.jpg",
    images: [
      "/images/cannabis-oils-collection.jpg",
      "/images/rso-syringes-clear.jpg",
      "/images/cannabis-essential-oils.jpg",
    ],
    tags: [
      "FECO guide",
      "Full Extract Cannabis Oil",
      "FECO vs RSO",
      "FECO benefits",
      "FECO dosing",
      "cannabis extract",
      "buy FECO online",
      "ethanol extraction",
    ],
  },
  {
    slug: "rso-dosage-plan-beginner-to-advanced",
    title: "RSO Dosage Plan: Complete Beginner to Advanced Protocol with Storage Guide",
    excerpt:
      "Master RSO dosing with our comprehensive protocol. Learn beginner starting doses, gradual increase schedules, advanced therapeutic dosing, optimal timing, storage tips, and what to expect at each stage.",
    metaDescription:
      "RSO Dosage Plan 2025: Complete beginner to intermediate/advanced protocol. Learn starting doses, increase schedules, timing, duration, storage, and side effect management. Printable tracking chart included.",
    author: defaultAuthor,
    publishDate: "January 25, 2025",
    publishedAt: "2025-01-25",
    readTime: "22 min read",
    category: "Dosing Guide",
    featuredImage: "/images/rso-capsules-6000mg.jpg",
    images: [
      "/images/rso-capsules-6000mg.jpg",
      "/images/rso-capsules-product.jpg",
      "/images/cannabis-capsules-real.jpg",
    ],
    tags: [
      "RSO dosage plan",
      "RSO dosing protocol",
      "beginner RSO dosing",
      "advanced RSO dosing",
      "RSO storage guide",
      "how to take RSO",
      "RSO timing",
      "RSO side effects",
      "RSO tolerance",
      "RSO tracking chart",
    ],
  },
  {
    slug: "feco-dosage-plan-complete-protocol",
    title: "FECO Dosage Plan: Beginner to Intermediate Protocol with Timing & Storage Tips",
    excerpt:
      "Complete FECO dosing guide from beginner to intermediate levels. Learn starting doses, gradual titration, optimal timing for symptom relief, proper storage methods, and how long to continue treatment.",
    metaDescription:
      "FECO Dosage Plan 2025: Complete protocol from beginner to intermediate. Learn starting doses, titration schedules, timing for pain/sleep/anxiety, storage tips, duration, and tolerance management.",
    author: defaultAuthor,
    publishDate: "January 26, 2025",
    publishedAt: "2025-01-26",
    readTime: "20 min read",
    category: "Dosing Guide",
    featuredImage: "/images/rso-syringes-clear.jpg",
    images: [
      "/images/rso-syringes-clear.jpg",
      "/images/cannabis-oils-collection.jpg",
      "/images/cannabis-essential-oils.jpg",
    ],
    tags: [
      "FECO dosage plan",
      "FECO dosing protocol",
      "beginner FECO dosing",
      "intermediate FECO dosing",
      "FECO storage",
      "how to take FECO",
      "FECO timing",
      "FECO for pain",
      "FECO for sleep",
      "FECO titration",
    ],
  },
]

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getAllBlogPosts(): BlogPost[] {
  return blogPosts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
}
