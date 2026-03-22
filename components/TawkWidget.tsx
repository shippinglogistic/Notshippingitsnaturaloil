"use client"

import { useEffect } from "react"

export default function TawkWidget() {
  useEffect(() => {
    // 1. Prevent duplicate loading
    if ((window as any).Tawk_API) return;

    // 2. Initialize Tawk_API
    (window as any).Tawk_API = (window as any).Tawk_API || {};
    (window as any).Tawk_LoadStart = new Date();

    // 3. Inject the script
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];

    s1.async = true;
    // This URL now contains your correct Property and Widget IDs
    s1.src = "https://embed.tawk.to/693f60bd7bdcd2197d981cc4/1jcfp3pac";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");

    if (s0 && s0.parentNode) {
      s0.parentNode.insertBefore(s1, s0);
    }
  }, []);

  return null;
}
