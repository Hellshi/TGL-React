/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'react-feather';
import { useSelector, useDispatch } from 'react-redux';
import HD from './styles/header';
import { AuthActions } from '../../store/auth-slice';
import { RootState } from '../../App';

const Header: React.FC = () => {
  const auth = useSelector((state: RootState) => state.auth.isAuth);
  const dispatch = useDispatch();
  const [open, setIsOpen] = useState(false);
  const handleLogOut = () => {
    dispatch(AuthActions.auth);
  };
  return (
    <HD open={open ? 1 : 0}>
      <div className="leftBox">
        <a href="#" className="logo">
          TGL
          <Menu onClick={() => setIsOpen(!open)} />
        </a>
        <Link to="/">Home</Link>
      </div>
      <div className="rightBox">
        <Link to="/recent-games">Account</Link>
        {auth ? (
          <Link to="/" onClick={handleLogOut}>
            LogOut
          </Link>
        ) : (
          ''
        )}
      </div>
    </HD>
  );
};
export default Header;
