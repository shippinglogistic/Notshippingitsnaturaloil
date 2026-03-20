import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/admin-orders", "/api/", "/checkout"],
      },
    ],
    sitemap: "https://www.naturalcannabisoil.shop/sitemap.xml",
  }
}
