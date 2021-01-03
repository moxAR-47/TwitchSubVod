import React, { useState } from 'react';

import { FiSearch, FiDownload } from 'react-icons/fi';

import api from '../../services/api';

import { Container, AnimationContainer, Thumbnail } from './styles';
import LinkBox from '../../components/LinkBox';
import Footer from '../../components/Footer';
import { formatNumber } from '../../components/VodGallery';

interface TwitchVideoProps {
  slug: string;
  tracking_id: string;
  title: string;
  thumbnails: {
    medium: string;
  };
  views: number;
}

const DownloadClip: React.FC = () => {
  const [clip, setClip] = useState('');
  const [twitchData, setTwitchData] = useState<TwitchVideoProps>();

  const clipSlug = (clipURL: string) => {
    let splittedClip = clipURL.split('/');
    return splittedClip[splittedClip.length - 1];
  };

  const handleSubmit = async () => {
    try {
      const { data } = await api.get(`clips/${clipSlug(clip)}`);
      setTwitchData(data);
      console.log(twitchData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <AnimationContainer>
        <h1>Twitch Clip Downloader</h1>
        <form
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input
            type="text"
            name="clip"
            onChange={(event) => setClip(event.target.value)}
            value={clip}
            placeholder="https://clips.twitch.tv/CarefulNiceJaguarRickroll"
          />
          <button type="submit" onClick={handleSubmit}>
            <FiSearch size={14} />
            Download Clip
          </button>
        </form>

        <LinkBox home />
        <LinkBox clips />
        <LinkBox vods />

        {twitchData && (
          <Thumbnail>
            <img src={twitchData.thumbnails.medium} alt={twitchData.title} />

            <strong>{twitchData.title}</strong>
            <div>
              <p>Views: {formatNumber(twitchData.views)}</p>
              <a
                href={`https://clips-media-assets2.twitch.tv/AT-cm%7C${twitchData.tracking_id}.mp4`}
                rel="noopener noreferrer"
              >
                <FiDownload size={18} />
                Download
              </a>
            </div>
          </Thumbnail>
        )}
        {/* downloadlink = https://clips-media-assets2.twitch.tv/AT-cm%7C${tracking_id}.mp4 */}
      </AnimationContainer>
      <Footer />
    </Container>
  );
};

export default DownloadClip;
