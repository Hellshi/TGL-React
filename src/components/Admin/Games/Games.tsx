/* eslint-disable no-console */
import React, { useState, useEffect, useRef } from 'react';
import {
  faTrash,
  faEdit,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { toast } from 'react-toastify';
import api from '../../../services/api';
import GamesADMStyled from './GamesADMStyled';
import { Game } from '../../CreateAGame/leftContainer';

const Games = (): JSX.Element => {
  const [games, setGames] = useState<Game[]>([]);
  const [editing, setEditting] = useState(false);

  const [type, setType] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [range, setRange] = useState(0);
  const [maxNumber, setMaxNumber] = useState(0);
  const [minCart, setMinCart] = useState(0);
  const [color, setColor] = useState('');
  const [Gameid, setGameId] = useState(0);

  const loadGames = () => {
    api.get('/all-games').then(({ data }) => setGames(data));
  };
  useEffect(() => {
    loadGames();
  }, []);

  const handleDelete = (id: number) => {
    api.delete(`/admin/delete-game/${id}`).then(() => {
      toast.warn('Game deleted');
      loadGames();
    });
  };

  const handleEdit = (game: Game) => {
    setEditting(true);

    setType(game.game_type);
    setDescription(game.description);
    setPrice(game.price);
    setRange(game.range);
    setMaxNumber(game.max_number);
    setMinCart(game.min_cart_value);
    setColor(game.color);
    setGameId(game.id);
  };

  const handleEditGame = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(Gameid);
    api
      .put(`/admin/update-game/${Gameid}`, {
        game_type: type,
        description,
        range,
        price,
        max_number: maxNumber,
        color,
        min_cart_value: minCart,
      })
      .then(({ data }) => {
        console.log(data);
        toast.success('Jogo atualizado com sucesso');
        setEditting(false);
        loadGames();
      });
  };

  return (
    <>
      <GamesADMStyled>
        {editing ? (
          <form onSubmit={handleEditGame}>
            <h2>Editar um jogo</h2>
            <label htmlFor="type">
              Game Type{' '}
              <input
                type="text"
                id="type"
                value={type}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setType(e.target.value)
                }
              />
            </label>
            <label htmlFor="description">
              Game Description
              <input
                type="text"
                id="description"
                value={description}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setDescription(e.target.value)
                }
              />
            </label>
            <label htmlFor="range">
              Range{' '}
              <input
                type="number"
                id="range"
                value={range}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setRange(+e.target.value)
                }
              />
            </label>
            <label htmlFor="price">
              Price{' '}
              <input
                type="number"
                id="price"
                step="0.1"
                min="0"
                value={price}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setPrice(+e.target.value)
                }
              />
            </label>
            <label htmlFor="maxNum">
              Max Number{' '}
              <input
                type="number"
                id="maxNum"
                value={maxNumber}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setMaxNumber(+e.target.value)
                }
              />
            </label>
            <label htmlFor="MinCart">
              Min Cart Value{' '}
              <input
                type="number"
                id="MinCart"
                value={minCart}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setMinCart(+e.target.value)
                }
              />
            </label>
            <label htmlFor="color">
              Color{' '}
              <input
                type="text"
                id="color"
                value={color}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setColor(e.target.value)
                }
              />
            </label>
            <div className="buttons">
              <button
                type="button"
                onClick={() => setEditting(false)}
                style={{ color: '#707070' }}
              >
                Cancel
              </button>
              <button type="submit">
                Submit <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </form>
        ) : (
          games.map((game) => (
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
                      icon={faEdit}
                      size="2x"
                      onClick={() => handleEdit(game)}
                    />
                  </button>
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
          ))
        )}
      </GamesADMStyled>
    </>
  );
};
export default Games;
