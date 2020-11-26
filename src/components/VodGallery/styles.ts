import styled from 'styled-components';

export const Container = styled.div`
  max-width: 60rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  div {
    max-width: 19rem;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;

    a {
      display: flex;
      flex-direction: column;
      color: #efefef;

      &:hover {
        color: var(--purple);
      }

      div {
        margin: 0.5rem 0;
        background: var(--purple);
      }
    }

    img {
      max-width: 19rem;
      display: flex;
      object-fit: contain;
      transition: transform 0.075s ease;

      &:hover {
        transform: translateX(0.5rem) translateY(-0.5rem);
      }
    }

    strong {
      word-wrap: break-word;
    }

    p {
      margin: 0.1rem;
      font-size: 0.75rem;
    }
  }

  div & {
    padding: 1rem 0;
  }
`;
