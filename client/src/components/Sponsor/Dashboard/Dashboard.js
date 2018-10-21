import React, { Component } from "react";
import Header from "../../Global/Header";
import ColumeOne from "./ColumnOne";
import ColumnTwo from "./ColumnTwo";
import ColumnThree from "./ColumnThree";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="container dashboard">
          <div className="row">
            <ColumeOne />
            <ColumnTwo />
            <ColumnThree />
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
