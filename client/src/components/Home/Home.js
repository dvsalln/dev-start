import React, { Component } from "react";
import Header from "../Global/Header";
import Jumbotron from "../Home/Jumbotron";
import "./Home.css";
import SignUp from "../SignUp/SignUp";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <Jumbotron />
      </div>
    );
  }
}

export default Home;
