import React from "react";
import "./Nav.scss";

function Nav() {
  return (
    <nav className="nav">
      {/* Logo or site name */}
      <a href="/" className="site-title">
        Site
      </a>
      <ul>
        <li>
          <a href="/">About</a>
        </li>
        <li>
          <a href="/">Iot</a>
        </li>
        <li>
          <a href="/">Aquarium</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
