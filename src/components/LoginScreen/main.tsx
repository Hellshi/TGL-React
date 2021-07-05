import React from 'react';
import MainStyled from './styles/mainLoggin';
import TGLSlogan from './TGLSlogan';
import LogginForm from './forms/logginForm';
import SingIn from './forms/singInForm';
import ResetPassword from './forms/resetPassword';

const Main: React.FC = () => (
  <MainStyled>
    <div className="forms">
      <TGLSlogan />
    </div>
    <div className="login">
      {/* <LogginForm /> */}
      {/* <SingIn /> */}
      <ResetPassword />
    </div>
  </MainStyled>
);

export default Main;
