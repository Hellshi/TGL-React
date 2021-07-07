import React, { useEffect, useState } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LeftContainer from './styles/leftContainer';
import NumberSelectors from './numberSelectors';
import Button from './styles/button';

interface Game {
  type: string;
  description: string;
  range: number;
  price: number;
  'max-number': number;
  color: string;
  'min-cart-value': number;
}

const leftContainer: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game>({
    type: '',
    description: '',
    range: 10,
    price: 20,
    'max-number': 1,
    color: '',
    'min-cart-value': 1,
  });
  useEffect(() => {
    fetch('http://localhost:3333/types')
      .then((response) => response.json())
      .then((data) => {
        setGames(data);
        setSelectedGame(data[0]);
      });
  }, []);

  const [selectedNumbers, setSelectedNumbers] = useState<(number | string)[]>(
    []
  );

  const handleSelect = (type: string) => {
    const current = games.find((game: Game) => game.type === type);
    if (current) {
      setSelectedGame(current);
    }
  };
  return (
    <LeftContainer>
      <div className="title">
        <h2>
          New bet for <span>{selectedGame.type}</span>
        </h2>
      </div>

      <div className="rules">
        <h4>Choose a game</h4>

        <div className="buttonsDiv">
          {games.map((game) => (
            <Button
              type="button"
              id={game.type}
              key={game.type}
              color={game.color}
              onClick={() => handleSelect(game.type)}
              active={selectedGame.type === game.type ? 1 : 0}
            >
              {game.type}
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
          maxNumber={selectedGame['max-number']}
          selectedNumbers={selectedNumbers}
          setSelectedNumbers={setSelectedNumbers}
        />
      </div>

      <div className="buttons">
        <div className="buttonRigth">
          <button type="button" className="gameOptions">
            Complete Game
          </button>
          <button type="button" className="gameOptions">
            Clear Game
          </button>
        </div>
        <button type="button" className="gameOptions addToCart">
          <FontAwesomeIcon icon={faShoppingCart} color="#27c383" /> Add to cart
        </button>
      </div>
    </LeftContainer>
  );
};
export default leftContainer;
