import Script from "next/script";
const Head = () => {
  return (
    <head>
      <meta charSet="utf-8" />
      <title>
        Neon Lights
      </title>
      <meta name="description" content="" />
      <link rel="shortcut icon" type="image/x-icon" href={'/vercel.svg'} />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />
      <meta property="twitter:image" content={process.env.NEXT_PUBLIC_WEBSITE_URL+"/api/og"} />
      <meta property="twitter:card" content={process.env.NEXT_PUBLIC_WEBSITE_URL+"/api/og"}></meta>
      <meta property="twitter:title" content="Twitter link preview title"></meta>
      <meta property="twitter:description" content="Twitter link preview description"></meta>
      <meta property="og:image" content={process.env.NEXT_PUBLIC_WEBSITE_URL+"/api/og"}></meta>
      <meta property="og:title" content="Link preview title"></meta>
      <meta property="og:description" content="Link preview description" />
      <meta property="og:url" content="Canonical link preview URL"></meta>

      <Script strategy="lazyOnload" id="clarity-script">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "l0zm17bop6");
        `}
      </Script>

      {/* <!-- Google tag (gtag.js) --> */}
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-32F9YGZ01B"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'G-32F9YGZ01B');`}
      </Script>
    </head>
  );
}

export default Head;