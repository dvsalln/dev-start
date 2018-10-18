import React from "react";
import "./FriendList.css";

const FriendList = props => (
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

export default FriendList;
