import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1rem;

  span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    & + span {
      margin-top: 0.5rem;
    }

    svg {
      margin: 0 0.5rem 0 0.75rem;
    }

    a {
      color: var(--text);
    }
  }
`;
