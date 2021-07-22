import styled from 'styled-components';

const GamesAdm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 2rem;
  gap: 2rem;
  .game {
    display: flex;
    flex-direction: column;
    h2 {
      color: #b5c401;
      text-align: center;
      margin-bottom: 1rem;
    }
  }

  button {
    border: none;
    background-color: transparent;
    cursor: pointer;
    path:hover {
      color: red;
      transition: 0.4s all;
    }
  }

  table {
    display: flex;
    justify-content: space-around;
    flex: 0.5;
    min-width: 32rem;
    padding: 1rem;
    border: 1px solid #e2e2e2;
    border-radius: 25px;
    display: flex;
    flex-direction: row;
    tr {
      max-width: 20rem;
      margin: auto 1rem auto 1rem;
      display: flex;
      flex-direction: column;
    }
    td {
      text-align: center;
    }
  }
`;

export default GamesAdm;
