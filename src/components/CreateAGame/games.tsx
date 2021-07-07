import React from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import GamesStyled from './styles/gamesStyled';

const games = ({
  numbers,
  color,
  type,
  price,
  id,
  onDeleteHandler,
}: {
  numbers: (number | string)[];
  color: string;
  type: string;
  price: number;
  id: number;
  onDeleteHandler: (id: number) => void;
}): JSX.Element => {
  const handleDelete = () => {
    onDeleteHandler(id);
  };
  return (
    <GamesStyled color={color}>
      <FontAwesomeIcon icon={faTrash} onClick={handleDelete} />
      <div className="content">
        <div className="games">
          <p className="numbers">{`${numbers.join(', ')}`}</p>
          <span>
            {type} {price}
          </span>
        </div>
      </div>
    </GamesStyled>
  );
};
export default games;
