import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <nav>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/About">About</Link>
        </span>
        <span>
          <Link to="/Menu">Menu</Link>
        </span>
        <span>
          <Link to="/Blog">Blog</Link>
        </span>
        <span>
          <Link to="/Reserve">Reserve</Link>
        </span>
        <span>
          <Link to="/Contact">Contact</Link>
        </span>
      </nav>
    </header>
  );
};

export default Header;
