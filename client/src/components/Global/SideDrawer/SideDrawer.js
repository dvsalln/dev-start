import React from "react";
import "./SideDrawer.css";
import LogOut from "../../LogOut";
const SideDrawer = props => {
  let drawerClasses = "side-drawer";
  if (props.show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <div>
      <div>
      <ul className={drawerClasses}>
          <a href="/developer/dashboard">Dashboard</a>
            <br />
            <br />
          <a href="/developer/profile">My Profile</a>
            <br />
            <br />
          <a href="/sponsor/dashboard">Proposals</a>
            <br />
            <br />
          <a href="/sponsor/dashboard">Sponsors</a>
            <br />
            <br />
          <a href="/sponsor/dashboard">Leaderboard</a>
            <br />
            <br />
          <a href="/sponsor/dashboard">Teams</a>
            <br />
            <br />
          <a href="/sponsor/dashboard"></a>
            <br />
            <br />                    
          <LogOut />
      </ul>
      </div>
    </div>
  );
};

export default SideDrawer;
