'use client'

import dynamic from 'next/dynamic'

const WhatsAppWidget = dynamic(() => import('./WhatsAppWidget'), { ssr: false })

export function ClientWidgets() {
  return <WhatsAppWidget />
}
