import React from 'react';
import MainStyled from './styles/mainLoggin';
import TGLSlogan from './TGLSlogan';
import ResetPassword from './forms/resetPassword';

const resetPasswordMain: React.FC = () => (
  <MainStyled>
    <div className="forms">
      <TGLSlogan />
    </div>
    <div className="login">
      <ResetPassword />
    </div>
  </MainStyled>
);

export default resetPasswordMain;
