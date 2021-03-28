import { keyframes } from 'styled-components';

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
