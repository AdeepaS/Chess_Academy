import React from 'react';
import './Footer.css';
import { FaPhoneAlt, FaWhatsapp, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>Nobel Warriors Chess Academy</h3>
          <p>Strategic minds are built here.</p>
        </div>

        <div className="footer-section">
          <h4>Contact Us</h4>
          <p><FaPhoneAlt /> <a href="tel:+94112223344">+94 112 223 344</a></p>
          <p><FaWhatsapp /> <a href="https://wa.me/94771234567" target="_blank" rel="noopener noreferrer">+94 77 123 4567</a></p>
          <p><FaEnvelope /> <a href="mailto:info@nobelchess.lk">info@nobelchess.lk</a></p>
        </div>

        <div className="footer-section">
          <h4>Our Location</h4>
          <p>
            <FaMapMarkerAlt />{' '}
            <a
              href="https://www.google.com/maps/place/Colombo,+Sri+Lanka"
              target="_blank"
              rel="noopener noreferrer"
            >
              Colombo, Sri Lanka
            </a>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nobel Warriors Chess Academy. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer
