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

  a {
    color: #fafafa;
    background: #323b43;
    padding: 3rem 2rem;
    border-radius: 8px;
    transition: background 0.2s ease;

    p {
      margin: 0;
      opacity: 0.4;
      width: 100%;
      text-align: end;
    }

    :hover {
      background: #1b2125;
    }
  }
  @media (max-width: 768px) {
    padding: 0;

    a {
      padding: 2rem 2rem;
      margin-top: 0;
    }
  }

  button {
    top: 5%;
    right: 3%;
    position: absolute;
    padding: 0.1rem 0.3rem;
    border-radius: 5px;
    line-height: 0;
    background: var(--purple);
    color: inherit;
    font-weight: bold;
    display: flex;
    align-items: center;
    transition: background 0.2s ease;

    svg {
      margin-left: 0.5rem;
    }

    :hover {
      background: var(--dark-purple);
    }
  }
`;
