import React from 'react';
import DrawerToggle from "../SideDrawer/DrawerToggle";
import './SideNavPage.css';

const SideNavPage = props => (
    <header className="sidebar">
        <nav className="sidebar-nav">
        <div>
            <DrawerToggle click={props.drawerClickHandler} />
        </div>
        <div className="nav-logo"><a href="/">DevStart</a></div>
        <div className="spacer" />
        <div className="nav-items">
            <ul>
                <li><a href="/">Dashboard</a></li>
                <br></br>
                <li><a href="/">Search Developers</a></li>
                <br></br>
                <li><a href="/">Search Teams</a></li>
                <br></br>
                <li><a href="/">Create Team</a></li>

            </ul>

        </div>
        </nav>
    </header>
);

export default SideNavPage;