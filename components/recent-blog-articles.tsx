"use client"

import { getAllBlogPosts } from "@/lib/blog-posts"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Clock, BookOpen } from "lucide-react"

export function RecentBlogArticles() {
  const allPosts = getAllBlogPosts()
  const recentPosts = allPosts.slice(0, 3)

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
            Cannabis Wellness Education
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
            Learn from our expert guides on RSO, FECO, dosing protocols, and cannabis education updated weekly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
          {recentPosts.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <Card className="h-full border-0 shadow-sm hover:shadow-md transition-all hover:border-amber-500/30 cursor-pointer group">
                <CardContent className="p-0 h-full flex flex-col">
                  <div className="relative h-40 bg-muted overflow-hidden">
                    {post.featuredImage ? (
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover object-center"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                        <BookOpen className="h-8 w-8 text-amber-600/40" />
                      </div>
                    )}
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="mb-3">
                      <span className="inline-block text-xs font-semibold bg-amber-600/10 text-amber-700 px-2.5 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-foreground mb-2 line-clamp-2 group-hover:text-amber-600 transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2 flex-1">{post.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div className="flex items-center gap-3 text-xs text-muted-foreground">
                        <Clock className="h-3.5 w-3.5" />
                        <span>{post.readTime}</span>
                      </div>
                      <ArrowRight className="h-4 w-4 text-amber-600 group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link href="/blog">
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-amber-600 text-white rounded-lg font-semibold hover:bg-amber-700 transition-colors">
              Read All Articles
              <ArrowRight className="h-4 w-4" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}
