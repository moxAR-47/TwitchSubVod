import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 2rem;

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;

    .time-container {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      input {
        width: 2rem;
        margin: 0 0.4rem;
        appearance: textfield;
      }
    }
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
    color: var(--text);

    & svg {
      margin-right: 0.5rem;
    }
  }

  .video-container {
    max-width: 60rem;
    margin-top: 2rem;
  }
`;
