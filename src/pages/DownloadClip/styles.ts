import styled, { keyframes } from 'styled-components';

export const appearFromBottom = keyframes`
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }

`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
`;

export const AnimationContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  animation: ${appearFromBottom} 0.5s;

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  input {
    background: var(--light-background);
    height: 2rem;
    width: 20rem;
    padding: 0.5rem;
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

  a {
    margin-top: 0.5rem;
  }
`;

export const Thumbnail = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 0;
  max-width: 20rem;

  img {
    max-width: 100%;
    height: auto;
  }

  strong {
    padding-top: 0.5rem;
  }

  div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin: 0;

    p {
      display: flex;
      align-self: flex-start;
      margin: 0;
    }

    a {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;

      margin: 1rem 0;
      padding: 0.5rem;

      border-radius: 0.25rem;
      background-color: var(--purple);
      color: #f1f1f1;

      transition: background-color 0.2s linear;

      svg {
        margin-right: 0.5rem;
      }

      &:hover {
        background-color: var(--dark-purple);
      }
    }
  }
`;
