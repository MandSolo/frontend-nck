import React, { Component } from "react";
import { Link } from "@reach/router";
import "../styling/Title.css";

class Title extends Component {
  render() {
    return (
      <div className="Title">
      <h1> <Link to="/">Mand Cashin News </Link> </h1>
      </div>
    );
  }
}

export default Title;
