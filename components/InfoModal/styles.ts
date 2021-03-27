import styled, { keyframes } from 'styled-components';

export const appearFromRight = keyframes`
from {
    opacity: 0;
    transform: translateX(2rem);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  position: relative;
  display: flex;

  .info-box {
    display: flex;
    place-content: center;
    visibility: hidden;
    width: 12rem;
    /* height: 4.5rem; */
    padding: 0;
    background-color: var(--dark-purple);
    color: #fff;
    text-align: center;
    border-radius: 0.5rem;

    position: absolute;
    z-index: 1;
    top: -1.8rem;
    right: 100%;

    a {
      margin-left: 0.15rem;
      color: var(--text);
      font-weight: 600;
    }
  }

  &:hover {
    .info-box {
      visibility: visible;

      animation: ${appearFromRight} 0.2s;
    }
  }
`;
