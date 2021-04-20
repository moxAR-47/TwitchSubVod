import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import { Container, AnimationContainer } from '@/styles/Home';
import LinkBox from '@/components/LinkBox';
import Footer from '@/components/Footer';
import SearchInput from '@/components/SearchInput';

const Home: React.FC = () => {
  useEffect(() => {
    ReactGA.initialize(`${process.env.NEXT_PUBLIC_GOOGLE_TRACKING}`, {
      testMode: process.env.NODE_ENV === 'test',
    });
    ReactGA.pageview('/');
  }, []);

  return (
    <Container>
      <AnimationContainer>
        <h1>Twitch Sub Vod</h1>
        <SearchInput />

        <LinkBox clips />
        <LinkBox vods />
        <LinkBox download />
      </AnimationContainer>
      <Footer />
    </Container>
  );
};

export default Home;
