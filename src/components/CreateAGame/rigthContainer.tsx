import React, { useEffect, useState } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import RigthContainer from './styles/rigthContainer';
import Games from './games';
import { CartItem } from './createAGameMain';

const rigthContainer = ({
  cart,
  setCart,
}: {
  cart: CartItem[];
  setCart: (
    cartItem: CartItem[] | ((prevCart: CartItem[]) => CartItem[])
  ) => void;
}): JSX.Element => {
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(
      cart.reduce((prevItem, currentItem) => prevItem + currentItem.price, 0)
    );
  }, [cart]);

  const deleteItemHandler = (id: number) =>
    setCart(cart.filter((item, index) => index !== id));

  return (
    <>
      <RigthContainer>
        <div className="cartAndTotal">
          <h2>CART</h2>
          <div className="allGames">
            {cart.map((item) => (
              <Games
                key={cart.indexOf(item)}
                numbers={item.numbers}
                color={item.color}
                type={item.type}
                price={item.price}
                id={cart.indexOf(item)}
                onDeleteHandler={deleteItemHandler}
              />
            ))}
          </div>
          <h2>
            CART
            <span className="price">
              {' '}
              {cart.length === 0 ? 'Your cart is empty :(' : totalPrice}
            </span>
          </h2>
        </div>
        <button type="button" className="save">
          Save <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </RigthContainer>
    </>
  );
};
export default rigthContainer;
