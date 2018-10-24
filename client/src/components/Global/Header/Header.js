import React from "react";
import "./Header.css";
import DrawerToggle from '../DrawerToggle';


const Header = props => (
  <header className="header">
  
      
      <nav className="navbar bg-ds-blue fixed-top">
      <DrawerToggle />
        {/* add router to the anchor tag */}
        <a className="navbar-brand">
          <span className="devstart-brand">DevStart</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarsExampleDefault"
          aria-controls="navbarsExampleDefault"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse">
          {/* import SignInBtn and LogInBtn here */}
        </div>
      </nav>
  </header>
);

export default Header;
