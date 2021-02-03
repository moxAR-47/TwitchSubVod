import React, { useEffect, useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './components/themes';
import GlobalStyle from './GlobalStyle';
import Routes from './routes';

function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('@pogu: theme');

    if (savedTheme) {
      return savedTheme;
    }
    return 'dark';
  });

  useEffect(() => {
    localStorage.setItem('@pogu: theme', theme);
  }, [theme]);

  const themeSwitcher = () => {
    theme === 'dark' ? setTheme('light') : setTheme('dark');
  };
  return (
    <>
      <ThemeProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
        <button
          style={{
            position: 'absolute',
            margin: 16,
            backgroundColor: 'transparent',
            fontSize: 24,
          }}
          onClick={themeSwitcher}
        >
          {theme === 'dark' ? '🌞' : '🌜'}
        </button>
        <GlobalStyle />
        <Routes />
      </ThemeProvider>
    </>
  );
}

export default App;
