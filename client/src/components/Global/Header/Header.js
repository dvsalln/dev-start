import React from "react";
import "./Header.css";
import DrawerToggle from '../DrawerToggle';
import SignUpBtn from "../SignUpBtn"
import LogInBtn from "../LogInBtn";

const Header = props => (
  <header className="header">
  
      
      <nav className="navbar bg-ds-blue fixed-top">
      <DrawerToggle click={props.drawerClickHandler} />
      <SignUpBtn />
      <LogInBtn />
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
      
        </div>
      </nav>
  </header>
);

export default Header;
