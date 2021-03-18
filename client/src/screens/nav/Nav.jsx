import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
const Nav = () => {
  return (
    <div className="nav">
      <Link to="/">
        <h1>GRACEN HUDACHEK</h1>
      </Link>
      <div className="links-container">
        <Link className="nav-link" to="about-me">
          About Me
        </Link>
        <Link className="nav-link" to="/work">
          My Work
        </Link>
        <Link className="nav-link" to="/contact">
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Nav;
