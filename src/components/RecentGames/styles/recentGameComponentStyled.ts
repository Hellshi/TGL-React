import styled from 'styled-components';

const RecentGameComponentStyled = styled.div<{ color: string }>`
  display: flex;
  flex-direction: row;
  margin-top: 1.8rem;
  &::before {
    content: '.';
    background-color: ${({ color }) => color};
    color: ${({ color }) => color};
    width: 5px;
    border-radius: 20px;
    margin-right: 8px;
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  p {
    font-size: 1.2rem;
    font-style: italic;
    font-weight: bolder;
  }

  .gameType {
    color: ${({ color }) => color};
    font-weight: bolder;
  }
`;

export default RecentGameComponentStyled;
