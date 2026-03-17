import Link from "next/link"
import Image from "next/image"
import { getAllBlogPosts } from "@/lib/blog-posts"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cannabis Oil Blog | RSO, FECO & Cannabis Education - Natural Cannabis Oil",
  description:
    "Educational articles about cannabis oils, RSO dosing guides, FECO benefits, edibles, and supportive care. Expert guides on pain management, sleep, anxiety relief. Updated weekly 2025.",
  keywords: [
    "cannabis oil blog",
    "RSO guide",
    "FECO education",
    "cannabis dosing",
    "medical cannabis articles",
    "RSO dosage chart",
    "how to make RSO",
    "cannabis for pain",
    "cannabis for sleep",
    "THC distillate guide",
  ],
  alternates: {
    canonical: "https://naturalcannabisoil.shop/blog",
  },
  openGraph: {
    title: "Cannabis Wellness Blog | Natural Cannabis Oil",
    description: "Expert guides on RSO, FECO, dosing, and cannabis wellness. Educational resources updated for 2025.",
    url: "https://naturalcannabisoil.shop/blog",
    siteName: "Natural Cannabis Oil",
  },
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 bg-background">
        <section className="bg-gradient-to-b from-primary/10 to-background py-16 md:py-24">
          <div className="mx-auto px-4 w-[85%]">
            <BackButton href="/" label="Back to Home" className="mb-6" />
            <div className="text-center">
              <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Cannabis Wellness Blog</h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Educational resources to help you understand{" "}
                <Link href="/products/rso" className="text-primary hover:underline">
                  RSO
                </Link>
                ,{" "}
                <Link href="/products/feco" className="text-primary hover:underline">
                  FECO
                </Link>
                , and other cannabis products, safe usage, and supportive care for symptom management.
              </p>
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                    <div className="aspect-video relative overflow-hidden">
                      <Image
                        src={post.featuredImage || "/placeholder.svg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground">
                        {post.category}
                      </Badge>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          {new Date(post.publishedAt).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          {post.readTime}
                        </span>
                      </div>
                      <h2 className="font-serif text-xl font-semibold text-foreground mb-2 line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{post.excerpt}</p>
                      <span className="inline-flex items-center text-primary font-medium text-sm group">
                        Read Article
                        <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </span>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>

            {posts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground">No blog posts available yet.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
