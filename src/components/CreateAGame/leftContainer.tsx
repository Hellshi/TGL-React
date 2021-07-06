import React, { useEffect, useState } from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import LeftContainer from './styles/leftContainer';
import NumberSelectors from './numberSelectors';

const Button = styled.button<{ color: string }>`
  border-style: solid;
  border-radius: 20px;
  cursor: pointer;
  padding: 5px;
  border-color: ${({ color }) => color};
  background-color: white;
  color: ${({ color }) => color};
  font-size: 15px;
  font-weight: bold;
  outline: none;
  min-width: 130px;
  margin-bottom: 20px;

  &:hover {
    background-color: ${({ color }) => color};
    color: white;
    transition: 0.4s all;
  }
`;

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
  useEffect(() => {
    fetch('http://localhost:3333/types')
      .then((response) => response.json())
      .then((data) => setGames(data));
  }, []);
  return (
    <LeftContainer>
      <div className="title">
        <h2>
          New bet for <span>Lotofácil</span>
        </h2>
      </div>

      <div className="rules">
        <h4>Choose a game</h4>

        <div className="buttonsDiv">
          {games.map((game) => (
            <Button
              type="button"
              className={`buttonsSelectors ${game.type}`}
              color={game.color}
            >
              {game.type}
            </Button>
          ))}
        </div>

        <h4>Fill your bet!</h4>
        <span className="gameRules">
          Escolha 15 números para apostar na lotofácil. Você ganha acertando 11,
          12, 13, 14 ou 15 números. São muitas chances de ganhar, e agora você
          joga de onde estiver!
        </span>
      </div>

      <div className="numbers">
        <NumberSelectors />
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
