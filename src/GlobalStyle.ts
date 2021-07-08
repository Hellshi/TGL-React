import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`

* {
  margin: 0px;
  padding: 0px;
  font-family: "Inter", sans-serif;
  box-sizing: border-box;
  color: #707070;
}

#root {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
}

.Toastify__toast--error {
  background-color: white;
  .Toastify__progress-bar {
  background-color: #b00020;
}
}

.Toastify__toast--warning {
  background-color: white;
  .Toastify__progress-bar {
  background-color: #ffde03;
}
}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}

`;
