import { GetStaticProps, InferGetStaticPropsType } from 'next';
import api from '@/utils/services/api';
import VodGallery from '@/components/VodGallery';
import { Container } from '@/styles/Home';
import LoadingModal from '@/components/LoadingModal';
import streamersPaths from './data.json';

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
        const responseData = await api
          .get(`channels/${response.data.users[0]._id}/videos?limit=100`)
          .then((channelResponse: any) => {
            if (channelResponse.data.videos.length !== 0)
              return channelResponse.data;
          });
        return responseData;
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
  const data: TwitchVideoProps = twitchData;

  if (!data) {
    return (
      <Container>
        <LoadingModal />
      </Container>
    );
  }

  return (
    <Container>
      <VodGallery data={data.videos} quality={'chunked'} />
    </Container>
  );
};

export default Videos;
