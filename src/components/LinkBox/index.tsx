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
        <Link to="/">
          <FiSearch size={14} />
          Home
        </Link>
      )}

      {clips && (
        <Link to="/DeletedClips">
          <FiSearch size={14} />
          Seach for deleted clips
        </Link>
      )}

      {vods && (
        <Link to="/DeletedVods">
          <FiSearch size={14} />
          Seach for deleted vods
        </Link>
      )}

      {download && (
        <Link to="/DownloadClip">
          <FiSearch size={14} />
          Download Twitch Clips
        </Link>
      )}
    </Container>
  );
};

export default LinkBox;
