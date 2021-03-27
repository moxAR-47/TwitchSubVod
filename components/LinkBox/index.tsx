import React from 'react';
import { FiSearch } from 'react-icons/fi';
import Link from 'next/link';

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
        <Link href="/" aria-label="Home">
          <span>
            <FiSearch size={14} />
            Home
          </span>
        </Link>
      )}

      {clips && (
        <Link href="/DeletedClips" aria-label="DeletedClips">
          <span>
            <FiSearch size={14} />
            Search for deleted clips
          </span>
        </Link>
      )}

      {vods && (
        <Link href="/DeletedVods" aria-label="DeletedVods">
          <span>
            <FiSearch size={14} />
            Search for deleted vods
          </span>
        </Link>
      )}

      {download && (
        <Link href="/DownloadClip" aria-label="DownloadClip">
          <span>
            <FiSearch size={14} />
            Download Twitch Clips
          </span>
        </Link>
      )}
    </Container>
  );
};

export default LinkBox;
