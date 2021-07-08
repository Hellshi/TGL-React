import React, { useEffect, useState } from 'react';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import RigthContainer from './styles/rigthContainer';
import Games from './games';
import { CartActions } from '../../store/cart-slice';

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
  const dispatch = useDispatch();
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    setTotalPrice(
      cart.reduce((prevItem, currentItem) => prevItem + currentItem.price, 0)
    );
  }, [cart]);

  const deleteItemHandler = (id: number) =>
    setCart(cart.filter((item, index) => index !== id));

  const saveGamesHandler = () => {
    if (cart.length === 0) {
      toast.warning('Opa, adicione algum jogo ao carrinho primeiro!');
      return;
    }
    if (totalPrice < 30) {
      toast.warning(
        'Opa, para completar essa ação seu carrinho deve ter um valor maior que R$30,00. Continue comprando e tente novamente'
      );
      return;
    }
    toast.success('Jogo adicionado com sucesso!');
    dispatch(CartActions.buyGames(cart));
    setCart([]);
  };

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
              {cart.length === 0
                ? 'Your cart is empty :('
                : totalPrice.toLocaleString('pt-br', {
                    style: 'currency',
                    currency: 'BRL',
                  })}
            </span>
          </h2>
        </div>
        <button type="button" className="save" onClick={saveGamesHandler}>
          Save <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </RigthContainer>
    </>
  );
};
export default rigthContainer;
