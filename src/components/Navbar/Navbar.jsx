import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import profileImage from '../../assets/images/profile.png';

const Navbar = ({ isLoggedIn }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">ArchHire</Link>
      </div>

      {/* Navigation Links Container */}
      <div className={`navbar-links-container ${menuOpen ? "active" : ""}`}>
        {/* User Profile (Appears first in mobile view) */}
        {isLoggedIn ? (
          <div className="user-profile">
            <img src={profileImage} alt="Profile" className="profile-pic" />
            <span>Username</span>
          </div>
        ) : (
          <Link to="/Signup"><button>Login/Signup</button></Link>
        )}

        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/About" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/Contacts" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
