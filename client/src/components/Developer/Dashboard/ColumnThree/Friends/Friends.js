//User's Friends List
import React, { Component } from "react";
import "./Friends.css";
import FriendList from "./FriendList";
//importing mock friends data. Remove when link to BE
import friends from "../../../../../models/friends.json";

class Friends extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends
  };

  render() {
    return (
      <div className="card">
        <div className="card-body">
        <div class="row">
          <h2 className="card-title">Friends</h2>
          <button className="add-team btn btn-primary"><strong>+</strong></button>
        </div>
          {this.state.friends.map(friend => (
            <FriendList
              id={friend.id}
              key={friend.id}
              name={friend.name}
              image={friend.image}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Friends;
