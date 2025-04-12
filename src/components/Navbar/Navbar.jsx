import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { useSelector, useDispatch } from "react-redux";
import profileImage from '../../assets/images/profile.png';
import { logout } from '../../slices/authentication/authSlice';

const Navbar = ({popupHandler}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [PopUpOpen, setPopUpOpen] = useState(true);
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn=useSelector((state)=> state.auth.isLoggedIn);
  const dispatch=useDispatch();
  // const dispatch = useDispatch();

  console.log("user in navbar",user);
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">ArchiExpert</Link>
      </div>

      {/* Navigation Links Container */}
      <div className={`navbar-links-container ${menuOpen ? "active" : ""}`}>
        {/* User Profile (Appears first in mobile view) */}
       {isLoggedIn ? (
  <div className="user-profile" onClick={()=>{setPopUpOpen(!PopUpOpen); popupHandler(PopUpOpen) }}>
    <img src={profileImage} alt="Profile" className="profile-pic" />
    <span className="UserProfileName">{user.name}</span>
  </div>
) : (
  <Link to="/Signup" onClick={()=>{setMenuOpen(false)}}>
    <button className="auth-button">
      <span className="auth-button-text">Login / Signup</span>
    </button>
  </Link>
)}
        {/* Navigation Links */}
        <div className="navbar-links">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/About" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/Contacts" onClick={() => setMenuOpen(false)}>Contact</Link>
          {isLoggedIn &&
          <button className='logoutButton' onClick={()=> {dispatch(logout()); setMenuOpen(false)}}>logout</button>
          }
        
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
