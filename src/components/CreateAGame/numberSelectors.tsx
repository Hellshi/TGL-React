import React, { useState } from 'react';
import NumberHolder from './styles/selectNumber';

const numberSelectors = ({
  selectedGame,
}: {
  selectedGame: number;
}): JSX.Element => {
  const buttons = [];
  for (let i = 0; i <= selectedGame; i += 1) {
    buttons.push(
      <button type="button" id={`${i}`}>
        {i}
      </button>
    );
  }

  return (
    <>
      <NumberHolder>{buttons.map((button) => button)}</NumberHolder>
    </>
  );
};
export default numberSelectors;
