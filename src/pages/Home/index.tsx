import React, { useState } from 'react';
import ReactPlayer from 'react-player';

import { FiSearch } from 'react-icons/fi';

import api from '../../services/api';

import { Container } from './styles';
import VodGallery from '../../components/VodGallery';

interface TwitchVideoProps {
  videos: Array<{
    broadcast_id: number;
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
  }>;
}

const Home: React.FC = () => {
  const [username, setUsername] = useState('');
  const [usernameId, setUsernameId] = useState('');
  const [twitchData, setTwitchData] = useState<TwitchVideoProps>();
  const [videoUrl, setVideoUrl] = useState('');

  const handleSubmit = () => {
    try {
      api.get(`users?login=${username}`).then((response) => {
        api
          .get(`channels/${response.data.users[0]._id}/videos?limit=100`)
          .then((response) => {
            const splitString = response.data.videos[0].preview.small.split(
              '/',
            )[5];
            setVideoUrl(
              `https://twitch-cors.herokuapp.com/https://vod-secure.twitch.tv/${splitString}/chunked/index-dvr.m3u8`,
            );
            setTwitchData(response.data);
          });

        setUsernameId(response.data.users[0]._id);
      });
    } catch (err) {
      console.log(err);
    }

    (usernameId || twitchData) && console.log(usernameId, twitchData);
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
          name="username"
          onChange={(event) => setUsername(event.target.value)}
          value={username}
          placeholder="Streamer Username"
        />
        <button type="submit" onClick={handleSubmit}>
          <FiSearch size={14} />
          Search
        </button>
      </form>

      {videoUrl && twitchData && (
        <>
          <VodGallery data={twitchData.videos} />
          <div className="player-wrapper">
            <ReactPlayer url={videoUrl} controls width="100%" height="100%" />
          </div>
        </>
      )}
    </Container>
  );
};

export default Home;
