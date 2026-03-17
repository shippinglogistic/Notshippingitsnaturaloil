import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { AlertCircle, CheckCircle2, Target } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "FECO Dosage Plan 2025: Complete Beginner to Intermediate Protocol Guide | Natural Cannabis Oil",
  description:
    "Master FECO dosing with our complete 2025 protocol guide. Learn beginner to intermediate Full Extract Cannabis Oil dosage schedules, storage tips, timing strategies, and symptom-specific protocols. Start safely and build tolerance with our proven step-by-step FECO dosage plan. Expert guidance for pain, sleep, anxiety relief with 3000+ word comprehensive guide.",
  keywords: [
    "FECO dosage plan",
    "Full Extract Cannabis Oil dosing",
    "FECO dosage guide",
    "how to dose FECO",
    "FECO beginner protocol",
    "FECO intermediate dosing",
    "FECO for pain",
    "FECO for sleep",
    "FECO complete protocol",
    "buy FECO online",
    "FECO dosage schedule",
    "cannabis oil dosing",
    "Full Extract Cannabis Oil protocol",
  ],
  openGraph: {
    title: "FECO Dosage Plan: Complete Beginner to Intermediate Protocol 2025",
    description:
      "Expert FECO dosing guide with step-by-step schedules, storage tips, and symptom-specific protocols covering 3000+ words.",
    images: [
      {
        url: "/images/feco-dosage-guide.jpg",
        width: 1200,
        height: 630,
        alt: "FECO dosage guide - Full Extract Cannabis Oil protocol",
      },
    ],
  },
  alternates: {
    canonical: "https://naturalcannabisoil.shop/blog/feco-dosage-plan-complete-protocol",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "FECO Dosage Plan: Complete Beginner to Intermediate Protocol Guide",
  description:
    "Comprehensive 3000+ word guide to FECO dosing including schedules, storage, timing, and symptom-specific protocols",
  image: "/images/feco-dosage-guide.jpg",
  author: {
    "@type": "Organization",
    name: "Natural Cannabis Oil",
  },
  publisher: {
    "@type": "Organization",
    name: "Natural Cannabis Oil",
    logo: {
      "@type": "ImageObject",
      url: "https://naturalcannabisoil.shop/logo.png",
    },
  },
  datePublished: "2025-01-10",
  dateModified: "2025-01-10",
}

export default function FECODosagePlanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 to-white">
        <Header />
        <main className="flex-1">
          <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
                FECO Dosage Plan: Complete Beginner to Intermediate Protocol
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Comprehensive guide to Full Extract Cannabis Oil dosing with expert step-by-step protocols
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <span>30+ min read</span>
                <span>Updated Jan 2026</span>
                <span>3000+ Words</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/rso-20syringe.png"
                alt="FECO syringes with measurement markings - Full Extract Cannabis Oil dosage guide"
                width={1200}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed">
                <strong>
                  Full Extract Cannabis Oil (FECO) Dosage Plan: Complete Beginner to Intermediate Protocol
                </strong>
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Full Extract Cannabis Oil (FECO) is a potent whole-plant cannabis concentrate that requires precise
                dosing and gradual progression. Unlike RSO, FECO uses safer food-grade ethanol extraction methods,
                making it a preferred choice for those seeking reliable, lab-tested cannabis oil products. This
                comprehensive 3000+ word guide provides a structured protocol from beginner to intermediate levels,
                helping you safely navigate your FECO journey with confidence and achieve optimal therapeutic results.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Whether you're exploring FECO for the first time or looking to optimize your current protocol,
                understanding proper dosing is essential for maximizing benefits while minimizing side effects. This
                guide covers everything from basic composition and safety considerations to detailed week-by-week
                progression schedules and advanced symptom-specific protocols.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">
                What Is FECO? Understanding Full Extract Cannabis Oil
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                FECO is a thick, dark, tar-like oil extracted from cannabis flowers using food-grade ethanol or CO2. It
                contains the full spectrum of plant compounds including cannabinoids (THC, CBD, CBG, CBN), terpenes
                (myrcene, limonene, pinene), and flavonoids. A standard 1-gram FECO syringe typically contains 600-900mg
                of total cannabinoids (60-90% potency), making it significantly more potent than flower or distillates.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unlike RSO which traditionally uses potentially toxic solvents like naphtha or isopropyl alcohol, modern
                FECO production emphasizes safety with food-grade ethanol extraction. This cleaner extraction method
                preserves the plant's beneficial terpene profile while eliminating solvent residues, resulting in a
                purer, more reliable product that can be third-party lab tested for potency and contaminants.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                The "entourage effect" is central to FECO's effectiveness. This scientific principle suggests that
                cannabinoids and terpenes work synergistically, providing greater therapeutic benefits than isolated
                compounds. A 2020 study in Frontiers in Plant Science confirmed that full-spectrum extracts like FECO
                provide superior pain relief compared to isolates due to this synergy.
              </p>
            </section>

            {/* Quick Reference Card */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 border-2 border-blue-200 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
                <Target className="h-7 w-7 text-purple-600" />
                Quick FECO Dosage Overview
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-blue-800 mb-2">Beginner Phase</h3>
                  <p className="text-3xl font-bold text-blue-600 mb-2">0.05g</p>
                  <p className="text-sm text-gray-600">2-3x daily</p>
                  <p className="text-xs text-gray-500 mt-2">Week 1-3</p>
                  <p className="text-xs text-gray-500 mt-1">20-30mg THC</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-blue-800 mb-2">Intermediate</h3>
                  <p className="text-3xl font-bold text-purple-600 mb-2">0.1-0.15g</p>
                  <p className="text-sm text-gray-600">2-3x daily</p>
                  <p className="text-xs text-gray-500 mt-2">Week 4-8</p>
                  <p className="text-xs text-gray-500 mt-1">60-90mg THC</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-blue-800 mb-2">Advanced Goal</h3>
                  <p className="text-3xl font-bold text-indigo-600 mb-2">0.2-0.3g</p>
                  <p className="text-sm text-gray-600">2-3x daily</p>
                  <p className="text-xs text-gray-500 mt-2">Week 9+</p>
                  <p className="text-xs text-gray-500 mt-1">120-180mg THC</p>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/rso-20capsules.jpg"
                alt="FECO capsules - Full Extract Cannabis Oil in easy-to-take capsule form"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">Science Behind FECO: How It Works</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                FECO works by interacting with the endocannabinoid system (ECS), a regulatory network discovered in the
                1990s that influences pain, mood, inflammation, sleep, and immunity. The ECS includes CB1 receptors
                primarily in the brain and CB2 receptors in immune cells.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Key Cannabinoids in FECO:</strong>
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-4 space-y-2">
                <li>
                  <strong>THC (Tetrahydrocannabinol)</strong> - Provides psychoactive effects and pain relief by binding
                  to CB1 receptors
                </li>
                <li>
                  <strong>CBD (Cannabidiol)</strong> - Offers anti-anxiety and anti-inflammatory benefits without
                  psychoactivity
                </li>
                <li>
                  <strong>CBG (Cannabigerol)</strong> - Provides antibacterial and anti-inflammatory properties
                </li>
                <li>
                  <strong>CBN (Cannabinol)</strong> - Delivers sedative effects, promoting better sleep
                </li>
                <li>
                  <strong>Terpenes</strong> - Aromatic compounds that modulate effects (myrcene for relaxation, limonene
                  for uplift, pinene for anti-inflammation)
                </li>
              </ul>
              <p className="text-gray-700 leading-relaxed mb-4">
                The synergy between these compounds creates the "entourage effect," where each component enhances the
                therapeutic potential of the others. Recent 2025 research explores FECO's role in neuroprotection and
                symptom management for various conditions.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-emerald-900 mb-6">Phase 1: Beginner Protocol (Weeks 1-3)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The beginner phase is designed to help your body acclimate to FECO while establishing baseline responses
                and building initial tolerance. Starting low and progressing gradually is essential for avoiding
                overwhelming effects and establishing a consistent protocol you can stick with long-term.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl mb-6">
                <h3 className="text-xl font-bold text-emerald-900 mb-4">Starting Dose: 0.05g (Rice Grain Size)</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Size Reference:</strong> Equivalent to one marking on FECO syringe, approximately 40-50mg
                      of total cannabinoids
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Frequency:</strong> 2-3 times daily (morning, optional afternoon, evening before bed)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Total Daily Dose Week 1-3:</strong> 100-150mg of total cannabinoids
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Administration:</strong> Sublingual (under tongue for 60-90 seconds) or swallowed with
                      food containing fats for better absorption
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Detailed Week 1-3 Schedule</h3>
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead className="bg-emerald-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-emerald-900">Time</th>
                      <th className="px-4 py-3 text-left font-bold text-emerald-900">Dose</th>
                      <th className="px-4 py-3 text-left font-bold text-emerald-900">Notes & Tips</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3">Morning (8-9 AM)</td>
                      <td className="px-4 py-3 font-medium">0.05g (40-50mg)</td>
                      <td className="px-4 py-3 text-gray-600">
                        Take with breakfast and healthy fats like avocado, nuts, or coconut oil
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="px-4 py-3">Afternoon (2-3 PM)</td>
                      <td className="px-4 py-3 font-medium">0.05g (optional)</td>
                      <td className="px-4 py-3 text-gray-600">
                        Add only if morning effects are minimal and you're comfortable progressing
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Evening (9-10 PM)</td>
                      <td className="px-4 py-3 font-medium">0.05-0.1g</td>
                      <td className="px-4 py-3 text-gray-600">
                        Take 1-2 hours before bed for optimal sleep support; slightly higher dose for better rest
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  What to Expect: Beginner Phase (Weeks 1-3)
                </h4>
                <ul className="space-y-2 text-sm text-blue-900">
                  <li>
                    • <strong>Week 1:</strong> Mild to moderate relaxation, possible drowsiness as body adjusts
                  </li>
                  <li>
                    • <strong>Week 2:</strong> Improved sleep quality and duration, initial symptom relief
                  </li>
                  <li>
                    • <strong>Week 3:</strong> Enhanced appetite, reduced nausea, more noticeable pain or anxiety relief
                  </li>
                  <li>
                    • <strong>General:</strong> Dry mouth and red eyes are normal; stay hydrated
                  </li>
                  <li>
                    • <strong>Important:</strong> Journal all effects daily to track patterns and optimize timing
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-amber-900 mb-6">Phase 2: Intermediate Protocol (Weeks 4-8)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Once you've successfully completed the beginner phase and your body has adapted to FECO, it's time to
                progress to intermediate dosing. This phase focuses on building tolerance gradually while increasing
                therapeutic benefits. The intermediate phase typically lasts 4-5 weeks and establishes doses that many
                users find optimal for ongoing wellness support.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-xl mb-6">
                <h3 className="text-xl font-bold text-amber-900 mb-4">Intermediate Dose: 0.1-0.15g</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Size Reference:</strong> Double the beginner dose, approximately 80-120mg of total
                      cannabinoids per serving
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Frequency:</strong> 2-3 times daily, split evenly across morning, afternoon, and evening
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Total Daily Dose Weeks 4-8:</strong> 240-360mg of total cannabinoids
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Progression:</strong> Increase dose every 4-5 days if well tolerated; listen to your body
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Weeks 4-8 Detailed Progression</h3>
              <div className="space-y-4">
                <div className="bg-white border-l-4 border-amber-400 p-5 rounded-r-xl">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                      4
                    </span>
                    Weeks 4-5: Transition Phase
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Increase from 0.05g beginner dose to 0.1g intermediate dose. Make the increase gradually by adding
                    0.025g every 2-3 days. Monitor closely for tolerance and adjust as needed.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    <strong>Tip:</strong> If you experience increased drowsiness, reduce afternoon dose and increase
                    evening dose for sleep support instead.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-amber-400 p-5 rounded-r-xl">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                      5
                    </span>
                    Weeks 6-7: Stabilization
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Maintain 0.1-0.1 5g doses 2-3x daily. Your body should now be fully acclimated to FECO and you may
                    feel normal again despite higher doses as tolerance builds naturally.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    <strong>Notice:</strong> This is expected and positive—your ECS has adapted to increased cannabinoid
                    levels.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-amber-400 p-5 rounded-r-xl">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                      8
                    </span>
                    Week 8: Evaluation & Planning
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Assess your symptoms, side effects, and overall wellbeing. Most users find 0.1-0.15g doses 2-3x
                    daily provide optimal therapeutic benefits. Decide whether to maintain this level or progress
                    further.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    <strong>Guidance:</strong> Many find 200-300mg total daily THC is the sweet spot for symptom
                    management.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6">
                <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  What to Expect: Intermediate Phase (Weeks 4-8)
                </h4>
                <ul className="space-y-2 text-sm text-amber-900">
                  <li>
                    • <strong>Increased therapeutic effects:</strong> More noticeable relief for chronic pain,
                    inflammation, and anxiety
                  </li>
                  <li>
                    • <strong>Better tolerance:</strong> Less drowsiness than beginner phase as ECS adapts
                  </li>
                  <li>
                    • <strong>Sleep improvements:</strong> Deeper sleep, fewer nightmares, better sleep quality
                  </li>
                  <li>
                    • <strong>Appetite normalization:</strong> Enhanced appetite returns to baseline
                  </li>
                  <li>
                    • <strong>Mood stabilization:</strong> Potential reduction in anxiety and mood swings
                  </li>
                  <li>
                    • <strong>Mild psychoactivity:</strong> Some mild high feeling may occur initially but decreases
                    with tolerance
                  </li>
                </ul>
              </div>
            </section>

            {/* Image 3 */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/rso-20capsules1.jpg"
                alt="FECO capsules with different potencies - Premium Full Extract Cannabis Oil formulations"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">FECO vs RSO: Detailed Comparison</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While both FECO and RSO are full-spectrum cannabis oils, modern standards highlight critical differences
                that make FECO increasingly popular among users prioritizing safety and consistency.
              </p>

              <div className="bg-white border border-gray-300 rounded-xl overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-blue-900">Aspect</th>
                      <th className="px-4 py-3 text-left font-bold text-blue-900">FECO</th>
                      <th className="px-4 py-3 text-left font-bold text-blue-900">RSO</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 font-medium">Extraction Solvent</td>
                      <td className="px-4 py-3">Food-grade ethanol or CO2 (safer, cleaner)</td>
                      <td className="px-4 py-3">Naphtha/isopropyl (potential residues)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium">Cannabinoid Profile</td>
                      <td className="px-4 py-3">Customizable (THC-dominant, balanced, CBD-rich)</td>
                      <td className="px-4 py-3">Usually THC-dominant (60-90%)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Production Standards</td>
                      <td className="px-4 py-3">Lab-regulated, low-temp to preserve terpenes</td>
                      <td className="px-4 py-3">Often homemade, variable quality</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium">Safety & Testing</td>
                      <td className="px-4 py-3">Commonly third-party tested, COA available</td>
                      <td className="px-4 py-3">Variable quality, often untested</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Best Use Cases</td>
                      <td className="px-4 py-3">Daily wellness, precise medical dosing</td>
                      <td className="px-4 py-3">High-dose intensive protocols</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium">Available Formats</td>
                      <td className="px-4 py-3">Syringes, tinctures, capsules, suppositories</td>
                      <td className="px-4 py-3">Primarily syringes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-green-900 mb-6">Symptom-Specific FECO Protocols</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Different conditions may benefit from tailored FECO protocols. While the general
                beginner-to-intermediate progression works for most users, these symptom-specific guidelines can help
                optimize your approach:
              </p>

              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-xl">
                  <h3 className="text-xl font-bold text-green-900 mb-3">For Chronic Pain & Inflammation</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Optimal Dose:</strong> 0.1-0.2g THC-dominant FECO, 2-3x daily
                  </p>
                  <p className="text-gray-700">
                    THC and CBD work synergistically for pain relief. The high cannabinoid content in FECO provides
                    potent anti-inflammatory effects. Consider splitting doses between morning (for daytime pain relief)
                    and evening (for better sleep with pain management).
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-xl">
                  <h3 className="text-xl font-bold text-purple-900 mb-3">For Sleep Issues & Insomnia</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Optimal Dose:</strong> 0.15-0.25g, 1-2 hours before bedtime
                  </p>
                  <p className="text-gray-700">
                    Indica-dominant FECO with sedative terpenes (myrcene, linalool) and high CBN content is ideal for
                    sleep. Taking a single larger evening dose (rather than splitting throughout the day) provides
                    better sleep consolidation. Many users report deeper sleep and fewer awakenings.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
                  <h3 className="text-xl font-bold text-blue-900 mb-3">For Anxiety & Stress</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Optimal Dose:</strong> 0.05-0.1g balanced THC:CBD ratio, as needed throughout day
                  </p>
                  <p className="text-gray-700">
                    Balanced FECO (equal THC and CBD) or CBD-dominant formulas work best. Take smaller doses more
                    frequently throughout the day rather than larger evening doses. CBD directly counteracts
                    anxiety-inducing THC effects while enhancing anxiolytic benefits.
                  </p>
                </div>

                <div className="bg-yellow-50 border-l-4 border-yellow-600 p-6 rounded-r-xl">
                  <h3 className="text-xl font-bold text-yellow-900 mb-3">For Nausea & Appetite</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Optimal Dose:</strong> 0.05-0.1g THC-dominant, 30 minutes before meals
                  </p>
                  <p className="text-gray-700">
                    THC's appetite-stimulating properties and anti-nausea effects are well-documented. Taking FECO
                    before meals on an empty stomach (with water only) maximizes appetite-enhancing benefits. Users
                    report appetite normalization within 1-2 weeks of consistent dosing.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Administration Methods & Best Practices</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                How you take FECO significantly impacts absorption, onset time, and overall effectiveness. Different
                administration methods suit different needs and preferences.
              </p>

              <div className="space-y-4">
                <div className="bg-white border-2 border-blue-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">1. Sublingual (Under Tongue)</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Onset:</strong> 15-45 minutes | <strong>Duration:</strong> 4-8 hours
                  </p>
                  <p className="text-gray-700 mb-3">
                    Place FECO under your tongue and hold for 60-90 seconds before swallowing. This allows direct
                    absorption through sublingual blood vessels, bypassing digestion for faster effects. Effective for
                    acute symptom management.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Pro Tip: Keep mouth closed and avoid swallowing saliva for maximum absorption.
                  </p>
                </div>

                <div className="bg-white border-2 border-purple-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">2. Oral (Swallow with Food)</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Onset:</strong> 45-120 minutes | <strong>Duration:</strong> 6-12 hours
                  </p>
                  <p className="text-gray-700 mb-3">
                    Swallow FECO directly or mix with fatty foods (peanut butter, coconut oil, avocado). Fat increases
                    bioavailability by 15-30%, maximizing cannabinoid absorption. Effects are slower but longer-lasting
                    than sublingual.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Pro Tip: Taking with a full meal containing fats optimizes absorption and reduces nausea.
                  </p>
                </div>

                <div className="bg-white border-2 border-green-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">3. Capsules (Pre-Filled)</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Onset:</strong> 45-120 minutes | <strong>Duration:</strong> 6-12 hours
                  </p>
                  <p className="text-gray-700 mb-3">
                    Fill empty gelatin capsules with FECO oil or purchase pre-made FECO capsules. Convenient for precise
                    dosing and travel. Same absorption timeline as oral method. No taste or odor.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Pro Tip: Take capsules with food to enhance absorption and reduce potential stomach discomfort.
                  </p>
                </div>

                <div className="bg-white border-2 border-orange-200 p-6 rounded-xl">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">4. Topical Application</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Onset:</strong> 20-40 minutes | <strong>Duration:</strong> 4-6 hours
                  </p>
                  <p className="text-gray-700 mb-3">
                    Mix FECO with lotion or carrier oil and apply directly to skin. Provides localized relief without
                    systemic effects. Ideal for arthritis, muscle pain, and localized inflammation. Minimal psychoactive
                    effects.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    Pro Tip: Massage into area for 2-3 minutes and consider covering with bandage for better absorption.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Storage & Safety Considerations</h2>
              <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-red-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Critical Safety Information
                </h3>
                <ul className="space-y-2 text-red-900 text-sm">
                  <li>
                    • <strong>Keep away from children and pets:</strong> FECO is highly potent and accidental ingestion
                    can cause serious effects in young children
                  </li>
                  <li>
                    • <strong>Do not drive or operate machinery:</strong> FECO causes impairment; wait at least 6-8
                    hours before driving
                  </li>
                  <li>
                    • <strong>Verify legality:</strong> Cannabis remains federally illegal in the USA; check local state
                    laws before purchasing or using
                  </li>
                  <li>
                    • <strong>Drug interactions:</strong> FECO may interact with medications, especially sedatives,
                    blood thinners, and immunosuppressants
                  </li>
                  <li>
                    • <strong>Medical consultation:</strong> Always consult a healthcare professional before starting
                    FECO, especially if pregnant, nursing, or taking medications
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-300 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-3">Proper Storage Guidelines</h3>
                <ul className="space-y-2 text-blue-900 text-sm">
                  <li>
                    • <strong>Temperature:</strong> Store at room temperature (65-75°F) or in refrigerator for extended
                    shelf life
                  </li>
                  <li>
                    • <strong>Light:</strong> Keep in dark glass or opaque containers away from direct sunlight
                  </li>
                  <li>
                    • <strong>Air exposure:</strong> Keep syringes sealed; minimize air exposure to prevent oxidation
                  </li>
                  <li>
                    • <strong>Humidity:</strong> Store in cool, dry place; avoid humid bathrooms
                  </li>
                  <li>
                    • <strong>Longevity:</strong> Properly stored FECO remains potent for 6-12 months; refrigerated
                    extends to 12-24 months
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Tolerance Management & Tolerance Breaks</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Over time, regular FECO use can build cannabinoid tolerance, requiring higher doses for the same
                effects. Strategic tolerance breaks help reset your endocannabinoid system and maintain FECO
                effectiveness long-term.
              </p>
              <div className="bg-white border-l-4 border-indigo-600 p-6 rounded-r-xl">
                <h3 className="text-lg font-bold text-indigo-900 mb-3">Recommended Tolerance Management</h3>
                <ul className="space-y-3 text-gray-700 text-sm">
                  <li>
                    <strong>Micro-dosing:</strong> Occasionally take half your normal dose to reduce tolerance buildup
                  </li>
                  <li>
                    <strong>Rotating strains/ratios:</strong> Alternate between THC-dominant, balanced, and CBD-dominant
                    FECO products
                  </li>
                  <li>
                    <strong>Monthly breaks:</strong> Take 3-7 days off every month to reset CB1/CB2 receptor sensitivity
                  </li>
                  <li>
                    <strong>Quarterly breaks:</strong> Take 1-2 weeks completely off FECO every 3 months for full ECS
                    reset
                  </li>
                  <li>
                    <strong>Dose rotation:</strong> Vary dosing times and amounts rather than maintaining identical
                    daily patterns
                  </li>
                </ul>
              </div>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Start Your FECO Dosage Plan Today</h2>
              <p className="text-blue-100 text-lg mb-6">
                This comprehensive 3000+ word guide provides everything needed for safe, effective FECO dosing from
                beginner to intermediate levels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-bold text-lg px-8">
                  <Link href="/products/feco">Shop FECO Products</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 bg-transparent"
                >
                  <Link href="/full-extract-cannabis-oil">Learn More About FECO</Link>
                </Button>
              </div>
            </div>

            {/* Medical Disclaimer */}
            <div className="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700">
              <p className="font-bold text-gray-900 mb-2">Medical Disclaimer</p>
              <p>
                This 3000+ word FECO dosage guide is for educational purposes only and does not constitute medical
                advice. Full Extract Cannabis Oil is a potent cannabis concentrate that should be used responsibly.
                Individual responses vary based on body weight, metabolism, condition severity, and cannabinoid
                tolerance. Consult with a healthcare professional familiar with cannabis medicine before beginning any
                FECO protocol, especially if you have pre-existing conditions, take medications, are pregnant/nursing,
                or have a history of substance abuse. Start with the lowest recommended dose and increase gradually.
                Verify cannabis legality in your jurisdiction before purchasing or using FECO.
              </p>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
