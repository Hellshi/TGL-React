import styled from 'styled-components';

const NumberHolder = styled.div<{ color: string }>`
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
      background-color: ${({ color }) => color};
      transition: 0.4s all;
    }

    &.selected {
      background-color: ${({ color }) => color};
    }
  }
`;
export default NumberHolder;
