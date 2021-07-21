/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import api from '../../services/api';
import Button from '../CreateAGame/styles/button';
import RecentGamesMainStyled from './styles/recentGamesMainStyled';
import RecentGameComponent, { RecentGames } from './recentGameComponent';
import { Game } from '../CreateAGame/leftContainer';

const recentGameMain = ({ allGames }: { allGames: Game[] }): JSX.Element => {
  // eslint-disable-next-line no-console
  const [selectedGame, setSelectedGame] = useState('');
  const [recentGames, setRecentGames] = useState<RecentGames[]>([]);
  const [filteredCart, setFilteredCart] = useState(recentGames);
  const history = useHistory();
  const handleNewBet = () => {
    history.push('/create-game');
  };

  useEffect(() => {
    api.get('/bet/all-bets').then(({ data }) => {
      setRecentGames(
        data.map((item: RecentGames) => ({
          ...item,
          created_at: (() => {
            const date = new Date(item.created_at);
            return date.toLocaleDateString('pt-BR');
          })(),
        }))
      );
    });
  }, []);

  useEffect(() => {
    setFilteredCart(recentGames);
  }, [recentGames]);

  const filterGameHandler = (e: React.MouseEvent) => {
    let filter = e.currentTarget.id;
    setSelectedGame(filter);
    if (filter !== '' && selectedGame === filter) {
      filter = '';
      setSelectedGame('');
      setFilteredCart(recentGames);
      return;
    }
    const filteredGames = recentGames.filter(
      (item) => item.type.game_type === filter
    );
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
              key={item.game_type}
              id={item.game_type}
              color={item.color}
              onClick={filterGameHandler}
              active={selectedGame === item.game_type ? 1 : 0}
            >
              {item.game_type}
            </Button>
          ))}
        </div>
        <div className="newBet">
          <button type="button" onClick={handleNewBet}>
            New Bet <FontAwesomeIcon icon={faArrowRight} />
          </button>
        </div>
      </div>
      <RecentGameComponent recentGames={filteredCart} />
    </RecentGamesMainStyled>
  );
};
export default recentGameMain;
