import Script from 'next/script'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        {children}

        <Script
          id="tawk-to-script"
          strategy="lazyOnload"  // Loads after page is usable → best for chat widgets
          dangerouslySetInnerHTML={{
            __html: `
                                                                                    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
                                                                                                  (function(){
                                                                                                                  var s1 = document.createElement("script"),
                                                                                                                                      s0 = document.getElementsByTagName("script")[0];
                                                                                                                                                      s1.async = true;
                                                                                                                                                                      s1.src = 'https://embed.tawk.to/693f60bd7bdcd2197d981cc4/1jcfp3pac';
                                                                                                                                                                                      s1.charset = 'UTF-8';
                                                                                                                                                                                                      s1.setAttribute('crossorigin', '*');
                                                                                                                                                                                                                      s0.parentNode.insertBefore(s1, s0);
                                                                                                                                                                                                                                    })();
                                                                                                                                                                                                                                                `,
          }}
        />
      </body>
    </html>
  )
}