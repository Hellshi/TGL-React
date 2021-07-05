import React from 'react';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import LeftContainer from './styles/leftContainer';
import NumberSelectors from './numberSelectors';

const leftContainer: React.FC = () => (
  <LeftContainer>
    <div className="title">
      <h2>
        New bet for <span>Lotofácil</span>
      </h2>
    </div>

    <div className="rules">
      <h4>Choose a game</h4>

      <div>
        <button type="button" className="buttonsSelectors">
          Lotofácil
        </button>
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

export default leftContainer;
