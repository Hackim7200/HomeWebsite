import React from "react";
import "./NavBar.scss"
import {  Link } from "react-router-dom";

function NavBar() {
  return (
    <nav className="nav">
      {/* Logo or site name */}
      <a href="/" className="site-title">
        Site
      </a>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/">Iot</Link>
        </li>
        <li>
          <Link to="/">Aquarium</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
