import React from 'react';
import ReactPlayer from 'react-player';

import { Container } from './styles';

const VodModal = ({ videoUrl }: any) => {
  return (
    <Container>
      <ReactPlayer
        url={videoUrl}
        controls
        width="100%"
        height="100%"
        config={{
          file: {
            hlsOptions: {
              xhrSetup: (xhr: any, _url: any) => {
                xhr.open('GET', _url.replace('unmuted.ts', 'muted.ts'), true);
              },
            },
          },
        }}
      />
    </Container>
  );
};

export default VodModal;
