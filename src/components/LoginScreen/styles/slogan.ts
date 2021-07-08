import styled from 'styled-components';

const SloganStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;
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

  @media (max-width: 1024px) {
    display: none;
    p {
      font-size: 1.25rem;
      line-height: 1.5rem;
      width: 100%;
    }
    h1 {
      font-size: 2rem;
      line-height: 3.5rem;
    }
    span {
      font-size: 0.8rem;
      margin-top: 10px;
    }
  }
`;
export default SloganStyled;
