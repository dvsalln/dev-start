import React, { Component } from "react";
import CreateTeamForm from "../CreateTeamForm";

class CreateTeamModal extends Component {
    state = {
        show: false
    }
    render() {
        return (
            <CreateTeamModal 
            {...this.props}
            bsSize="large"
            aria-labelledby="contained-modal-title-lg">
            <CreateTeamForm />
            </CreateTeamModal>
        );
    }
}

export default CreateTeamModal;