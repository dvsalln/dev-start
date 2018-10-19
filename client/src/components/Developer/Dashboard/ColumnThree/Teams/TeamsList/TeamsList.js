import React from "react";
import "./TeamsList.css";

const TeamsList = props => (
  <div className="row">
    <div className="col-4">
      <img
        className="rounded-circle"
        alt={props.name}
        src={props.image}
        height="50"
        width="50"
      />
    </div>
    <div className="col-8">
      <p>
        <strong /> {props.name}
      </p>
    </div>
  </div>
);

export default TeamsList;
