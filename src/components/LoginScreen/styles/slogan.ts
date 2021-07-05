import styled from 'styled-components';

const SloganStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
  vertical-align: middle;
  font-style: italic;
  font-weight: 800;

  p {
    width: 30%;
    font-size: 2.5rem;
    align-self: center;
    line-height: 3rem;
  }

  h1 {
    font-size: 4rem;
    line-height: 7rem;
    text-transform: uppercase;
  }

  span {
    background-color: #b5c401;
    width: 15%;
    color: white;
    border-radius: 15px;
    padding: 5px;
    margin-top: 20px;
    align-self: center;
  }
`;
export default SloganStyled;
