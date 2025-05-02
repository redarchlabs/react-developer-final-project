import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from  "./pages/Menu";
import Order from  "./pages/Order";
import Login from  "./pages/Login";
import Reservations from "./pages/Reservations";

function App() {
  return (
    <Router>
      <Routes>
          {/* Define routes for each page */}
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Reservations" element={<Reservations />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
    </Router>
  );
}

export default App;
