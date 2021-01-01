import React, { useState } from 'react';

import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './components/themes';
import GlobalStyle from './globalStyles';
import Routes from './routes';

function App() {
  const [theme, setTheme] = useState('dark');
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
