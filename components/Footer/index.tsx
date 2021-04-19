import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <a
        href="https://ko-fi.com/pogulive"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="kofi-img"
          src="https://cdn.ko-fi.com/cdn/kofi5.png?v=2"
          alt="Buy Me a Coffee at ko-fi.com"
        />
      </a>
      <a
        href="https://twitter.com/pogulive"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://abs.twimg.com/favicons/twitter.ico"
          alt="twitter logo"
        />
      </a>
    </Container>
  );
};

export default Footer;
