import React from "react";
import "./Dashboard.css";
import Header from "../Global/Header/Header";
import ColumnOne from "./ColumnOne/ColumnOne";
import ColumnTwo from "./ColumnTwo/ColumnTwo";
import ColumnThree from "./ColumnThree/ColumnThree";

 
const Dashboard = () => {
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

export default Dashboard;