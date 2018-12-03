import React, { Component } from "react";
import "./DevModal.css";


class DevModal extends Component {
 
    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div>
                <div id="dev-modal">
                <h3>DevStart Developers</h3>
                <ul> 
                    <li>Explore new freelance opportunities</li>
                    <li>Build and create teams with other Devs</li>
                    <li>Apply for job proposals posted by Sponsors</li>
                    <li>Network and share new job listings or meetups</li>
                    <li>Compete for a spot on the Leaderboard</li>
                </ul>
                <p>
                    We at DevStart believe it is crucial to overall success as an Web Developer to be open to new ideas and opportunities, 
                    and that begins with being prepared and well-equiped with the tools to do so. <br /><br /><h4>Find these tools<a href="/signup">here!</a></h4>
                </p>
                </div>
            </div>
        )
    }
}
export default DevModal;