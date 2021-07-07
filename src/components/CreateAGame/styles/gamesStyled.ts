import styled from 'styled-components';

const GamesStyled = styled.div<{ color: string }>`
  display: flex;
  flex-direction: row;
  svg {
    align-self: center;
    cursor: pointer;
  }

  path:hover {
    color: red;
    transition: 0.4s all;
  }
  gap: 10px;
  .content {
    display: flex;
    flex-direction: row;
    margin-bottom: 10px;
    &::before {
      content: '.';
      background-color: ${({ color }) => color};
      color: ${({ color }) => color};
      width: 5px;
      border-radius: 20px;
      margin-right: 8px;
    }
  }

  .games {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  p {
    font-style: italic;
    font-weight: bolder;
  }
`;

export default GamesStyled;
