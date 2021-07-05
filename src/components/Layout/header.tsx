import React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import HD from './styles/header';

const Header: React.FC = () => (
  <HD>
    <div className="leftBox">
      <Router>
        <Link to="/" className="logo">
          TGL
        </Link>
        <Link to="/">Home</Link>
      </Router>
    </div>
    <div className="rightBox">
      <Router>
        <Link to="/">LogOut</Link>
        <Link to="/">Account</Link>
      </Router>
    </div>
  </HD>
);

export default Header;
