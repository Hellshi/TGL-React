import styled from 'styled-components';

const recentGameMainStyled = styled.div`
  padding: 4rem 5rem;
  min-height: 60vh;
  .topSelectors {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    h2 {
      font-style: italic;
      text-transform: uppercase;
    }
    span {
      align-self: center;
      margin-left: 40px;
      font-style: italic;
      font-size: 1rem;
    }
  }

  .selectors {
    display: flex;
    flex-direction: row;
    button {
      margin-right: 1rem;
    }
  }

  .newBet {
    button {
      background-color: white;
      border: none;
      font-size: 1.5rem;
      font-style: italic;
      font-weight: 800;
      color: #b5c401;
      cursor: pointer;
      path {
        color: #b5c401;
        margin-left: 20px;
      }
      svg {
        margin-left: 10px;
      }
    }
  }

  @media (max-width: 1024px) {
    .topSelectors,
    .selectors {
      flex-direction: column;
      justify-content: center;
    }

    .selectors span {
      margin-right: 45px;
    }
  }
`;

export default recentGameMainStyled;
