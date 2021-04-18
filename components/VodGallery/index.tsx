import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactGA from 'react-ga';
import ErrorModal from '@/components/ErrorModal';
import { useGlobal } from '@/stores/GlobalContext';
import VodModal from '@/components/VodModal';

import { StreamerInformation, Container, Image } from './styles';
import Link from 'next/link';

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
  channel: {
    display_name: string;
    logo: string;
    description: string;
    url: string;
  };
  recorded_at: string;
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
  const { vodUrl, setVodUrl, videoQuality } = useGlobal();
  const streamerInformation: ResultProps['channel'] = data[0].channel;
  useEffect(() => {
    ReactGA.initialize(`${process.env.NEXT_PUBLIC_GOOGLE_TRACKING}`, {
      testMode: process.env.NODE_ENV === 'test',
    });
  }, []);

  const [error, setError] = useState(false);

  const handleVideo = async (result: any) => {
    const splitString = await result.animated_preview_url.split('/')[3];
    const hostUrl = await result.animated_preview_url.split('/')[2];
    let dataUrl = `${process.env.NEXT_PUBLIC_CORS}https://${hostUrl}/${splitString}/${videoQuality}/index-dvr.m3u8`;

    try {
      const checkIfVideoExists = await axios.head(`${dataUrl}`);
      if (checkIfVideoExists.status !== 403) {
        setVodUrl(result.broadcast_id !== 1 ? dataUrl : result.url);
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }

    window.scrollTo({ behavior: 'smooth', top: 340 });

    ReactGA.event({
      category: 'SearchedUserForDeletedVod',
      action: `${splitString}`,
    });
  };

  const timeToHMS = (s: number) => {
    const h = Math.floor(s / 3600);
    s -= h * 3600;
    const m = Math.floor(s / 60);
    s -= m * 60;

    return `${h}:${m > 10 ? m : '0' + m}:${s > 10 ? s : '0' + s}`;
  };
  console.log(streamerInformation.display_name);
  return (
    <>
      {data && !error && (
        <Link href={streamerInformation.url}>
          <a target="_blank" rel="noopener noreferrer">
            <StreamerInformation>
              <div>
                <img
                  src={streamerInformation.logo.replace('300x300', '150x150')}
                  alt={streamerInformation.display_name}
                />
              </div>
              <div>
                <h1>{streamerInformation.display_name}</h1>
                <p>{streamerInformation.description}</p>
              </div>
            </StreamerInformation>
          </a>
        </Link>
      )}
      {vodUrl && <VodModal videoUrl={vodUrl} />}
      {error && !vodUrl && videoQuality === 'chunked' && (
        <ErrorModal message="We couldn't find this video" />
      )}
      {error && !vodUrl && videoQuality !== 'chunked' && (
        <ErrorModal message="We couldn't find this video, try changing the quality to 'Source'" />
      )}

      <a
        href="https://ko-fi.com/pogulive"
        target="_blank"
        rel="noopener noreferrer"
      >
        Help me keep the servers running
        <img
          className="kofi-img"
          width="230px"
          src="https://cdn.ko-fi.com/cdn/kofi5.png?v=2"
          alt="Buy Me a Coffee at ko-fi.com"
        />
      </a>
      <Container>
        {data.map((result: ResultProps) => {
          return (
            <div key={result._id} title={result.title}>
              <button type="button" onClick={() => handleVideo(result)}>
                <div>
                  <Image
                    url={result.preview.large}
                    animated={result.animated_preview_url}
                  >
                    <span>{timeToHMS(result.length)}</span>
                  </Image>
                </div>
                <strong>{result.title}</strong>
                <span>
                  <p>Views: {formatNumber(result.views)}</p>
                  <p>{new Date(result.recorded_at).toLocaleDateString()}</p>
                </span>
              </button>
            </div>
          );
        })}
      </Container>
    </>
  );
};

export default VodGallery;
