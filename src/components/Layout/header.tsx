import React from 'react';
import { Link } from 'react-router-dom';
import HD from './styles/header';

const Header: React.FC = () => (
  <HD>
    <div className="leftBox">
      <Link to="/" className="logo">
        TGL
      </Link>
      <Link to="/">Home</Link>
    </div>
    <div className="rightBox">
      <Link to="/create-game">Account</Link>
      <Link to="/">LogOut</Link>
    </div>
  </HD>
);
export default Header;
