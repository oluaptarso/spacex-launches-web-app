import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import { GA_TRACKING_ID, OPTIMIZE_ID } from "@/lib/gtag";

export default function Document() {

  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        <Script
          id={GA_TRACKING_ID}
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
        />

        <Script
          id={OPTIMIZE_ID}
          strategy="afterInteractive"
          src={`https://www.googleoptimize.com/optimize.js?id=${OPTIMIZE_ID}`}
        />

        <Script
          id={GA_TRACKING_ID}
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_TRACKING_ID}', {
              page_path: window.location.pathname,
              'optimize_id': '${OPTIMIZE_ID}'
            });
          `,
          }}
        />
      </body>
    </Html>
  );
}
