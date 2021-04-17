import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalProvider } from '@/stores/GlobalContext';
import { darkTheme, lightTheme } from '@/components/themes';
import GlobalStyle from '@/styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, setTheme] = useState<any>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('@pogu: theme');

      if (savedTheme) {
        return savedTheme;
      }
      return 'dark';
    }
  });

  useEffect(() => {
    localStorage.setItem('@pogu: theme', theme);
  }, [theme]);

  const themeSwitcher = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Twitch Sub Vod</title>
      </Head>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        {
          <button
            style={{
              position: 'absolute',
              margin: 8,
              backgroundColor: 'rgba(200,200,200,0.5)',
              borderRadius: '15px',
              fontSize: 16,
              padding: '4px',
            }}
            onClick={themeSwitcher}
          >
            🌞 🌜
          </button>
        }
        <GlobalStyle />
        <GlobalProvider>
          <Component {...pageProps} />
        </GlobalProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
