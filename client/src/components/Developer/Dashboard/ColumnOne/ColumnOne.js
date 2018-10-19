import React from "react";
import ProfileHeader from "./ProfileHeader";
import Nav from "./Nav";
import "./ColumnOne.css";


const ColumnOne = () => (
    <div class="col-4">
        <ProfileHeader />
        <Nav />
    </div>
  );


export default ColumnOne;