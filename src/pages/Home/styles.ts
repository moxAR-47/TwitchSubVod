import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  form {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  input {
    background: #323232;
    height: 2rem;
    width: 20rem;
    padding: 0;
    color: #fefefe;
    text-align: center;
    margin-bottom: 0.5rem;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #9147ff;
    height: 2rem;
    width: 20rem;
    border: 2px solid #9147ff;
    color: #fefefe;

    & svg {
      margin-right: 0.5rem;
    }
  }

  a {
    margin-top: 0.5rem;
  }
`;
