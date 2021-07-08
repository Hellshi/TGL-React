import styled from 'styled-components';

const Main = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;

  .login {
    min-width: 50vw;
    display: flex;
  }

  .forms {
    min-width: 50vw;
    display: flex;
  }

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    .login {
      width: 100vw;
    }
  }
`;
export default Main;
