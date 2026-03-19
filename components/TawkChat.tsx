'use client'

import { useEffect } from 'react'

export default function TawkChat() {
  useEffect(() => {
    // Only run on client, never during SSR
    if (typeof window === 'undefined') return

    // Wait for hydration to complete
    setTimeout(() => {
      // Initialize Tawk variables
      ;(window as any).Tawk_API = (window as any).Tawk_API || {}
      ;(window as any).Tawk_LoadStart = new Date()

      // Create script and append to body
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = 'https://embed.tawk.to/693f60bd7bdcd2197d981cc4/1jcfp3pac'
      script.charset = 'UTF-8'
      script.setAttribute('crossorigin', '*')
      document.body.appendChild(script)
    }, 100)
  }, [])

  return null
}
