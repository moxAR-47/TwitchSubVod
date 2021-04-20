import React from 'react';
import Document, {
  DocumentInitialProps,
  DocumentContext,
  Html,
  Main,
  NextScript,
  Head,
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { GA_TRACKING_ID } from '../utils/gtag';

export default class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          <meta charSet="utf-8" />
          <meta name="theme-color" content="#181a1b" />
          <meta
            name="description"
            content="Watch any sub-only Twitch VOD for free. You can also find deleted clips or Twitch VODS. Just insert the streamer username and select a video to watch. You can also download Twitch Clips with this application."
          />
          <meta
            name="keywords"
            content="Twitch, Deleted Vod, Deleted Vods, Sub-only, Sub-only Vods, Watch Twitch, Twitch Free Vods, Twitch Deleted Vods, Twitch Deleted Clips, Twitch Download Clips, Twitch Clips"
          />
          <meta property="og:title" content={`PogU.live - Sub-only VODS`} />
          <meta property="og:url" content={`https://pogu.live`} />
          <meta
            property="og:image"
            content="https://pogu.live/android-chrome-192x192.png"
          />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content={`Watch any sub-only Twitch VOD for free. You can also find deleted clips or Twitch VODS. Just insert the streamer username and select a video to watch. You can also download Twitch Clips with this application.`}
          />
          <meta name="twitter:site" content="@pogulive" />

          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
          />

          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />

          <script
            data-ad-client="ca-pub-8414071548156466"
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
          ></script>

          <script
            dangerouslySetInnerHTML={{
              __html: `
                  (function (c, l, a, r, i, t, y) {
                    c[a] =
                      c[a] ||
                      function () {
                        (c[a].q = c[a].q || []).push(arguments);
                      };
                    t = l.createElement(r);
                    t.async = 1;
                    t.src = 'https://www.clarity.ms/tag/' + i;
                    y = l.getElementsByTagName(r)[0];
                    y.parentNode.insertBefore(t, y);
                  })(window, document, 'clarity', 'script', '52r5yg4cof');
`,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_TRACKING_ID}', {
                page_path: window.location.pathname,
              });
          `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script src="https://storage.ko-fi.com/cdn/scripts/overlay-widget.js"></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
              kofiWidgetOverlay.draw('pogulive', {
                'type': 'floating-chat',
                'floating-chat.donateButton.text': 'Support me',
                'floating-chat.donateButton.background-color': '#9147ff',
                'floating-chat.donateButton.text-color': '#f1f1f1'
              });
  `,
            }}
          />
        </body>
      </Html>
    );
  }
}
