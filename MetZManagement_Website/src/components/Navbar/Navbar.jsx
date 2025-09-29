import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png"; 
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="M&Z Management Logo" />
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/managers">Managers</Link></li>
        <li><Link to="/clients">Clients</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}