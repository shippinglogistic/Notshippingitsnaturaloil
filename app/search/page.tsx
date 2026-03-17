import type { Metadata } from "next"
import { SearchPageClient } from "./search-client"

export const metadata: Metadata = {
  title: "Search Products | Natural Cannabis Oil - Find RSO, FECO & More",
  description:
    "Search our premium cannabis oil products. Find RSO, FECO, tinctures, capsules, distillates, and edibles for your wellness needs. Filter by symptoms.",
  keywords: ["search cannabis oil", "find RSO oil", "FECO search", "cannabis products filter", "buy cannabis oil"],
  alternates: {
    canonical: "https://naturalcannabisoil.shop/search",
  },
}

export default function SearchPage() {
  return <SearchPageClient />
}
