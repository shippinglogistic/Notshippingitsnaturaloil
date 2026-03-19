'use client'

import { useEffect } from 'react'

export default function TawkChat() {
  useEffect(() => {
    // Only load on production domains, not on Vercel preview
    if (typeof window === 'undefined') return
    
    const hostname = window.location.hostname
    const isProduction = !hostname.includes('vercel.app') && hostname !== 'localhost'
    
    if (!isProduction) return

    // Prevent Tawk from injecting into head
    const originalCreateElement = document.createElement.bind(document)
    let tawkScriptCreated = false

    const loadTawk = () => {
      ;(window as any).Tawk_API = (window as any).Tawk_API || {}
      ;(window as any).Tawk_LoadStart = new Date()

      const s1 = document.createElement('script')
      s1.async = true
      s1.src = 'https://embed.tawk.to/693f60bd7bdcd2197d981cc4/1jcfp3pac'
      s1.charset = 'UTF-8'
      s1.setAttribute('crossorigin', '*')
      document.body.appendChild(s1)
    }

    // Load after a short delay to ensure hydration is complete
    const timer = setTimeout(loadTawk, 1000)
    return () => clearTimeout(timer)
  }, [])

  return null
}

