import React from 'react';
import './index.css';
import { Link } from "react-router-dom";

function Header() {
  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <div className="navbar-header">
              <p className="header-brand">SECRET LOVE STORY</p>
            </div>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li id="home" className="nav-item header-margin">
                  <Link to="/" className="nav-link">HOME</Link>
                </li>
                <li id="login" className="nav-item header-margin">
                  <Link to="/secretlovestory/login" className="nav-link">LOGIN</Link>
                </li>
                <li id="register" className="nav-item header-margin">
                  <Link to="/secretlovestory/register" className="nav-link">REGISTER</Link>
                </li>
                <li id="about" className="nav-item header-margin">
                  <Link to="/secretlovestory/about" className="nav-link">ABOUT</Link>
                </li>
                <li id="contact" className="nav-item header-margin">
                  <Link to="/secretlovestory/contact" className="nav-link">CONTACT US</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
  );
}

export default Header;
