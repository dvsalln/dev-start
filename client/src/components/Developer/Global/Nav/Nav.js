import React from "react";

const Nav = () => (
  <div className="nav">
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Navigation</h2>
        {/* Below are hard coded. Replace with props with linked with BE */}
        
        <p className="card-text"><div>
          <ul className="nav-links">
              <a href="/">Dashboard</a>
              <br></br>
              <a href="/">Search Developers</a>
              <br></br>
              <a href="/">Search Teams</a>
              <br></br>
              <a href="/">Create Team</a>
          </ul>
      </div></p>
      </div>
    </div>
  </div>
);

export default Nav;