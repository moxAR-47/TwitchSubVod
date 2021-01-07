import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface LinksProps {
  home?: boolean;
  clips?: boolean;
  vods?: boolean;
  download?: boolean;
}

const LinkBox = ({ home, clips, vods, download }: LinksProps) => {
  return (
    <Container>
      {home && (
        <Link to="/" aria-label="Home">
          <FiSearch size={14} />
          Home
        </Link>
      )}

      {clips && (
        <Link to="/DeletedClips" aria-label="DeletedClips">
          <FiSearch size={14} />
          Search for deleted clips
        </Link>
      )}

      {vods && (
        <Link to="/DeletedVods" aria-label="DeletedVods">
          <FiSearch size={14} />
          Search for deleted vods
        </Link>
      )}

      {download && (
        <Link to="/DownloadClip" aria-label="DownloadClip">
          <FiSearch size={14} />
          Download Twitch Clips
        </Link>
      )}
    </Container>
  );
};

export default LinkBox;
