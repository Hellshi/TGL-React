import styled from 'styled-components';

const FormDiv = styled.div`
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
    align-self: center;
    border-radius: 15px;
    min-width: 45%;
    height: 50%;
    border: 1px solid #00000014;
    padding: 10px 0 10px 0;
    margin: 1rem 0 1rem 0;
    background-color: white;
  }

  form {
    display: flex;
    flex-direction: column;
    border-color: teal;
    height: 100%;
    background-color: white;
  }

  .buttonsForm {
    display: flex;
    flex-direction: column;
    height: 55%;
    background-color: white;
  }

  form input {
    height: 8rem;
    padding: 20px;
    border-bottom: 2px solid #00000014;
    border-top: none;
    border-left: none;
    border-right: none;
    background-color: white;
  }

  input::placeholder {
    font-size: 1.2em;
  }

  form button {
    width: 100%;
    border: none;
    background-color: white;
    font-size: 1.8rem;
    background-color: transparent;
    color: #b5c401;
    path {
      color: #b5c401;
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
    background-color: transparent;
    svg {
      margin-left: 10px;
    }
    cursor: pointer;
  }

  .reset {
    text-align: end;
    font-size: 0.8rem;
    font-weight: 300;
    color: #c1c1c1;
  }

  @media (max-width: 1024px) {
    button,
    form button {
      font-size: 1.3rem;
    }
  }
`;

export default FormDiv;
