import React from 'react';
import ReactPlayer from 'react-player';

import { Container } from './styles';

const VodModal = ({ videoUrl }: any) => {
  return (
    <Container>
      <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
    </Container>
  );
};

export default VodModal;
