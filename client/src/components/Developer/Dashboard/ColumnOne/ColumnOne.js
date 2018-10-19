import React from "react";
import ProfileHeader from "./ProfileHeader";
import Nav from "./Nav";
import "./ColumnOne.css";


const ColumnOne = () => (
    <div class="col-sm-12">
      <div className="column-one">
        <div className="col-sm-6">
        <ProfileHeader />
        <Nav />
        </div>
      </div>
    </div>
  );


export default ColumnOne;