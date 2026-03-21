'use client';

import { useEffect } from 'react';

export default function TawkWidget() {
  useEffect(() => {
    // Initialize Tawk API
    var Tawk_API = (window as any).Tawk_API || {};
    var Tawk_LoadStart = new Date();

    // IIFE to inject the script
    (function () {
      var s1 = document.createElement('script');
      var s0 = document.getElementsByTagName('script')[0];
      
      s1.async = true;
      s1.src = 'https://embed.tawk.to/693f60bd7bdcd2197d981cc4/1jcfp3pac';
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      
      if (s0 && s0.parentNode) {
        s0.parentNode.insertBefore(s1, s0);
      }
    })();
  }, []);

  return null;
}
