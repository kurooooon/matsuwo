import Document, { Html, Head, Main, NextScript } from 'next/document';

const GTM_CODE = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer', '${process.env.NEXT_PUBLIC_GTM_ID}');`;

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head prefix="og: http://ogp.me/ns#">
          {/* {<!-- Google Tag Manager -->} */}
          <script dangerouslySetInnerHTML={{ __html: GTM_CODE }} />
          {/* {<!-- End Google Tag Manager -->} */}
          <meta
            name="description"
            content="matsuwo / 松尾竜平 | 東京、北海道を拠点に音楽、アート作品を発信するアーティスト。人を惹きつける唯一無二の歌声を武器に精力的に路上やライブハウス、ウェブ上での配信など場所を問わずライブ活動を行っている。"
          />
          <meta
            name="keywords"
            content="matsuwo,松尾竜平,matu,音楽,アート,油絵,アコースティック,ギター,個展"
          />
          <link rel="canonical" href="https://matsuwo.netlify.com" />
          <meta
            property="og:title"
            content="matsuwo / 松尾竜平 officail site | music &amp; art artist"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://matsuwo.netlify.com" />
          <meta
            property="og:image"
            content="https://res.cloudinary.com/kurooooon/image/upload/v1579369001/matsuwo/header_ylfwfi.jpg"
          />
          <meta
            property="og:site_name"
            content="matsuwo / 松尾竜平 officail site | music &amp; art artist"
          />
          <meta
            property="og:description"
            content="matsuwo / 松尾竜平 | 東京、北海道を拠点に音楽、アート作品を発信するアーティスト。人を惹きつける唯一無二の歌声を武器に精力的に路上やライブハウス、ウェブ上での配信など場所を問わずライブ活動を行っている。"
          />
          <meta name="twitter:card" content="summary" />
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no"
          />
          <link rel="stylesheet" href="https://unpkg.com/sanitize.css" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto+Slab|Source+Sans+Pro:300,300italic,400,400italic&display=swap"
          />
        </Head>
        <body>
          {/* {<!-- Google Tag Manager (noscript) -->} */}
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
              height="0"
              width="0"
              style={{ display: 'none', visibility: 'hidden' }}
            ></iframe>
          </noscript>
          {/* {<!-- End Google Tag Manager (noscript) -->} */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
