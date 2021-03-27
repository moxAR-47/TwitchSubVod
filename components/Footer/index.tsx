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
      <span>
        This project is in no way affiliated with Twitch Interactive, Inc.
        Amazon.com, Inc., or any company mentioned on this page.
        <a href="https://github.com/Alissonsleal/TwitchSubVod">
          View Source code
        </a>
      </span>
    </Container>
  );
};

export default Footer;
