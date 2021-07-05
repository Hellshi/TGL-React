import styled from 'styled-components';

const RecentGameComponentStyled = styled.div`
  display: flex;
  flex-direction: row;
  &::before {
    content: '.';
    background-color: #7f3992;
    color: #7f3992;
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
`;

export default RecentGameComponentStyled;
