import React from "react";
import "./TeamsList.css";

const TeamsList = props => (
<div>
      <img
        className="rounded-circle"
        alt={props.name}
        src={props.image}
        height="50"
        width="50"
      />
    
  
      <p>
        <strong /> {props.name}
      </p>
</div>
);

export default TeamsList;
