import React, { Component, Fragment } from "react";
import BigWrapper from "../SignUp/BigWrapper";
import MiniWrapper from "../SignUp/MiniWrapper";
import BrandSmall from "../SignUp/BrandSmall";
import HomeHeader from "../Global/HomeHeader";
// import SocialButton from "./SocialButton";
import "./Login.css";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  componentDidMount() {
    const oauthScript = document.createElement("script");
    oauthScript.src =
      "https://cdn.rawgit.com/oauth-io/oauth-js/c5af4519/dist/oauth.js";

    document.body.appendChild(oauthScript);
  }
  handleClick(e) {
    // Prevents page reload
    e.preventDefault();

    // Initializes OAuth.io with API key
    // Sign-up an account to get one
    window.OAuth.initialize("BTfcjv51Sd9sJJrfLVp8QyIBZUM");

    // Popup Github and ask for authorization
    window.OAuth.popup("github").then(provider => {
      // Prompts 'welcome' message with User's name on successful login
      // Check console logs for additional User info
      provider.me().then(data => {
        console.log("data: ", data);
        alert("Welcome " + data.name + "!");
      });

      // You can also call Github's API using .get()
      provider.get("/user").then(data => {
        console.log("self data:", data);
      });
    });
  }

  render() {
    return (
      <Fragment>
        <HomeHeader />
        <div className="container-flex loginform-wrapper">
          <BigWrapper>
            <MiniWrapper>
              <div>
                <BrandSmall />

                <div id="LoginForm">
                  <div className="container">
                    <div className="login-form">
                      <div className="main-div">
                        <div className="panel">
                          <h4>User Login</h4>
                          <p>Please enter your email and password</p>
                        </div>
                        <form id="Login">
                          <div className="form-group">
                            <input
                              type="email"
                              className="form-control"
                              id="inputEmail"
                              placeholder="Email Address"
                            />
                          </div>

                          <div className="form-group">
                            <input
                              type="password"
                              className="form-control"
                              id="inputPassword"
                              placeholder="Password"
                            />
                          </div>
                          <div className="something">
                            <a href="reset.html">Forgot password?</a>
                          </div>
                          <div className="something">
                            <a href="signup.html">
                              Dont have an Account ? Sign Up here
                            </a>
                          </div>
                          <button type="submit" className="btn btn-primary">
                            Login
                          </button>
                          <button
                            className="btn btn-secondary"
                            onClick={this.handleClick}
                          >
                            <i className="fab fa-facebook-square mr-1" />
                            Login with facebook{" "}
                          </button>
                          <button
                            className="btn btn-secondary"
                            onClick={this.handleClick}
                          >
                            <i className="fab fa-github mr-1" />
                            Login with github{" "}
                          </button>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </MiniWrapper>
          </BigWrapper>
        </div>
      </Fragment>
    );
  }
}

export default Login;
