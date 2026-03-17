import { sanitizeString, sanitizeObject } from "./sanitize-string"

export function sanitizeSchema<T extends Record<string, any>>(schema: T): T {
  return sanitizeObject(schema)
}

export function sanitizeProductData(product: any) {
  return {
    ...product,
    whatItIs: sanitizeString(product.whatItIs),
    description: sanitizeString(product.description),
    uses: product.uses?.map((use: string) => sanitizeString(use)) || [],
    effects: product.effects?.map((effect: string) => sanitizeString(effect)) || [],
    howToUse: product.howToUse?.map((step: string) => sanitizeString(step)) || [],
    userScenarios: product.userScenarios?.map((scenario: string) => sanitizeString(scenario)) || [],
    safetyNotes: product.safetyNotes?.map((note: string) => sanitizeString(note)) || [],
    storageTips: product.storageTips?.map((tip: string) => sanitizeString(tip)) || [],
    additionalInfo: product.additionalInfo?.map((info: string) => sanitizeString(info)) || [],
    dosageGuide: product.dosageGuide?.map((guide: any) => sanitizeObject(guide)) || [],
  }
}
