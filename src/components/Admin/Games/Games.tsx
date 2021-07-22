/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import GamesADMStyled from './GamesADMStyled';
import { Game } from '../../CreateAGame/leftContainer';

const Games = (): JSX.Element => {
  const [games, setGames] = useState<Game[]>([]);
  useEffect(() => {
    api.get('/all-games').then(({ data }) => {
      console.log(data);
      setGames(data);
    });
  }, []);

  const handleDelete = (id: number) => {
    api.delete(`/admin/delete-game/${id}`).then(() => {
      toast.warn('Game deleted');
    });
  };

  return (
    <>
      <GamesADMStyled>
        {games.map((game) => (
          <div className="game">
            <h2 style={{ color: game.color }}>{game.game_type}</h2>
            <table>
              <tr>
                <th>Description:</th>
                <td>{game.description}</td>
              </tr>
              <tr>
                <th>Range:</th>
                <td>{game.range}</td>
              </tr>
              <tr>
                <th>Price:</th>
                <td>
                  {game.price.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
                </td>
              </tr>
              <tr>
                <th>Min cart value:</th>
                <td>{game.min_cart_value}</td>
              </tr>
              <tr>
                <button type="button">
                  <FontAwesomeIcon
                    icon={faTrash}
                    size="2x"
                    onClick={() => handleDelete(game.id)}
                  />
                </button>
              </tr>
            </table>
          </div>
        ))}
      </GamesADMStyled>
    </>
  );
};
export default Games;
