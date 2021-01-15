import React, { useEffect, useState } from 'react';
import ReactGA from 'react-ga';
import axios from 'axios';
import ReactPlayer from 'react-player';

import { FiSearch, FiLoader } from 'react-icons/fi';

import { Container, AnimationContainer } from './styles';
import LinkBox from '../../components/LinkBox';
import InfoModal from '../../components/InfoModal';
import Footer from '../../components/Footer';

const DeletedVods: React.FC = () => {
  useEffect(() => {
    ReactGA.initialize(`${process.env.REACT_APP_GOOGLE_TRACKING}`, {
      testMode: process.env.NODE_ENV === 'test',
    });
    ReactGA.pageview('/DeletedVods');
  }, []);

  const [vodId, setVodId] = useState('');
  const [data, setData] = useState('');
  const [vodQuality, setVodQuality] = useState('chunked');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    if (vodId.length === 11) {
      try {
        setLoading(true);
        const response = await axios.get(
          `${process.env.REACT_APP_CORS}${process.env.REACT_APP_DELETED_VOD_WORKER}${vodId}`,
        );

        const link = response.data
          .split(`https://vod-metro.twitch.tv/`)[1]
          .split('/')[0];

        let finalLink = `${process.env.REACT_APP_CORS}https://vod-metro.twitch.tv/${link}/${vodQuality}/index-dvr.m3u8`;
        setData(finalLink);
        setLoading(false);

        const responseVodUrl = await axios.get(`${finalLink}`);
        if (responseVodUrl.status === 200 || responseVodUrl.status === 304) {
          setError(false);
        } else {
          setError(true);
        }

        ReactGA.event({
          category: 'Button',
          action: `User searched a deleted vod ${vodId}`,
        });
      } catch (err) {
        console.warn(err);
        setError(true);
        setLoading(false);
      }
    } else {
      alert('Invalid Vod ID');
    }
  };

  return (
    <Container>
      <AnimationContainer>
        <h1>Deleted Twitch Vods</h1>

        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <div className="input-box">
            <input
              type="number"
              name="vodId"
              onChange={(event) => setVodId(event.target.value)}
              value={vodId}
              placeholder="Vod ID"
            />
            <InfoModal />
          </div>

          <div className="quality-selection">
            <label htmlFor="quality">Select a quality: </label>
            <select
              name="quality"
              id="quality"
              onChange={(event) => setVodQuality(event.target.value)}
            >
              <option defaultValue="chunked">Source</option>
              <option value="720p60">720p60</option>
              <option value="720p30">720p30</option>
              <option value="480p30">480p</option>
              <option value="360p30">360p</option>
              <option value="160p30">160p</option>
              <option value="audio_only">audio</option>
            </select>
          </div>

          <button type="submit" onClick={handleSubmit} aria-label="submit">
            <FiSearch size={14} />
            Search
          </button>
        </form>

        <LinkBox home />

        {data && !error ? (
          <>
            <div className="video-container">
              <ReactPlayer
                key={data}
                url={data}
                controls
                width="100%"
                height="100%"
              />
            </div>
          </>
        ) : loading ? (
          <span>
            <FiLoader size={32} />
          </span>
        ) : (
          error && (
            <span>The VOD you're looking for is no longer available</span>
          )
        )}
      </AnimationContainer>
      <Footer />
    </Container>
  );
};

export default DeletedVods;
