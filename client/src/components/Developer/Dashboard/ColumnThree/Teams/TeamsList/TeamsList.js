import React from "react";
import "./TeamsList.css";

const TeamsList = props => (
  <div className="col-sm-12">
    <div className="col-lg-12">
      <img
        className="rounded-circle"
        alt={props.name}
        src={props.image}
        height="50"
        width="50"
      />
    </div>
    <div className="col-lg-12">
      <p>
        <strong /> {props.name}
      </p>
    </div>
  </div>
);

export default TeamsList;
