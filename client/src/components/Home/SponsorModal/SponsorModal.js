import React, { Component } from "react";
import "./SponsorModal.css";


class SponsorModal extends Component {
       
        render() {
            if (!this.props.show) {
                return null;
            }
            return (
                <div>
                <div id="sponsor-modal">
                <h3>DevStart Sponsors</h3>
                <ul> 
                    <li>Post listings for work needed</li>
                    <li>Search our database to find the right dev for the job</li>
                    <li>Set and negotiate your own wages/compensation</li>
                    <li>Network and share job listings or meetups</li>
                </ul>
                <p>
                   Here at DevStart we know how hard it can be sometimes be to find good work when you need it most. As a DevStart Sponsor
                   you will have access to our entire database of Developers who are eager to get to work on something new and exciting! <br /><br /><h4>Find these devs <a href="/signup">here!</a></h4>
                </p>
                </div>
            </div>
            )
        }
    }
export default SponsorModal;