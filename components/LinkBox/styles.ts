import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;

    svg {
      margin-right: 0.5rem;
    }
    a {
      color: var(--text);
    }
  }
`;
