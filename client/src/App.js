import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
//uncomment this below and the route when signup form is ready
import SignUpForm from "./components/SignUp";
import Login from "./components/Login";
import create from "./components/CreateProfile";
import DeveloperDashboard from "./components/Developer/Dashboard/Dashboard";
import DeveloperProfile from "./components/Developer/Profile/Profile";
import SponsorDashboard from "./components/Sponsor/Dashboard";
//Global CSS Style
import "./css/ds-global.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/signup" component={SignUpForm} />
          <Route exact path="/createprofile" component={create} />
          <Route path="/developer/dashboard" component={DeveloperDashboard} />
          <Route path="/developer/profile" component={DeveloperProfile} />
          <Route path="/sponsor/dashboard" component={SponsorDashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
