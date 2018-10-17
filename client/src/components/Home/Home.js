import React, { Component } from "react";
import Header from "../Global/Header";
import Jumbotron from "../Home/Jumbotron";
import Nav from "../Developer/Global/Nav";
import "./Home.css";

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
