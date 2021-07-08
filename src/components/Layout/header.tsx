/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'react-feather';
import HD from './styles/header';

const Header: React.FC = () => {
  const [open, setIsOpen] = useState(false);
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
        <Link to="/">LogOut</Link>
      </div>
    </HD>
  );
};
export default Header;
