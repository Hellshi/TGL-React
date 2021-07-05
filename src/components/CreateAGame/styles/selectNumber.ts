import styled from 'styled-components';

const NumberHolder = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  button {
    margin-right: 0.4rem;
    cursor: pointer;
    margin-bottom: 0.4rem;
    width: 2.2rem;
    height: 2.2rem;
    border: none;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 1.8rem;
    color: white;
    background-color: #adc0c4;
    &:hover {
      background-color: #27c383;
      transition: 0.4s all;
    }
  }
`;
export default NumberHolder;
