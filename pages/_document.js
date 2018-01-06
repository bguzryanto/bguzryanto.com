import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet, injectGlobal } from "styled-components";

import styledNormalize from "styled-normalize";

injectGlobal`
  ${styledNormalize}

  html{
    font-size: 62.5%; /* Now 10px = 1rem! */
    font-family: "adobe-garamond-pro", serif;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
  }

  h1, h2,h3,h4, h5, h6 {
    font-family: "europa",sans-serif;
  }

  p {
    font-size: 1.6rem;
  }

  a {
    color: #304999;
    text-decoration: overline;
  }
`;

export default class MyDocument extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();

    return (
      <html>
        <Head>
          <title>Bagus Rianto personal web</title>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {styleTags}
          <script
            dangerouslySetInnerHTML={{
              __html: `(function(d) {
              var config = {
                kitId: 'dyt1qud',
                scriptTimeout: 3000,
                async: true
              },
              h=d.documentElement,t=setTimeout(function(){h.className=h.className.replace(/wf-loading/g,"")+" wf-inactive";},config.scriptTimeout),tk=d.createElement("script"),f=false,s=d.getElementsByTagName("script")[0],a;h.className+=" wf-loading";tk.src='https://use.typekit.net/'+config.kitId+'.js';tk.async=true;tk.onload=tk.onreadystatechange=function(){a=this.readyState;if(f||a&&a!="complete"&&a!="loaded")return;f=true;clearTimeout(t);try{Typekit.load(config)}catch(e){}};s.parentNode.insertBefore(tk,s)
            })(document);`
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-112006155-1"></script>
          <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-112006155-1');
          </script>
        </body>
      </html>
    );
  }
}
