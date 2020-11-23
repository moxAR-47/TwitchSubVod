import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
  padding: 0rem;
  margin: 0rem;
  font-family: 'Roboto', sans-serif;
  color: #f1f1f1;
  font-weight: 400;
  background: #181a1b;
  }

  a {
    text-decoration: none;
    color: #9147ff;
  }

  input, button {
    border: 0rem;
  }
`;

export default GlobalStyle;
