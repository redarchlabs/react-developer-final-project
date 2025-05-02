// Header.js
import React from 'react';
import Logo from "../images/Logo.svg";
import Navigation from './Navigation';
function Header() {
  return (
    <span className="header">
          <div>
              <a href="#"><img src={Logo} height="60px" width="auto" alt="Red Arch Workflow" /></a>
          </div>
          <Navigation/>
   </span>
  );
}

export default Header;
