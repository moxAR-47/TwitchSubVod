import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Container } from './styles';

interface LinksProps {
  home?: boolean;
  clips?: boolean;
  vods?: boolean;
}

const LinkBox = ({ home, clips, vods }: LinksProps) => {
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

      {/* <Link to="/DeletedClips">Seach for deleted vods</Link> */}
    </Container>
  );
};

export default LinkBox;
