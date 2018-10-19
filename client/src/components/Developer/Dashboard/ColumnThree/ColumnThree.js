import React from "react";
import Friends from "./Friends";
import Teams from "./Teams";
import "./ColumnThree.css";

const ColumnThree = () => (
  <div className="col-2">
      <Teams />
      <Friends />
    </div>
);

export default ColumnThree;