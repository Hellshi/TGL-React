import React from 'react';
import MainStyled from './styles/mainLoggin';
import TGLSlogan from './TGLSlogan';
import ResetForm from './forms/reset';

const Reset: React.FC = () => (
  <MainStyled>
    <div className="forms">
      <TGLSlogan />
    </div>
    <div className="login">
      <ResetForm />
    </div>
  </MainStyled>
);

export default Reset;
