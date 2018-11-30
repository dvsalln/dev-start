import React, { Component } from "react";
import "./Jumbotron.css";
import DevModal from "../DevModal";
import SponsorModal from "../SponsorModal";

class Jumbotron extends Component {
  state = {
    show: false
  }
  showSponsorModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  }
  showDevModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    });
  }

  render() {
    

    if (this.state.show) {
    }
    return (
    
    <div className="main-head bg-ds-white">
    
      <div className="main-content container text-center">
        <div className="text-wrapper">
        <DevModal
          show={this.state.show} />
        <SponsorModal
          show={this.state.show} />

          <h1>DevStart</h1>
          <h2><i>Start</i> a project, <i>Start</i> a career, <i>Start</i> today</h2>
        </div>
  
       
    

        <div className="main-buttons-wrapper">
          <button
            id="sponsorBtn"
            onClick={this.showSponsorModal}
            className="btn btn-ds-primary btn-lg main-button"
            >I'm a Sponsor</button>
          
            
            <button
            id="devBtn"
            onClick={this.showDevModal}
            className="btn btn-ds-primary btn-lg main-button"
            >I'm a Developer</button>
        </div>
    </div>
  </div>
    );
  }
}
export default Jumbotron;
