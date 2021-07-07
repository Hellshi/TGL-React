import React from 'react';
import NumberHolder from './styles/selectNumber';

const numberSelectors = ({
  selectedGame,
  color,
  maxNumber,
  selectedNumbers,
  setSelectedNumbers,
}: {
  selectedGame: number;
  color: string;
  maxNumber: number;
  selectedNumbers: (number | string)[];
  setSelectedNumbers: (
    newArr:
      | (string | number)[]
      | ((prev: (string | number)[]) => (string | number)[])
  ) => void;
}): JSX.Element => {
  const handleSelectButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = +e.currentTarget.value;
    if (
      selectedNumbers.indexOf(value) === -1 &&
      selectedNumbers.length < maxNumber
    ) {
      setSelectedNumbers((currentArr: (number | string)[]) => [
        ...currentArr,
        value,
      ]);
    } else {
      setSelectedNumbers((currentArr) =>
        currentArr.filter((number) => number !== value)
      );
    }
  };

  const buttons = [];
  for (let i = 1; i <= selectedGame; i += 1) {
    buttons.push(
      <button
        type="button"
        value={i}
        key={`${i}`}
        onClick={handleSelectButton}
        className={selectedNumbers.indexOf(i) > -1 ? 'selected' : ''}
      >
        {i}
      </button>
    );
  }

  return (
    <>
      <NumberHolder color={color}>
        {buttons.map((button) => button)}
      </NumberHolder>
    </>
  );
};
export default numberSelectors;
