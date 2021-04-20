import React from 'react';
import { FiExternalLink, FiSearch } from 'react-icons/fi';
import Link from 'next/link';

import { Container } from './styles';

interface LinksProps {
  home?: boolean;
  clips?: boolean;
  vods?: boolean;
  download?: boolean;
  all?: boolean;
}

const LinkBox = ({ home, clips, vods, download, all }: LinksProps) => {
  if (all) {
    return (
      <Container>
        <Link href="/" aria-label="Home">
          <span>
            Home
            <FiExternalLink size={14} />
          </span>
        </Link>
        <Link href="/deletedclips" aria-label="DeletedClips">
          <span>
            Search for Deleted Clips
            <FiExternalLink size={14} />
          </span>
        </Link>
        <Link href="/deletedvods" aria-label="DeletedVods">
          <span>
            Search for Deleted Vods
            <FiExternalLink size={14} />
          </span>
        </Link>
        <Link href="/downloadclip" aria-label="DownloadClip">
          <span>
            Download Twitch Clips
            <FiExternalLink size={14} />
          </span>
        </Link>
      </Container>
    );
  }

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
        <Link href="/deletedclips" aria-label="DeletedClips">
          <span>
            <FiSearch size={14} />
            Search for deleted clips
          </span>
        </Link>
      )}

      {vods && (
        <Link href="/deletedvods" aria-label="DeletedVods">
          <span>
            <FiSearch size={14} />
            Search for deleted vods
          </span>
        </Link>
      )}

      {download && (
        <Link href="/downloadclip" aria-label="DownloadClip">
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
