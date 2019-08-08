import React from "react";
import Document, { Head, Main, NextScript } from "next/document";
import { ServerStyleSheet, createGlobalStyle } from "styled-components";

import styledNormalize from "styled-normalize";

const GlobalStyle = createGlobalStyle`

  ${styledNormalize}

  html{
    font-size: 62.5%; /* Now 10px = 1rem! */
    font-family: 'Libre Baskerville', serif;
    text-rendering: optimizeLegibility;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    background-color: rgba(252,235,1,0.05);
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
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props =>
          sheet.collectStyles(
            <React.Fragment>
              <GlobalStyle />
              <App {...props} />
            </React.Fragment>
          )
      });

    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
      styles: [...initialProps.styles, ...sheet.getStyleElement()]
    };
  }

  render() {
    return (
      <html>
        <Head>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link href="https://fonts.googleapis.com/css?family=Libre+Baskerville|Roboto+Mono&display=swap" rel="stylesheet" />
          <GlobalStyle />
          {this.props.style}
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
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=UA-112006155-1"
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){
              dataLayer.push(arguments);
            }
            gtag('js', new Date());
            gtag('config', 'UA-112006155-1');
            `
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
