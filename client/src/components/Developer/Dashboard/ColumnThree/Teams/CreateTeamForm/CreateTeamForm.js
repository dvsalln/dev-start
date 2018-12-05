 import React, { Component } from "react";
 import BrandSmall from "../../../../../SignUp/BrandSmall";
 import axios from "axios";

 import "./CreateTeamForm.css"
 

 class CreateTeamForm extends Component {
     state = {
         teamName: "",
         teamLeader: "",
         teamPassword: "",
         contactEmail: ""
     }

     handleEmail = event => {
        const { name, value } = event.target;
        const emailRegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        console.log(value);
        const result = emailRegEx.test(value);
        console.log(result);
        this.setState({ [name]: value, valid: result });
      };
      
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleSubmit = event => {
        event.preventDefault();
        console.log(
          "Creating Team",
          this.state
        );
        //this.createAccount.sendData(this.state);
        axios.post("/api/createteam", JSON.stringify(this.state));
      };

     render() {
         return (

        <form className="">
                <BrandSmall />
                <h6> Create A Team</h6>
                <hr />
                <div className="form-group">
                <label htmlFor="teamName">Team Name</label>
                    <input
                        type="text"
                        value={this.state.teamName}
                        onChange={this.handleInputChange}
                        name="teamName"
                        className="form-control"
                        id="teamName"
                        
                    />
                </div>
                <div className="form-group">
                <label htmlFor="teamLeader">Team Leader</label>
                    <input
                        type="text"
                        value={this.state.teamLeader}
                        onChange={this.handleInputChange}
                        name="teamLeader"
                        className="form-control"
                        id="teamLeader"
                        
                    />
                </div>
                <div className="form-group">
                 <label htmlFor="password">Create a Team Password</label>
                    <input
                        type="password"
                        value={this.state.password}
                        onChange={this.handleInputChange}
                        name="teamPassword"
                        className="form-control"
                        id="teamPassword"
                    />
                    </div>
                <div className="form-group">
                <label htmlFor="Email">Contact Email</label>
                <input
                    type="text"
                    value={this.state.contactEmail}
                    onChange={this.handleEmail}
                    name="contactEmail"
                    className={
                    this.state.valid ? "valid form-control" : "invalid form-control"
                    }
                    id="contactEmail"
                    placeholder="teamLeader@devstart.org"
                />
                </div>
            
                <hr />
                <button
                onClick={this.handleSubmit}
                type="submit"
                className="btn btn-secondary"
                >
                Submit
                </button>
                {console.log(this.state)}
            </form>
            );
        }
        }

export default CreateTeamForm;