import type { Metadata } from "next"
import { AdminOrdersClient } from "./admin-orders-client"

export const metadata: Metadata = {
  title: "Admin Orders Dashboard | Natural Cannabis Oil",
  description: "Admin dashboard for managing orders.",
  robots: {
    index: false,
    follow: false,
  },
}

export default function AdminOrdersPage() {
  return <AdminOrdersClient />
}
