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

.Toastify__toast-container--top-center {
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

.Toastify__toast--success {
  background-color: white;
  .Toastify__progress-bar {
  background-color:  #8db600;
}}

input:focus,
select:focus,
textarea:focus,
button:focus {
  outline: none;
}
@media (max-width: 1024px) {
  #root {
    justify-content: start;
  }
}
`;
