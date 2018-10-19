import React from "react";
import './SideDrawer.css';

const SideDrawer = props => (
    <nav>
        <ul className="side-drawer">
              <a href="/">Dashboard</a>
              <br></br>
              <a href="/">Search Developers</a>
              <br></br>
              <a href="/">Search Teams</a>
              <br></br>
              <a href="/">Create Team</a>
          </ul>
    </nav>
)

export default SideDrawer;