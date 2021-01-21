import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;

  select {
    width: 50%;
    background-color: var(--light-background);
    color: var(--text);
    border: none;
    padding: 0.25rem;
  }
`;
