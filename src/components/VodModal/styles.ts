import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 2rem;
  position: relative;
  width: 60rem;
  height: 33.75rem;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;

    iframe {
      height: 100vh;
    }
  }

  @media (max-width: 960px) {
    width: 48rem;
    height: 27rem;
  }

  @media (max-width: 768px) {
    width: 30rem;
    height: 16.875rem;
  }

  @media (max-width: 480px) {
    width: 22.5rem;
    height: 12.65625rem;
  }
`;
