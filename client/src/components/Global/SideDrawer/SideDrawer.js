import React from "react";
import './SideDrawer.css';

const SideDrawer = props => {
    let drawerClasses = 'side-drawer';
    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
    return (
    <nav>
        <ul className={drawerClasses}>
              <a href="/developer/dashboard">Dashboard</a>
              <br></br>
              <a href="/">Search Devs</a>
              <br></br>
              <a href="/">Search Teams</a>
              <br></br>
              <a href="/">Create Team</a>
          </ul>
    </nav>
    )
};

export default SideDrawer;