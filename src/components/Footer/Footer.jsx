import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3 className="footer-heading">ArchHire</h3>
          <p className="footer-text">Connecting top architectural talent with innovative projects worldwide.</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/portfolio">Portfolio</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <ul className="contact-info">
            <li><i className="fas fa-map-marker-alt"></i> 123 Architect St, Design City</li>
            <li><i className="fas fa-phone"></i> +1 (555) 123-4567</li>
            <li><i className="fas fa-envelope"></i> info@archhire.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} ArchHire. All rights reserved.</p>
        <div className="legal-links">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
