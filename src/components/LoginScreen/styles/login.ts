import styled from 'styled-components';

const FormDiv = styled.div`
  .formDiv {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    width: 100%;
  }

  h3 {
    align-self: center;
    font-style: italic;
    font-size: 1.5rem;
  }

  .FormInput {
    align-self: center;
    border-radius: 15px;
    width: 45%;
    height: 50%;
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
    height: 55%;
  }

  form input {
    height: 4rem;
    border-bottom: 2px solid #00000014;
    border-top: none;
    border-left: none;
    border-right: none;
  }

  input::placeholder {
    padding-left: 20px;
    font-size: 1.2em;
  }

  form button {
    width: 100%;
    border: none;
    background-color: white;
    font-size: 1rem;
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
  }
`;

export default FormDiv;
