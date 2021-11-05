import React from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <Link to="/" className="nav-logo">
            <img src={logo} alt="simply recipes" />
          </Link>
          <button className="btn nav-btn">
            <i className="fas fa-align-justify"></i>
          </button>
        </div>
        <div className="nav-links">
          <Link to="/" className="nav-link">
            home
          </Link>
          <Link to="/tags/" className="nav-link">
            kategorien
          </Link>
          <a href="/" className="nav-link">
            rezepte
          </a>
          <div className="nav-link contact-link">
            <a href="/" className="btn">
              rezept hinzufügen
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
