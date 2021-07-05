import styled from 'styled-components';

const RigthContainer = styled.div`
  border: 1px solid #e2e2e2;
  border-radius: 1.25rem;
  word-wrap: break-word;
  display: flex;
  min-width: 20vw;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  width: 17.5rem;
  min-height: 21.5rem;
  background-color: white;

  .cartAndTotal {
    padding: 1.25rem;
  }

  .save {
    background: #f4f4f4;
    color: #27c383;
    border: none;
    width: 100%;
    padding: 0.9rem;
    font-weight: bolder;
    font-size: 1.5rem;
    font-style: italic;
    border-radius: 0rem 0rem 1.25rem 1.25rem;
  }
`;

export default RigthContainer;
