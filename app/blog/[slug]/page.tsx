import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-posts"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { BackButton } from "@/components/back-button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowRight, CheckCircle, AlertTriangle, Info, Droplets, Leaf } from "lucide-react"
import type { Metadata } from "next"

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {
      title: "Post Not Found",
    }
  }

  return {
    title: `${post.title} | Natural Cannabis Oil Blog`,
    description: post.metaDescription || post.excerpt,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    alternates: {
      canonical: `https://naturalcannabisoil.shop/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.metaDescription || post.excerpt,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription || post.excerpt,
      images: [post.featuredImage],
    },
  }
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = getAllBlogPosts()
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3)

  // Added structured data schemas
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription || post.excerpt,
    image: post.featuredImage,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
    },
    publisher: {
      "@type": "Organization",
      name: "Natural Cannabis Oil",
      logo: {
        "@type": "ImageObject",
        url: "https://naturalcannabisoil.shop/logo.svg",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://naturalcannabisoil.shop/blog/${post.slug}`,
    },
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://naturalcannabisoil.shop",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://naturalcannabisoil.shop/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: `https://naturalcannabisoil.shop/blog/${post.slug}`,
      },
    ],
  }

  return (
    <div className="min-h-screen flex flex-col">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <Header />
      <main className="flex-1 bg-background">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-primary/10 to-background py-8 md:py-12">
          <div className="container mx-auto px-4">
            <BackButton href="/blog" label="Back to Blog" className="mb-6" />
            <div className="max-w-4xl mx-auto">
              <Badge className="mb-4 bg-primary/20 text-primary">{post.category}</Badge>
              <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author.name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{post.publishDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Image */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="aspect-video relative rounded-xl overflow-hidden shadow-lg">
                <Image
                  src={post.featuredImage || "/placeholder.svg"}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-8 md:py-12">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <article className="prose prose-lg dark:prose-invert max-w-none">
                <p className="lead text-xl text-muted-foreground mb-8">{post.excerpt}</p>

                {/* Dynamic content based on slug */}
                {post.slug === "feco-full-extract-cannabis-oil-guide" && <FECOGuideContent />}

                {post.slug === "rso-rick-simpson-oil-complete-guide" && <RSOGuideContent />}

                {post.slug === "rso-vs-feco-difference-best-cannabis-oil-2025" && <RSOvsFECOContent />}

                {post.slug === "best-cannabis-oils-pain-relief-2025" && <PainReliefOilsContent />}

                {post.slug === "how-to-make-rso-rick-simpson-oil-guide-2025" && <HowToMakeRSOContent />}

                {post.slug === "rso-dosage-chart-2025-90-day-protocol" && <RSODosageChartContent />}

                {post.slug === "thc-distillate-guide-2025-uses-benefits-potency" && <THCDistillateGuideContent />}

                {post.slug === "premium-cannabis-tinctures-versatile-oil-2025" && <CannabisTincturesContent />}

                {post.slug === "feco-explained-full-extract-cannabis-oil-benefits" && <FECOExplainedContent />}

                {post.slug === "rso-guide-rick-simpson-oil-complete-guide" && <RSOGuideAdvancedContent />}

                {post.slug === "full-extract-cannabis-oil-complete-guide" && <FullExtractCannabisoilContent />}

                {post.slug === "rick-simpson-oil-complete-guide" && <RickSimpsonOilGuideContent />}

                {/* Default content for posts without custom content */}
                {![
                  "feco-full-extract-cannabis-oil-guide",
                  "rso-rick-simpson-oil-complete-guide",
                  "rso-vs-feco-difference-best-cannabis-oil-2025",
                  "best-cannabis-oils-pain-relief-2025",
                  "how-to-make-rso-rick-simpson-oil-guide-2025",
                  "rso-dosage-chart-2025-90-day-protocol",
                  "thc-distillate-guide-2025-uses-benefits-potency",
                  "premium-cannabis-tinctures-versatile-oil-2025",
                  "feco-explained-full-extract-cannabis-oil-benefits",
                  "rso-guide-rick-simpson-oil-complete-guide",
                  "full-extract-cannabis-oil-complete-guide",
                  "rick-simpson-oil-complete-guide",
                ].includes(post.slug) && <DefaultBlogContent post={post} />}
              </article>

              {/* Tags */}
              <div className="mt-12 pt-8 border-t border-border">
                <h3 className="font-semibold text-foreground mb-4">Topics</h3>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <Card className="mt-12 bg-primary/5 border-primary/20">
                <CardContent className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Ready to Experience Premium Cannabis Oils?
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    Browse our lab-tested RSO and FECO products, all with verified potency and free shipping on orders
                    over $100.
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button asChild>
                      <Link href="/products/rso">Shop RSO</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/products/feco">Shop FECO</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <section className="py-12 bg-muted/30">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl font-bold text-foreground mb-8 text-center">Related Articles</h2>
              <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`}>
                    <Card className="h-full overflow-hidden transition-all hover:shadow-lg hover:-translate-y-1">
                      <div className="aspect-video relative overflow-hidden">
                        <Image
                          src={relatedPost.featuredImage || "/placeholder.svg"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <CardContent className="p-4">
                        <Badge className="mb-2" variant="secondary">
                          {relatedPost.category}
                        </Badge>
                        <h3 className="font-semibold text-foreground line-clamp-2">{relatedPost.title}</h3>
                        <span className="inline-flex items-center text-primary text-sm mt-2 group">
                          Read More
                          <ArrowRight className="ml-1 h-3 w-3 transition-transform group-hover:translate-x-1" />
                        </span>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  )
}

// Default content component for posts without custom content
function DefaultBlogContent({ post }: { post: ReturnType<typeof getBlogPost> }) {
  if (!post) return null

  return (
    <div className="space-y-6">
      <p>
        This comprehensive guide covers everything you need to know about {post.title.toLowerCase()}. Whether you're new
        to cannabis oils or an experienced user, you'll find valuable information here.
      </p>

      <h2>Key Takeaways</h2>
      <ul>
        {post.tags.slice(0, 5).map((tag, index) => (
          <li key={index}>{tag}</li>
        ))}
      </ul>

      <h2>Learn More</h2>
      <p>
        For more detailed information about our products, visit our{" "}
        <Link href="/products/rso" className="text-primary hover:underline">
          RSO products
        </Link>{" "}
        or{" "}
        <Link href="/products/feco" className="text-primary hover:underline">
          FECO products
        </Link>{" "}
        pages.
      </p>
    </div>
  )
}

// FECO Guide Content
function FECOGuideContent() {
  return (
    <>
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">What Are FECO Capsules?</h2>
        <p className="leading-relaxed mb-4">
          FECO (Full Extract Cannabis Oil) capsules are a potent, convenient way to consume cannabis oil, offering
          precise dosing, improved bioavailability, and therapeutic benefits ranging from pain relief to anxiety
          management.
        </p>
        <p className="leading-relaxed mb-4">
          FECO capsules contain Full Extract Cannabis Oil in an easy-to-swallow soft gel or capsule form. Made using
          food-grade ethanol extraction, which preserves cannabinoids, terpenes, and plant compounds for full-spectrum
          effects.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Benefits of FECO</h2>
        <div className="grid sm:grid-cols-2 gap-4 not-prose my-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Precise Dosing</h4>
                  <p className="text-sm text-muted-foreground">
                    Capsules eliminate the guesswork compared to tinctures or smoking.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Improved Bioavailability</h4>
                  <p className="text-sm text-muted-foreground">
                    Soft gel capsules can increase absorption by up to 30%.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Discreet & Convenient</h4>
                  <p className="text-sm text-muted-foreground">No odor, taste, or need for preparation.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Therapeutic Potential</h4>
                  <p className="text-sm text-muted-foreground">
                    Reported benefits include pain relief, reduced inflammation, improved sleep.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">How to Take FECO</h2>
        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
              1
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Start Low, Go Slow</h4>
              <p className="text-muted-foreground">
                Begin with the smallest dose (often 5–10 mg THC or CBD) and increase gradually.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
              2
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Timing</h4>
              <p className="text-muted-foreground">Take with food for better absorption; effects last several hours.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
              3
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Consistency</h4>
              <p className="text-muted-foreground">Daily use may provide cumulative benefits for chronic conditions.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
              4
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Medical Supervision</h4>
              <p className="text-muted-foreground">
                Consult a healthcare provider before use, especially if taking other medications.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Important Safety Notes</h2>
        <Card className="border-yellow-500/50 bg-yellow-500/10">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Before Using FECO Capsules</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Start with a low dose and wait 2+ hours before increasing</li>
                  <li>• Avoid operating machinery or driving after consumption</li>
                  <li>• Consult a doctor if you have heart conditions, mental health issues, or take medications</li>
                  <li>• Store capsules in a cool, dark place away from children</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  )
}

// RSO Guide Content
function RSOGuideContent() {
  return (
    <>
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">What is Rick Simpson Oil (RSO)?</h2>
        <p className="leading-relaxed mb-4">
          Rick Simpson Oil (RSO) is a potent, full-spectrum cannabis extract created by Canadian engineer Rick Simpson
          in 2003. It's known for its high THC content (typically 60-90%) and is made using a solvent-based extraction
          method.
        </p>
        <p className="leading-relaxed mb-4">
          RSO contains the full range of cannabinoids, terpenes, and other beneficial plant compounds, making it one of
          the most comprehensive cannabis extracts available.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Benefits of RSO</h2>
        <div className="grid sm:grid-cols-2 gap-4 not-prose my-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Full-Spectrum Extract</h4>
                  <p className="text-sm text-muted-foreground">
                    Contains all cannabinoids, terpenes, and beneficial compounds.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">High Potency</h4>
                  <p className="text-sm text-muted-foreground">60-90% THC for maximum therapeutic potential.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Versatile Application</h4>
                  <p className="text-sm text-muted-foreground">Can be taken orally, topically, or in capsule form.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Entourage Effect</h4>
                  <p className="text-sm text-muted-foreground">All compounds work together for enhanced benefits.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">RSO Dosing Protocol</h2>
        <p className="mb-4">The standard RSO protocol spans 90 days with gradually increasing doses:</p>
        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
              1
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Week 1-3: Start Small</h4>
              <p className="text-muted-foreground">
                Begin with a rice-grain sized dose (10-15mg) 3x daily. Gradually increase.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
              2
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Week 4-8: Build Tolerance</h4>
              <p className="text-muted-foreground">Double dose every 4-5 days as tolerance builds.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
              3
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Week 9-12: Full Protocol</h4>
              <p className="text-muted-foreground">Work up to 1 gram daily, divided into 3-4 doses.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// RSO vs FECO Content
function RSOvsFECOContent() {
  return (
    <>
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">RSO vs FECO: Key Differences</h2>
        <p className="leading-relaxed mb-6">
          While both RSO and FECO are full-spectrum cannabis extracts, they have some key differences in extraction
          methods, potency, and typical uses.
        </p>

        <div className="overflow-x-auto not-prose">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left font-semibold">Feature</th>
                <th className="border p-3 text-left font-semibold">RSO</th>
                <th className="border p-3 text-left font-semibold">FECO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">Extraction Solvent</td>
                <td className="border p-3">Isopropyl alcohol or naphtha</td>
                <td className="border p-3">Food-grade ethanol</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border p-3 font-medium">THC Content</td>
                <td className="border p-3">60-90% (typically high-THC)</td>
                <td className="border p-3">Varies (THC, CBD, or balanced ratios)</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Primary Use</td>
                <td className="border p-3">Serious conditions, pain management</td>
                <td className="border p-3">Medical and wellness applications</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border p-3 font-medium">Availability</td>
                <td className="border p-3">Often homemade or specialized</td>
                <td className="border p-3">Commercially available in various forms</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Which Should You Choose?</h2>
        <div className="grid md:grid-cols-2 gap-6 not-prose">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                <Droplets className="h-5 w-5 text-primary" />
                Choose RSO If...
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• You need maximum THC potency</li>
                <li>• Managing serious chronic conditions</li>
                <li>• Following a specific treatment protocol</li>
                <li>• Experienced with high-THC products</li>
              </ul>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-foreground mb-3 flex items-center gap-2">
                <Leaf className="h-5 w-5 text-primary" />
                Choose FECO If...
              </h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• You want specific THC:CBD ratios</li>
                <li>• Prefer commercially tested products</li>
                <li>• New to cannabis concentrates</li>
                <li>• Need various delivery methods</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}

// Pain Relief Oils Content
function PainReliefOilsContent() {
  return (
    <>
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Best Cannabis Oils for Pain Relief</h2>
        <p className="leading-relaxed mb-6">
          Cannabis oils have become increasingly popular for managing chronic pain, inflammation, and nerve pain. Here's
          a comprehensive comparison of the most effective options available in 2025.
        </p>

        <div className="grid gap-6 not-prose">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-foreground mb-3">1. RSO (Rick Simpson Oil)</h3>
              <p className="text-muted-foreground mb-3">Best for: Severe chronic pain, cancer-related symptoms</p>
              <div className="flex flex-wrap gap-2">
                <Badge>High THC</Badge>
                <Badge variant="outline">Full Spectrum</Badge>
                <Badge variant="outline">Long-lasting</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-foreground mb-3">2. FECO (Full Extract Cannabis Oil)</h3>
              <p className="text-muted-foreground mb-3">Best for: Customizable relief, inflammation</p>
              <div className="flex flex-wrap gap-2">
                <Badge>Various Ratios</Badge>
                <Badge variant="outline">Full Spectrum</Badge>
                <Badge variant="outline">Versatile</Badge>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-foreground mb-3">3. Cannabis Tinctures</h3>
              <p className="text-muted-foreground mb-3">Best for: Fast-acting relief, precise dosing</p>
              <div className="flex flex-wrap gap-2">
                <Badge>Fast Onset</Badge>
                <Badge variant="outline">Easy Dosing</Badge>
                <Badge variant="outline">Discreet</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}

// How to Make RSO Content
function HowToMakeRSOContent() {
  return (
    <>
      <section className="mb-12">
        <Card className="border-red-500/50 bg-red-500/10 mb-8">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Important Safety Warning</h4>
                <p className="text-muted-foreground">
                  This guide is for educational purposes only. Making RSO at home involves flammable solvents and
                  requires proper ventilation, fire safety equipment, and legal compliance. We strongly recommend
                  purchasing professionally made, lab-tested RSO instead.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-2xl md:text-3xl font-bold mb-4">The Original Rick Simpson Method</h2>
        <p className="leading-relaxed mb-6">
          Rick Simpson developed his extraction method in 2003 using isopropyl alcohol. The basic process involves
          dissolving cannabis in alcohol, then evaporating the solvent to leave behind concentrated oil.
        </p>

        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
              1
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Decarboxylation</h4>
              <p className="text-muted-foreground">Heat cannabis at 240°F for 40 minutes to activate cannabinoids.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
              2
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Solvent Wash</h4>
              <p className="text-muted-foreground">
                Submerge material in food-grade ethanol and agitate for 3-5 minutes.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
              3
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Filter & Evaporate</h4>
              <p className="text-muted-foreground">
                Strain the liquid and slowly evaporate the solvent using a rice cooker or double boiler OUTDOORS.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
              4
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Collect</h4>
              <p className="text-muted-foreground">
                Once solvent is fully evaporated, collect the thick oil into syringes for storage.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

// RSO Dosage Chart Content
function RSODosageChartContent() {
  return (
    <>
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">RSO 90-Day Protocol</h2>
        <p className="leading-relaxed mb-6">
          The standard RSO protocol developed by Rick Simpson involves gradually increasing doses over 90 days. This
          allows your body to build tolerance while maximizing therapeutic benefits.
        </p>

        <div className="overflow-x-auto not-prose mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-primary text-primary-foreground">
                <th className="border p-3 text-left">Week</th>
                <th className="border p-3 text-left">Daily Dose</th>
                <th className="border p-3 text-left">Doses/Day</th>
                <th className="border p-3 text-left">Notes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">1-3</td>
                <td className="border p-3">25-50mg total</td>
                <td className="border p-3">3</td>
                <td className="border p-3">Rice grain size, build tolerance</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border p-3 font-medium">4-5</td>
                <td className="border p-3">100-200mg total</td>
                <td className="border p-3">3-4</td>
                <td className="border p-3">Double every 4-5 days</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">6-8</td>
                <td className="border p-3">300-500mg total</td>
                <td className="border p-3">3-4</td>
                <td className="border p-3">Continue gradual increase</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border p-3 font-medium">9-12</td>
                <td className="border p-3">500-1000mg total</td>
                <td className="border p-3">3-4</td>
                <td className="border p-3">Full therapeutic dose</td>
              </tr>
            </tbody>
          </table>
        </div>

        <Card className="border-blue-500/50 bg-blue-500/10">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <Info className="h-6 w-6 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Dosing Tips</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Always take RSO with food containing healthy fats for better absorption</li>
                  <li>• Take your largest dose before bed to minimize daytime psychoactive effects</li>
                  <li>• Keep a dosing journal to track effects and adjust accordingly</li>
                  <li>• Don't increase dose if you're still experiencing strong effects</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  )
}

// THC Distillate Guide Content
function THCDistillateGuideContent() {
  return (
    <>
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">What is THC Distillate?</h2>
        <p className="leading-relaxed mb-4">
          THC distillate is the purest form of cannabis extract, typically containing 90-99% THC. It's created through a
          distillation process that removes all plant matter, terpenes, and other cannabinoids, leaving behind pure,
          potent THC.
        </p>
        <p className="leading-relaxed mb-4">
          Unlike RSO or FECO, distillate is nearly odorless and tasteless, making it ideal for creating edibles, vape
          cartridges, and other infused products.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Distillate vs RSO vs FECO</h2>
        <div className="overflow-x-auto not-prose">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-muted">
                <th className="border p-3 text-left">Feature</th>
                <th className="border p-3 text-left">Distillate</th>
                <th className="border p-3 text-left">RSO</th>
                <th className="border p-3 text-left">FECO</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-3 font-medium">THC Purity</td>
                <td className="border p-3">90-99%</td>
                <td className="border p-3">60-90%</td>
                <td className="border p-3">40-80%</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border p-3 font-medium">Full Spectrum</td>
                <td className="border p-3">No (isolate)</td>
                <td className="border p-3">Yes</td>
                <td className="border p-3">Yes</td>
              </tr>
              <tr>
                <td className="border p-3 font-medium">Taste/Smell</td>
                <td className="border p-3">None</td>
                <td className="border p-3">Strong</td>
                <td className="border p-3">Moderate</td>
              </tr>
              <tr className="bg-muted/50">
                <td className="border p-3 font-medium">Best For</td>
                <td className="border p-3">Edibles, Vaping</td>
                <td className="border p-3">Medical use</td>
                <td className="border p-3">Versatile</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </>
  )
}

// Cannabis Tinctures Content
function CannabisTincturesContent() {
  return (
    <>
      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Choose Cannabis Tinctures?</h2>
        <p className="leading-relaxed mb-6">
          Cannabis tinctures offer the perfect balance of convenience, precise dosing, and fast-acting relief. They're
          the most versatile cannabis oil option in 2025.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 not-prose my-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Fast Absorption</h4>
                  <p className="text-sm text-muted-foreground">Sublingual use provides effects in 15-30 minutes.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Precise Dosing</h4>
                  <p className="text-sm text-muted-foreground">Dropper markings allow exact measurements.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Discreet</h4>
                  <p className="text-sm text-muted-foreground">No smoke, vapor, or strong odors.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Long Shelf Life</h4>
                  <p className="text-sm text-muted-foreground">Properly stored tinctures last 1-2 years.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Types of Cannabis Tinctures</h2>
        <div className="grid gap-4 not-prose">
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-foreground mb-2">Full-Spectrum Tinctures</h3>
              <p className="text-muted-foreground">
                Contains all cannabinoids and terpenes for the entourage effect. Best for comprehensive relief.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-foreground mb-2">THC-Dominant Tinctures</h3>
              <p className="text-muted-foreground">
                High THC with minimal CBD. Best for pain, sleep, and appetite stimulation.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-foreground mb-2">CBD-Dominant Tinctures</h3>
              <p className="text-muted-foreground">
                High CBD with minimal THC. Best for anxiety, inflammation without psychoactive effects.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6">
              <h3 className="font-bold text-lg text-foreground mb-2">Balanced (1:1) Tinctures</h3>
              <p className="text-muted-foreground">
                Equal THC and CBD. Best for moderate relief with reduced psychoactive intensity.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  )
}

// FECO Explained Content
function FECOExplainedContent() {
  return (
    <>
      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          FECO Explained: Full Extract Cannabis Oil Benefits, Dosing, and Comparison to RSO
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Full Extract Cannabis Oil (FECO) has emerged as a powerhouse in the world of cannabis concentrates, offering
            a potent, full-spectrum option for those seeking therapeutic benefits. Unlike refined isolates or
            distillates, FECO captures the essence of the entire cannabis plant, including cannabinoids, terpenes,
            flavonoids, and other compounds that work synergistically to enhance effects—a phenomenon known as the
            "entourage effect."
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            This comprehensive guide delves deep into what FECO is, its history, production methods, scientific backing,
            potential benefits for conditions like pain, sleep disturbances, and anxiety, detailed dosing protocols from
            beginner to advanced levels, a thorough comparison to Rick Simpson Oil (RSO), safety considerations, legal
            aspects, and frequently asked questions. Whether you're a newcomer exploring cannabis for wellness or an
            experienced user refining your regimen, this article provides evidence-based insights to help you navigate
            FECO responsibly.
          </p>
        </div>

        <Image
          src="/images/rso-20syringe.png"
          alt="Full Extract Cannabis Oil FECO syringes with precise measurement markings"
          width={1200}
          height={600}
          className="w-full h-auto rounded-xl mb-8"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What Is FECO? A Fundamental Overview</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Full Extract Cannabis Oil, commonly abbreviated as FECO, is a highly concentrated cannabis extract derived
          from the whole plant, including flowers, leaves, and sometimes stems. It appears as a thick, dark, tar-like
          substance, often dispensed in syringes for precise dosing. What sets FECO apart from other cannabis products
          is its commitment to preserving the plant's natural profile without isolating specific compounds. This results
          in a product that typically contains 60-90% cannabinoids, with THC levels ranging from 500-900mg per gram,
          alongside CBD, CBG, CBN, and a host of terpenes like myrcene (sedative), limonene (uplifting), and pinene
          (anti-inflammatory).
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          FECO is prized for its versatility: it can be ingested orally, applied topically, or even vaporized (though
          oral use is most common for therapeutic purposes). Its potency means that even small amounts—often described
          as the size of a grain of rice—can deliver significant effects. In legal markets, FECO is available in various
          ratios, such as high-THC for pain relief, balanced THC:CBD for anxiety, or CBD-dominant for non-psychoactive
          benefits. As of 2026, with expanding legalization in over 50 countries for medical use, FECO has become a
          staple in dispensaries, often lab-tested for purity and potency to ensure safety and efficacy.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">History and Production of FECO</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          The roots of FECO trace back to ancient cannabis extraction practices, but its modern form evolved in the late
          20th and early 21st centuries amid growing interest in medicinal cannabis. While not as famously tied to a
          single individual as RSO, FECO's development parallels the broader cannabis movement. In the 1970s and 1980s,
          underground extractors in California and Canada experimented with solvent-based methods to create potent oils
          for medical users. By the 2010s, as states like Colorado legalized recreational cannabis in 2012, professional
          labs refined these techniques, prioritizing food-grade solvents to produce cleaner, safer products.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Production of FECO typically involves ethanol extraction, a process considered safer than traditional
          hydrocarbon methods. The plant material is soaked in food-grade ethanol or CO2, which dissolves cannabinoids,
          terpenes, and other compounds. The solvent is then evaporated under low heat or vacuum to avoid degrading
          sensitive compounds, resulting in a concentrated oil free of residual solvents if done properly. In regulated
          markets, labs test for potency, contaminants (pesticides, heavy metals), and microbial safety. This method
          contrasts with older, riskier extractions using naphtha or butane, emphasizing consumer safety. Advances in
          2026 include closed-loop systems that recycle solvents, reducing environmental impact.
        </p>
      </section>

      <Image
        src="/images/rso-20capsules.jpg"
        alt="FECO capsules - Full Extract Cannabis Oil in premium capsule form for precise dosing"
        width={1200}
        height={600}
        className="w-full h-auto rounded-xl mb-8"
      />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">
          The Science Behind FECO: Cannabinoids, Terpenes, and the Entourage Effect
        </h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          FECO's efficacy stems from its interaction with the human endocannabinoid system (ECS), a regulatory network
          discovered in the 1990s that influences pain, mood, inflammation, sleep, and immunity. The ECS includes CB1
          receptors (primarily in the brain) and CB2 receptors (in immune cells), along with endogenous cannabinoids
          like anandamide. Key components in FECO include: Cannabinoids (THC for pain relief and euphoria; CBD for
          anti-anxiety and anti-inflammatory effects; minor ones like CBG and CBN), Terpenes (aromatic compounds that
          modulate effects), and Flavonoids (antioxidants with anti-inflammatory potency).
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          The "entourage effect," coined in 1998, posits that these compounds work better together than in isolation. A
          2020 study in Frontiers in Plant Science confirmed that full-spectrum extracts like FECO provide superior pain
          relief compared to isolates due to this synergy. Recent 2025 research explores FECO's role in neuroprotection
          and symptom management, though more clinical trials are needed. This comprehensive approach to cannabis
          therapy represents a paradigm shift from single-compound treatments to whole-plant medicine.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Potential Benefits of FECO: Evidence from Research</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          FECO's full-spectrum nature positions it as a versatile option for various conditions. While anecdotal reports
          abound, scientific evidence is growing, particularly for symptom management. Pain Management: Chronic pain
          affects millions, and FECO shows promise as an alternative to opioids. A 2024 meta-analysis found
          full-spectrum cannabis extracts reduced pain by 29% in chronic sufferers, outperforming isolates. Sleep
          Support: FECO's sedative terpenes combined with CBN promote rest, with reports of improved sleep quality after
          weeks of consistent use. Anxiety and Stress Relief: CBD-dominant FECO counters THC's potential
          anxiety-inducing effects, with 2025 reviews finding improved anxiety symptoms and sleep disturbances with
          cannabinoids.
        </p>
        <p className="text-gray-700 leading-relaxed mb-4">
          Other benefits include nausea control (for chemotherapy), inflammation reduction, and neuroprotective
          potential, though evidence is preliminary. Individual responses vary, emphasizing the importance of
          personalized protocols and professional guidance for serious conditions.
        </p>
      </section>

      <Image
        src="/images/rso-20capsules1.jpg"
        alt="Premium FECO capsules with different potency options for therapeutic use"
        width={1200}
        height={600}
        className="w-full h-auto rounded-xl mb-8"
      />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Dosing Protocols: From Beginner to Advanced</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Dosing FECO requires caution due to its potency. Always start low and go slow, titrating based on tolerance. A
          "rice grain" size (~0.05g) from 800mg/g FECO delivers ~40mg cannabinoids—strong for novices. Beginner
          Protocol: Week 1-3 focuses on acclimation with 0.1ml (approximately 100mg) taken 2-3 times daily. Intermediate
          Protocol: Weeks 4-8 involve increasing to 0.2-0.3ml (approximately 200-300mg) total daily, split into 2-3
          doses. Advanced Protocol: For intensive use, total daily doses can reach 500-1000mg, but this requires
          professional oversight and should only be attempted after consulting healthcare professionals experienced with
          cannabis medicine.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">FECO vs RSO: Key Differences</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          While both RSO and FECO are full-spectrum oils, they differ significantly. FECO uses safer food-grade ethanol
          extraction compared to RSO's traditional naphtha/isopropyl methods. FECO offers customizable ratios (THC, CBD,
          balanced) versus RSO's typical THC dominance. FECO is lab-regulated with third-party testing, while RSO
          production is often variable or homemade. FECO suits daily use and precise dosing, while RSO is better for
          intensive high-dose protocols. In 2025 updates, FECO is increasingly preferred for consistency and safety,
          making it the choice for users prioritizing verified potency and clean production.
        </p>
      </section>

      <section className="mb-12">
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-blue-900 mb-4">Safety, Side Effects, and Legal Considerations</h3>
          <p className="text-blue-900 mb-4">
            Common side effects include dry mouth, drowsiness, anxiety (high THC), and changes in appetite. Serious
            risks include dependency potential and interactions with sedatives or blood thinners. Start low to mitigate
            effects. In 2026, FECO is legal medically in many U.S. states, Canada, and Europe; always buy lab-tested
            products and verify local legality before purchasing. Consult healthcare professionals, especially if
            pregnant, nursing, on medications, or with pre-existing conditions.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Conclusion</h2>
        <p className="text-gray-700 leading-relaxed">
          FECO represents the pinnacle of full-spectrum cannabis extraction, blending ancient wisdom with modern science
          for potential benefits in pain, sleep, anxiety, and more. While research supports symptomatic relief, it's no
          cure-all—personalization and professional guidance are key. Compared to RSO, FECO's safer methods and
          versatility make it a top choice in 2026. Explore responsibly, stay informed as the field evolves, and always
          prioritize your health and safety when using cannabis products.
        </p>
      </section>
    </>
  )
}

// RSO Guide Advanced Content
function RSOGuideAdvancedContent() {
  return (
    <>
      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          RSO Guide: Rick Simpson Oil Explained - Benefits, Uses, and Safe Dosing
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Rick Simpson Oil (RSO) is a potent, full-spectrum cannabis concentrate that has captured attention in
            wellness and alternative health communities. Created by Canadian activist Rick Simpson, RSO is celebrated
            for its high THC content and whole-plant extraction, potentially harnessing the "entourage effect" for
            enhanced therapeutic outcomes.
          </p>
        </div>

        <Image
          src="/images/rso-suppository.webp"
          alt="RSO Rick Simpson Oil - Premium full-spectrum cannabis extract for therapeutic use"
          width={1200}
          height={600}
          className="w-full h-auto rounded-xl mb-8"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What Is RSO? Composition and Appearance</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          RSO is a thick, dark, tar-like oil extracted from cannabis flowers, typically indica-dominant strains for
          sedative effects. It contains high levels of THC (often 60–90%, or 600–900mg per gram), along with minor
          cannabinoids (CBD, CBG, CBN), terpenes, and flavonoids. Unlike isolates or distillates, RSO is full-spectrum,
          preserving the plant's natural compounds. It's usually packaged in syringes for precise dispensing, making it
          easy to dose and consume.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">History: Rick Simpson's Journey</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          In 2003, Rick Simpson, a Canadian engineer, reportedly treated his basal cell carcinoma by applying homemade
          cannabis oil topically after conventional options failed. Inspired by a 1975 study on THC inhibiting tumor
          growth in mice, he refined his method and shared the oil freely, claiming it helped thousands. His advocacy
          led to legal challenges, but sparked global interest. By 2026, lab-tested RSO is available in legal markets,
          often using safer solvents than traditional methods.
        </p>
      </section>

      <Image
        src="/images/rso-20capsules.jpg"
        alt="RSO capsules - Rick Simpson Oil in easy-to-dose capsule format"
        width={1200}
        height={600}
        className="w-full h-auto rounded-xl mb-8"
      />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">The Science: Endocannabinoid System and Entourage Effect</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          RSO interacts with the endocannabinoid system (ECS), regulating pain, inflammation, mood, and more via CB1/CB2
          receptors. High THC provides strong effects; full-spectrum synergy (entourage effect) may enhance benefits
          over isolates. High THC provides potent pain relief and psychoactive effects, while full-spectrum compounds
          enhance therapeutic potential beyond single-cannabinoid treatments.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Reported Benefits and Uses</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Users report RSO for Pain Relief (effective for chronic/neuropathic pain due to THC's CB1 binding), Sleep
          Support (sedative indica effects and CBN), Nausea/Appetite (helpful for chemotherapy side effects),
          Inflammation/Anxiety (full-spectrum modulation), and Topical Skin Issues (localized application). Evidence is
          stronger for symptom management than direct disease treatment. Always combine with standard medical care under
          professional supervision.
        </p>
      </section>

      <Image
        src="/images/rso1.jpg"
        alt="Rick Simpson Oil syringes - Premium RSO with measurement markings for precise dosing"
        width={1200}
        height={600}
        className="w-full h-auto rounded-xl mb-8"
      />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">RSO and Cancer: The Evidence in 2026</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Preclinical studies show cannabinoids inhibiting tumor growth in labs/animals, but human trials are limited.
          No large-scale studies prove RSO treats or cures cancer. Reviews (e.g., National Academy of Sciences) find
          insufficient evidence for anticancer effects; benefits are mostly palliative. Anecdotes abound, but experts
          caution against delaying proven treatments. Always combine with standard care under medical supervision—this
          is essential.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Safe Dosing: Start Low, Go Slow</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          RSO's potency requires caution. A rice grain-sized dose (~0.05g) from 800mg/g delivers ~40–80mg THC. Beginner
          Protocol: Week 1-2 with 1/4 grain x3 daily (~75mg total THC). Intermediate Protocol: Weeks 3-8 with 1/2 grain
          x3 daily (~150mg total THC). Advanced Protocol: Inspired by Simpson's 90-day regimen, up to 1g/day over 12
          weeks for intensive therapeutic use—professional supervision strongly recommended.
        </p>
      </section>

      <section className="mb-12">
        <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-yellow-900 mb-4">Important Disclaimer</h3>
          <p className="text-yellow-900">
            This guide is educational only and not medical advice. RSO carries risks including cannabinoid hyperemesis
            syndrome, psychological effects, and drug interactions. Always consult healthcare professionals before use,
            especially with pre-existing conditions or medications. No robust clinical evidence supports RSO as a cure
            for cancer or other diseases. Start low, monitor tolerance, and prioritize professional medical
            guidance—your health and safety depend on it.
          </p>
        </div>
      </section>
    </>
  )
}

// Full Extract Cannabis Oil Content
function FullExtractCannabisoilContent() {
  return (
    <>
      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Buy Full Extract Cannabis Oil (FECO) Online: Premium FECO for Sale
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-xl text-gray-700 leading-relaxed mb-4">
            Are you searching for where to buy Full Extract Cannabis Oil (FECO) online? Look no further than Natural
            Cannabis Oil Shop—your trusted source to buy FECO online with confidence. We offer premium FECO for sale,
            lab-tested, organic, full-spectrum extracts delivered discreetly across the USA. Whether you're looking to
            buy FECO oil syringes, FECO tinctures, or other formats, our shop provides high-quality options at
            competitive prices starting from $55 per gram. In this comprehensive guide, we'll explore everything about
            Full Extract Cannabis Oil (FECO) for sale, including benefits, dosing, comparisons to RSO, and exactly how
            to buy FECO online safely from reputable sources like Natural Cannabis Oil Shop.
          </p>
        </div>

        <Image
          src="/images/rso-20syringe.png"
          alt="Premium FECO syringes - potent, full-spectrum extracts ready for precise dosing"
          width={1200}
          height={600}
          className="w-full h-auto rounded-xl mb-8"
        />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">What Is Full Extract Cannabis Oil (FECO)? Why Buy FECO Online?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Full Extract Cannabis Oil (FECO) is a powerful, whole-plant cannabis concentrate that captures cannabinoids,
          terpenes, and flavonoids for maximum "entourage effect" benefits. Unlike isolates, FECO for sale at Natural
          Cannabis Oil Shop is extracted using clean methods to preserve the plant's natural profile—often 60-90%
          cannabinoids. People buy FECO online for its versatility: syringes for accurate dosing, tinctures for easy
          use, capsules for convenience. When you buy authentic FECO oil from us, you get organic, solvent-free extracts
          designed for therapeutic benefits. Thousands buy FECO now because of our quality assurance and customer
          satisfaction guarantee. Where to buy FECO online safely? Natural Cannabis Oil Shop offers third-party
          lab-tested products, ensuring purity and potency.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Key Benefits: Why Customers Buy FECO Oil Online</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Users report FECO supports natural pain relief and inflammation reduction, improved sleep quality, anxiety and
          stress management, nausea control and appetite stimulation, and overall wellness via full-spectrum synergy.
          When you buy Full Extract Cannabis Oil online from us, you get organic, solvent-free extracts designed for
          these potential benefits. Thousands purchase FECO here because of our quality assurance and customer
          satisfaction guarantee. Our FECO syringes for sale make precise dosing easy and effective.
        </p>
      </section>

      <Image
        src="/images/rso-20capsules.jpg"
        alt="Infographics highlighting potential wellness benefits of full-spectrum cannabis oils like FECO"
        width={1200}
        height={600}
        className="w-full h-auto rounded-xl mb-8"
      />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">FECO vs RSO: Which to Buy Online?</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          FECO (Full Extract Cannabis Oil) uses food-grade ethanol/CO2 extraction (cleaner) compared to RSO's
          traditionally naphtha/isopropyl methods. FECO offers customizable profiles (THC, CBD, balanced), while RSO is
          typically high-THC dominant. FECO provides versatile daily wellness options, while RSO focuses on intensive
          high-dose use. FECO syringes, tinctures, and capsules offer variety; RSO is often syringes only. Lab testing
          and safety are prioritized with FECO, while RSO quality is variable. Many prefer to buy FECO online for safer
          production and broader options.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">How to Buy FECO Online at Natural Cannabis Oil Shop</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          <strong>Simple steps to buy premium FECO:</strong> 1) Visit www.naturalcannabisoil.shop, 2) Browse FECO for
          sale (syringes from $55/g), 3) Add to cart (minimum $200), 4) Checkout securely (PayPal, Bitcoin, etc.), 5)
          Enjoy discreet shipping (free over $500). Buy FECO online today—same-day processing! We offer lab-tested
          organic FECO, discreet nationwide delivery, 30-day money-back guarantee, 24/7 support, and over 1,200 happy
          customers. Ready to purchase premium FECO oil? Visit Natural Cannabis Oil Shop now for the best FECO for sale
          online.
        </p>
      </section>

      <Image
        src="/images/rso1.jpg"
        alt="Visual comparisons between FECO and RSO—helping you choose the right oil"
        width={1200}
        height={600}
        className="w-full h-auto rounded-xl mb-8"
      />

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-6">Safe Dosing When You Buy FECO Online</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Start low with beginner doses: half rice-grain size (~20-40mg) once daily. For intermediate use: full
          rice-grain, 2-3 times/day. Our FECO syringes for sale make precise dosing easy. Build tolerance gradually over
          weeks, increasing by small amounts every 4-5 days. Our FECO syringes for sale include clear measurement
          markings for safe, accurate dosing every time.
        </p>
      </section>

      <section className="mb-12">
        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-green-900 mb-4">Why Choose Natural Cannabis Oil Shop to Buy FECO</h3>
          <ul className="text-green-900 space-y-2">
            <li>✓ Lab-tested organic FECO</li>
            <li>✓ Discreet nationwide delivery</li>
            <li>✓ 30-day money-back guarantee</li>
            <li>✓ 24/7 customer support</li>
            <li>✓ Over 1,200 happy customers</li>
            <li>✓ Competitive pricing from $55/gram</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <p className="text-gray-700 leading-relaxed">
          Ready to buy FECO online today? Visit Natural Cannabis Oil Shop now for the best FECO for sale online. Safe,
          simple, satisfying—buy FECO here and experience the difference. With lab-tested, organic, full-spectrum
          extracts delivered discreetly, you can buy with confidence. Purchase premium FECO oil now and join thousands
          of satisfied customers who have discovered the benefits of quality full-spectrum cannabis extracts.
        </p>
      </section>
    </>
  )
}

// Rick Simpson Oil Guide Content
function RickSimpsonOilGuideContent() {
  return (
    <>
      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Rick Simpson Oil (RSO): A Comprehensive Guide</h2>
        <p className="leading-relaxed mb-6">
          Rick Simpson Oil (RSO) is a potent cannabis extract developed by Rick Simpson in 2003. It's known for its high
          THC content and is made using a solvent-based extraction method.
        </p>
        <p className="leading-relaxed mb-6">
          RSO contains the full range of cannabinoids, terpenes, and other beneficial plant compounds, making it one of
          the most comprehensive cannabis extracts available.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Benefits of Rick Simpson Oil</h2>
        <div className="grid sm:grid-cols-2 gap-4 not-prose my-6">
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Full-Spectrum Extract</h4>
                  <p className="text-sm text-muted-foreground">
                    Contains all cannabinoids and terpenes for a comprehensive therapeutic experience.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">High Potency</h4>
                  <p className="text-sm text-muted-foreground">60-90% THC for maximum therapeutic potential.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Versatile Application</h4>
                  <p className="text-sm text-muted-foreground">Can be taken orally, topically, or in capsule form.</p>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-1" />
                <div>
                  <h4 className="font-semibold text-foreground">Entourage Effect</h4>
                  <p className="text-sm text-muted-foreground">All compounds work together for enhanced benefits.</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">RSO Dosing Protocol</h2>
        <p className="mb-4">The standard RSO protocol spans 90 days with gradually increasing doses:</p>
        <div className="space-y-4 not-prose">
          <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
              1
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Week 1-3: Start Small</h4>
              <p className="text-muted-foreground">
                Begin with a rice-grain sized dose (10-15mg) 3x daily. Gradually increase.
              </p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
              2
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Week 4-8: Build Tolerance</h4>
              <p className="text-muted-foreground">Double dose every 4-5 days as tolerance builds.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 p-4 bg-muted rounded-lg">
            <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0">
              3
            </div>
            <div>
              <h4 className="font-semibold text-foreground">Week 9-12: Full Protocol</h4>
              <p className="text-muted-foreground">Work up to 1 gram daily, divided into 3-4 doses.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Important Safety Notes</h2>
        <Card className="border-yellow-500/50 bg-yellow-500/10">
          <CardContent className="p-6">
            <div className="flex items-start gap-3">
              <AlertTriangle className="h-6 w-6 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Before Using Rick Simpson Oil</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Start with a low dose and wait 2+ hours before increasing</li>
                  <li>• Avoid operating machinery or driving after consumption</li>
                  <li>• Consult a doctor if you have heart conditions, mental health issues, or take medications</li>
                  <li>• Store RSO in a cool, dark place away from children</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </>
  )
}
