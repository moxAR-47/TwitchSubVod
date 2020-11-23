import React, { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

import api from '../../services/api';

import { Container } from './styles';

interface TwitchVideoProps {
  channel: {
    display_name: string;
    description: string;
    followers: number;
    logo: string;
    video_banner: string;
  };
  thumbnails: {
    large: Array<{ url: string }>;
  };
}

const Home: React.FC = () => {
  const [vodNumber, setVodNumber] = useState('');
  const [twitchData, setTwitchData] = useState<TwitchVideoProps>();
  const [link, setLink] = useState('');

  const handleSubmit = async () => {
    await api.get(`videos/${vodNumber}`).then((response) => {
      const splitString = response.data.preview.small.split('/')[5];
      setLink(
        `https://vod-secure.twitch.tv/${splitString}/chunked/index-dvr.m3u8`,
      );
      setTwitchData(response.data);
    });
  };

  return (
    <Container>
      <h1>Twitch Sub Vod</h1>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <input
          type="text"
          name="vodNumber"
          onChange={(event) => setVodNumber(event.target.value)}
          value={vodNumber}
        />
        <button type="submit" onClick={() => handleSubmit()}>
          <FiSearch size={14} />
          Search
        </button>
      </form>

      {console.log(twitchData)}
      {/* {twitchData &&
        twitchData.thumbnails.large.map((data: any) => (
          <img src={data.url} alt={data.url} />
        ))} */}

      {link && (
        <a href={link} target="_blank" rel="noopener noreferrer">
          Link
        </a>
      )}

      {link && (
        <video controls preload="auto" width="640" height="264">
          <source
            src={process.env.REACT_APP_CORS + link}
            type="application/x-mpegURL"
          />
        </video>
        // we have to use videojs.Vhs
      )}
    </Container>
  );
};

export default Home;
