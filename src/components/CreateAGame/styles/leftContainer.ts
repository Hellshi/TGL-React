import styled from 'styled-components';

const LeftContainer = styled.div`
  position: relative;
  max-width: 50vw;
  display: flex;
  flex-direction: column;
  align-self: center;
  left: 5vw;
  font-style: italic;
  height: 100%;
  gap: 2rem;

  .buttonsSelectors {
    border-style: solid;
    border-radius: 20px;
    padding: 5px;
    background-color: white;
    font-size: 15px;
    font-weight: bold;
    outline: none;
    min-width: 130px;
    margin-bottom: 20px;
  }

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

  .gameOptions {
    border: 2px solid #27c383;
    border-radius: 10px;
    margin-left: 10px;
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
  }
  .gameOptions svg path {
    color: white;
  }
`;
export default LeftContainer;
