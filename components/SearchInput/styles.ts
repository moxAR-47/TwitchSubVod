import styled from 'styled-components';

export const Container = styled.form`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  > div {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  input {
    background: var(--light-background);
    height: 2rem;
    width: 20rem;
    padding: 0;
    color: var(--text);
    text-align: center;
    margin-bottom: 0.5rem;
  }

  button[type='submit'] {
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--purple);
    height: 2rem;
    width: 20rem;
    border: 2px solid var(--purple);
    color: var(--button-text);

    & svg {
      margin-right: 0.5rem;
    }
  }
`;
