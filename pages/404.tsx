import React from 'react';
import styled from 'styled-components';
import LinkBox from '@/components/LinkBox';
import notFoundImage from '@/assets/not-found.svg';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  img {
    object-fit: contain;
    max-width: 20rem;
  }
`;

const NotFound: React.FC = () => {
  return (
    <Container>
      <img src={notFoundImage} alt="404 - Not Found Page" />
      <h1>Oops... Something went wrong</h1>
      <LinkBox home />
      <LinkBox vods />
      <LinkBox clips />
      <LinkBox download />
    </Container>
  );
};

export default NotFound;
