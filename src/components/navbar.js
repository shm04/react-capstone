import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import backIcon from '../assets/back-icon.png';
import '../styles/navbar.css';

const Navbar = () => {
  const location = useLocation();

  const isActive = (pathname) => (location.pathname === pathname ? 'active' : '');

  return (
    <nav id="navbar">
      <ul id="menu">
        <li className={isActive('/')}>
          <Link to="/"><img id="back-icon" alt="back-icon" src={backIcon} /></Link>
        </li>
        <li className={isActive('/')}>
          <Link to="/"><img alt="logo" src={logo} /></Link>
        </li>
        <li className={isActive('/')}>
          <Link to="/">Soccer Leagues</Link>
        </li>
        <li className={isActive('/about')}>
          <Link id="about" to="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
