import React, { Component, Fragment } from "react";
import "./CreateProposal.css";

class CreateProposal extends Component {
  // onChange function here

  // Submit function here

  render() {
    return (
      <Fragment>
        <div className="container-fluid">
          <h1 className="proposal-title">Create New Proposal</h1>
          <div className="card proposal-card">
            <div className="card-body">
              <form>
                <div className="form-group">
                  <label htmlFor="proposalTitle">Proposal Title</label>
                  <input
                    type="text"
                    className="form-control"
                    id="proposalTitle"
                    placeholder="Proposal Title"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="proposalTitle">Proposal Bid ( $ )</label>
                  <input
                    type="text"
                    className="form-control"
                    id="proposalTitle"
                    placeholder="Proposal Title"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="Proposal Details">Proposal Details</label>
                  <textarea
                    className="form-control"
                    id="proposalDetails"
                    rows="10"
                  />
                </div>
                <button type="submit" className="btn btn-ds-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default CreateProposal;
