import React from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png'; // relative path from Navbar.jsx to assets

const Navbar = () => {
  return (
    <div className='navbar'>
      <img src={logo} alt="Logo" className="logo" />
    </div>
  );
};

export default Navbar;

