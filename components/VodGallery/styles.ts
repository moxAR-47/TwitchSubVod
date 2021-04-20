import styled, { css, keyframes } from 'styled-components';
import { appearFromTop } from '@/utils/animations/appearFromTop';

interface AnimatedProps {
  url: string;
  animated: any;
}

export const StreamerInformation = styled.div`
  * {
    margin: 0;
  }

  display: flex;
  margin-top: 3rem;
  max-width: 320px;
  color: var(--text);
  cursor: pointer;
  transition: all 0.2s ease;

  :hover {
    color: var(--purple);

    img {
      border: 2px solid var(--purple);
    }
  }

  div {
    img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      margin-right: 1rem;
      border: 2px solid var(--text);
    }

    display: flex;
    flex-direction: column;
    justify-content: space-evenly;

    p {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
`;

export const Container = styled.div`
  max-width: 60rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  div {
    max-width: 19rem;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    width: 19rem;

    button {
      width: 19rem;
      padding: 0;
      display: flex;
      flex-direction: column;
      background-color: transparent;
      color: var(--text);
      font-family: 'Roboto', sans-serif;

      &:hover {
        color: var(--purple);
      }

      div {
        max-height: 10.6875rem;
        margin: 0;

        &:hover {
          background: var(--purple);
        }
      }

      > span {
        display: flex;
        justify-content: space-between;
        width: 100%;
        p {
          margin: 0;
          font-size: 0.75rem;
          font-weight: normal;
        }
      }
    }

    strong {
      word-wrap: break-word;
      margin: 0.2rem 0;
      font-size: 0.9rem;
      font-weight: bold;
      max-width: 100%;
    }
  }

  div & {
    padding: 1rem 0;
  }
`;

const play = keyframes`
    100% {
        background-position: 0 -1800px;
      }
`;

export const Image = styled.figure<AnimatedProps>`
  ${(props) =>
    props.url &&
    css`
      background: url(${props.url}) no-repeat top center;
    `}
  background-size: contain;
  margin: 0;
  display: flex;
  height: 10.6875rem;
  width: 19rem;
  object-fit: contain;

  transition: transform 0.075s ease;
  animation: ${appearFromTop} 0.25s ease-out;

  &:hover {
    transform: translateX(0.5rem) translateY(-0.5rem);
    max-height: 10.6875rem;
    object-fit: cover;

    ${(props) =>
      props.animated
        ? css`
            background: url(${props.animated});
          `
        : css`
            background: url(${props.url});
          `}

    animation: ${play} 7s steps(10) infinite;
  }

  span {
    background: rgb(24, 26, 27, 0.6);
    color: #f1f1f1;
    position: absolute;
    margin: 0.5rem;
    padding: 0.15rem 0.2rem;
    border-radius: 0.1rem;
    font-weight: bold;
  }
`;
