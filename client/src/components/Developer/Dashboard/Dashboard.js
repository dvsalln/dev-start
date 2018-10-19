import React, { Component } from "react";
import "./Dashboard.css";
import Header from "../Global/Header/Header";
import ColumnOne from "./ColumnOne/ColumnOne";
import ColumnTwo from "./ColumnTwo/ColumnTwo";
import ColumnThree from "./ColumnThree/ColumnThree";
import SideNavPage from "../Global/SideNavPage/SideNavPage";
import SideDrawer from "../Global/SideDrawer/SideDrawer";
import Backdrop from "../Global/Backdrop/Backdrop";

class Dashboard extends Component {
  state = {
    SideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {SideDrawerOpen: !prevState.SideDrawerOpen};
    });
  }

  backdropClickHandler = () => {
    this.setState({SideDrawerOpen: false});
  };

  render() {
    
    let backdrop;

    if (this.state.SideDrawerOpen) {
     
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }

    return (
    <div style={{height: '100%'}}>
    <div className="container">
  

      <div className="row">
      <Header />
    <SideNavPage drawerToggleClickHandler={this.drawerToggleClickHandler} />
    <SideDrawer show={this.state.SideDrawerOpen} />
    {backdrop}

          <ColumnOne />
        
      
          <ColumnTwo />
        
        
          <ColumnThree />
        
      </div>
    </div>
    </div>
    )
  }
}


export default Dashboard;