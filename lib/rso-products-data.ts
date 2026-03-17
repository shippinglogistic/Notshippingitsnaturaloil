export interface PricingTier {
  quantity: number
  unitPrice: number
  discount: number
  totalPrice: number
}

export interface DosageGuide {
  level: string
  dose: string
  frequency: string
  notes: string
}

export interface SyringeVariant {
  type: "indica" | "hybrid" | "sativa"
  thc: number
  terps: number
  effects: string[]
  topTerpenes: { name: string; percentage: string }[]
  price: number
}

export const rsoProducts = [
  {
    id: "rso-syringe",
    slug: "syringe",
    name: "RSO Syringe (Full Treatment)",
    image: "/images/rso-syringe.jpg",
    iconType: "syringe" as const,
    basePrice: 33,
    unit: "syringe (1g)",
    unitContent: "1000mg per syringe",
    fullTreatmentPrice: 1485,
    variants: [
      {
        type: "indica" as const,
        thc: 72,
        terps: 3.09,
        effects: ["Sleepy", "Calm", "Relaxed", "Happy"],
        topTerpenes: [
          { name: "Beta-Caryophyllene", percentage: "1.08% / 3.09%" },
          { name: "Linalool", percentage: "0.488% / 3.09%" },
          { name: "Alpha-Humulene", percentage: "0.370% / 3.09%" },
        ],
        price: 33,
      },
      {
        type: "hybrid" as const,
        thc: 74,
        terps: 2.9,
        effects: ["Creative", "Relaxed", "Happy", "Clear Mind"],
        topTerpenes: [
          { name: "Beta-Caryophyllene", percentage: "1.28% / 2.90%" },
          { name: "Alpha-Humulene", percentage: "0.389% / 2.90%" },
          { name: "Linalool", percentage: "0.354% / 2.90%" },
        ],
        price: 33,
      },
      {
        type: "sativa" as const,
        thc: 73,
        terps: 1.33,
        effects: ["Focused", "Happy", "Clear Mind", "Uplifted"],
        topTerpenes: [
          { name: "Beta-Caryophyllene", percentage: "0.553% / 1.33%" },
          { name: "Alpha-Humulene", percentage: "0.179% / 1.33%" },
          { name: "Alpha-Bisabolol", percentage: "0.154% / 1.33%" },
        ],
        price: 33,
      },
    ] as SyringeVariant[],
    pricingTiers: [
      { quantity: 1, unitPrice: 33.0, discount: 0, totalPrice: 33.0 },
      { quantity: 5, unitPrice: 31.35, discount: 5, totalPrice: 156.75 },
      { quantity: 10, unitPrice: 29.7, discount: 10, totalPrice: 297.0 },
      { quantity: 20, unitPrice: 28.05, discount: 15, totalPrice: 561.0 },
      { quantity: 30, unitPrice: 26.4, discount: 20, totalPrice: 792.0 },
      { quantity: 60, unitPrice: 23.1, discount: 30, totalPrice: 1485.0 },
    ] as PricingTier[],
    dosageGuide: [
      {
        level: "Week 1-2",
        dose: "Rice grain size (5-10mg)",
        frequency: "3 times daily",
        notes: "Build tolerance slowly",
      },
      {
        level: "Week 3-4",
        dose: "Half rice grain to rice grain",
        frequency: "3 times daily",
        notes: "Double dose every 4 days",
      },
      { level: "Week 5-8", dose: "Increase gradually", frequency: "3 times daily", notes: "Work up to 1g per day" },
      { level: "Full Protocol", dose: "1g daily", frequency: "Divided into 3 doses", notes: "60g total over 90 days" },
    ] as DosageGuide[],
    shortDesc:
      "Premium RSO packaged in syringes for easy dispensing and precise micro-dosing. Not for injection - simply for measuring and applying oil. This is the classic RSO format favored by Rick Simpson himself, allowing for versatile application methods including oral, sublingual, and topical use. Choose from Indica (72% THC, 3.09% Terps) for relaxation, Hybrid (74% THC, 2.9% Terps) for balanced effects, or Sativa (73% THC, 1.33% Terps) for uplifting energy. The full treatment package ($1,500) provides a complete 60-gram protocol for the traditional Rick Simpson treatment regimen.",
    whatItIs:
      "Premium RSO packaged in syringes for easy dispensing and precise micro-dosing. Not for injection - simply for measuring and applying oil. This is the classic RSO format favored by Rick Simpson himself, allowing for versatile application methods including oral, sublingual, and topical use. Choose from Indica (72% THC, 3.09% Terps) for relaxation, Hybrid (74% THC, 2.9% Terps) for balanced effects, or Sativa (73% THC, 1.33% Terps) for uplifting energy. The full treatment package ($1,500) provides a complete 60-gram protocol for the traditional Rick Simpson treatment regimen.",
    uses: [
      "Direct oral consumption",
      "Topical application for localized pain",
      "Adding to food or drinks",
      "Precise dosing for medical regimens",
    ],
    effects: [
      "Potent, full-spectrum cannabis effects",
      "Strong relief lasting 6-8 hours",
      "Variety of strain-specific effects",
    ],
    howToUse: [
      "Dispense a rice-grain-sized amount onto food or under the tongue",
      "Apply topically to sore joints or muscles",
      "Store syringe upright in a cool, dark place",
      "Clean tip after each use",
      "Each syringe delivers 1000mg (1g) of RSO",
    ],
    userScenarios: [
      "Angela, 40, migraine sufferer: Uses a rice-grain-sized Hybrid dose sublingually for balanced relief",
      "David, 65, with joint pain: Applies Indica oil topically to sore knees for deep relaxation",
    ],
    safetyNotes: [
      "Do not inject - syringes are for dispensing only",
      "Measure carefully with rice grain sizing to avoid overdosing",
      "Keep out of reach of children and pets",
      "Start with smallest dose possible (5-10mg)",
      "Made with independently tested, indoor-grown flower",
    ],
    storageTips: [
      "Store syringe upright in a cool, dark place",
      "Clean the tip after each use",
      "Avoid exposure to air to maintain freshness",
      "Keep refrigerated for extended storage (up to 2 years)",
      "Backed by Trulieve's commitment to quality",
    ],
    additionalInfo: [
      "Complete 60-gram treatment protocol available ($1,500)",
      "Treatment duration varies based on individual condition and response",
      "Graduated syringe markings for precise dosing",
      "Traditional Rick Simpson method extraction",
      "Three strain options: Indica, Hybrid, Sativa",
      "Highest concentration available (100mg per dose)",
      "Each syringe contains 1000mg (1g) of RSO",
      "Full-spectrum potency preserves cannabinoids and terpenes",
      "BONUS: Get 1 month FREE RSO oil with every 90-day treatment package!",
      "Certificate of Analysis (COA) available for verification",
    ],
  },
  {
    id: "rso-tincture",
    slug: "tincture",
    name: "RSO Tincture (4200mg)",
    image: "/images/rso-tincture.webp",
    iconType: "droplets" as const,
    basePrice: 60,
    unit: "bottle",
    unitContent: "4200mg cannabinoids per bottle",
    flavorVariants: [],
    pricingTiers: [
      { quantity: 1, unitPrice: 60.0, discount: 0, totalPrice: 60.0 },
      { quantity: 5, unitPrice: 57.0, discount: 5, totalPrice: 285.0 },
      { quantity: 10, unitPrice: 54.0, discount: 10, totalPrice: 540.0 },
      { quantity: 20, unitPrice: 51.0, discount: 15, totalPrice: 1020.0 },
      { quantity: 30, unitPrice: 48.0, discount: 20, totalPrice: 1440.0 },
      { quantity: 60, unitPrice: 42.0, discount: 30, totalPrice: 2520.0 },
    ] as PricingTier[],
    dosageGuide: [
      {
        level: "Beginner",
        dose: "1-2 drops (1-2mg)",
        frequency: "Once daily",
        notes: "Start low, assess tolerance for 3-5 days",
      },
      {
        level: "Intermediate",
        dose: "3-5 drops (3-5mg)",
        frequency: "1-2 times daily",
        notes: "Increase gradually over 2 weeks",
      },
      {
        level: "Experienced",
        dose: "6-10 drops (6-10mg)",
        frequency: "2-3 times daily",
        notes: "Adjust based on symptom relief",
      },
      {
        level: "Therapeutic",
        dose: "10-20 drops (10-20mg)",
        frequency: "As directed",
        notes: "Consult healthcare provider",
      },
    ] as DosageGuide[],
    shortDesc:
      "Premium RSO tincture with 4200mg cannabinoids per bottle. Precise dropper dosing for sublingual or oral consumption.",
    whatItIs:
      "Premium RSO tincture delivers 4200mg of full-spectrum cannabinoids per bottle with precise dropper dosing. Gently prepared to preserve the full-spectrum essence of the plant, combining therapeutic cannabinoids for effective daily wellness management. Fast absorption when taken sublingually or mixed with beverages.",
    uses: ["Chronic pain management", "Anxiety and stress relief", "Sleep support", "Appetite stimulation"],
    effects: [
      "Onset when swallowed (30-90 minutes)",
      "Faster onset when taken sublingually (15-30 minutes)",
      "Long-lasting relief (4-6 hours)",
      "Full-spectrum cannabis effects",
    ],
    howToUse: [
      "Place drops under the tongue for rapid sublingual absorption",
      "Hold for 60-90 seconds before swallowing",
      "Mix into beverages for more pleasant consumption",
      "Add to food or smoothies for discreet dosing",
      "Start with 1-2 drops and increase gradually",
    ],
    userScenarios: [
      "Maria, 45, with chronic insomnia: Uses RSO tincture before bed for calming sleep onset with consistent dosing",
      "James, 60, arthritis patient: Adds RSO tincture to morning tea for steady daytime relief",
    ],
    safetyNotes: [
      "Begin with 1-2 drops; tinctures are potent",
      "Avoid alcohol when using tinctures",
      "Consult a doctor if taking blood pressure or antidepressant medications",
      "Wait at least 2 hours before driving or operating machinery",
      "Keep away from children",
    ],
    storageTips: [
      "Keep in dark glass bottle away from sunlight",
      "Store in a cool, dry place",
      "Shake gently before use",
      "Keep out of reach of children",
      "Tinctures last 2-3 years when stored properly",
    ],
    additionalInfo: [
      "4200mg cannabinoids per bottle",
      "Precise dropper included for exact dosing",
      "Full-spectrum cannabinoid profile for enhanced entourage effect",
      "Third-party lab tested for potency and purity",
      "Made from organically grown cannabis",
      "Sublingual absorption is faster and more efficient than oral",
    ],
  },
  {
    id: "rso-capsules",
    slug: "capsules",
    name: "RSO Capsules (6000mg)",
    image: "/images/rso-capsules.webp",
    iconType: "pill" as const,
    basePrice: 40,
    unit: "30-count pack",
    unitContent: "6000mg per 30-pack (200mg per capsule)",
    strainVariants: [
      { strain: "Indica", thc: 72, effects: ["Sleepy", "Calm", "Relaxed", "Happy"] },
      { strain: "Hybrid", thc: 74, effects: ["Creative", "Relaxed", "Happy", "Clear Mind"] },
      { strain: "Sativa", thc: 73, effects: ["Focused", "Happy", "Clear Mind", "Uplifted"] },
    ],
    pricingTiers: [
      { quantity: 1, unitPrice: 40.0, discount: 0, totalPrice: 40.0 },
      { quantity: 5, unitPrice: 38.0, discount: 5, totalPrice: 190.0 },
      { quantity: 10, unitPrice: 36.0, discount: 10, totalPrice: 360.0 },
      { quantity: 20, unitPrice: 34.0, discount: 15, totalPrice: 680.0 },
      { quantity: 30, unitPrice: 32.0, discount: 20, totalPrice: 960.0 },
      { quantity: 60, unitPrice: 28.0, discount: 30, totalPrice: 1680.0 },
    ] as PricingTier[],
    dosageGuide: [
      {
        level: "Beginner",
        dose: "1/2 capsule (25mg)",
        frequency: "Once daily",
        notes: "Take with food for better absorption",
      },
      {
        level: "Intermediate",
        dose: "1 capsule (50mg)",
        frequency: "Once daily",
        notes: "Take in evening for full effects",
      },
      {
        level: "Experienced",
        dose: "1-2 capsules (50-100mg)",
        frequency: "1-2 times daily",
        notes: "Space doses 6-8 hours apart",
      },
      {
        level: "Therapeutic",
        dose: "2-3 capsules (100-150mg)",
        frequency: "As directed",
        notes: "Higher doses under medical supervision",
      },
    ] as DosageGuide[],
    shortDesc:
      "Precise 50mg RSO capsules in Indica, Hybrid, and Sativa strains. 1500mg total per 30-count pack for consistent daily relief.",
    whatItIs:
      "Premium RSO capsules deliver precise, consistent 50mg doses of Rick Simpson Oil in easy-to-swallow softgel format. Each 30-count pack provides 1500mg total cannabinoids. Choose from three strain-specific varieties: Indica (72% THC) for deep relaxation and sleep support, Hybrid (74% THC) for balanced creative and relaxed effects, or Sativa (73% THC) for daytime focus and uplifted energy. Perfect for those who prefer a no-fuss, tasteless, and discreet consumption method with pre-measured doses.",
    uses: ["Neuropathic pain", "Cancer support (nausea, appetite loss)", "Sleep disorders", "Anxiety and depression"],
    effects: [
      "Delayed onset (45-90 minutes)",
      "Long duration (6-8 hours)",
      "Strong, full-body relief",
      "Strain-specific effects",
    ],
    howToUse: [
      "Swallow with water, preferably after a meal",
      "Begin with the lowest available dose (1/2 capsule = 25mg)",
      "Track effects in a journal to find optimal dosage",
      "Do not exceed recommended dosage",
      "Effects take 45-90 minutes to appear",
    ],
    userScenarios: [
      "Linda, 52, cancer patient: Uses Indica capsules to manage nausea during chemotherapy with calming, relaxing effects",
      "Tom, 35, office worker: Takes Sativa capsule in the morning for long-lasting focus, happiness, and uplifted energy",
    ],
    safetyNotes: [
      "Capsules take 45-90 minutes to activate; avoid redosing too quickly",
      "Never drive or operate machinery after consumption",
      "Monitor tolerance with daily use",
      "Effects can last 6-8 hours",
      "Take with food to improve absorption",
    ],
    storageTips: [
      "Store capsules in original blister pack or bottle",
      "Keep away from heat and moisture",
      "Refrigeration extends shelf life and maintains quality",
      "Check expiration date regularly",
      "Store in cool, dry place away from light",
    ],
    additionalInfo: [
      "Pre-measured 50mg doses eliminate guesswork",
      "Three strain options with distinct effects: Indica (relaxation), Hybrid (balance), Sativa (energy)",
      "No cannabis taste or smell",
      "Easy to travel with discreetly",
      "Consistent potency in every capsule",
      "Made with independently tested, indoor-grown flower",
      "30 capsules per pack (1500mg total)",
      "1-2 hour delayed onset, long-lasting effects",
    ],
  },
  {
    id: "rso-gummies",
    slug: "gummies",
    name: "RSO Gummies (4200mg)",
    image: "/images/rso-gummies.webp",
    iconType: "cookie" as const,
    basePrice: 35,
    unit: "pack",
    unitContent: "4200mg total cannabinoids per pack (30 gummies)",
    strainVariants: [
      { strain: "Indica", thc: 72, effects: ["Sleepy", "Calm", "Relaxed", "Happy"] },
      { strain: "Hybrid", thc: 74, effects: ["Creative", "Relaxed", "Happy", "Clear Mind"] },
      { strain: "Sativa", thc: 73, effects: ["Focused", "Happy", "Clear Mind", "Uplifted"] },
    ],
    pricingTiers: [
      { quantity: 1, unitPrice: 35.0, discount: 0, totalPrice: 35.0 },
      { quantity: 5, unitPrice: 33.25, discount: 5, totalPrice: 166.25 },
      { quantity: 10, unitPrice: 31.5, discount: 10, totalPrice: 315.0 },
      { quantity: 20, unitPrice: 29.75, discount: 15, totalPrice: 595.0 },
      { quantity: 30, unitPrice: 28.0, discount: 20, totalPrice: 840.0 },
      { quantity: 60, unitPrice: 24.5, discount: 30, totalPrice: 1470.0 },
    ] as PricingTier[],
    dosageGuide: [
      {
        level: "Beginner",
        dose: "1/2 gummy (70mg)",
        frequency: "Once daily",
        notes: "Take with food for better absorption",
      },
      {
        level: "Intermediate",
        dose: "1 gummy (140mg)",
        frequency: "Once daily",
        notes: "Take in evening for full effects",
      },
      {
        level: "Experienced",
        dose: "1-2 gummies (140-280mg)",
        frequency: "1-2 times daily",
        notes: "Space doses 6-8 hours apart",
      },
      {
        level: "Therapeutic",
        dose: "2-3 gummies (280-420mg)",
        frequency: "As directed",
        notes: "Higher doses under medical supervision",
      },
    ] as DosageGuide[],
    shortDesc: "Delicious RSO-infused gummies with 140mg per gummy. 30-pack for consistent daily relief.",
    whatItIs:
      "Premium RSO gummies deliver 140mg of Rick Simpson Oil per gummy in an easy-to-consume format. Each 30-gummy pack provides 4200mg total cannabinoids. Choose from Indica, Hybrid, or Sativa strains for customized effects. Perfect for those who prefer a flavorful, discreet consumption method with pre-measured doses.",
    uses: ["Pain relief", "Stress reduction", "Sleep enhancement", "Appetite stimulation"],
    effects: ["Onset in 60-90 minutes", "Long duration (6-8 hours)", "Strong full-body relief", "Strain-specific effects"],
    howToUse: [
      "Chew thoroughly before swallowing",
      "Begin with half a gummy (70mg) for first-time users",
      "Take with or without food",
      "Track effects in a journal to find optimal dosage",
    ],
    userScenarios: [
      "Sarah, 48, with chronic pain: Enjoys Indica gummies in the evening for deep relief and better sleep",
      "Michael, 42, office worker: Takes Sativa gummy in the morning for long-lasting focus and energy",
    ],
    safetyNotes: [
      "Gummies take 60-90 minutes to activate; avoid redosing too quickly",
      "Never drive or operate machinery after consumption",
      "Monitor tolerance with daily use",
      "Effects can last 6-8 hours",
      "Keep away from children due to attractive appearance",
    ],
    storageTips: [
      "Store in original container with lid",
      "Keep away from heat and moisture",
      "Refrigeration extends shelf life",
      "Check expiration date regularly",
      "Store in cool, dry place away from light",
    ],
    additionalInfo: [
      "Pre-measured 140mg doses per gummy",
      "Three strain options: Indica, Hybrid, Sativa",
      "Delicious, discreet consumption method",
      "Easy to portion and travel with",
      "Consistent potency in every gummy",
      "Made with full-spectrum RSO",
      "30 gummies per pack (4200mg total)",
      "1-2 hour delayed onset, long-lasting effects",
    ],
  },
  {
    id: "rso-suppositories",
    slug: "suppositories",
    name: "RSO Suppositories",
    image: "/images/rso-suppository.jpg",
    iconType: "circle-dot" as const,
    basePrice: 35,
    unit: "pack",
    unitContent: "1000mg per pack (10 x 100mg THC + 25mg CBD suppositories)",
    pricingTiers: [
      { quantity: 1, unitPrice: 35.0, discount: 0, totalPrice: 35.0 },
      { quantity: 5, unitPrice: 33.25, discount: 5, totalPrice: 166.25 },
      { quantity: 10, unitPrice: 31.5, discount: 10, totalPrice: 315.0 },
      { quantity: 20, unitPrice: 29.75, discount: 15, totalPrice: 595.0 },
      { quantity: 30, unitPrice: 28.0, discount: 20, totalPrice: 840.0 },
      { quantity: 60, unitPrice: 24.5, discount: 30, totalPrice: 1470.0 },
    ] as PricingTier[],
    dosageGuide: [
      {
        level: "Beginner",
        dose: "1 suppository (100mg THC + 25mg CBD)",
        frequency: "Once daily",
        notes: "Insert at bedtime for best results",
      },
      {
        level: "Intermediate",
        dose: "1 suppository",
        frequency: "1-2 times daily",
        notes: "Space 8-12 hours apart (morning and evening)",
      },
      {
        level: "Experienced",
        dose: "1-2 suppositories",
        frequency: "2 times daily",
        notes: "Morning and evening with 12 hours between doses",
      },
      {
        level: "Therapeutic",
        dose: "As directed",
        frequency: "Per medical advice",
        notes: "Higher doses under professional supervision",
      },
    ] as DosageGuide[],
    shortDesc:
      "RSO suppositories: 100mg THC + 25mg CBD each. 10-pack per tin. Rapid absorption without psychoactive intensity.",
    whatItIs:
      "RSO suppositories deliver 100mg THC + 25mg CBD per suppository for rapid, targeted relief. Each tin contains 10 suppositories (1000mg total THC + 250mg CBD). This delivery method bypasses digestion for faster absorption and reduced psychoactive effects, making it ideal for patients who cannot take oral medications or need localized treatment in the pelvic region. The CBD-to-THC ratio provides therapeutic benefits with smoother effects.",
    uses: [
      "Severe pain management",
      "Cancer therapy support and symptom relief",
      "Gastrointestinal conditions",
      "Patients unable to swallow capsules or tolerate oral edibles",
      "Localized pelvic pain and inflammation",
    ],
    effects: [
      "Rapid absorption (15-30 minutes)",
      "Strong systemic and localized relief",
      "Often less psychoactive than oral use due to CBD balance",
      "Effects last 4-6 hours",
    ],
    howToUse: [
      "Insert gently into rectum or vagina",
      "Lie down for 15-20 minutes to allow proper absorption",
      "Follow medical guidance for dosing schedule",
      "Use at bedtime for optimal comfort and effect",
      "Each suppository contains 100mg THC + 25mg CBD",
    ],
    userScenarios: [
      "Helen, 70, with GI issues: Uses suppositories for relief without oral ingestion or digestive upset",
      "Paul, 55, post-surgery: Finds rectal suppositories effective for pain management without strong psychoactive effects",
    ],
    safetyNotes: [
      "Insert gently; consult a healthcare provider before use",
      "Hygiene is critical - wash hands before and after use",
      "Effects may be systemic but less psychoactive due to CBD content",
      "Store properly in refrigerator to maintain firmness",
      "Do not use if suppository is melted or compromised",
    ],
    storageTips: [
      "Keep refrigerated to maintain firmness and potency",
      "Store in sealed original tin packaging",
      "Avoid exposure to heat and direct sunlight",
      "Use within expiration date for maximum efficacy",
      "Temperature should remain below 70°F for storage",
    ],
    additionalInfo: [
      "Bypasses digestive system for rapid absorption",
      "100mg THC + 25mg CBD balanced ratio per suppository",
      "10 suppositories per tin (1000mg total THC + 250mg CBD)",
      "Ideal for patients with GI absorption issues",
      "Reduced psychoactive effects due to CBD inclusion",
      "Faster onset (15-30 minutes) vs oral (45-90 minutes)",
      "Strong systemic and localized relief",
      "Backed by Trulieve's commitment to quality",
      "Third-party lab tested for safety and potency",
    ],
  },
]
