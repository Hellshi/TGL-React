import React from 'react';
import MainStyled from './styles/mainLoggin';
import TGLSlogan from './TGLSlogan';
import LogginForm from './forms/logginForm';

const Main: React.FC = () => (
  <MainStyled>
    <div className="forms">
      <TGLSlogan />
    </div>
    <div className="login">
      <LogginForm />
    </div>
  </MainStyled>
);

export default Main;
