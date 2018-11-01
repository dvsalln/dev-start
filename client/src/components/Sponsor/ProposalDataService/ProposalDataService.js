import axios from "axios";

class ProposalDataService {
  sendData(data) {
    axios
      .post("http://localhost:3090/api/create_new_proposal", {
        data: data
      })
      .then(function(res) {
        if (res.status === 200) {
          alert("New Proposal successfully made!");
        } else {
          alert(
            "We're sorry, there's an error to create your proposal. Please try this again later or contact to us."
          );
        }
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
  }

  getAvailableProposal() {
    axios
      .get("http://localhost:3090/api/available_proposal")
      .then(function(res) {
        console.log(res);
      })
      .catch(function(err) {
        console.log(err);
      });
  }
}

export default ProposalDataService;
