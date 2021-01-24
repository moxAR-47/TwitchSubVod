import React from 'react';
import LinkBox from '../../components/LinkBox';
import notFoundImage from '../../assets/not-found.svg';

import { Container } from './styles';

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
