import React from "react";
import PropTypes from "prop-types";
import Logo from "../images/Logo.svg";
import "../styles/main.css";

export function Layout({
  Header,
  Main,
  Footer
}) {
  return (
    <>
      <html lang="en">    
        <head>
          <meta charset="UTF-8"/>
          <meta name="description" content="Our quaint restaurant offers a warm and inviting atmosphere where comfort meets flavor."/>
          <meta name="og:title" content="Little Lemon Restaraunt"/>
          <meta name="og:description" content="A website for reviewing menus and reserving tables."/>
          <meta name="og:image" content={Logo}/>
        </head>
        <header>{Header}</header>
        <main>{Main}</main>  {/* The content here will be customizable */}
        <footer>{Footer}</footer>
      </html>
    </>
  );
}

Layout.defaultProps = {
  Header: <div>Default Header</div>,
  Footer: <div>&copy; 2025 Little Leom</div>,
};

Layout.propTypes = {
  Header: PropTypes.node,
  Footer: PropTypes.node,
  Main: PropTypes.node.isRequired
};
