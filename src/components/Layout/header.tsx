/* eslint-disable no-console */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import HD from './styles/header';
import { AuthActions } from '../../store/auth-slice';
import { RootState } from '../../App';

const Header: React.FC = () => {
  const dispatch = useDispatch();
  const isAdmin = useSelector((state: RootState) => state.auth.user.is_admin);
  const [open, setIsOpen] = useState(false);
  const handleLogOut = () => {
    dispatch(AuthActions.logout());
  };
  return (
    <HD open={open ? 1 : 0}>
      <div className="leftBox">
        <a href="#" className="logo">
          TGL
          <Menu onClick={() => setIsOpen(!open)} />
        </a>
        <Link to="/recent-games">Home</Link>
        {isAdmin ? (
          <>
            <Link to="/games">Games</Link>
            <Link to="/users">Users</Link>
          </>
        ) : (
          ''
        )}
      </div>
      <div className="rightBox">
        <Link to="/profile">Account</Link>
        <Link to="/" onClick={handleLogOut}>
          LogOut
        </Link>
      </div>
    </HD>
  );
};
export default Header;
