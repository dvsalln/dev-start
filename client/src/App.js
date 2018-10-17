import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
//uncomment this below and the route when signup form is ready
// import SignUpForm from "./components/SignUp/Form";
import DeveloperDashboard from "./components/Developer/Dashboard";
import SponsorDashboard from "./components/Sponsor/Dashboard";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/signup" component={SignUpForm} /> */}
          <Route path="/developer-dashboard" component={DeveloperDashboard} />
          <Route path="/sponsor-dashboard" component={SponsorDashboard} />
        </div>
      </Router>
    );
  }
}

export default App;
