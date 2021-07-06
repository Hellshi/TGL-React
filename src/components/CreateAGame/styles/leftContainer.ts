import styled from 'styled-components';

const LeftContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-self: center;
  font-style: italic;
  height: 100%;
  gap: 2rem;

  .numbers {
    padding-bottom: 10px;
    min-width: 240px;
  }

  span {
    font-weight: 500;
  }

  .title {
    text-transform: uppercase;
  }

  .buttonsDiv {
    gap: 10px;
    display: flex;
  }
  .gameOptions {
    border: 2px solid #27c383;
    border-radius: 10px;
    padding: 15px;
    font-weight: 600;
    background-color: transparent;
    color: #27c383;
    cursor: pointer;
    &:hover {
      background-color: #27c383;
      color: white;
      transition: 0.4s all;
    }
  }

  .buttonRigth > :not(:first-child) {
    margin-left: 10px;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .gameOptions.addToCart {
    background-color: #27c383;
    color: white;
    &:hover {
      background-color: #27c383dd;
      border-color: #27c383dd;
      color: white;
    }
    svg path {
      color: white;
    }
  }
`;
export default LeftContainer;
