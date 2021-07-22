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

  [data-icon='edit'] {
    path:hover {
      color: #b5c401;
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

  form {
    display: flex;
    flex-direction: column;
    border-color: teal;
    background-color: white;
    align-self: center;
    border-radius: 15px;
    min-width: 100%;
    border: 1px solid #00000014;
    padding: 10px 0 10px 0;
    margin: 1rem 0 1rem 0;
    padding: 2rem;
    background-color: white;
    button {
      width: 100%;
      border: none;
      font-size: 2rem;
      background-color: white;
      font-size: 1.8rem;
      background-color: transparent;
      color: #b5c401;
      font-weight: 900;
      font-style: italic;
      path {
        color: #b5c401;
      }
      svg {
        margin-left: 10px;
      }
    }
    input {
      background-color: white;
      height: 1rem;
      margin-bottom: 1rem;
      padding: 20px;
      border-bottom: 2px solid #00000014;
      border-top: none;
      border-left: none;
      border-right: none;
    }

    .buttons {
      display: flex;
      flex-direction: row;
    }

    button {
      cursor: pointer;
    }

    h2 {
      text-align: center;
      margin-bottom: 1rem;
    }

    label {
      display: flex;
      flex-direction: column;
      margin-bottom: 1rem;
      margin-left: 1rem;
    }
  }

  .createAGame {
    width: 100%;
    border: none;
    font-size: 2rem;
    background-color: white;
    font-size: 1.8rem;
    background-color: transparent;
    color: #b5c401;
    font-weight: 900;
    font-style: italic;
    path {
      color: #b5c401;
    }
    svg {
      margin-left: 10px;
    }
  }
`;

export default GamesAdm;
