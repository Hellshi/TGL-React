import React from 'react';
import { games } from './recentGameMain';
import RecentGameComponentStyled from './styles/recentGameComponentStyled';

const recentGameComponent = ({ cart }: { cart: games[] }): JSX.Element => (
  <>
    {cart.length === 0 ? (
      <p> Opps, parece que não temos nenhum jogo aqui! </p>
    ) : (
      cart.map((item) => (
        <RecentGameComponentStyled color={item.color}>
          <div className="content">
            <p className="numbers">{item.numbers.join(', ')}</p>
            <span>
              30/07/2025 - (
              {item.price.toLocaleString('pt-br', {
                style: 'currency',
                currency: 'BRL',
              })}
              )
            </span>
            <span className="gameType">{item.type}</span>
          </div>
        </RecentGameComponentStyled>
      ))
    )}
  </>
);
export default recentGameComponent;
