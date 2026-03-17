"use client"

import type React from "react"
import { useEffect, useState } from "react"
import {
  Package,
  Clock,
  CheckCircle,
  Truck,
  XCircle,
  DollarSign,
  AlertCircle,
  ChevronDown,
  ChevronUp,
  RefreshCw,
  Mail,
  Phone,
  MapPin,
  CreditCard,
  Loader2,
  Send,
  Check,
  Settings,
  ExternalLink,
} from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { SupabaseOrder } from "@/lib/supabase/types"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

const orderStatusConfig: Record<string, { label: string; color: string; icon: React.ElementType }> = {
  pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800", icon: Clock },
  processing: { label: "Processing", color: "bg-blue-100 text-blue-800", icon: Package },
  shipped: { label: "Shipped", color: "bg-purple-100 text-purple-800", icon: Truck },
  delivered: { label: "Delivered", color: "bg-green-100 text-green-800", icon: CheckCircle },
  cancelled: { label: "Cancelled", color: "bg-red-100 text-red-800", icon: XCircle },
}

const paymentStatusConfig: Record<string, { label: string; color: string }> = {
  pending: { label: "Pending", color: "bg-yellow-100 text-yellow-800" },
  confirmed: { label: "Confirmed", color: "bg-green-100 text-green-800" },
  failed: { label: "Failed", color: "bg-red-100 text-red-800" },
}

function OrderCard({ order, onUpdate }: { order: SupabaseOrder; onUpdate: () => void }) {
  const [expanded, setExpanded] = useState(false)
  const [updating, setUpdating] = useState(false)
  const [trackingNumber, setTrackingNumber] = useState("")

  const statusConfig = orderStatusConfig[order.order_status] || orderStatusConfig.pending
  const paymentConfig = paymentStatusConfig[order.payment_status] || paymentStatusConfig.pending
  const StatusIcon = statusConfig.icon

  const updateOrderStatus = async (newStatus: string) => {
    setUpdating(true)
    try {
      const body: Record<string, string> = { order_status: newStatus }
      if (newStatus === "shipped" && trackingNumber) {
        body.tracking_number = trackingNumber
      }

      const response = await fetch(`/api/orders/${order.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      })

      if (response.ok) {
        onUpdate()
      } else {
        console.error("Failed to update order")
      }
    } catch (error) {
      console.error("Error updating order:", error)
    } finally {
      setUpdating(false)
    }
  }

  const updatePaymentStatus = async (newStatus: string) => {
    setUpdating(true)
    try {
      const response = await fetch(`/api/orders/${order.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ payment_status: newStatus }),
      })

      if (response.ok) {
        onUpdate()
      }
    } catch (error) {
      console.error("Error updating payment:", error)
    } finally {
      setUpdating(false)
    }
  }

  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-1">
            <CardTitle className="text-base font-mono text-xs">{order.id}</CardTitle>
            <CardDescription>
              {order.customer_first_name} {order.customer_last_name}
            </CardDescription>
          </div>
          <div className="flex items-center gap-2">
            <Badge className={statusConfig.color}>
              <StatusIcon className="h-3 w-3 mr-1" />
              {statusConfig.label}
            </Badge>
            <Badge className={paymentConfig.color}>
              <DollarSign className="h-3 w-3 mr-1" />
              {paymentConfig.label}
            </Badge>
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Total</span>
          <span className="font-semibold text-lg">${Number(order.grand_total).toFixed(2)}</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Items</span>
          <span>{order.items.reduce((sum, item) => sum + item.quantity, 0)} products</span>
        </div>

        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Created</span>
          <span>{new Date(order.created_at).toLocaleString()}</span>
        </div>

        <Button variant="ghost" size="sm" onClick={() => setExpanded(!expanded)} className="w-full">
          {expanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-2" />
              Hide Details
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-2" />
              Show Details
            </>
          )}
        </Button>

        {expanded && (
          <div className="space-y-6 pt-4 border-t">
            <div className="space-y-3 p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium text-sm">Update Order Status</h4>
              <div className="grid grid-cols-2 gap-2">
                <Select value={order.order_status} onValueChange={updateOrderStatus} disabled={updating}>
                  <SelectTrigger>
                    <SelectValue placeholder="Order Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="processing">Processing</SelectItem>
                    <SelectItem value="shipped">Shipped</SelectItem>
                    <SelectItem value="delivered">Delivered</SelectItem>
                    <SelectItem value="cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={order.payment_status} onValueChange={updatePaymentStatus} disabled={updating}>
                  <SelectTrigger>
                    <SelectValue placeholder="Payment Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pending">Pending</SelectItem>
                    <SelectItem value="confirmed">Confirmed</SelectItem>
                    <SelectItem value="failed">Failed</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Tracking Number Input */}
              <div className="space-y-2">
                <Label htmlFor={`tracking-${order.id}`} className="text-xs">
                  Tracking Number (for shipped orders)
                </Label>
                <div className="flex gap-2">
                  <Input
                    id={`tracking-${order.id}`}
                    placeholder="Enter tracking number..."
                    value={trackingNumber}
                    onChange={(e) => setTrackingNumber(e.target.value)}
                    className="text-sm"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    disabled={!trackingNumber || updating}
                    onClick={() => updateOrderStatus("shipped")}
                  >
                    {updating ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  </Button>
                </div>
              </div>

              {updating && (
                <p className="text-xs text-muted-foreground flex items-center gap-1">
                  <Loader2 className="h-3 w-3 animate-spin" />
                  Updating and sending notification email...
                </p>
              )}
            </div>

            {/* Customer Info */}
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Customer Information</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4" />
                  <a href={`mailto:${order.customer_email}`} className="hover:underline">
                    {order.customer_email}
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  <a href={`tel:${order.customer_phone}`} className="hover:underline">
                    {order.customer_phone}
                  </a>
                </div>
              </div>
            </div>

            {/* Shipping Info */}
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Shipping Address</h4>
              <div className="flex items-start gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
                <div>
                  <p>{order.shipping_address}</p>
                  <p>
                    {order.shipping_city}, {order.shipping_state} {order.shipping_zip}
                  </p>
                  <p>{order.shipping_country}</p>
                  <p className="mt-1 capitalize">
                    <Badge variant="outline">{order.shipping_method} shipping</Badge>
                  </p>
                </div>
              </div>
            </div>

            {/* Payment Info */}
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Payment</h4>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CreditCard className="h-4 w-4" />
                <span className="capitalize">{order.payment_method}</span>
              </div>
            </div>

            {/* Items */}
            <div className="space-y-2">
              <h4 className="font-medium text-sm">Order Items</h4>
              <div className="space-y-2">
                {order.items.map((item) => (
                  <div key={item.id} className="flex justify-between text-sm p-2 bg-muted/50 rounded">
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-1 pt-2 border-t text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${Number(order.subtotal).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shipping</span>
                  <span>${Number(order.shipping_fee).toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax</span>
                  <span>${Number(order.tax).toFixed(2)}</span>
                </div>
                <div className="flex justify-between font-semibold pt-1 border-t">
                  <span>Total</span>
                  <span>${Number(order.grand_total).toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

function ResendStatus() {
  const [status, setStatus] = useState<"loading" | "configured" | "not-configured">("loading")

  useEffect(() => {
    fetch("/api/email/status")
      .then((res) => res.json())
      .then((data) => {
        setStatus(data.configured ? "configured" : "not-configured")
      })
      .catch(() => setStatus("not-configured"))
  }, [])

  if (status === "loading") {
    return (
      <div className="mb-6 p-4 bg-muted border border-border rounded-lg">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Loader2 className="h-5 w-5 animate-spin" />
          <span>Checking email configuration...</span>
        </div>
      </div>
    )
  }

  if (status === "not-configured") {
    return (
      <div className="mb-6 p-4 bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-lg">
        <div className="flex items-center gap-2 text-yellow-800 dark:text-yellow-200">
          <Settings className="h-5 w-5" />
          <span className="font-medium">Email Notifications Not Configured</span>
        </div>
        <p className="text-sm text-yellow-700 dark:text-yellow-300 mt-1 mb-3">
          Add your Resend API key to enable automatic order notifications.
        </p>
        <div className="text-sm text-yellow-700 dark:text-yellow-300 space-y-1">
          <p>
            <strong>Required environment variables:</strong>
          </p>
          <code className="block bg-yellow-100 dark:bg-yellow-900 p-2 rounded text-xs">
            RESEND_API_KEY=your_resend_api_key
            <br />
            RESEND_FROM_EMAIL=Natural Cannabis Oil &lt;orders@naturalcannabisoil.shop&gt;
            <br />
            ADMIN_EMAIL=admin@naturalcannabisoil.shop
          </code>
          <a
            href="https://resend.com/api-keys"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-yellow-800 dark:text-yellow-200 underline mt-2"
          >
            Get your API key from Resend <ExternalLink className="h-3 w-3" />
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="mb-6 p-4 bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg">
      <div className="flex items-center gap-2 text-green-800 dark:text-green-200">
        <Check className="h-5 w-5" />
        <span className="font-medium">Email Notifications Active</span>
      </div>
      <p className="text-sm text-green-700 dark:text-green-300 mt-1">
        Customers receive automatic emails when orders are placed and status changes.
      </p>
    </div>
  )
}

export function AdminOrdersClient() {
  const [orders, setOrders] = useState<SupabaseOrder[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [statusFilter, setStatusFilter] = useState<string>("all")
  const [paymentFilter, setPaymentFilter] = useState<string>("all")

  const fetchOrders = async () => {
    setLoading(true)
    setError(null)
    try {
      const response = await fetch("/api/orders")
      if (!response.ok) {
        const data = await response.json()
        throw new Error(data.error || "Failed to fetch orders")
      }
      const data = await response.json()
      setOrders(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load orders")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchOrders()
  }, [])

  const filteredOrders = orders.filter((order) => {
    if (statusFilter !== "all" && order.order_status !== statusFilter) return false
    if (paymentFilter !== "all" && order.payment_status !== paymentFilter) return false
    return true
  })

  const stats = {
    total: orders.length,
    pending: orders.filter((o) => o.order_status === "pending").length,
    processing: orders.filter((o) => o.order_status === "processing").length,
    shipped: orders.filter((o) => o.order_status === "shipped").length,
    delivered: orders.filter((o) => o.order_status === "delivered").length,
    revenue: orders.filter((o) => o.payment_status === "confirmed").reduce((sum, o) => sum + Number(o.grand_total), 0),
    pendingPayment: orders.filter((o) => o.payment_status === "pending").length,
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center">
        <div className="text-center space-y-4">
          <Loader2 className="h-8 w-8 animate-spin mx-auto text-primary" />
          <p className="text-muted-foreground">Loading orders...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-muted/30 flex items-center justify-center">
        <div className="text-center space-y-4">
          <AlertCircle className="h-12 w-12 text-red-500 mx-auto" />
          <h1 className="text-2xl font-bold text-foreground">Error Loading Orders</h1>
          <p className="text-muted-foreground max-w-md">{error}</p>
          <p className="text-sm text-muted-foreground">
            Make sure the orders table exists by running the SQL script in /scripts/001_create_orders_table.sql
          </p>
          <Button onClick={fetchOrders} variant="outline">
            <RefreshCw className="h-4 w-4 mr-2" />
            Try Again
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-muted/30">
      <Header />
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-foreground">Order Dashboard</h1>
            <p className="text-muted-foreground">Manage orders and send status notifications</p>
          </div>
          <Button variant="outline" size="sm" onClick={fetchOrders}>
            <RefreshCw className="h-4 w-4 mr-2" />
            Refresh
          </Button>
        </div>

        <ResendStatus />

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
          <Card>
            <CardContent className="pt-4">
              <div className="text-2xl font-bold">{stats.total}</div>
              <div className="text-xs text-muted-foreground">Total Orders</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-yellow-600">{stats.pending}</div>
              <div className="text-xs text-muted-foreground">Pending</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-blue-600">{stats.processing}</div>
              <div className="text-xs text-muted-foreground">Processing</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-purple-600">{stats.shipped}</div>
              <div className="text-xs text-muted-foreground">Shipped</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-green-600">{stats.delivered}</div>
              <div className="text-xs text-muted-foreground">Delivered</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-orange-600">{stats.pendingPayment}</div>
              <div className="text-xs text-muted-foreground">Awaiting Payment</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="pt-4">
              <div className="text-2xl font-bold text-green-600">${stats.revenue.toFixed(2)}</div>
              <div className="text-xs text-muted-foreground">Confirmed Revenue</div>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-6">
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Order Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Statuses</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="processing">Processing</SelectItem>
              <SelectItem value="shipped">Shipped</SelectItem>
              <SelectItem value="delivered">Delivered</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>

          <Select value={paymentFilter} onValueChange={setPaymentFilter}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Payment Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Payments</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="failed">Failed</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Orders Grid */}
        {filteredOrders.length === 0 ? (
          <div className="text-center py-16">
            <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-foreground mb-2">No Orders Found</h2>
            <p className="text-muted-foreground">
              {orders.length === 0
                ? "Orders will appear here once customers place them."
                : "No orders match your current filters."}
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredOrders.map((order) => (
              <OrderCard key={order.id} order={order} onUpdate={fetchOrders} />
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  )
}
