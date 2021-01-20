import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
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
