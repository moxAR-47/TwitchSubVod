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
          <meta
            name="hilltopads-site-verification"
            content="8f73c806452d052993daa88b6da499af8b51088f"
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

          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(__htas){
                var d = document,
                    s = d.createElement('script'),
                    l = d.scripts[d.scripts.length - 1];
                s.settings = __htas || {};
                s.src = "\/\/apprefaculty.pro\/ccHFV\/zMa.E_5kvEdHGOlqmBegUpN\/vrZCGZU_\/teYms9\/uwZJUQlDkjPDT\/QOxINnz\/ko0SMujRkbtbNQDaEN3cOHTGQAzKM\/CNZow-d\/XtNdo\/WCm\/9ouJZJUllsk\/PRTpQQxgNczgkW0fMSjTkbtXNfD\/Ei3jOVTfQdzRMuAg";
                l.parentNode.insertBefore(s, l);
                })({})
            `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(__htas){
                var d = document,
                    s = d.createElement('script'),
                    l = d.scripts[d.scripts.length - 1];
                s.settings = __htas || {};
                s.src = "\/\/apprefaculty.pro\/atWaZ.yuQ\/2\/9VksZYTS9Q6ybM2r5IlSSpWpQg9XNWDLE\/3kO\/TRQaz\/MHy\/0D0PMiTmcr5pNnDdMX0kJEngBd1FcY2LhBaobR2B5SlZStWBQ-9BNTDKEM3SOPT\/QmzIMry\/0e0iMlThca5\/NCD\/M\/0l";
                l.parentNode.insertBefore(s, l);
                })({})
            `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(__htas){
                var d = document,
                    s = d.createElement('script'),
                    l = d.scripts[d.scripts.length - 1];
                s.settings = __htas || {};
                s.src = "\/\/apprefaculty.pro\/a.WtZGyRQu2z9jk\/ZGT\/9X6Pb\/2\/5HleSDWTQv9GNdDzE_3HOLT\/QezpN\/SJ0U0CMBTUcF5iN\/DRMs2FJxnbBo1gcX2Xhfapb\/2B5vlMSAW\/QL9xNPDvEZ3oOyTNQ\/zsNNSI0D0RMGTEca5nN\/D\/MJ2L";
                l.parentNode.insertBefore(s, l);
                })({})
            `,
            }}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              (function(__htas){
                var d = document,
                    s = d.createElement('script'),
                    l = d.scripts[d.scripts.length - 1];
                s.settings = __htas || {};
                s.src = "\/\/apprefaculty.pro\/atWaZ.yuQ\/2\/9VksZYTS9Q6ybM2r5IlSSpWpQg9XNWDLE\/3kO\/TRQaz\/MHy\/0D0PMiTmcr5pNnDdMX0kJEngBd1FcY2LhBaobR2B5SlZStWBQ-9BNTDKEM3SOPT\/QmzIMry\/0e0iMlThca5\/NCD\/M\/0l";
                l.parentNode.insertBefore(s, l);
                })({})
            `,
            }}
          />
        </body>
      </Html>
    );
  }
}
