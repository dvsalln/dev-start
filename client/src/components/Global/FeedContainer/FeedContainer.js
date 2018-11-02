import React, { Component } from "react";
import "./FeedContainer.css";
import ProposalCard from "../ProposalCard";
// import API from "../../Sponsor/ProposalDataService";
import axios from "axios";

class FeedContainer extends Component {
  state = {
    query: []
  };

  // handleInputChange = () => {
  //   this.setState({
  //     query: this.search.value
  //   });
  // };

  componenDidMount() {
    // this.loadFeeds();
    fetch("http://localhost:3090/api/available_proposal/")
      .then(res => res.json())
      .then(result => {
        console.log(result);
        this.setState({ query: result });
      });
  }

  // proposalApi = new ProposalData();

  // loadFeeds = () => {
  //   API.getAvailableProposal()
  //     .then(res => {
  //       console.log(res);
  //       this.setState({
  //         query: res
  //       });
  //       console.log(res);
  //     })
  //     .catch(err => console.log(err));

  // let res = fetch("/api/available_proposal/", { method: "GET" });
  // let data = res.json();
  // console.log(data);
  // };

  render() {
    return (
      <div className="feed-wrapper">
        {this.state.query.map(proposal => (
          <ProposalCard
            id={proposal.id}
            key={proposal.id}
            title={proposal.proposalTitle}
          />
        ))}
        {/* <ProposalCard /> */}
      </div>
    );
  }
}

export default FeedContainer;
