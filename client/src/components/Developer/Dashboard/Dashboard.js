import React from "react";
import "./Dashboard.css";
import Header from "../Global/Header/Header";
import ColumnOne from "./ColumnOne/ColumnOne";
import ColumnTwo from "./ColumnTwo/ColumnTwo";
import ColumnThree from "./ColumnThree/ColumnThree";

 
const Dashboard = () => {
  return (

    <div className="dashboard">
      <Header />
      <ColumnOne />
      <ColumnTwo />
      <ColumnThree />
   
   
    </div>
  )
}

export default Dashboard;