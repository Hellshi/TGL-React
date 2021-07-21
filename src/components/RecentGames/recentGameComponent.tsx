/* eslint-disable no-console */
import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import RecentGameComponentStyled from './styles/recentGameComponentStyled';

export interface RecentGames {
  id: number;
  choosen_numbers: string;
  user_id: number;
  game_id: number;
  price: number;
  created_at: string;
  type: {
    id: number;
    game_type: string;
    description: string;
    range: number;
    price: number;
    max_number: number;
    color: string;
    min_cart_value: number;
  };
}

const recentGameComponent = ({
  recentGames,
}: {
  recentGames: RecentGames[];
}): JSX.Element => (
  <>
    {recentGames.length === 0 ? (
      <p> Opps, parece que não temos nenhum jogo aqui! </p>
    ) : (
      recentGames.map((item) => (
        <RecentGameComponentStyled color={item.type.color} key={item.id}>
          <div className="content">
            <p className="numbers">{item.choosen_numbers}</p>
            <span>
              {item.created_at}- (
              {item.price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
              )
            </span>
            <span className="gameType">{item.type.game_type}</span>
          </div>
        </RecentGameComponentStyled>
      ))
    )}
  </>
);
export default recentGameComponent;
