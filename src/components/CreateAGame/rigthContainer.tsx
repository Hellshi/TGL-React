import React from 'react';
import RigthContainer from './styles/rigthContainer';

const rigthContainer: React.FC = () => (
  <>
    <RigthContainer>
      <div className="cartAndTotal">
        <h2>CART</h2>
        <div className="allGames">
          <div className="cart" />
        </div>
        <h2>
          CART <span className="price" />
        </h2>
      </div>
      <button type="button" className="save">
        Save
      </button>
    </RigthContainer>
  </>
);

export default rigthContainer;
