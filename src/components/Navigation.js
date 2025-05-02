import React from "react";

function Navigation({ path, title }) {
  const paths = [
    { url: "/", name: "Home" },
    { url: "/About", name: "About" },
    { url: "/Menu", name: "Menu" },
    { url: "/Reservations", name: "Reservations" },
    { url: "/Order", name: "Order Online" },
    { url: "/Login", name: "Login" },
  ];

  return (
    <nav>
      <ul>
        {paths.map((element) => (
          <li className="nav-item" key={element.url}>
            <a className="nav-link active" href={element.url}>
              {element.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
