import React, { Component } from "react";
import "./DevBtn.css"


class DevBtn extends Component {
    render() {
        return (
        <div>
            <DevBtn
            id="devBtn"
            onClick={() => this.setState({ devShow: true })}
            className="btn btn-ds-primary btn-lg main-button"
            >I'm a Developer
            </DevBtn>
        </div>
        );
    }
}

export default DevBtn;