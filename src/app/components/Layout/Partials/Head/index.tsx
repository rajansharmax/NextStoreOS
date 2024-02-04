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
    </head>
  );
}

export default Head;