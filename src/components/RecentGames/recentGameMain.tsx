import React, { useState } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../CreateAGame/styles/button';
import RecentGamesMainStyled from './styles/recentGamesMainStyled';
import RecentGameComponent from './recentGameComponent';
import { Game } from '../../App';

const recentGameMain = ({ allGames }: { allGames: Game[] }): JSX.Element => {
  const history = useHistory();
  const handleNewBet = () => {
    history.push('/create-game');
  };
  const [selectedGame, setSelectedGame] = useState('');

  return (
    <RecentGamesMainStyled>
      <div className="topSelectors">
        <div className="selectors">
          <h2>Recent Games</h2>
          <span>Filters</span>
          {allGames.map((item) => (
            <Button type="button" color={item.color} active={0}>
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
      <RecentGameComponent />
    </RecentGamesMainStyled>
  );
};
export default recentGameMain;
