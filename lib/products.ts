export interface Product {
  id: string
  name: string
  description: string
  fullDescription?: string
  benefits: string[]
  price: number
  priceLabel?: string
  image: string
  category: "rso" | "feco"
  symptoms: ("pain" | "nausea" | "appetite" | "sleep" | "anxiety")[]
  rating: number
  reviews: number
  href?: string
  uses?: string[]
  effects?: string[]
  thcPercentage?: number
  cbdPercentage?: number
  strain?: string
  howToUse?: string[]
  safetyNotes?: string[]
  storageTips?: string[]
  userScenarios?: string[]
}

export const rsoProducts: Product[] = [
  {
    id: "rso-syringe",
    name: "RSO Syringe",
    description:
      "Premium Rick Simpson Oil in easy-to-use syringe format. Full-spectrum, high-THC extract with 93.3% total THC. The original RSO delivery method.",
    fullDescription:
      "RSO packaged in syringes for easy dispensing. Not for injection — simply for measuring and applying oil. RSO syringes are a practical way to dispense cannabis oil. Despite the name, they are not for injection — the syringe simply makes it easier to measure and apply the thick oil. A RSO syringe contains concentrated cannabis oil in a plastic dispenser. This allows precise dosing and versatile use, whether taken orally, applied topically, or added to food. The syringe format is ideal for medical regimens requiring consistent, measured doses.",
    benefits: ["Full-spectrum cannabinoids", "Precise dosing", "93.3% THC", "Versatile application"],
    price: 60,
    priceLabel: "From $60/g",
    image: "/placeholder.svg",
    category: "rso",
    symptoms: ["pain", "sleep", "appetite"],
    rating: 4.9,
    reviews: 312,
    href: "/products/rso",
    uses: [
      "Direct oral consumption",
      "Topical application for localized pain",
      "Adding to food or drinks",
      "Precise dosing for medical regimens",
    ],
    effects: ["Potent, full-spectrum cannabis effects", "Strong sedation at higher doses", "Relief lasting 6-8 hours"],
    howToUse: [
      "Dispense a rice-grain-sized amount onto food or under the tongue",
      "Apply topically to sore joints or muscles",
      "Store syringe in a cool, dark place",
    ],
    safetyNotes: [
      "Do not inject — syringes are for dispensing only",
      "Measure carefully to avoid overdosing",
      "Keep out of reach of children",
    ],
    storageTips: ["Store upright in a cool, dark place", "Clean the tip after each use", "Avoid exposure to air"],
    userScenarios: [
      "Angela, 40, migraine sufferer: Uses a rice-grain-sized dose sublingually for quick relief",
      "David, 65, with joint pain: Applies oil topically to sore knees for targeted relief",
    ],
    thcPercentage: 93,
    cbdPercentage: 2,
    strain: "Hybrid",
  },


  {
    id: "rso-suppository",
    name: "RSO Suppository",
    description:
      "Full-spectrum RSO suppositories. 100mg THC, 25mg CBD per suppository. 10-pack. Targeted rectal absorption.",
    fullDescription:
      "RSO Suppositories offer an alternative delivery method for full-spectrum Rick Simpson Oil. Each suppository contains 100mg THC and 25mg CBD. The 10-pack provides a month's supply with consistent dosing. Suppositories bypass first-pass metabolism for enhanced absorption.",
    benefits: ["Alternative delivery method", "High CBD ratio", "Consistent dosing", "10-pack", "Discreet"],
    price: 35,
    priceLabel: "$35",
    image: "/placeholder.svg",
    category: "rso",
    symptoms: ["pain", "anxiety", "sleep"],
    rating: 4.7,
    reviews: 89,
    thcPercentage: 20,
    cbdPercentage: 5,
    strain: "Hybrid",
    effects: ["Pain relief", "Relaxation", "Wellness support"],
    uses: ["Localized pain relief", "Sleep support", "Wellness routine"],
    howToUse: ["Use as directed", "Allow 30-60 minutes for effects", "Store in cool place before use"],
    safetyNotes: ["For rectal use only", "Wash hands before and after use", "Keep out of reach of children"],
    storageTips: [
      "Store in a cool place (refrigeration recommended)",
      "Keep in original container",
      "Discard if damaged or discolored",
    ],
  },
  {
    id: "rso-gummies",
    name: "RSO Edibles",
    description:
      "Edibles infused with RSO include gummies, chocolates, baked goods, or beverages. Ideal for consistent daily dosing with 50mg THC per serving.",
    fullDescription:
      "Edibles infused with RSO include gummies, chocolates, baked goods, or beverages. RSO gummies combine the therapeutic power of Rick Simpson Oil with enjoyable flavors. These gummies infused with RSO are popular among both medical and recreational users, offering long-lasting relief and a discreet consumption method. Each serving delivers 50mg THC in a delicious blueberry flavor with 10 servings per pack (500mg total). Edibles provide a convenient way to consume RSO without the taste of raw oil.",
    benefits: ["Precise dosing", "Delicious taste", "Discreet", "10 servings per pack", "500mg total THC"],
    price: 45,
    priceLabel: "From $45",
    image: "/placeholder.svg",
    category: "rso",
    symptoms: ["pain", "nausea", "anxiety"],
    rating: 4.9,
    reviews: 203,
    href: "/products/rso",
    uses: ["Pain relief", "Stress reduction", "Sleep enhancement", "Recreational enjoyment"],
    effects: ["Onset in 60-120 minutes", "Duration 6-10 hours", "Full-body relaxation and euphoria"],
    howToUse: [
      "Start with a small portion (¼ gummy)",
      "Wait at least 2 hours before increasing dosage",
      "Consume with food for better absorption",
    ],
    safetyNotes: [
      "Effects can take up to 2 hours; avoid consuming more too soon",
      "Potency varies — check labels carefully",
      "Keep edibles away from children and pets",
    ],
    storageTips: [
      "Store in airtight containers",
      "Keep in a cool, dry place",
      "Label clearly to avoid accidental consumption",
    ],
    userScenarios: [
      "Sophie, 28, graduate student: Eats half a gummy to unwind after studying",
      "Mark, 50, chronic back pain: Prefers brownies for weekend relief",
    ],
    thcPercentage: 50,
    cbdPercentage: 5,
    strain: "Hybrid",
  },
]

export const fecoProducts: Product[] = [
  {
    id: "feco-syringe",
    name: "FECO Syringe",
    description:
      "FECO packaged in syringes for easy dispensing. Not for injection — simply for measuring and applying oil with precise dosing.",
    fullDescription:
      "FECO packaged in syringes for easy dispensing. Not for injection — simply for measuring and applying oil. FECO syringes are a practical way to dispense cannabis oil. Despite the name, they are not for injection — the syringe simply makes it easier to measure and apply the thick oil. A FECO syringe contains concentrated cannabis oil in a plastic dispenser. This allows precise dosing and versatile use, whether taken orally, applied topically, or added to food. The full-spectrum extract provides maximum entourage effect for therapeutic benefits.",
    benefits: [
      "Multiple ratios",
      "Clean extraction",
      "Entourage effect",
      "Precise dispensing",
      "Versatile application",
    ],
    price: 55,
    priceLabel: "From $55/g",
    image: "/images/feco-1-1024x1024-402x-20-281-29.jpg",
    category: "feco",
    symptoms: ["pain", "anxiety", "nausea"],
    rating: 4.8,
    reviews: 98,
    href: "/products/feco",
    uses: [
      "Direct oral consumption",
      "Topical application for localized pain",
      "Adding to food or drinks",
      "Precise dosing for medical regimens",
    ],
    effects: ["Potent, full-spectrum cannabis effects", "Strong sedation at higher doses", "Relief lasting 6-8 hours"],
    howToUse: [
      "Dispense a rice-grain-sized amount onto food or under the tongue",
      "Apply topically to sore joints or muscles",
      "Store syringe in a cool, dark place",
    ],
    safetyNotes: [
      "Do not inject — syringes are for dispensing only",
      "Measure carefully to avoid overdosing",
      "Keep out of reach of children",
    ],
    storageTips: ["Store upright in a cool, dark place", "Clean the tip after each use", "Avoid exposure to air"],
    userScenarios: [
      "Angela, 40, migraine sufferer: Uses a rice-grain-sized dose sublingually",
      "David, 65, with joint pain: Applies oil topically to sore knees",
    ],
    thcPercentage: 22,
    cbdPercentage: 2,
    strain: "Hybrid",
  },
  {
    id: "feco-tincture",
    name: "FECO Tincture",
    description:
      "FECO tincture is a liquid form of full extract cannabis oil, diluted in ethanol or carrier oil for easier dosing. Available in THC-dominant, CBD-dominant, or balanced formulas.",
    fullDescription:
      "FECO tincture is a liquid form of full extract cannabis oil, diluted in ethanol or a carrier oil such as MCT. This makes the thick, sticky FECO easier to measure and consume. The result is a potent liquid that can be taken under the tongue or mixed into food and drinks.",
    benefits: ["Fast absorption", "Multiple ratios", "Easy dosing", "Discreet use", "Versatile consumption"],
    price: 70,
    priceLabel: "From $70",
    image: "/images/feco-tincture-new.jpeg",
    category: "feco",
    symptoms: ["anxiety", "sleep", "pain"],
    rating: 4.7,
    reviews: 124,
    href: "/products/feco",
    uses: [
      "Pain management",
      "Anxiety and stress relief",
      "Sleep support",
      "Appetite stimulation",
      "General wellness and relaxation",
    ],
    effects: [
      "Sublingual use: onset in 15-30 minutes, lasting 4-6 hours",
      "Oral ingestion: onset in 45-90 minutes, lasting 6-8 hours",
      "Effects include relaxation, pain reduction, improved sleep",
    ],
    howToUse: [
      "Place drops under the tongue for faster absorption",
      "Mix into food or drinks for discreet use",
      "Start with 1-2 drops and increase gradually",
    ],
    safetyNotes: [
      "Begin with very small doses; tinctures are potent",
      "Avoid alcohol when using tinctures",
      "Consult a doctor if taking other medications",
    ],
    storageTips: [
      "Keep in a dark glass bottle",
      "Store in a cool, dry place away from sunlight",
      "Shake gently before use",
    ],
    userScenarios: [
      "Maria, 45, with insomnia: Uses tincture before bed for quicker sleep onset",
      "James, 60, arthritis patient: Adds tincture to morning tea for steady relief",
    ],
    thcPercentage: 20,
    cbdPercentage: 2,
    strain: "Hybrid",
  },
  {
    id: "feco-capsules",
    name: "FECO Capsules",
    description:
      "Capsules contain measured doses of FECO in soft gels or vegetarian capsules. Choose from various THC:CBD ratios including 25mg and 50mg options with increased bioavailability through nano technology.",
    fullDescription:
      "Capsules contain measured doses of FECO in soft gels or vegetarian capsules. FECO capsules are one of the most convenient ways to consume cannabis oil. They provide precise dosing, long-lasting effects, and are easy to integrate into daily routines. Each capsule contains a measured dose of full extract cannabis oil, sealed in soft gels or vegetarian capsules. This eliminates the guesswork of dosing and ensures consistency. Available in 25mg and 50mg options with Pro-Pheroid Nano technology for increased bioavailability.",
    benefits: [
      "Precise dosing",
      "Discreet",
      "Multiple ratios",
      "No taste or smell",
      "Nano technology for better absorption",
    ],
    price: 55,
    priceLabel: "From $55",
    image: "/images/feco-capsules-new.jpg",
    category: "feco",
    symptoms: ["pain", "sleep", "anxiety"],
    rating: 4.8,
    reviews: 145,
    href: "/products/feco",
    uses: [
      "Neuropathic pain",
      "Cancer support (nausea, appetite loss)",
      "Sleep disorders",
      "Anxiety and depression",
      "Chronic inflammation",
    ],
    effects: ["Onset in 45-90 minutes", "Duration 6-8 hours", "Strong, full-body relief with minimal effort"],
    howToUse: [
      "Swallow with water, preferably after a meal",
      "Begin with the lowest available dose (5-10 mg)",
      "Track effects in a journal to adjust dosage safely",
    ],
    safetyNotes: [
      "Capsules take longer to kick in; avoid redosing too quickly",
      "Never drive or operate machinery after consumption",
      "Monitor tolerance with daily use",
    ],
    storageTips: [
      "Store capsules in blister packs or bottles",
      "Keep away from heat and moisture",
      "Refrigeration extends shelf life",
    ],
    userScenarios: [
      "Linda, 52, cancer patient: Uses capsules to manage nausea during chemotherapy",
      "Tom, 35, office worker: Takes a capsule in the morning for long-lasting anxiety relief",
    ],
    thcPercentage: 20,
    cbdPercentage: 2,
    strain: "Hybrid",
  },
  {
    id: "feco-suppositories",
    name: "FECO Suppositories",
    description:
      "Suppositories deliver FECO rectally or vaginally, bypassing digestion for faster absorption and reduced psychoactive effects. 100mg per suppository, 60 count (6,000mg total).",
    fullDescription:
      "Suppositories deliver FECO rectally or vaginally, bypassing digestion for faster absorption and reduced psychoactive effects. FECO suppositories are a specialized delivery method that bypasses digestion, offering rapid absorption and reduced psychoactive effects. They are often used by patients with severe conditions. Suppositories deliver FECO rectally or vaginally, allowing cannabinoids to enter the bloodstream quickly. Each box contains 60 suppositories at 100mg each for a total of 6,000mg.",
    benefits: [
      "Targeted relief",
      "No psychoactive effects",
      "Fast absorption",
      "6000mg total per box",
      "60 suppositories",
    ],
    price: 60,
    priceLabel: "From $60",
    image: "/images/feco-suppositories-new.jpg",
    category: "feco",
    symptoms: ["pain", "nausea", "sleep"],
    rating: 4.6,
    reviews: 67,
    href: "/products/feco",
    uses: [
      "Severe pain management",
      "Cancer therapy support",
      "Gastrointestinal conditions",
      "Patients unable to swallow capsules or tolerate edibles",
    ],
    effects: ["Rapid absorption (15-30 minutes)", "Strong systemic relief", "Often less psychoactive than oral use"],
    howToUse: [
      "Insert gently into rectum or vagina",
      "Lie down for 15-20 minutes to allow absorption",
      "Follow medical guidance for dosing",
    ],
    safetyNotes: [
      "Insert gently; consult a healthcare provider",
      "Hygiene is critical — wash hands before and after use",
      "Effects may be systemic but less psychoactive",
    ],
    storageTips: ["Keep refrigerated to maintain firmness", "Store in sealed packaging", "Avoid exposure to heat"],
    userScenarios: [
      "Helen, 70, with GI issues: Uses suppositories for relief without oral ingestion",
      "Paul, 55, post-surgery: Finds rectal suppositories effective for pain without strong psychoactive effects",
    ],
    thcPercentage: 20,
    cbdPercentage: 5,
    strain: "Hybrid",
  },
  {
    id: "feco-edibles",
    name: "FECO Edibles",
    description:
      "Edibles infused with FECO include gummies, chocolates, and treats. Fast-acting, full-spectrum FECO Mini's in delicious Indica Dark Berry flavor.",
    fullDescription:
      "Edibles infused with FECO include gummies, chocolates, baked goods, or beverages. FECO edibles combine the therapeutic power of cannabis oil with enjoyable flavors. Gummies, chocolates, and baked goods infused with FECO are popular among both medical and recreational users. Edibles infused with FECO deliver cannabinoids through digestion, offering long-lasting relief and a discreet consumption method. Our FECO Mini's feature fast-acting, full-spectrum cannabis in Indica Dark Berry flavor for relaxation and pain relief.",
    benefits: ["Great taste", "Precise dosing", "Long-lasting", "Full-spectrum effects", "Fast-acting formula"],
    price: 45,
    priceLabel: "From $45",
    image: "/images/feco-edibles-new.jpeg",
    category: "feco",
    symptoms: ["pain", "nausea", "anxiety"],
    rating: 4.8,
    reviews: 187,
    href: "/products/feco",
    uses: ["Pain relief", "Stress reduction", "Sleep enhancement", "Recreational enjoyment"],
    effects: ["Onset in 60-120 minutes", "Duration 6-10 hours", "Full-body relaxation and euphoria"],
    howToUse: [
      "Start with a small portion (¼ gummy)",
      "Wait at least 2 hours before increasing dosage",
      "Consume with food for better absorption",
    ],
    safetyNotes: [
      "Effects can take up to 2 hours; avoid consuming more too soon",
      "Potency varies — check labels carefully",
      "Keep edibles away from children and pets",
    ],
    storageTips: [
      "Store in airtight containers",
      "Refrigerate baked goods",
      "Label clearly to avoid accidental consumption",
    ],
    userScenarios: [
      "Sophie, 28, graduate student: Eats half a gummy to unwind",
      "Mark, 50, chronic back pain: Prefers brownies for weekend relief",
    ],
    thcPercentage: 20,
    cbdPercentage: 2,
    strain: "Hybrid",
  },
]

export const allProducts = [...rsoProducts, ...fecoProducts]

// Keep backwards compatibility
export const oils = allProducts
export const edibles: Product[] = fecoProducts.filter((product) => product.category === "feco")
