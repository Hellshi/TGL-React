/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import LeftContainer from './styles/leftContainer';
import NumberSelectors from './numberSelectors';
import Button from './styles/button';
import api from '../../services/api';
import { CartItem } from './createAGameMain';

export interface Game {
  id: number | null;
  game_type: string;
  description: string;
  range: number;
  price: number;
  max_number: number;
  color: string;
  min_cart_value: number;
}

const leftContainer = ({
  setCart,
}: {
  setCart: (
    cartItem: CartItem[] | ((prevCart: CartItem[]) => CartItem[])
  ) => void;
}): JSX.Element => {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game>({
    id: null,
    game_type: '',
    description: '',
    range: 10,
    price: 20,
    max_number: 1,
    color: '',
    min_cart_value: 1,
  });
  useEffect(() => {
    api('/all-games').then(({ data }) => {
      setGames(data);
      setSelectedGame(data[0]);
    });
  }, []);
  const [selectedNumbers, setSelectedNumbers] = useState<(number | string)[]>(
    []
  );

  const handleSelect = (type: string) => {
    const current = games.find((game: Game) => game.game_type === type);
    if (current) {
      setSelectedGame(current);
    }
    setSelectedNumbers([]);
  };

  const generateRandomGameHandler = () => {
    const numbers = [];
    while (numbers.length < selectedGame.max_number) {
      const randomNumber = Math.floor(Math.random() * selectedGame.range);

      if (numbers.indexOf(randomNumber) === -1 && randomNumber > 0) {
        numbers.push(randomNumber);
      }
    }
    setSelectedNumbers(numbers);
  };

  const clearClearGame = () => {
    setSelectedNumbers([]);
  };

  const handleAddToCart = () => {
    if (selectedNumbers.length < selectedGame.max_number) {
      toast.error(
        `Opps, selecione mais ${
          selectedGame.max_number - selectedNumbers.length
        } números para continuar!`
      );
      return;
    }
    setCart((prevCart) => [
      ...prevCart,
      {
        id: selectedGame.id,
        type: selectedGame.game_type,
        numbers: selectedNumbers,
        color: selectedGame.color,
        price: selectedGame.price,
      },
    ]);
    setSelectedNumbers([]);
  };
  return (
    <LeftContainer>
      <div className="title">
        <h2>
          New bet for <span>{selectedGame.game_type}</span>
        </h2>
      </div>

      <div className="rules">
        <h4>Choose a game</h4>

        <div className="buttonsDiv">
          {games.map((game) => (
            <Button
              type="button"
              id={game.game_type}
              key={game.game_type}
              color={game.color}
              onClick={() => handleSelect(game.game_type)}
              active={selectedGame.game_type === game.game_type ? 1 : 0}
            >
              {game.game_type}
            </Button>
          ))}
        </div>

        <h4>Fill your bet!</h4>
        <span className="gameRules">{selectedGame.description}</span>
      </div>

      <div className="numbers">
        <NumberSelectors
          selectedGame={selectedGame.range}
          color={selectedGame.color}
          maxNumber={selectedGame.max_number}
          selectedNumbers={selectedNumbers}
          setSelectedNumbers={setSelectedNumbers}
        />
      </div>

      <div className="buttons">
        <div className="buttonRigth">
          <button
            type="button"
            className="gameOptions"
            onClick={generateRandomGameHandler}
          >
            Complete Game
          </button>
          <button
            type="button"
            className="gameOptions"
            onClick={clearClearGame}
          >
            Clear Game
          </button>
        </div>
        <button
          type="button"
          className="gameOptions addToCart"
          onClick={handleAddToCart}
        >
          <FontAwesomeIcon icon={faShoppingCart} color="#27c383" /> Add to cart
        </button>
      </div>
    </LeftContainer>
  );
};
export default leftContainer;
