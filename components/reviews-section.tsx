"use client"

import { useState } from "react"
import { Star, ThumbsUp, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"

interface Review {
  id: string
  name: string
  rating: number
  date: string
  comment: string
  helpful: number
  verified: boolean
}

const sampleReviews: Review[] = [
  {
    id: "1",
    name: "Sarah M.",
    rating: 5,
    date: "2024-11-15",
    comment:
      "These products have been life-changing for my chronic pain. The RSO oil especially provides excellent relief that lasts throughout the day. Highly recommend!",
    helpful: 24,
    verified: true,
  },
  {
    id: "2",
    name: "Michael R.",
    rating: 5,
    date: "2024-11-10",
    comment:
      "Finally found gummies that actually work for my anxiety. The dosing is consistent and the effects are exactly as described. Will definitely be ordering again.",
    helpful: 18,
    verified: true,
  },
  {
    id: "3",
    name: "Jennifer L.",
    rating: 4,
    date: "2024-11-05",
    comment:
      "Great quality products and fast shipping. The tinctures are perfect for sleep issues. Only giving 4 stars because I wish there were more flavor options.",
    helpful: 12,
    verified: true,
  },
  {
    id: "4",
    name: "David K.",
    rating: 5,
    date: "2024-10-28",
    comment:
      "As someone going through chemo, these edibles have been essential for managing nausea and stimulating appetite. The team was also incredibly helpful with dosing questions.",
    helpful: 31,
    verified: true,
  },
]

const reviewSchema = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "Natural Cannabis Oil Products",
  description: "Premium RSO, FECO, tinctures and cannabis extracts",
  brand: {
    "@type": "Brand",
    name: "Natural Cannabis Oil",
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    reviewCount: "1247",
    bestRating: "5",
    worstRating: "1",
  },
  review: sampleReviews.map((review) => ({
    "@type": "Review",
    author: {
      "@type": "Person",
      name: review.name,
    },
    datePublished: review.date,
    reviewBody: review.comment,
    reviewRating: {
      "@type": "Rating",
      ratingValue: review.rating.toString(),
      bestRating: "5",
      worstRating: "1",
    },
  })),
}

export function ReviewsSection() {
  const [reviews] = useState<Review[]>(sampleReviews)
  const [showForm, setShowForm] = useState(false)
  const [selectedRating, setSelectedRating] = useState(5)

  const averageRating = reviews.reduce((acc, r) => acc + r.rating, 0) / reviews.length

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }} />
      <section className="py-20">
        <div className="mx-auto px-4 w-[85%]">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Customer Reviews</h2>
              <div className="flex items-center justify-center gap-2 mb-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`h-6 w-6 ${star <= Math.round(averageRating) ? "fill-amber-400 text-amber-400" : "text-muted"}`}
                    />
                  ))}
                </div>
                <span className="text-lg font-semibold text-foreground">{averageRating.toFixed(1)}</span>
                <span className="text-muted-foreground">({reviews.length} reviews)</span>
              </div>
            </div>

            <div className="space-y-6 mb-8">
              {reviews.map((review) => (
                <div key={review.id} className="bg-card border border-border rounded-lg p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-full bg-muted">
                        <User className="h-5 w-5 text-muted-foreground" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-medium text-foreground">{review.name}</span>
                          {review.verified && (
                            <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                              Verified Purchase
                            </span>
                          )}
                        </div>
                        <span className="text-sm text-muted-foreground">
                          {new Date(review.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                    </div>
                    <div className="flex">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`h-4 w-4 ${star <= review.rating ? "fill-amber-400 text-amber-400" : "text-muted"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{review.comment}</p>
                  <Button variant="ghost" size="sm" className="gap-2 text-muted-foreground">
                    <ThumbsUp className="h-4 w-4" />
                    Helpful ({review.helpful})
                  </Button>
                </div>
              ))}
            </div>

            <div className="text-center">
              {!showForm ? (
                <Button onClick={() => setShowForm(true)}>Write a Review</Button>
              ) : (
                <div className="bg-card border border-border rounded-lg p-6 text-left space-y-4">
                  <h3 className="font-semibold text-lg text-foreground">Share Your Experience</h3>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Your Rating</label>
                    <div className="flex gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button key={star} onClick={() => setSelectedRating(star)} className="focus:outline-none">
                          <Star
                            className={`h-8 w-8 transition-colors ${star <= selectedRating ? "fill-amber-400 text-amber-400" : "text-muted hover:text-amber-200"}`}
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Your Name</label>
                    <Input placeholder="Jane D." />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">Your Review</label>
                    <Textarea placeholder="Tell us about your experience..." rows={4} />
                  </div>
                  <div className="flex gap-3">
                    <Button>Submit Review</Button>
                    <Button variant="outline" onClick={() => setShowForm(false)}>
                      Cancel
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
