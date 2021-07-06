import React from 'react';
import MainStyled from './styles/mainLoggin';
import TGLSlogan from './TGLSlogan';
import SingIn from './forms/singInForm';

const singInMain: React.FC = () => (
  <MainStyled>
    <div className="forms">
      <TGLSlogan />
    </div>
    <div className="login">
      <SingIn />
    </div>
  </MainStyled>
);

export default singInMain;
