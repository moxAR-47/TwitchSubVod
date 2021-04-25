import { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import api from '@/utils/services/api';
import VodGallery from '@/components/VodGallery';
import LoadingModal from '@/components/LoadingModal';
import SearchInput from '@/components/SearchInput';
import Footer from '@/components/Footer';
import LinkBox from '@/components/LinkBox';
import streamersPaths from './data.json';
import { useGlobal } from '@/stores/GlobalContext';
import { Container } from '@/styles/Home';

interface TwitchVideoProps {
  videos: Array<{
    broadcast_id: number;
    channel: {
      _id: number;
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

export const getStaticPaths = async () => {
  const paths = streamersPaths.mostSearchedStreamers.map((streamerPath) => {
    return { params: { streamer: streamerPath.toLowerCase() } };
  });

  return {
    paths: paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const streamer = params?.streamer;

  const twitchData: TwitchVideoProps = await api
    .get(`users?login=${streamer}`)
    .then(async (response) => {
      try {
        return await api
          .get(`channels/${response.data.users[0]._id}/videos?limit=9`)
          .then((channelResponse: any) => {
            if (channelResponse.data.videos.length !== 0)
              return channelResponse.data;
          });
      } catch (err) {
        console.warn(err);
      }
    });

  if (!twitchData) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      twitchData,
    },
    revalidate: 60,
  };
};

const Videos = ({
  twitchData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { videoQuality } = useGlobal();
  const data: TwitchVideoProps = twitchData;

  if (!data) {
    return (
      <Container>
        <LoadingModal />
      </Container>
    );
  }

  const streamerName = data.videos[0].channel.display_name;

  const getOGUrl = () => {
    return `https://og-image.vercel.app/${streamerName}%20%7C%20Sub-only%20vods%20%7C%20**PogU.live**.png?theme=dark&md=1&fontSize=100px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fvercel-triangle-white.svg&images=https%3A%2F%2Fpogu.live%2Fandroid-chrome-192x192.png&images=${encodeURI(
      data.videos[0].channel.logo,
    )}&images=https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2Fremojansen%2Flogo.ts%40master%2Fts.svg&widths=1&widths=300&widths=300&widths=1&heights=1&heights=300&heights=300&heights=1`;
  };

  return (
    <>
      <Head>
        <title>{`${streamerName} - PogU`}</title>
        <meta property="og:title" content={`${streamerName} - Sub-only VODS`} />
        <meta
          property="og:url"
          content={`https://pogu.live/videos/${streamerName}`}
        />
        <meta property="og:image" content={getOGUrl()} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content={`Watch ${streamerName}'s sub-only Twitch VOD for free. PogU`}
        />
      </Head>
      <Container>
        <span>
          <img src="/favicon.ico" alt="PogU.live" />
          <h1>PogU</h1>
        </span>
        <SearchInput />
        <LinkBox all={true} />
        <VodGallery data={data.videos} quality={videoQuality} />
        <Footer />
      </Container>
    </>
  );
};

export default Videos;
