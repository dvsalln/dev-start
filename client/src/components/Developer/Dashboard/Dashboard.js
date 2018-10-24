import React, { Component } from "react";
import "./Dashboard.css";
import Header from "../../Global/Header"
import ColumnOne from "./ColumnOne/ColumnOne";
import ColumnTwo from "./ColumnTwo/ColumnTwo";
import ColumnThree from "./ColumnThree/ColumnThree";
import SideDrawer from "../../Global/SideDrawer";
import Backdrop from "../../Global/Backdrop";

class Dashboard extends Component {
  state = {
    SideDrawerOpen: true
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { SideDrawerOpen: !prevState.SideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ SideDrawerOpen: false });
  };

  render() {
    let backdrop;
    let sideDrawer;

    if (this.state.SideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <div class="container-flex">
      <div style={{ height: "100%" }}>
        <div className="wrapper">
          <div className="row dev-db-row">
            <Header drawerToggleClickHandler={this.drawerToggleClickHandler}/>
            <SideDrawer show={this.state.SideDrawerOpen} />
            {backdrop}
            {sideDrawer}
            <ColumnOne />

            <ColumnTwo />

            <ColumnThree />
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default Dashboard;
