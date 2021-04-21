import styled from 'styled-components';
import { appearFromTop } from '@/utils/animations/appearFromTop';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: sticky;
  top: 100%;
  padding: 1rem;
  margin-bottom: 5rem;

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
    padding: 1rem;
  }
`;
