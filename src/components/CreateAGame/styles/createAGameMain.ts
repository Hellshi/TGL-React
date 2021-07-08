import styled from 'styled-components';

const Main = styled.div`
  height: 70%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5vw;
  gap: 5vw;

  @media (max-width: 1024px) {
    flex-direction: column-reverse;
  }
`;
export default Main;
