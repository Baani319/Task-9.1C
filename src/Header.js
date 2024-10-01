import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header({ isLoggedIn, onLogout }) {
  return (
    <header className="header">
      <div className="logo">DEV@Deakin</div>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
      </div>
      <div className="nav-buttons">
        <button>Post</button>
        {isLoggedIn ? (
          <button onClick={onLogout}>SignOut</button>
        ) : (
          <Link to="/login">
            <button>Login</button>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Header;
