import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { AlertCircle, CheckCircle2, TrendingUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "RSO Dosage Plan 2026: Complete Beginner to Advanced Rick Simpson Oil Protocol | Natural Cannabis Oil",
  description:
    "Complete RSO dosage plan from beginner to advanced. Learn Rick Simpson Oil dosing schedules, 90-day protocol, storage, timing, and symptom-specific dosing strategies. Start at rice grain size and progress safely to 1g/day therapeutic dose. Expert RSO dosage guide with side effect management, tolerance building, and comprehensive 3000+ word protocol.",
  keywords: [
    "RSO dosage plan",
    "Rick Simpson Oil dosing",
    "how to dose RSO",
    "RSO dosage guide",
    "RSO 90-day protocol",
    "beginner RSO dosing",
    "advanced RSO protocol",
    "RSO for pain",
    "RSO for sleep",
    "buy RSO online",
    "RSO dosage schedule",
    "cannabis oil dosing",
    "Rick Simpson Oil protocol",
    "RSO beginner to advanced",
  ],
  openGraph: {
    title: "RSO Dosage Plan: Complete Beginner to Advanced Protocol 2026",
    description:
      "Master RSO dosing with expert 3000+ word protocol. Start at rice grain size and build to 1g/day therapeutic dose.",
    images: [
      {
        url: "/images/rso-dosage-guide.jpg",
        width: 1200,
        height: 630,
        alt: "RSO dosage guide - Rick Simpson Oil protocol",
      },
    ],
  },
  alternates: {
    canonical: "https://naturalcannabisoil.shop/blog/rso-dosage-plan-beginner-to-advanced",
  },
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "RSO Dosage Plan: Complete Beginner to Advanced Rick Simpson Oil Protocol",
  description:
    "Comprehensive 3000+ word guide to RSO dosing including 90-day protocol, storage, timing, and symptom-specific schedules",
  image: "/images/rso-dosage-guide.jpg",
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
  datePublished: "2026-01-15",
  dateModified: "2026-01-15",
}

export default function RSODosagePlanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <div className="min-h-screen flex flex-col bg-gradient-to-b from-emerald-50 to-white">
        <Header />
        <main className="flex-1">
          <article className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-balance">
                RSO Dosage Plan: Complete Beginner to Advanced Protocol
              </h1>
              <p className="text-xl text-gray-600 mb-6">
                Comprehensive guide to Rick Simpson Oil dosing with expert step-by-step protocols and 90-day plan
              </p>
              <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
                <span>35+ min read</span>
                <span>Updated Jan 2026</span>
                <span>3000+ Words</span>
              </div>
            </div>

            {/* Featured Image */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/rso-suppository.webp"
                alt="RSO suppositories - Sacred Botanicals 100mg THC with 25mg CBD - Complete Rick Simpson Oil dosage protocol"
                width={1200}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>

            {/* Introduction */}
            <div className="prose prose-lg max-w-none mb-12">
              <p className="text-xl text-gray-700 leading-relaxed font-semibold mb-4">
                Rick Simpson Oil (RSO) Dosage Plan: Complete Beginner to Advanced Protocol
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Rick Simpson Oil (RSO) is a potent, full-spectrum cannabis concentrate renowned for its exceptional high
                THC content (typically 60-90%) and whole-plant extraction method. Developed by Canadian activist Rick
                Simpson following his personal health experiences, RSO has gained legendary status in alternative
                wellness communities worldwide. This comprehensive 3000+ word guide provides a detailed, safe
                progression from beginner to advanced dosing protocols, including the famous 90-day intensive regimen
                popularized by Simpson himself.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Unlike many cannabis products, RSO requires thoughtful, gradual progression due to its exceptional
                potency. This guide covers everything from fundamental RSO science and composition to detailed
                week-by-week dosing schedules, tolerance management strategies, and symptom-specific protocols. Whether
                you're exploring RSO for general wellness or considering an intensive therapeutic protocol,
                understanding proper dosing is essential for safety and effectiveness.
              </p>
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-emerald-900 mb-6">What Is Rick Simpson Oil? History & Science</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>Rick Simpson Oil (RSO)</strong> is a thick, dark, tar-like full-spectrum cannabis oil extract
                known for its remarkable potency. In 2003, Canadian engineer Rick Simpson was diagnosed with basal cell
                carcinoma after a workplace injury. Frustrated with conventional treatments that failed to help, Simpson
                began researching cannabis as a potential therapeutic option.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Drawing inspiration from a 1975 research paper showing THC's potential effects against cancer cells in
                laboratory settings, Simpson developed his own cannabis oil extraction method. He reportedly applied the
                oil topically to his skin lesions, claiming remarkable results within days. This personal success story
                led Simpson to share his oil freely with others, eventually creating the formula now known as Rick
                Simpson Oil worldwide.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                <strong>RSO Composition:</strong> A standard 1-gram RSO syringe typically contains 600-900mg of total
                cannabinoids (60-90% potency), with THC dominating the profile. RSO also contains minor cannabinoids
                (CBD, CBG, CBN), terpenes, flavonoids, and other phytochemicals from the whole cannabis plant. This
                full-spectrum approach theoretically enhances the "entourage effect," where all compounds work
                synergistically for maximum therapeutic potential.
              </p>
            </section>

            {/* Quick Reference Card */}
            <div className="bg-gradient-to-br from-emerald-50 to-amber-50 border-2 border-emerald-200 rounded-2xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-emerald-900 mb-6 flex items-center gap-3">
                <TrendingUp className="h-7 w-7 text-amber-600" />
                Quick RSO Dosage Overview
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-emerald-800 mb-2">Beginner Phase</h3>
                  <p className="text-3xl font-bold text-emerald-600 mb-2">1/4 grain</p>
                  <p className="text-sm text-gray-600">3x daily</p>
                  <p className="text-xs text-gray-500 mt-2">Week 1-2</p>
                  <p className="text-xs text-gray-500 mt-1">~25mg THC</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-emerald-800 mb-2">Intermediate</h3>
                  <p className="text-3xl font-bold text-amber-600 mb-2">1/2 grain</p>
                  <p className="text-sm text-gray-600">3x daily</p>
                  <p className="text-xs text-gray-500 mt-2">Week 3-8</p>
                  <p className="text-xs text-gray-500 mt-1">~50mg THC</p>
                </div>
                <div className="bg-white p-6 rounded-xl shadow-sm">
                  <h3 className="font-bold text-emerald-800 mb-2">Advanced (90-Day)</h3>
                  <p className="text-3xl font-bold text-red-600 mb-2">1 gram</p>
                  <p className="text-sm text-gray-600">daily total</p>
                  <p className="text-xs text-gray-500 mt-2">Week 9-12+</p>
                  <p className="text-xs text-gray-500 mt-1">~700-900mg THC</p>
                </div>
              </div>
            </div>

            {/* Image 2 */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/rso-20capsules.jpg"
                alt="RSO capsules - Premium Full Extract Cannabis Oil in easy-to-take capsule form for precise dosing"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-emerald-900 mb-6">Phase 1: Beginner Protocol (Weeks 1-2)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                The beginner phase is designed for critical safety and acclimation. RSO's exceptional potency means
                careful progression is non-negotiable. The goal is to introduce your endocannabinoid system (ECS) to
                high cannabinoid levels while monitoring tolerance and side effects. Many users underestimate RSO's
                power—starting conservatively prevents overwhelming effects and establishes confidence in the protocol.
              </p>

              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 rounded-r-xl mb-6">
                <h3 className="text-xl font-bold text-emerald-900 mb-4">
                  Starting Dose: 1/4 Grain of Rice (~25mg THC)
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Size Reference:</strong> Approximately the size of one short-grain rice piece cut into
                      quarters; about 25-30mg of THC from an 800mg/gram RSO
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Frequency:</strong> 3 times daily (morning with breakfast, afternoon with lunch, evening
                      1-2 hours before bed)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Total Daily Dose Weeks 1-2:</strong> Approximately 75-90mg THC (25mg x 3 doses)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Administration:</strong> Sublingual (under tongue 60-90 seconds) or with food containing
                      healthy fats
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Detailed Week 1-2 Schedule</h3>
              <div className="bg-white border border-gray-200 rounded-xl overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead className="bg-emerald-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-emerald-900">Time</th>
                      <th className="px-4 py-3 text-left font-bold text-emerald-900">Dose</th>
                      <th className="px-4 py-3 text-left font-bold text-emerald-900">Notes & Guidance</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3">Morning (8-9 AM)</td>
                      <td className="px-4 py-3 font-medium">1/4 grain (~25mg)</td>
                      <td className="px-4 py-3 text-gray-600">
                        Take with breakfast and healthy fats; monitor mood and energy throughout morning
                      </td>
                    </tr>
                    <tr className="bg-blue-50">
                      <td className="px-4 py-3">Afternoon (2-3 PM)</td>
                      <td className="px-4 py-3 font-medium">1/4 grain (~25mg)</td>
                      <td className="px-4 py-3 text-gray-600">
                        Take with lunch or snack; assess any psychoactive effects; avoid driving/machinery
                      </td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">Evening (9-10 PM)</td>
                      <td className="px-4 py-3 font-medium">1/4 grain (~25mg)</td>
                      <td className="px-4 py-3 text-gray-600">
                        Take 1-2 hours before bed; note sleep quality and any dreams or night sweats
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-6">
                <h4 className="font-bold text-blue-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Expected Effects: Beginner Phase (Weeks 1-2)
                </h4>
                <ul className="space-y-2 text-sm text-blue-900">
                  <li>
                    • <strong>Week 1 (Days 1-7):</strong> Mild to moderate relaxation; possible slight drowsiness,
                    especially in afternoon/evening; dry mouth and red eyes may occur
                  </li>
                  <li>
                    • <strong>Week 2 (Days 8-14):</strong> Improved sleep quality and duration; initial appetite
                    increase; body acclimation to RSO's psychoactive effects
                  </li>
                  <li>
                    • <strong>Possible side effects:</strong> Dizziness, mild anxiety if oversensitive to THC,
                    cottonmouth, mild headache (hydrate!)
                  </li>
                  <li>
                    • <strong>Critical:</strong> Journal ALL effects daily—onset, duration, intensity, mood, sleep,
                    appetite, side effects
                  </li>
                  <li>
                    • <strong>Most important:</strong> DO NOT drive or operate machinery; effects impair coordination
                    and judgment
                  </li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-amber-900 mb-6">Phase 2: Intermediate Protocol (Weeks 3-8)</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Once you've successfully completed the beginner phase without major side effects, the intermediate phase
                begins. This phase focuses on gradually increasing doses every 4-5 days while your body continues
                building tolerance. The intermediate phase typically lasts 5-6 weeks and establishes therapeutic doses
                that many users find optimal for long-term wellness support and symptom management.
              </p>

              <div className="bg-amber-50 border-l-4 border-amber-600 p-6 rounded-r-xl mb-6">
                <h3 className="text-xl font-bold text-amber-900 mb-4">
                  Intermediate Dose: 1/2 Grain of Rice (~50mg THC)
                </h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Size Reference:</strong> Double the beginner dose, approximately 50-60mg THC per dose
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Frequency:</strong> 3 times daily, same schedule as beginner phase
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Total Daily Dose Weeks 3-8:</strong> Approximately 150-180mg THC (50mg x 3)
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Progression:</strong> Increase dose by 1/8 grain every 4-5 days if comfortable; monitor
                      tolerance closely
                    </span>
                  </li>
                </ul>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">Weeks 3-8 Detailed Progression</h3>
              <div className="space-y-4">
                <div className="bg-white border-l-4 border-amber-400 p-5 rounded-r-xl">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                      3
                    </span>
                    Weeks 3-4: Transition to Intermediate
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Increase dose from 1/4 grain to 1/2 grain at each dose time. Make increases gradually: add 1/8 grain
                    every 2 days rather than jumping immediately to full intermediate dose. Many users prefer to
                    increase evening dose first (for better sleep) while maintaining lower morning/afternoon doses.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    <strong>Dosing example Week 3:</strong> Day 1-2: 1/4 grain x3 daily. Day 3-4: 3/8 grain x3 daily.
                    Day 5-7: 1/2 grain x3 daily.
                  </p>
                </div>

                <div className="bg-white border-l-4 border-amber-400 p-5 rounded-r-xl">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                      5
                    </span>
                    Weeks 5-6: Building Tolerance
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Continue increasing dose every 4-5 days. At this stage, you can double dose every 4-5 days if
                    comfortable. Expected progression: Week 5 = 1/2 grain. Week 6 = 1 full grain. Your tolerance
                    building allows higher doses without overwhelming effects—this is normal and healthy tolerance
                    development.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    <strong>Key observation:</strong> You'll notice less "high" despite higher doses—your ECS has
                    adapted. This is positive!
                  </p>
                </div>

                <div className="bg-white border-l-4 border-amber-400 p-5 rounded-r-xl">
                  <h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                    <span className="bg-amber-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">
                      8
                    </span>
                    Weeks 7-8: Stabilization & Assessment
                  </h4>
                  <p className="text-gray-700 mb-3">
                    Reach and maintain 1-2 grams daily (or your optimal therapeutic dose). Spend week 8 evaluating
                    results: symptom relief, side effects, overall quality of life. Decide whether to maintain this dose
                    long-term, progress to advanced protocol, or adjust downward if side effects are concerning.
                  </p>
                  <p className="text-sm text-gray-600 italic">
                    <strong>Decision point:</strong> Many users find 500-1000mg daily is their optimal maintenance dose.
                  </p>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-6 mt-6">
                <h4 className="font-bold text-amber-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  What to Expect: Intermediate Phase (Weeks 3-8)
                </h4>
                <ul className="space-y-2 text-sm text-amber-900">
                  <li>
                    • <strong>Stronger therapeutic effects:</strong> More pronounced pain relief, inflammation
                    reduction, and anxiety relief
                  </li>
                  <li>
                    • <strong>Improved tolerance:</strong> Significantly less drowsiness/grogginess despite higher doses
                  </li>
                  <li>
                    • <strong>Sleep transformation:</strong> Deeper, more restful sleep with fewer awakenings; vivid
                    dreams may decrease
                  </li>
                  <li>
                    • <strong>Appetite restoration:</strong> Appetite normalizes after initial enhancement in week 1-2
                  </li>
                  <li>
                    • <strong>Cumulative benefits:</strong> By week 8, many report significant symptom improvement and
                    quality of life enhancement
                  </li>
                  <li>
                    • <strong>Psychoactivity reduction:</strong> Despite massive THC doses, "high" sensation diminishes
                    as tolerance solidifies
                  </li>
                </ul>
              </div>
            </section>

            {/* Image 3 */}
            <div className="mb-12 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/rso1.jpg"
                alt="RSO syringes with measurement markings - Premium Rick Simpson Oil with visible cannabinoid potency"
                width={1200}
                height={600}
                className="w-full h-auto"
              />
            </div>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-red-900 mb-6">Phase 3: Advanced Protocol - The 90-Day Plan</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Rick Simpson's famous 90-day intensive protocol aims for 60 grams of RSO total consumption over 90 days.
                <strong>
                  This advanced protocol should ONLY be considered under professional medical supervision and with full
                  understanding of risks.
                </strong>
                Most users do not need to reach 1 gram daily—many find 300-500mg daily provides optimal benefits without
                excessive psychoactivity.
              </p>

              <div className="bg-red-50 border-l-4 border-red-600 p-6 rounded-r-xl mb-6">
                <h3 className="text-xl font-bold text-red-900 mb-4">
                  Rick Simpson's 90-Day Protocol Goal: 60g (1g daily by Week 12)
                </h3>
                <p className="text-gray-700 mb-4">
                  <strong>IMPORTANT DISCLAIMER:</strong> This intensive protocol carries significant risks including
                  cannabinoid hyperemesis syndrome, psychological dependence, severe psychoactivity, and potential
                  interactions with medications. Medical supervision is strongly recommended. This information is
                  educational only and should not be interpreted as medical advice.
                </p>

                <table className="w-full text-sm border border-gray-300 rounded-lg overflow-hidden">
                  <thead className="bg-red-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-red-900">Weeks</th>
                      <th className="px-4 py-3 text-left font-bold text-red-900">Daily Dose Goal</th>
                      <th className="px-4 py-3 text-left font-bold text-red-900">Weekly Total</th>
                      <th className="px-4 py-3 text-left font-bold text-red-900">Cumulative (60g Target)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3">1-2</td>
                      <td className="px-4 py-3">50-100mg (1/4-1/2 grain x3)</td>
                      <td className="px-4 py-3">~1-2g</td>
                      <td className="px-4 py-3">~3g by week 2</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3">3-5</td>
                      <td className="px-4 py-3">100-300mg (increase every 4-5 days)</td>
                      <td className="px-4 py-3">~3-5g</td>
                      <td className="px-4 py-3">~13g by week 5</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">6-8</td>
                      <td className="px-4 py-3">300-600mg</td>
                      <td className="px-4 py-3">~4-6g</td>
                      <td className="px-4 py-3">~30g by week 8</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3">9-12</td>
                      <td className="px-4 py-3">600-1000mg (work to 1g/day)</td>
                      <td className="px-4 py-3">~6-7g</td>
                      <td className="px-4 py-3">~60g by week 12</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3">13+</td>
                      <td className="px-4 py-3">Maintenance: 1-2g/month</td>
                      <td className="px-4 py-3">Varies</td>
                      <td className="px-4 py-3">Ongoing as needed</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-6 my-6">
                <h4 className="font-bold text-yellow-900 mb-3">Advanced Protocol Reality Check</h4>
                <p className="text-yellow-900 text-sm mb-3">
                  <strong>Most experienced users report:</strong>
                </p>
                <ul className="space-y-2 text-sm text-yellow-900">
                  <li>• Severe tolerance prevents "high" feeling after weeks 9-10, even with massive doses</li>
                  <li>• Continued consumption is more about maintaining therapeutic level than psychoactive effects</li>
                  <li>• Nausea and other side effects may emerge after weeks 8-10 of continuous escalation</li>
                  <li>• Taking tolerance breaks (1-2 weeks off) every month prevents some side effects</li>
                  <li>• Many report optimal results at 400-600mg daily rather than pushing to full 1g</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-blue-900 mb-6">RSO vs FECO: Detailed Comparison</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While both RSO and FECO are full-spectrum cannabis oils, they differ significantly in production,
                safety, and ideal use cases. Understanding these differences helps inform your dosing protocol choice.
              </p>

              <div className="bg-white border border-gray-300 rounded-xl overflow-hidden mb-6">
                <table className="w-full text-sm">
                  <thead className="bg-blue-100">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-blue-900">Aspect</th>
                      <th className="px-4 py-3 text-left font-bold text-blue-900">RSO</th>
                      <th className="px-4 py-3 text-left font-bold text-blue-900">FECO</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <td className="px-4 py-3 font-medium">Extraction Solvent</td>
                      <td className="px-4 py-3">Traditionally naphtha/isopropyl (potential residues)</td>
                      <td className="px-4 py-3">Food-grade ethanol or CO2 (cleaner)</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium">Cannabinoid Profile</td>
                      <td className="px-4 py-3">Usually THC-dominant (60-90%)</td>
                      <td className="px-4 py-3">Customizable (THC-dominant, balanced, CBD-rich)</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Production Quality</td>
                      <td className="px-4 py-3">Often homemade, variable, inconsistent</td>
                      <td className="px-4 py-3">Lab-regulated, consistent, low-temp</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium">Testing & Safety</td>
                      <td className="px-4 py-3">Often untested, unknown purity</td>
                      <td className="px-4 py-3">Commonly third-party tested, COA available</td>
                    </tr>
                    <tr>
                      <td className="px-4 py-3 font-medium">Best For</td>
                      <td className="px-4 py-3">Intensive high-dose protocols</td>
                      <td className="px-4 py-3">Precise dosing, long-term wellness</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 font-medium">Formats Available</td>
                      <td className="px-4 py-3">Primarily syringes</td>
                      <td className="px-4 py-3">Syringes, tinctures, capsules, suppositories</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-green-900 mb-6">Symptom-Specific RSO Protocols</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                While the standard progression (beginner to advanced) works for general wellness, these guidelines help
                optimize RSO for specific health concerns:
              </p>

              <div className="space-y-4">
                <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-xl">
                  <h3 className="text-lg font-bold text-green-900 mb-3">For Chronic Pain & Serious Conditions</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Protocol:</strong> Progress to 300-900mg daily (RSO's famous intensive range)
                  </p>
                  <p className="text-gray-700">
                    RSO's high THC content and full-spectrum compounds provide potent anti-inflammatory and analgesic
                    effects. Many follow Simpson's 90-day protocol for serious conditions. Split doses: 300-400mg
                    morning, 300-400mg afternoon, 200-300mg evening. Consult medical professionals.
                  </p>
                </div>

                <div className="bg-purple-50 border-l-4 border-purple-600 p-6 rounded-r-xl">
                  <h3 className="text-lg font-bold text-purple-900 mb-3">For Sleep & Sedation</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Protocol:</strong> 200-400mg single dose 1-2 hours before bed
                  </p>
                  <p className="text-gray-700">
                    RSO's high cannabinoid and terpene content (myrcene, linalool) make it exceptionally effective for
                    sleep. Indica-dominant RSO provides deeper sedation than other formats. Many report significant
                    sleep improvement after 1-2 weeks. Consider this the most common successful RSO use case.
                  </p>
                </div>

                <div className="bg-blue-50 border-l-4 border-blue-600 p-6 rounded-r-xl">
                  <h3 className="text-lg font-bold text-blue-900 mb-3">For Anxiety (with caution)</h3>
                  <p className="text-gray-700 mb-2">
                    <strong>Protocol:</strong> Lower doses (50-100mg) throughout day; balanced or CBD-dominant blends
                    preferred
                  </p>
                  <p className="text-gray-700">
                    High-THC RSO can increase anxiety in sensitive individuals. If using RSO for anxiety, start low, use
                    balanced ratios if available, and consider FECO with CBD-dominant profiles instead. Some users find
                    micro-dosing (25-50mg) 2-3x daily effective without anxiety.
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Critical Safety & Side Effect Management</h2>

              <div className="bg-red-50 border border-red-300 rounded-xl p-6 mb-6">
                <h3 className="text-lg font-bold text-red-900 mb-3 flex items-center gap-2">
                  <AlertCircle className="h-5 w-5" />
                  Serious Risks & Side Effects
                </h3>
                <ul className="space-y-2 text-red-900 text-sm">
                  <li>
                    • <strong>Cannabinoid Hyperemesis Syndrome (CHS):</strong> Rare but serious condition causing severe
                    nausea/vomiting; more common with high-dose daily THC over months
                  </li>
                  <li>
                    • <strong>Psychological effects:</strong> High doses can trigger anxiety, paranoia, or psychotic
                    episodes (especially if predisposed)
                  </li>
                  <li>
                    • <strong>Dependence risk:</strong> Daily high-dose RSO can create psychological/physical dependence
                  </li>
                  <li>
                    • <strong>Impairment:</strong> RSO significantly impairs judgment, coordination, and reaction time;
                    never drive or operate machinery
                  </li>
                  <li>
                    • <strong>Drug interactions:</strong> RSO interferes with medications, especially sedatives, blood
                    thinners, and immunosuppressants
                  </li>
                  <li>
                    • <strong>Respiratory issues:</strong> Repeated smoking/vaping RSO may damage lungs (prefer oral)
                  </li>
                </ul>
              </div>

              <div className="bg-blue-50 border border-blue-300 rounded-xl p-6">
                <h3 className="text-lg font-bold text-blue-900 mb-3">Managing Common RSO Side Effects</h3>
                <ul className="space-y-3 text-blue-900 text-sm">
                  <li>
                    <strong>Dry mouth:</strong> Drink plenty of water; sugar-free candies or gum help stimulate saliva
                  </li>
                  <li>
                    <strong>Red eyes:</strong> Use eye drops (not essential); normal and temporary
                  </li>
                  <li>
                    <strong>Increased heart rate:</strong> Sit down, breathe deeply, stay calm; usually subsides in
                    30-60 min
                  </li>
                  <li>
                    <strong>Anxiety/paranoia:</strong> Switch to lower doses or FECO with CBD; take with CBD oil or
                    edibles
                  </li>
                  <li>
                    <strong>Nausea:</strong> Take with ginger, peppermint tea; eat with food; reduce dose
                  </li>
                  <li>
                    <strong>Over-intoxication:</strong> Stay calm, hydrate, rest; CBD counteracts THC effects; never
                    panic
                  </li>
                </ul>
              </div>
            </section>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-emerald-600 to-emerald-700 rounded-2xl p-8 text-white text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Start Your RSO Dosage Protocol</h2>
              <p className="text-emerald-100 text-lg mb-6">
                This comprehensive 3000+ word guide provides complete RSO dosing protocols from beginner to advanced
                levels.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-emerald-700 hover:bg-emerald-50 font-bold text-lg px-8"
                >
                  <Link href="/products/rso">Shop RSO Products</Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-2 border-white text-white hover:bg-white/10 font-bold text-lg px-8 bg-transparent"
                >
                  <Link href="/rick-simpson-oil">Learn More About RSO</Link>
                </Button>
              </div>
            </div>

            {/* Medical Disclaimer */}
            <div className="mt-12 p-6 bg-gray-50 border border-gray-200 rounded-xl text-sm text-gray-700">
              <p className="font-bold text-gray-900 mb-2">Comprehensive Medical Disclaimer</p>
              <p>
                This 3000+ word RSO dosage guide is for educational purposes only and does NOT constitute medical
                advice. Rick Simpson Oil is an exceptionally potent cannabis concentrate carrying substantial health
                risks. Individual responses vary based on body weight, metabolism, genetics, condition severity, prior
                cannabinoid exposure, and psychological predisposition. The 90-day intensive protocol carries serious
                risks and should ONLY be considered under professional medical supervision. Consult a qualified
                healthcare professional familiar with cannabis medicine before beginning ANY RSO protocol, especially if
                you have: pre-existing health conditions, take prescription medications, are pregnant/nursing, under 21
                years old, have mental health history (psychosis, schizophrenia, bipolar disorder), or history of
                substance abuse. Never drive or operate machinery after RSO consumption. Verify cannabis legality in
                your jurisdiction—RSO remains federally illegal in the USA despite state-level legalization. Individual
                responsibility and medical oversight are essential.
              </p>
            </div>
          </article>
        </main>
        <Footer />
      </div>
    </>
  )
}
