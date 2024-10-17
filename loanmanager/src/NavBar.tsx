import React from 'react';
import './NavBar.css'; // Separate CSS for styling

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand"><b>CREDIT APP</b></div>
      <ul className="navbar-menu">
        <li><a href="/">Home</a></li>
        <li><a href="/payments">Payments</a></li>
        <li><a href="/budget">Budget</a></li>
        <li><a href="/card">Card</a></li>
        <li className="navbar-user">
          <a href="/user">User</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
