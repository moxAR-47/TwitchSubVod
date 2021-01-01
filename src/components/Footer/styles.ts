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
  position: sticky;
  top: 100%;
  padding: 1rem;

  animation: ${appearFromTop} 0.5s ease-in;

  a {
    color: var(--text);
    font-weight: 700;
  }
`;
