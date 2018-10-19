//User's Friends List
import React, { Component } from "react";
import "./Teams.css";
import TeamsList from "./TeamsList";
//importing mock friends data. Remove when link to BE
import teams from "../../../../../models/teams.json";

class Teams extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    teams
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
        <div class="row">
          <h2 className="card-title">Teams</h2>
          <button className="add-team btn btn-success"><strong>+</strong></button>
        </div>
          {this.state.teams.map(teams => (
            <TeamsList
              id={teams.id}
              key={teams.id}
              name={teams.name}
              image={teams.image}
            />
          ))}
        </div>
      </div>
    
    );
  }
}

export default Teams;
