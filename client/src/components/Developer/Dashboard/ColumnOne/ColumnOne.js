import React from "react";
import "./ColumnOne.css";

const ColumnOne = () => {
  return (
  <div className="col-4">
    <div className="card">
    
    </div>
    <div className="card-body">
        <h2>DevStart</h2>
        </div>
    <div>
        <ul>
            <li><a href="/">Dashboard</a></li>
            <li><a href="/">Search Developers</a></li>
            <li><a href="/">Search Teams</a></li>
            <li><a href="/">Create Team</a></li>
        </ul>
    </div>

  </div>
  );
};

export default ColumnOne;
