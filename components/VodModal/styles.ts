import styled from 'styled-components';

interface AdsProps {
  isVisible: boolean;
}

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

export const Ads = styled.div<AdsProps>`
  z-index: ${({ isVisible }) => (isVisible ? '10' : '-1')};
  padding: 10% 20%;
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  overflow: hidden;
  justify-content: center;
  align-items: center;
  color: #fafafa;

  @media (max-width: 768px) {
    justify-content: flex-start;
  }

  button {
    top: 10%;
    position: absolute;
    padding: 1rem 2rem;
    background: var(--purple);
    color: inherit;
    transition: background 0.2s ease;

    :hover {
      background: var(--dark-purple);
    }
  }
`;
