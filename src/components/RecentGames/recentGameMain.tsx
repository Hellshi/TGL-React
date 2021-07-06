import React from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RecentGamesMainStyled from './styles/recentGamesMainStyled';
import RecentGameComponent from './recentGameComponent';

const recentGameMain: React.FC = () => (
  <RecentGamesMainStyled>
    <div className="topSelectors">
      <div className="selectors">
        <h2>Recent Games</h2>
        <span>Filters</span>
        <button type="button">Lotofácil</button>
        <button type="button">Lotofácil</button>
        <button type="button">Lotofácil</button>
      </div>
      <div className="newBet">
        <button type="button">
          New Bet <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
    <RecentGameComponent />
  </RecentGamesMainStyled>
);

export default recentGameMain;
