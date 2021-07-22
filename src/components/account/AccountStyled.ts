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
    width: 50%;
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
      background-color: red;
      border-style: solid;
      color: white;
      border-color: red;
      font-size: 1rem;
    }
  }
`;
export default AccountStyled;
