import React from "react";
import "./ColumnOne.css";
import Avatar from "./Avatar";

const ColumnOne = () => (
  <div class=".col-6 .col-sm-4">
  <div className="column-one">
  <div className="row">
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="col-4">
            <Avatar />
          </div>
          <div className="col-8">
            <div className="title">
              <h2 className="user-name">FirstName LastName</h2>
              <h3 className="user-title text-muted">Full Stack Developer</h3>
            </div>
            {/* Below is hard coded and will be replaced with user's data when connect to BE */}
          </div>
        </div>
        <div className="card">
      
      </div>
      <div className="card-body">
         
          </div>
      <div>
          <ul className="nav-links">
              <a href="/">Dashboard</a>
              <br></br>
              <a href="/">Search Developers</a>
              <br></br>
              <a href="/">Search Teams</a>
              <br></br>
              <a href="/">Create Team</a>
          </ul>
      </div>
      </div>
    </div>
    </div>
    </div>
    </div>
);

export default ColumnOne;