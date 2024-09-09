import React from 'react';
import './Navbar.css';

const NavbarDemo: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li className="navbar-item"><a href="residential">Residential</a></li>
        <li className="navbar-item"><a href="commercial">Commercial</a></li>
        <li className="navbar-item"><a href="smarthome">Smarthome</a></li>
        <li className="navbar-item"><a href="bespoke">Bespoke</a></li>
      </ul>
    </nav>
  );
};

export default NavbarDemo;
