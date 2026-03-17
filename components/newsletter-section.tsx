"use client"

import type React from "react"

import { useState } from "react"
import { Mail, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
    }
  }

  return (
    <section className="py-10 md:py-12 bg-primary text-primary-foreground">
      <div className="mx-auto px-4 w-[85%]">
        <div className="max-w-2xl mx-auto text-center space-y-4">
          <div className="inline-flex p-4 rounded-full bg-primary-foreground/10">
            <Mail className="h-8 w-8" />
          </div>
          <h2 className="font-serif text-3xl md:text-4xl font-bold">Stay Updated</h2>
          <p className="text-primary-foreground/80">
            Subscribe to our newsletter for exclusive offers, new product announcements, and wellness tips.
          </p>

          {subscribed ? (
            <div className="flex items-center justify-center gap-2 text-primary-foreground">
              <CheckCircle className="h-5 w-5" />
              <span>Thank you for subscribing!</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
                required
              />
              <Button type="submit" variant="secondary" className="shrink-0">
                Subscribe
              </Button>
            </form>
          )}

          <p className="text-xs text-primary-foreground/60">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </div>
    </section>
  )
}
