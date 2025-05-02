// Header.js
import React from 'react';
import Logo from "../images/Logo.svg";
import Navigation from './Navigation';
import "../styles/Header.css"; // Import CSS for styling

function Header() {
  return (
    <>
    <span className="container">
        <img src={Logo} height="60px" width="auto" alt="Little Lemon" />
        <Navigation/>
          
   </span>
   
   </>
  );
}

export default Header;
