import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

  img {
    object-fit: contain;
    max-width: 20rem;
  }
`;
