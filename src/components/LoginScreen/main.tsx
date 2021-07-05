import React from 'react';
import classes from './styles/mainLoggin.module.css';
import TGLSlogan from './TGLSlogan';
import LogginForm from './forms/logginForm';
import SingIn from './forms/singInForm';
import ResetPassword from './forms/resetPassword';

const Main: React.FC = () => (
  <div className={classes.main}>
    <div className={classes.forms}>
      <TGLSlogan />
    </div>
    <div className={classes.login}>
      {/* <LogginForm /> */}
      {/* <SingIn /> */}
      <ResetPassword />
    </div>
  </div>
);

export default Main;
