import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
  <div className="jumbotron">
    <div className="container text-center">
      <h1>DevStart</h1>
      <h2>Helping begining developers get started</h2>
      <p>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          I'm an entrepenuer
        </a>
        <a className="btn btn-primary btn-lg" href="#" role="button">
          I'm a starting developer
        </a>
      </p>
    </div>
  </div>
);

export default Jumbotron;
