import React from 'react';
import { FiInfo } from 'react-icons/fi';

import { Container } from './styles';

interface InfoModalProps {
  text?: string;
}

const InfoModal: React.FC<InfoModalProps> = ({ text }) => {
  return (
    <Container>
      <div className="info-box">
        {text ? (
          <p>{text}</p>
        ) : (
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
        )}
      </div>
      <FiInfo size={18} />
    </Container>
  );
};

export default InfoModal;
