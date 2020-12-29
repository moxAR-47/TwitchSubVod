import React from 'react';
import { FiInfo } from 'react-icons/fi';

import { Container } from './styles';

const InfoModal: React.FC = () => {
  return (
    <Container>
      <div className="info-box">
        <p>
          You can get the Vod Id from
          <a
            href="https://twitchtracker.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            twitchtracker.com
          </a>
        </p>
      </div>
      <FiInfo size={18} />
    </Container>
  );
};

export default InfoModal;
