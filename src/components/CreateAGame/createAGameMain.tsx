import React, { useEffect, useState } from 'react';
import RigthContainer from './rigthContainer';
import LeftContainer from './leftContainer';
import Main from './styles/createAGameMain';

export interface CartItem {
  type: string;
  price: number;
  color: string;
  numbers: (number | string)[];
}
const createAGameMain: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  return (
    <Main>
      <LeftContainer setCart={setCart} />
      <RigthContainer cart={cart} setCart={setCart} />
    </Main>
  );
};
export default createAGameMain;
