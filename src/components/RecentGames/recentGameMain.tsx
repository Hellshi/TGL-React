import React from 'react';
import RecentGamesMainStyled from './styles/recentGamesMainStyled';
import RecentGameComponent from './recentGameComponent';

const recentGameMain: React.FC = () => (
  <RecentGamesMainStyled>
    <div className="topSelectors">
      <div className="selectors">
        <h2>Recent Games</h2>
        <button type="button">Lotofácil</button>
        <button type="button">Lotofácil</button>
        <button type="button">Lotofácil</button>
      </div>
      <div className="newBet">
        <button type="button">NewBet</button>
      </div>
    </div>
    <RecentGameComponent />
  </RecentGamesMainStyled>
);

export default recentGameMain;
