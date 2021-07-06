import styled from 'styled-components';

const SingInStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 100%;

  h3 {
    align-self: center;
    font-style: italic;
    font-size: 1.5rem;
  }

  .FormInput {
    background-color: white;
    align-self: center;
    border-radius: 15px;
    width: 45%;
    height: 60%;
    border: 1px solid #00000014;
    padding: 10px 0 10px 0;
    margin: 1rem 0 1rem 0;
  }

  form {
    display: flex;
    flex-direction: column;
    border-color: teal;
    height: 100%;
  }

  .buttonsForm {
    display: flex;
    flex-direction: column;
    height: 30%;
  }

  form input {
    background-color: white;
    height: 5rem;
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

  form button {
    width: 100%;
    height: 100%;
    border: none;
    background-color: white;
    font-size: 1.8rem;
    color: #b5c401;
    path {
      color: #b5c401;
    }
    svg {
      margin-left: 10px;
      margin-right: 0px;
    }
  }

  button {
    width: 45%;
    align-self: center;
    padding: 15px;
    border: none;
    background-color: white;
    font-size: 1.8rem;
    font-weight: 900;
    font-style: italic;
    cursor: pointer;
    background-color: transparent;
    svg {
      background-color: transparent;
      margin-right: 10px;
    }
  }
`;
export default SingInStyled;
