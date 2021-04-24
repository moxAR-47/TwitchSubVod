import React, { useEffect, useMemo, useState } from 'react';
import ReactPlayer from 'react-player';
import { FaWindowClose } from 'react-icons/fa';

import { Container, Ads } from './styles';

const VodModal = ({ videoUrl }: any) => {
  const [showAd, setShowAd] = useState(true);
  useEffect(() => {
    setShowAd(true);
  }, [videoUrl]);

  const renderVodModal = useMemo(() => {
    return (
      <>
        <Ads isVisible={showAd}>
          <a
            href="https://ko-fi.com/pogulive"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hey, these servers aren't free...
            <img
              className="kofi-img"
              width="230px"
              src="https://cdn.ko-fi.com/cdn/kofi5.png?v=2"
              alt="Buy Me a Coffee at ko-fi.com"
            />
            ... if you can, of course :)
          </a>
          <button onClick={() => setShowAd(false)}>
            <FaWindowClose size={32} />
          </button>
        </Ads>

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
