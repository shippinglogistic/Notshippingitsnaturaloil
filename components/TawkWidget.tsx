'use client';

import Script from 'next/script';

export default function TawkWidget() {
  return (
    <>
      <Script id="tawk-script" strategy="lazyOnload">
        {`
          var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
          (function(){
            var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
            s1.async=true;
            s1.src='https://embed.tawk.to/693f60bd7bdcd2197d981cc4/1jcfp3pac';
            s1.charset='UTF-8';
            s1.setAttribute('crossorigin','*');
            if (s0 && s0.parentNode) {
              s0.parentNode.insertBefore(s1,s0);
            }
          })();
        `}
      </Script>
    </>
  );
}
