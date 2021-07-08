import React from 'react';
import { useSelector } from 'react-redux';
import RecentGameComponentStyled from './styles/recentGameComponentStyled';

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

const recentGameComponent = (): JSX.Element => {
  const cart = useSelector((state: RootState) => state.cart.buyedGames);
  return (
    <>
      {cart.map((item) => (
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
      ))}
    </>
  );
};
export default recentGameComponent;
