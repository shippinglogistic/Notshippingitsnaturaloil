'use client'

import dynamic from 'next/dynamic'

const TawkWidget = dynamic(() => import('./TawkWidget'), { ssr: false })
const WhatsAppWidget = dynamic(() => import('./WhatsAppWidget'), { ssr: false })

export function Widgets() {
  return (
    <>
      <WhatsAppWidget />
      <TawkWidget />
    </>
  )
}
