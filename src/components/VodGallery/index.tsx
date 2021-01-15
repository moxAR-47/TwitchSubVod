import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';

import VodModal from '../VodModal';

import { Container, Image } from './styles';

interface ResultProps {
  _id: string;
  animated_preview_url: string;
  preview: {
    large: string;
  };
  broadcast_id: number;
  title: string;
  views: number;
  url: string;
  length: number; //in seconds
  game: string;
}

export const formatNumber = (num: number) => {
  if (num > 1000 && num < 1000000) {
    return (num / 1000).toString().slice(0, 3) + 'K';
  } else if (num > 1000000) {
    return (num / 1000000).toString().slice(0, 3) + 'M';
  } else {
    return num;
  }
};

const VodGallery = ({ data }: any) => {
  useEffect(() => {
    ReactGA.initialize(`${process.env.REACT_APP_GOOGLE_TRACKING}`, {
      testMode: process.env.NODE_ENV === 'test',
    });
  }, []);

  const [vodUrl, setVodUrl] = useState(''); //use useContext later to clear this when we search again

  const timeToHMS = (s: number) => {
    const h = Math.floor(s / 3600);
    s -= h * 3600;
    const m = Math.floor(s / 60);
    s -= m * 60;
    // s = Math.floor(s);
    return `${h}:${m > 10 ? m : '0' + m}:${s > 10 ? s : '0' + s}`;
  };

  return (
    <>
      {vodUrl && <VodModal videoUrl={vodUrl} />}

      <Container>
        {data.map((result: ResultProps) => {
          const splitString = result.preview.large.split('/')[5];

          let dataUrl = `https://twitch-cors.herokuapp.com/https://vod-secure.twitch.tv/${splitString}/chunked/index-dvr.m3u8`;

          return (
            <div key={result._id}>
              <button
                type="button"
                onClick={() => {
                  setVodUrl(result.broadcast_id !== 1 ? dataUrl : result.url);
                  window.scrollTo({ behavior: 'smooth', top: 0 });

                  ReactGA.event({
                    category: 'SearchedUserForDeletedVod',
                    action: `${dataUrl}`,
                  });
                }}
              >
                <div>
                  <Image
                    url={result.preview.large}
                    animated={result.animated_preview_url}
                  >
                    <span>{timeToHMS(result.length)}</span>
                  </Image>
                </div>
                <strong>{result.title}</strong>
                <p>Views: {formatNumber(result.views)}</p>
              </button>
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default VodGallery;
