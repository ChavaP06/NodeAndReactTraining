import React from "react";
import LogoutButton from "./LogoutBtn"

function Header() {
  return (
    <div>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars" />
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="/home" className="nav-link">
              Home
            </a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="/graph" className="nav-link">
              Graph
            </a>
          </li>
        </ul>
        {/* Right navbar links */}
        <li className="nav-item d-none d-sm-inline-block ml-auto">
          <ul className="navbar-nav ml-auto">
           
            <LogoutButton />
          </ul>
        </li>
      </nav>
    </div>
  );
}

export default Header;


