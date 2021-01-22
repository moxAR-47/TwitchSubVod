import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  :root {
    --purple: #9147ff;
    --dark-purple: #7c2cf4;
    --button-text: #f1f1f1;
    --background: ${(props: any) => props.theme.background};
    --light-background: ${(props: any) => props.theme.lightBackground};
    --text: ${(props: any) => props.theme.text};
  }

  * {
    box-sizing: border-box;
  }

  body {
  padding: 0rem;
  margin: 0rem;
  font-family: 'Roboto', sans-serif;
  color: var(--text);
  font-weight: 400;
  background-color: var(--background);

  transition: background-color, color, 0.2s linear;
  }

  a {
    text-decoration: none;
    color: var(--purple);
  }

  input, button {
    border: 0rem;
  }

  button {
    cursor: pointer;
  }

  button[type="submit"]{
    transition: all ease 0.2s;

    &:hover{
      background: var(--dark-purple);
      border: var(--dark-purple);
    }

    &:active{
      background: var(--dark-purple);
      border: var(--dark-purple);
    }
  }
`;

export default GlobalStyle;
