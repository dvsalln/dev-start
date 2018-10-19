import React, { Component } from "react";

class Proposals extends Component {
  state ={
    query: '',
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    })
  }

  render () {
    return (
    <div className="card">
      <div className="card-body">
        <h2 className="card-title">Available Proposals</h2>
        {/* Below are hard coded. Replace with props with linked with BE */}
        <h5 className="card-subtitle mb-2">Here's a list of recentely posted Jobs </h5>
        <p className="card-text">Use keywords to refine your search</p>
        <form className="search">
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <p>{this.state.query}</p>
      </form>
      <hr></hr>
      <table>
       
      </table>
      </div>
    </div>
      )
    }
  }
    

export default Proposals;
