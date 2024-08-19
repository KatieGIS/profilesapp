import React from 'react';
import { Link } from 'react-router-dom';
// import './Navbar.css'; // Optional: add styling

function Navbar() {
  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Projects">Works</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        {/* <li><Link to="/resume">Resume</Link></li> */}
      </ul>
    </nav>
  );
}

export default Navbar;