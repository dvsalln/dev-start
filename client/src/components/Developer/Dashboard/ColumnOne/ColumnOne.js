import React from "react";
import ProfileHeader from "./ProfileHeader";
import "./ColumnOne.css";
import Nav from "./Nav";


const ColumnOne = () => (
    <div class="col-3">
        <ProfileHeader />
        <Nav />
    </div>
  );


export default ColumnOne;