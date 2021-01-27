import styled, { keyframes } from 'styled-components';

export const appearFromTop = keyframes`
from {
    opacity: 0;
    transform: translateY(-1rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: sticky;
  top: 100%;
  padding: 1rem;

  animation: ${appearFromTop} 0.5s ease-in;

  .kofi-img {
    border: 0px;
    height: 2.5rem;
  }

  a {
    color: var(--text);
    font-weight: 700;
  }

  span {
    position: relative;
    display: flex;
    visibility: hidden;
    padding: 1rem;
  }

  &:hover {
    span {
      animation: all 0.2s linear;
      visibility: visible;
    }
  }
`;
