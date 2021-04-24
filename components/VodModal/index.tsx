import React, { useEffect, useMemo, useState } from 'react';
import ReactPlayer from 'react-player';

import { Container, Ads } from './styles';

const VodModal = ({ videoUrl }: any) => {
  const [showAd, setShowAd] = useState(true);
  useEffect(() => {
    setShowAd(true);
  }, [videoUrl]);

  const renderVodModal = useMemo(() => {
    return (
      <>
        {/* <Ads isVisible={showAd}>
          <div id="container-7a1cea35756a114959dfd0d55a4bfc2c"></div>
          <button onClick={() => setShowAd(false)}>Close Ads</button>
        </Ads> */}

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
      </>
    );
  }, [videoUrl, showAd, setShowAd]);

  return <Container>{renderVodModal}</Container>;
};

export default VodModal;
