import styled from 'styled-components';

const AccountStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;
  padding: 2rem 4rem;

  h3 {
    align-self: center;
    font-style: italic;
    font-size: 1.5rem;
  }

  form {
    display: flex;
    flex-direction: column;
    border-color: teal;
    height: 100%;
    background-color: white;
    align-self: center;
    border-radius: 15px;
    min-width: 45%;
    height: 50%;
    border: 1px solid #00000014;
    padding: 10px 0 10px 0;
    margin: 1rem 0 1rem 0;
    background-color: white;
  }

  button {
    cursor: pointer;
  }
  form button {
    width: 100%;
    border: none;
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

  img {
    width: 250px;
    height: 250px;
    border-radius: 200px;
  }

  .buttonsForm {
    display: flex;
    flex-direction: column;
    height: 30%;
  }

  input {
    background-color: white;
    height: 1rem;
    margin-bottom: 1rem;
    padding: 20px;
    padding: 20px;
    border-bottom: 2px solid #00000014;
    border-top: none;
    border-left: none;
    border-right: none;
  }

  input::placeholder {
    font-size: 1.2em;
  }

  .editProfile {
    margin-top: 5rem;
    h2 {
      margin-bottom: 2rem;
    }
  }

  .main {
    display: flex;
    flex-direction: row;
    h1 {
      margin-bottom: 2rem;
    }
  }

  .informations {
    align-self: center;
    margin-left: 5rem;
    display: flex;
    height: 7rem;
    flex-direction: column;
    justify-content: space-between;
    button {
      background-color: #b71c1c;
      border-style: solid;
      color: white;
      border-color: #b71c1c;
      font-size: 1rem;
    }
  }
  @media (max-width: 1024px) {
    .main {
      flex-direction: column;
    }
    .informations {
      margin: 0;
    }
    h1 {
      text-align: center;
    }
  }
`;
export default AccountStyled;
