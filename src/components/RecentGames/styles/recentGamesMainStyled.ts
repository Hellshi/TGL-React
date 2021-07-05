import styled from 'styled-components';

const recentGameMainStyled = styled.div`
  padding: 0rem 5rem;
  border: 1px solid red;
  .topSelectors {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .selectors {
    display: flex;
    flex-direction: row;
    button {
      margin-right: 1rem;
    }
  }
`;

export default recentGameMainStyled;
