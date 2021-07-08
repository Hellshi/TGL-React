import React, { useEffect, useState } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import Button from '../CreateAGame/styles/button';
import RecentGamesMainStyled from './styles/recentGamesMainStyled';
import RecentGameComponent from './recentGameComponent';
import { Game } from '../../App';

export interface games {
  numbers: (number | string)[];
  type: string;
  color: string;
  price: number;
}

interface RootState {
  cart: {
    buyedGames: games[];
  };
}

const recentGameMain = ({ allGames }: { allGames: Game[] }): JSX.Element => {
  const cart = useSelector((state: RootState) => state.cart.buyedGames);
  const [selectedGame, setSelectedGame] = useState('');
  const [filteredCart, setFilteredCart] = useState(cart);
  const history = useHistory();
  const handleNewBet = () => {
    history.push('/create-game');
  };

  const filterGameHandler = (e: React.MouseEvent) => {
    let filter = e.currentTarget.id;
    setSelectedGame(filter);
    if (filter !== '' && selectedGame === filter) {
      filter = '';
      setSelectedGame('');
      setFilteredCart(cart);
      return;
    }
    const filteredGames = cart.filter((item) => item.type === filter);
    setFilteredCart(filteredGames);
  };

  return (
    <RecentGamesMainStyled>
      <div className="topSelectors">
        <div className="selectors">
          <h2>Recent Games</h2>
          <span>Filters</span>
          {allGames.map((item) => (
            <Button
              type="button"
              key={item.type}
              id={item.type}
              color={item.color}
              onClick={filterGameHandler}
              active={selectedGame === item.type ? 1 : 0}
            >
              {item.type}
            </Button>
          ))}
        </div>
        <div className="newBet">
          <button type="button" onClick={handleNewBet}>
            New Bet <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <RecentGameComponent cart={filteredCart} />
    </RecentGamesMainStyled>
  );
};
export default recentGameMain;
