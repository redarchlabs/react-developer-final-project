import React from "react";

function Navigation() {
  const paths = [
    { url: "/", name: "Home" },
    { url: "/About", name: "About" },
    { url: "/Menu", name: "Menu" },
    { url: "/Booking", name: "Booking" },
    { url: "/Reservations", name: "Reservations" },
    { url: "/Order", name: "Order Online" },
    { url: "/Login", name: "Login" },
  ];

  return (
    <nav>
      <menu className="container">
        {paths.map((element) => (
          <li className="nav-item" key={element.url}>
            <a className="nav-link" href={element.url}>
              {element.name}
            </a>
          </li>
        ))}
      </menu>
    </nav>
  );
}

export default Navigation;
