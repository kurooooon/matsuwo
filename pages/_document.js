import Document, { Html, Head, Main, NextScript } from 'next/document'
import { Global, css } from '@emotion/core'

const baseStyle = css`
  html, body, div, span, applet, object,
  iframe, h1, h2, h3, h4, h5, h6, p, blockquote,
  pre, a, abbr, acronym, address, big, cite,
  code, del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var, b,
  u, i, center, dl, dt, dd, ol, ul, li, fieldset,
  form, label, legend, table, caption, tbody,
  tfoot, thead, tr, th, td, article, aside,
  canvas, details, embed, figure, figcaption,
  footer, header, hgroup, menu, nav, output, ruby,
  section, summary, time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;}

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;}

  body {
    line-height: 1;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

	blockquote:before, blockquote:after, q:before, q:after {
		content: '';
		content: none;
	}

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  body {
    -webkit-text-size-adjust: none;
  }

  mark {
    background-color: transparent;
    color: inherit;
  }

  input::-moz-focus-inner {
    border: 0;
    padding: 0;
  }

  input, select, textarea {
    -moz-appearance: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    appearance: none;
  }

/* Basic */

	html {
		box-sizing: border-box;
	}

	*, *:before, *:after {
		box-sizing: inherit;
	}

	body {
		background: #fff;
	}

  body.is-preload *, body.is-preload *:before, body.is-preload *:after {
    -moz-animation: none !important;
    -webkit-animation: none !important;
    -ms-animation: none !important;
    animation: none !important;
    -moz-transition: none !important;
    -webkit-transition: none !important;
    -ms-transition: none !important;
    transition: none !important;
  }

	body, input, select, textarea {
		color: #666;
		font-family: "Source Sans Pro", Helvetica, sans-serif;
		font-size: 16pt;
		font-weight: 300;
    line-height: 1.65rem;
    font-display: swap;
	}

	a {
		-moz-transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
		-webkit-transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
		-ms-transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
		transition: color 0.2s ease-in-out, border-color 0.2s ease-in-out;
		border-bottom: dotted 1px #666;
		color: inherit;
		text-decoration: none;
	}

  a:hover {
    border-bottom-color: transparent !important;
    color: #6bd4c8;
  }

	strong, b {
		color: #555;
		font-weight: 400;
	}

	em, i {
		font-style: italic;
	}

	p {
		margin: 0 0 2rem 0;
	}

	h1, h2, h3, h4, h5, h6 {
		color: #555;
		line-height: 1rem;
		margin: 0 0 1rem 0;
	}

  h1 a, h2 a, h3 a, h4 a, h5 a, h6 a {
    color: inherit;
    text-decoration: none;
  }

	h1 {
		font-size: 2.25rem;
		line-height: 1.35rem;
	}

	h2 {
		font-size: 2rem;
		line-height: 1.35rem;
	}

	h3 {
		font-size: 1.35rem;
		line-height: 1.5rem;
	}

	h4 {
		font-size: 1.25rem;
		line-height: 1.5rem;
	}

	h5 {
		font-size: 0.9rem;
		line-height: 1.5rem;
	}

	h6 {
		font-size: 0.7rem;
		line-height: 1.5rem;
	}

	sub {
		font-size: 0.8rem;
		position: relative;
		top: 0.5rem;
	}

	sup {
		font-size: 0.8rem;
		position: relative;
		top: -0.5rem;
	}

	hr {
		border: 0;
		border-bottom: solid 1px rgba(144, 144, 144, 0.5);
		margin: 2rem 0;
	}

  hr.major {
    margin: 3rem 0;
  }

	blockquote {
		border-left: solid 4px rgba(144, 144, 144, 0.5);
		font-style: italic;
		margin: 0 0 2rem 0;
		padding: 0.5rem 0 0.5rem 2rem;
	}

	code {
		background: rgba(144, 144, 144, 0.075);
		border-radius: 4px;
		border: solid 1px rgba(144, 144, 144, 0.5);
		font-family: "Courier New", monospace;
		font-size: 0.9rem;
		margin: 0 0.25rem;
		padding: 0.25rem 0.65rem;
	}

	pre {
		-webkit-overflow-scrolling: touch;
		font-family: "Courier New", monospace;
		font-size: 0.9rem;
		margin: 0 0 2rem 0;
	}

  pre code {
    display: block;
    line-height: 1.75rem;
    padding: 1rem 1.5rem;
    overflow-x: auto;
  }

	.align-left {
		text-align: left;
	}

	.align-center {
		text-align: center;
	}

	.align-right {
		text-align: right;
	}
`;

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ja">
        <Head prefix="og: http://ogp.me/ns#">
          <meta name="google-site-verification" content={GSC_VARIFICATION} />
          <meta name="description" content="matsuwo / 松尾竜平 | 東京、北海道を拠点に音楽、アート作品を発信するアーティスト。人を惹きつける唯一無二の歌声を武器に精力的に路上やライブハウス、ウェブ上での配信など場所を問わずライブ活動を行っている。" />
          <meta name="keywords" content="matuswo,松尾竜平,matu,音楽,アート,油絵,アコースティック,ギター,個展" />
          <link rel="canonical" href="https://matsuwo.netlify.com" />
          <meta property="og:title" content="matsuwo / 松尾竜平 officail site | music &amp; art artist" />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://matsuwo.netlify.com" />
          <meta property="og:image" content="https://res.cloudinary.com/kurooooon/image/upload/v1579369001/matsuwo/header_ylfwfi.jpg" />
          <meta property="og:site_name" content="matsuwo / 松尾竜平 officail site | music &amp; art artist" />
          <meta property="og:description" content="matsuwo / 松尾竜平 | 東京、北海道を拠点に音楽、アート作品を発信するアーティスト。人を惹きつける唯一無二の歌声を武器に精力的に路上やライブハウス、ウェブ上での配信など場所を問わずライブ活動を行っている。" />
          <meta name="twitter:card" content="summary" />
          {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-156990344-1"
          ></script>
          <meta charSet="utf-8" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, user-scalable=no"
          />
          <link rel="stylesheet" href="https://unpkg.com/sanitize.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto+Slab|Source+Sans+Pro:300,300italic,400,400italic&display=swap" />
        </Head>
        <Global styles={baseStyle} />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument