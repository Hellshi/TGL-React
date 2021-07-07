import React, { useState } from 'react';
import NumberHolder from './styles/selectNumber';

const numberSelectors = ({
  selectedGame,
  color,
  maxNumber,
}: {
  selectedGame: number;
  color: string;
  maxNumber: number;
}): JSX.Element => {
  const [selectedNumbers, setSelectedNumbers] = useState<(number | string)[]>(
    []
  );
  const handleSelectButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { value } = e.currentTarget;
    if (
      selectedNumbers.indexOf(value) === -1 &&
      selectedNumbers.length < maxNumber
    ) {
      e.currentTarget.className = 'selected';
      setSelectedNumbers((currentArr) => [...currentArr, value]);
    } else if (selectedNumbers.indexOf(value) !== -1) {
      e.currentTarget.className = '';
      setSelectedNumbers((currentArr) =>
        currentArr.filter((number) => number !== value)
      );
    }
  };
  // eslint-disable-next-line no-console
  console.log(selectedNumbers);
  const buttons = [];
  for (let i = 1; i <= selectedGame; i += 1) {
    buttons.push(
      <button type="button" value={i} key={`${i}`} onClick={handleSelectButton}>
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
