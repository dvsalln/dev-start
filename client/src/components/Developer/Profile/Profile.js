import React, { Component } from "react";
import Header from "../Global/Header";
import ColumnOne from "./ColumnOne";
import ColumnTwo from "./ColumnTwo";
import "../Global/css/developer-global.css";
import "./Profile.css";

class Profile extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="profile container">
          <div className="row">
            <ColumnOne />
            <ColumnTwo />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
