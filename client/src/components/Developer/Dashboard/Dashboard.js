import React, { Component } from "react";
import "./Dashboard.css";
import Header from "../Global/Header/Header";
import ColumnOne from "./ColumnOne/ColumnOne";
import ColumnTwo from "./ColumnTwo/ColumnTwo";
import ColumnThree from "./ColumnThree/ColumnThree";

 
class Dashboard extends Component {
  render() {
    return (

    <div className="container">
    <Header />
      <div className="row">
        
          <ColumnOne />
        
      
          <ColumnTwo />
        
        
          <ColumnThree />
        
      </div>
    </div>
    )
  }
}


export default Dashboard;