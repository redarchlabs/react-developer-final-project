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
        <header>{Header}</header>
        <main>{Main}</main>  {/* The content here will be customizable */}
        <footer>{Footer}</footer>
     
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
