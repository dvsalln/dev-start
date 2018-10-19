import React, { Component } from "react";
import "./SignUp.css";
//************* */

class SignUp extends Component {
  state = {
    name: "",
    email: "",
    password: "",
    state: "",
    designation: "",
    valid: false
  };
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
  setPost = value => {
    this.setState({ designation: value });
  };
  handleSubmit = event => {
    event.preventDefault();
  };
  render() {
    return (
      <div className="container-flex">
        <div className="WrapperBig">
          <div className="WrapperMini">
            <form className="">
              <h3>
                Dev
                <span style={{ color: "#F5B219" }}>Start</span>
              </h3>
              <h6> SignUp Form</h6>
              <hr />
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handleInputChange}
                  name="name"
                  className="form-control"
                  id="name"
                  placeholder="John Doe"
                />
              </div>
              <div className="form-group">
                <label htmlFor="Email">Email</label>
                <input
                  type="text"
                  value={this.state.email}
                  onChange={this.handleEmail}
                  name="email"
                  className={
                    this.state.valid
                      ? "valid form-control"
                      : "invalid form-control"
                  }
                  id="email"
                  placeholder="John_Doe@company.com"
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Create-Password</label>
                <input
                  type="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                  name="password"
                  className="form-control"
                  id="password"
                />
              </div>
              <label className="mr-2">State </label>
              <select
                className="mr-5"
                name="state"
                value={this.state.state}
                onChange={this.handleInputChange}
              >
                <option value="--">--</option>
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="AZ">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Connecticut</option>
                <option value="DE">Delaware</option>
                <option value="DC">District Of Columbia</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MD">Maryland</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VA">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
              </select>
              <input
                type="radio"
                name="designation"
                onClick={() => this.setPost("sponser")}
                className="mr-1"
                value={this.state.designation}
              />
              <label className="mr-3"> I am a sponser </label>
              <input
                type="radio"
                name="designation"
                onClick={() => this.setPost("developer")}
                className="mr-1"
                value={this.state.designation}
              />
              <label className="mr-3"> I am developer </label>

              <hr />
              <button
                onClick={this.handleSubmit}
                type="submit"
                className="btn btn-secondary"
              >
                Submit
              </button>
            </form>
            {console.log(this.state)}
          </div>
        </div>
      </div>
    );
  }
}

export default SignUp;
