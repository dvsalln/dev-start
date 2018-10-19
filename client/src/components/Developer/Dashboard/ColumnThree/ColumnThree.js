import React from "react";
import Friends from "./Friends";
import Teams from "./Teams";
import "./ColumnThree.css";

const ColumnThree = () => (
  <div className="col-sm-4">
    <div className="column-three">
      
      <Teams />
      <Friends />
    
    </div>
  </div>
);

export default ColumnThree;