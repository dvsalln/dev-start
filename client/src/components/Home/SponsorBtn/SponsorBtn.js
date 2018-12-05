import React, { Component } from "react";
import "./SponsorBtn.css"


class SponsorBtn extends Component {
    render() {
        return (
        <div>
            <SponsorBtn
            id="sponsorBtn"
            onClick={() => this.setState({ sponsorShow: true })}
            className="btn btn-ds-primary btn-lg main-button"
            >I'm a Sponsor
            </SponsorBtn>
        </div>
        );
    }
}
export default SponsorBtn;