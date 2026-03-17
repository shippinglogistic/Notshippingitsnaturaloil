"use client"

import type React from "react"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, CheckCircle, Send } from "lucide-react"
import Link from "next/link"

export function ContactPageClient() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mx-auto px-4 py-16 w-[85%]">
        <div className="max-w-5xl mx-auto">
          <BackButton href="/" label="Back to Home" className="mb-6" />
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">Get in Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have questions about our{" "}
              <Link href="/products/rso" className="text-primary hover:underline">
                RSO
              </Link>{" "}
              or{" "}
              <Link href="/products/feco" className="text-primary hover:underline">
                FECO
              </Link>{" "}
              products? We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h2 className="font-semibold text-xl text-foreground mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <p className="text-muted-foreground">info@naturalcannabisoil.shop</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Phone</p>
                      <p className="text-muted-foreground">(555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Location</p>
                      <p className="text-muted-foreground">Los Angeles, California</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="font-semibold text-xl text-foreground mb-4">Hours of Operation</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p>Saturday: 10:00 AM - 4:00 PM PST</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div>
                <h2 className="font-semibold text-xl text-foreground mb-4">Quick Links</h2>
                <div className="space-y-2 text-muted-foreground">
                  <p>
                    <Link href="/faq" className="text-primary hover:underline">
                      Frequently Asked Questions
                    </Link>
                  </p>
                  <p>
                    <Link href="/patient-guide" className="text-primary hover:underline">
                      Patient Guide
                    </Link>
                  </p>
                  <p>
                    <Link href="/products/rso" className="text-primary hover:underline">
                      Shop RSO Products
                    </Link>
                  </p>
                  <p>
                    <Link href="/products/feco" className="text-primary hover:underline">
                      Shop FECO Products
                    </Link>
                  </p>
                  <p>
                    <Link href="/rso-dosage-guide" className="text-primary hover:underline">
                      RSO Dosage Guide
                    </Link>
                  </p>
                </div>
              </div>
            </div>

            <div>
              {submitted ? (
                <div className="bg-primary/5 border border-primary/20 rounded-lg p-8 text-center space-y-4">
                  <div className="inline-flex p-4 rounded-full bg-primary/10">
                    <CheckCircle className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-xl text-foreground">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We'll get back to you within 24-48 hours.
                  </p>
                  <Button variant="outline" onClick={() => setSubmitted(false)}>
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6 bg-card border border-border rounded-lg p-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="you@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="How can we help?" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea id="message" placeholder="Tell us more about your inquiry..." rows={5} required />
                  </div>
                  <Button type="submit" className="w-full gap-2">
                    <Send className="h-4 w-4" />
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
