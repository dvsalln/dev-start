import React from "react";
import Friends from "./Friends";
import Teams from "./Teams";
import "./ColumnThree.css";

const ColumnThree = () => (
  <div class=".col-sm-4">
    <div className="column-three">
      <div className="col-4">
      <Teams />
      <Friends />
      </div>
    </div>
  </div>
);

export default ColumnThree;