// Footer.js
import React from 'react';
import Logo from "../images/Logo.svg";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer text-center">
      <footer className="footer">
        <div className="footer-content">
          
          <div className="logo">
            <img src={Logo} alt="Little Lemon Logo"/>
          </div>
          
          <div className="navigation">
            <h3>Doormat Navigation</h3>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Menu</a></li>
              <li><a href="#">Reservations</a></li>
              <li><a href="#">Order Online</a></li>
              <li><a href="#">Login</a></li>
            </ul>
          </div>

          <div className="contact">
            <h3>Contact</h3>
            <ul>
              <li>Address</li>
              <li>Phone Number</li>
              <li>Email</li>
            </ul>
          </div>

          <div className="social-media">
            <h3>Social Media Links</h3>
            <ul>
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </footer>

    </footer>
  );
}

export default Footer;
