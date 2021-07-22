import styled from 'styled-components';

const UsersMain = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 10% 3rem;
  flex-wrap: wrap;
  h1 {
    width: 100%;
    text-align: center;
  }
  gap: 2rem;
  .user {
    border: 1px solid #e2e2e2;
    border-radius: 20px;
    h2 {
      color: #b5c401;
    }

    display: flex;
    justify-content: space-around;
    align-items: center;
    flex: 0.5;
    min-width: 32rem;
    padding: 1rem;
    img {
      width: 5rem;
      max-height: 5rem;
      border-radius: 100px;
    }
  }
  button [data-icon='user-times'] {
    path {
      color: #b71c1c;
    }
  }

  button [data-icon='user-tie'] {
    path {
      color: #b5c401;
    }
  }
  button {
    cursor: pointer;
    border-color: transparent;
    background-color: transparent;
  }
`;

export default UsersMain;
