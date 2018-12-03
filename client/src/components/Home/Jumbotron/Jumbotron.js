import React, { Component } from "react";
import "./Jumbotron.css";
import DevModal from "../DevModal";
import Backdrop from "../../Global/Backdrop";

class Jumbotron extends Component {
  state = {
    show: false,
    showDevModal: false,
    showSponsorModal: false
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

  backdropClickHandler = () => {
    this.setState({ show: false });
  };

  render() {
    let backdrop;

    if (this.state.show) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
    
    <div className="main-head bg-ds-white">
    
      <div className="main-content container text-center">
        <div className="text-wrapper">
        <DevModal
          show={this.state.show} />
       
        {backdrop}

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
