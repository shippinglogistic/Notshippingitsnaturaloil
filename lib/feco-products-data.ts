import { sanitizeObject } from "@/lib/sanitize-string"

export interface FECOProduct {
  id: string
  slug: string
  name: string
  description: string
  fullDescription: string
  potency: string
  thcCbd: string
  image: string
  category: string
  iconType: string
  uses: string[]
  conditions: string[]
  howToUse: string[]
  dosageGuide: string
  safetyNotes: string[]
  additionalInfo: string[]
  basePrice: number
  volumes: Array<{
    label: string
    grams: number
    price: number
  }>
  strains: Array<{
    name: string
    description: string
  }>
}

export const fecoProducts: FECOProduct[] = [
  {
    id: "high-test-cbd-feco",
    slug: "high-test-cbd-feco",
    name: "High Test CBD FECO",
    description: "Ultra-concentrated solvent-free CBD for aggressive therapeutic use",
    fullDescription:
      "High Test CBD FECO is a highly concentrated, solvent-free full extract cannabis oil made exclusively from premium cannabis flowers. Emphasizes minimal plant material for ultra-high potency. Originally developed for severe pain and inflammation, it's positioned for aggressive therapeutic use including late-stage cancer protocols (RSO-style), direct tumor application, and high-dose needs. The care team provides customized dosing support. Third-party lab-tested with zero additives.",
    potency: "Ultra-High CBD Concentration (Solvent-Free)",
    thcCbd: "Pure CBD-dominant / Minimal THC",
    image: "/images/high-test-cbd-feco.webp",
    category: "Full Extract Oil",
    iconType: "syringe",
    basePrice: 35,
    uses: [
      "Late-stage cancer and direct tumor application (e.g., skin cancer)",
      "Severe/chronic pain and inflammation",
      "High-dose protocols without strong psychoactivity (via suppositories)",
      "Autism spectrum, colitis, Crohn's, depression, fibromyalgia, multiple sclerosis, Parkinson's, PTSD, rheumatoid arthritis",
    ],
    conditions: [
      "Advanced Cancer",
      "Severe Pain",
      "Inflammation",
      "Autism Spectrum",
      "Neurological Conditions",
      "Autoimmune Disorders",
    ],
    howToUse: [
      "Versatile for ingestion, suppositories, topicals, or capsules",
      "High strength allows stretching supply",
      "Can be used at 2-4 grams/day in some protocols",
      "Start with personalized guidance from care team",
    ],
    dosageGuide:
      "Flexible application methods allow for various dosing strategies. High-dose protocols may use 2-4 grams/day. Consult healthcare provider for personalized guidance.",
    safetyNotes: [
      "Keep out of reach of children and pets",
      "Store in cool, dark place below 70 degrees",
      "Consult healthcare provider before use",
      "Not suitable for pregnancy or breastfeeding",
      "For educational purposes only; not a substitute for medical advice",
    ],
    additionalInfo: [
      "100% positive customer feedback (1 review)",
      "Solvent-free extraction removing excess chlorophyll and plant compounds",
      "Purified, potent oil for maximum absorption and consistent dosing",
      "Third-party lab tested for purity and potency",
      "Zero additives - pure cannabis oil",
      "Natural Cannabis Oil - California-based collective",
      "Must be 21+ to purchase",
    ],
    volumes: [
      { label: "1g", grams: 1, price: 35 },
      { label: "5g", grams: 5, price: 166.25 },
      { label: "10g", grams: 10, price: 325.5 },
      { label: "20g", grams: 20, price: 630 },
      { label: "40g", grams: 40, price: 1218 },
      { label: "60g", grams: 60, price: 1764 },
      { label: "120g", grams: 120, price: 2800 },
    ],
    strains: [{ name: "CBD-Dominant", description: "Ultra-high CBD concentration" }],
  },
  {
    id: "1-3-feco-cbd-dom",
    slug: "1-3-feco-cbd-dom",
    name: "1:3 FECO CBD DOM",
    description: "CBD-dominant oil for daytime relief without psychoactive effects",
    fullDescription:
      "1:3 FECO CBD DOM is a CBD-dominant full extract cannabis oil made exclusively from flower. Primarily uses the ACDC strain blended with others for therapeutic effects focused on inflammation and wellness without strong psychoactive impact. Ideal for daytime use, allowing patients to manage symptoms while staying productive. Powerful inflammation reduction and mild to moderate pain relief with minimal narcotic/psychoactive effects.",
    potency: "High CBD, Low THC (1:3 ratio)",
    thcCbd: "1 part THC / 3 parts CBD",
    image: "/images/1-3-feco-cbd-dom.webp",
    category: "Full Extract Oil",
    iconType: "syringe",
    basePrice: 35,
    uses: [
      "Autoimmune and inflammatory condition management",
      "Early-stage critical illness support",
      "Preventative wellness",
      "Mild to moderate pain management",
      "Daytime productivity support",
    ],
    conditions: [
      "Autoimmune Disorders",
      "Inflammation",
      "Arthritis",
      "Crohn's Disease",
      "Multiple Sclerosis",
      "Fibromyalgia",
      "Lyme Disease",
      "Depression",
    ],
    howToUse: [
      "Excellent for daytime relief without impairment",
      "Take orally or sublingually",
      "Can be mixed into beverages",
      "Consistent daily dosing for best results",
    ],
    dosageGuide:
      "Daily dosing typically ranges from 1 to 3 grams depending on condition and tolerance. The low THC content makes it suitable for daytime use without significant psychoactive effects.",
    safetyNotes: [
      "Keep out of reach of children and pets",
      "Store in cool, dark place below 70 degrees",
      "May interact with certain medications",
      "Consult healthcare provider if pregnant or nursing",
      "For educational purposes only; not a substitute for medical advice",
    ],
    additionalInfo: [
      "100% positive customer feedback (1 review) - benefits from similar 3:1 product for sleep",
      "Flower-only extract from ACDC and other CBD-dominant strains",
      "Full-spectrum therapeutic effects",
      "Ideal for daytime use with minimal psychoactive effects",
      "Natural Cannabis Oil - California-based collective",
      "Must be 21+ to purchase",
    ],
    volumes: [
      { label: "1g", grams: 1, price: 35 },
      { label: "5g", grams: 5, price: 166.25 },
      { label: "10g", grams: 10, price: 325.5 },
      { label: "20g", grams: 20, price: 630 },
      { label: "40g", grams: 40, price: 1218 },
      { label: "60g", grams: 60, price: 1764 },
      { label: "120g", grams: 120, price: 2800 },
    ],
    strains: [{ name: "CBD-Dominant", description: "ACDC and other high-CBD strains" }],
  },
  {
    id: "cbd-feco-standard",
    slug: "cbd-feco-standard",
    name: "CBD FECO Standard",
    description: "Pure CBD extraction for severe pain, inflammation, and healing",
    fullDescription:
      "CBD FECO Standard is a flower-only full extract cannabis oil focused on high CBD (Cannabidiol) compounds. Originally developed for severe pain and inflammation, this ultra-potent oil uses CBD-dominant strains with proven healing effects in demanding situations. Derived exclusively from the ACDC strain. Particularly noted for helping stall or reverse some end-stage cancers. Full-spectrum extraction preserves all beneficial plant compounds.",
    potency: "High CBD, Ultra-Low THC",
    thcCbd: "CBD-Dominant / Minimal THC",
    image: "/images/cbd-feco-standard.webp",
    category: "Full Extract Oil",
    iconType: "syringe",
    basePrice: 35,
    uses: [
      "Severe pain and inflammation",
      "End-stage cancer symptom management (stalling/reversing progression)",
      "Chronic pain and insomnia",
      "Pet use (e.g., dogs for pain, inflammation, discomfort from injuries)",
      "Topical application for skin issues (e.g., moles)",
    ],
    conditions: [
      "Cancer",
      "Chronic Pain",
      "Inflammation",
      "Insomnia",
      "Autoimmune Disorders",
      "Arthritis",
      "Skin Conditions",
    ],
    howToUse: [
      "Take orally, sublingually, or topically",
      "Can be used for systemic effects (pain, insomnia) or localized issues",
      "Start with small doses (e.g., pin-drop size for pets)",
      "Suitable for emergency kits addressing inflammation and medical conditions",
    ],
    dosageGuide:
      "Versatile for oral or topical application. Start with small doses and increase as needed. Suitable for both human and pet use.",
    safetyNotes: [
      "Keep out of reach of children and pets (unless using for pet health)",
      "Store in cool, dark place below 70 degrees",
      "May interact with certain medications",
      "Not suitable for pregnancy or breastfeeding",
      "For educational purposes only; not a substitute for medical advice",
    ],
    additionalInfo: [
      "100% positive customer feedback (4 reviews)",
      "Users report: topical use success (itchy mole disappearance), chronic back pain relief, insomnia improvement without grogginess, pet pain/inflammation reduction",
      "Derived from ACDC and high-CBD cannabis strains",
      "Solvent-free, flower-only extraction",
      "Third-party lab tested for purity and potency",
      "Natural Cannabis Oil - California-based collective",
      "Must be 21+ to purchase",
    ],
    volumes: [
      { label: "1g", grams: 1, price: 35 },
      { label: "5g", grams: 5, price: 166.25 },
      { label: "10g", grams: 10, price: 325.5 },
      { label: "20g", grams: 20, price: 630 },
      { label: "40g", grams: 40, price: 1218 },
      { label: "60g", grams: 60, price: 1764 },
      { label: "120g", grams: 120, price: 2800 },
    ],
    strains: [{ name: "ACDC", description: "High-CBD cannabis strain" }],
  },
  {
    id: "standard-thc-feco-syringe",
    slug: "standard-thc-feco-syringe",
    name: "Standard THC FECO Syringe",
    description: "Full-spectrum cannabis oil with chlorophyll for maximum healing",
    fullDescription:
      "Standard THC FECO Syringe is a full-spectrum cannabis oil made from organic California cannabis. Captures maximum cannabinoids, terpenes, flavor, and effectiveness through specialized extraction. Goes through 5 quick rinses with sub-zero ethanol and liquid nitrogen, followed by overnight soaking in ethanol to extract additional plant material (chlorophyll and lipids) for enhanced anti-cancer and healing properties. Results in a darker, almost black oil with 600-650mg THC per gram.",
    potency: "High THC with Full-Spectrum (600-650mg THC/g)",
    thcCbd: "60-65% THC / Full Spectrum",
    image: "/images/standard-thc-feco-syringe.webp",
    category: "Full Extract Oil",
    iconType: "syringe",
    basePrice: 35,
    uses: [
      "Cancer treatment",
      "Inflammatory disease management",
      "Extreme/chronic pain management and relief",
      "Whole-molecule medical-grade protocols",
    ],
    conditions: ["Cancer", "Inflammatory Diseases", "Extreme Chronic Pain", "End-Stage Illness"],
    howToUse: [
      "Syringe format allows easy and precise oral or topical application",
      "Take orally or apply topically as needed",
      "Dosing is personalized - consult specialists",
      "Work with healthcare provider on protocols",
    ],
    dosageGuide:
      "Personalized dosing. Natural Cannabis Oil recommends consulting their specialists via phone or text for guidance on protocols.",
    safetyNotes: [
      "Keep out of reach of children and pets",
      "Store in cool, dark place below 70 degrees",
      "Do not drive or operate machinery",
      "Not suitable for pregnancy or breastfeeding",
      "For educational purposes only; not a substitute for medical advice",
    ],
    additionalInfo: [
      "100% positive customer feedback (1 review) - praised as excellent product for chronic pain",
      "Dark color indicates high chlorophyll and lipid content",
      "Extended ethanol soaking pulls anti-cancer and healing compounds",
      "Organic California cannabis",
      "Natural Cannabis Oil - California-based collective",
      "Must be 21+ to purchase",
    ],
    volumes: [
      { label: "1g", grams: 1, price: 35 },
      { label: "5g", grams: 5, price: 166.25 },
      { label: "10g", grams: 10, price: 325.5 },
      { label: "20g", grams: 20, price: 630 },
      { label: "40g", grams: 40, price: 1218 },
      { label: "60g", grams: 60, price: 1764 },
      { label: "120g", grams: 120, price: 2800 },
    ],
    strains: [{ name: "Organic California", description: "Full-spectrum therapeutic blend" }],
  },
  {
    id: "1-1-thc-cbd-feco-oil",
    slug: "1-1-thc-cbd-feco-oil",
    name: "1:1 Indica THC/CBD FECO Oil",
    description: "Balanced THC/CBD blend for broad-spectrum symptom relief",
    fullDescription:
      "1:1 Indica THC/CBD FECO Oil is a balanced, flower-only oil with equal parts Indica THC and CBD. Designed for a broad range of diagnoses and symptoms, gently stimulating the body's endocannabinoid system. Combines high-CBD strains (18:1 or greater ratios like ACDC) with premium Indica strains selected based on patient success, purity, and potency from lab-tested flowers.",
    potency: "Balanced 1:1 THC/CBD Ratio",
    thcCbd: "1 part THC / 1 part CBD",
    image: "/images/1-1-thc-cbd-feco-oil.webp",
    category: "Full Extract Oil",
    iconType: "syringe",
    basePrice: 35,
    uses: [
      "Broad spectrum condition support",
      "Pain management",
      "Appetite stimulation (especially for cancer patients and pets)",
      "General wellness support via endocannabinoid system activation",
    ],
    conditions: ["Chronic Pain", "Appetite Loss", "Cancer Support", "General Wellness", "Pet Health"],
    howToUse: [
      "Take orally with food",
      "Suitable for daytime or evening use",
      "Can be applied topically",
      "Excellent for daytime relief - allows functionality",
    ],
    dosageGuide:
      "Personalized dosing recommended. The balanced THC and CBD combination provides therapeutic effects without overwhelming psychoactivity.",
    safetyNotes: [
      "Keep out of reach of children and pets",
      "Store in cool, dark place below 70 degrees",
      "May have mild psychoactive effects",
      "Not suitable for pregnancy or breastfeeding",
      "For educational purposes only; not a substitute for medical advice",
    ],
    additionalInfo: [
      "100% positive customer feedback (3 reviews)",
      "Customers highlight: excellent quality, purity, helpful service, and effectiveness for pain/appetite in humans and pets",
      "Lab-tested, whole-molecule cannabis oils",
      "Flower-only full-spectrum extract",
      "Third-party lab tested for purity and potency",
      "Natural Cannabis Oil - California-based collective",
      "Must be 21+ to purchase",
    ],
    volumes: [
      { label: "1g", grams: 1, price: 35 },
      { label: "5g", grams: 5, price: 166.25 },
      { label: "10g", grams: 10, price: 325.5 },
      { label: "20g", grams: 20, price: 630 },
      { label: "40g", grams: 40, price: 1218 },
      { label: "60g", grams: 60, price: 1764 },
      { label: "120g", grams: 120, price: 2800 },
    ],
    strains: [{ name: "Indica-dominant", description: "Relaxing, suitable for various times but leans sedative" }],
  },
  {
    id: "high-test-thc-feco",
    slug: "high-test-thc-feco",
    name: "High Test THC FECO",
    description: "Ultra-potent Indica THC oil with 700-800mg THC per gram",
    fullDescription:
      "High Test THC FECO is premium Indica THC Full Extract Cannabis Oil with exceptional potency. Made exclusively from Indica strains using specialized extraction with 5 quick rinses of sub-zero ethanol and liquid nitrogen. This yields a clearer, more viscous oil with minimal plant material and exceptionally high potency (700-800mg THC per gram). Designed for patients with very high THC tolerance, cancer treatment, extreme chronic pain, and infusing into edibles.",
    potency: "Ultra-High Potency (700-800mg THC/g)",
    thcCbd: "70-80% THC / Minimal CBD",
    image: "/images/high-test-thc-feco.webp",
    category: "Full Extract Oil",
    iconType: "syringe",
    basePrice: 35,
    uses: [
      "High-tolerance patient support",
      "Cancer treatment protocols",
      "Extreme/chronic pain management",
      "Recreational use",
      "Infusing into edibles (e.g., gummies)",
    ],
    conditions: ["Advanced Cancer", "Extreme Chronic Pain", "High THC Tolerance", "Severe Pain Syndromes"],
    howToUse: [
      "Take sublingually (under the tongue) for rapid absorption",
      "Can be infused into edibles",
      "Dosing should start low and be personalized",
      "Consult specialists or healthcare provider for guidance",
    ],
    dosageGuide:
      "For experienced users with high tolerance. Ultra-potent formulation requires careful dosing. Natural Cannabis Oil recommends consulting their specialists or a healthcare expert for personalized guidance.",
    safetyNotes: [
      "Keep out of reach of children and pets",
      "Store in cool, dark place below 70 degrees",
      "Do not drive or operate machinery",
      "Not suitable for pregnancy or breastfeeding",
      "For educational purposes only; not a substitute for medical advice",
    ],
    additionalInfo: [
      "67% positive customer feedback (12 reviews) - praised as life-changing for conditions like lupus pain",
      "17% neutral, 17% negative (some delivery/dosage feedback)",
      "Lab-tested flower extracts",
      "Indica-dominant only (sedative, relaxing effects ideal for nighttime)",
      "Natural Cannabis Oil - California-based collective",
      "Must be 21+ to purchase",
    ],
    volumes: [
      { label: "1g", grams: 1, price: 35 },
      { label: "5g", grams: 5, price: 166.25 },
      { label: "10g", grams: 10, price: 325.5 },
      { label: "20g", grams: 20, price: 630 },
      { label: "40g", grams: 40, price: 1218 },
      { label: "60g", grams: 60, price: 1764 },
      { label: "120g", grams: 120, price: 2800 },
    ],
    strains: [{ name: "Indica", description: "Sedative, relaxing effects ideal for nighttime" }],
  },
  {
    id: "3-1-feco-thc-dom",
    slug: "3-1-feco-thc-dom",
    name: "3:1 FECO THC DOM",
    description: "High-THC, full-spectrum cannabis oil with CBD blend for therapeutic use",
    fullDescription:
      "3:1 FECO THC DOM is a high-THC, full-spectrum cannabis oil blended with CBD for therapeutic use. Designed primarily for serious conditions like advanced cancer, chronic pain, and autoimmune disorders. Originally created for hospice patients to manage end-stage pain, it's now one of the most popular oils. Combines multiple THC-dominant strains with full-spectrum CBD to activate the endocannabinoid system. THC helps penetrate dense tissues, while CBD reduces inflammation, balances immune response, and supports recovery.",
    potency: "High THC (3:1 ratio)",
    thcCbd: "3 parts THC / 1 part CBD",
    image: "/images/3-1-feco-thc-dom.webp",
    category: "Full Extract Oil",
    iconType: "syringe",
    basePrice: 35,
    uses: [
      "Advanced cancer treatment (bone, brain, pancreas, glioblastoma)",
      "Autoimmune disorder management (lupus, Crohn's, shingles, Lyme)",
      "Chronic inflammation and severe pain",
      "Tumor support protocols",
    ],
    conditions: ["Advanced Cancer", "Autoimmune Disorders", "Chronic Pain", "Chronic Inflammation"],
    howToUse: [
      "Take orally or sublingually as directed by care team",
      "Can be applied topically (e.g., directly on tumors with Emu oil)",
      "Dosing is personalized - consult specialists for protocols",
      "Start low and build up gradually",
    ],
    dosageGuide:
      "Personalized dosing - Natural Cannabis Oil provides guidance via specialists. Starting low and building up over time is recommended. Treatment plans vary based on condition severity.",
    safetyNotes: [
      "Keep out of reach of children and pets",
      "Store in cool, dark place below 70 degrees",
      "Do not drive or operate machinery",
      "Not suitable for pregnancy or breastfeeding",
      "For educational purposes only; not a substitute for medical advice",
    ],
    additionalInfo: [
      "92% positive customer feedback (13 reviews, ~83% average rating)",
      "Users report benefits: reduced tumor size, better appetite/sleep, significant pain relief",
      "Lab-tested for purity and potency",
      "Natural Cannabis Oil - California-based collective",
      "FDA disclaimer: Products not FDA-evaluated and not intended to diagnose, treat, cure, or prevent disease",
      "Must be 21+ to purchase",
    ],
    volumes: [
      { label: "1g", grams: 1, price: 35 },
      { label: "5g", grams: 5, price: 166.25 },
      { label: "10g", grams: 10, price: 325.5 },
      { label: "20g", grams: 20, price: 630 },
      { label: "40g", grams: 40, price: 1218 },
      { label: "60g", grams: 60, price: 1764 },
      { label: "120g", grams: 120, price: 2800 },
    ],
    strains: [
      { name: "Indica-dominant", description: "For nighttime relief: sleep, calm, appetite" },
      { name: "Sativa-dominant", description: "For daytime: focus, mobility, productivity" },
    ],
  },
].map((product) => sanitizeObject(product) as FECOProduct)
