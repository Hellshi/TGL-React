import styled from 'styled-components';

const Button = styled.button<{ color: string; active: number }>`
  border-style: solid;
  border-radius: 20px;
  cursor: pointer;
  padding: 5px;
  border-color: ${({ color }) => color};
  background-color: ${({ active, color }) => (active === 1 ? color : 'white')};
  color: ${({ active, color }) => (active === 1 ? 'white' : color)};
  font-size: 15px;
  font-weight: bold;
  outline: none;
  min-width: 130px;
  margin-bottom: 20px;

  &:hover {
    background-color: ${({ color }) => color};
    color: white;
    transition: 0.4s all;
  }
`;

export default Button;
