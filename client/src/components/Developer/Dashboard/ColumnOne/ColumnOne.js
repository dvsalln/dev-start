import React from "react";
import ProfileHeader from "./ProfileHeader";
import "./ColumnOne.css";
import QuickStart from "./QuickStart";
import AccountBtn from "../../../Global/AccountBtn";

const ColumnOne = () => (
    <div class="col-3">
        <AccountBtn />
        <ProfileHeader />
        <QuickStart />
    </div>
  );


export default ColumnOne;