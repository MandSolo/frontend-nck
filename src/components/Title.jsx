import React, { Component } from "react";
import { Link } from "@reach/router";
import "../styling/Title.css";

class Title extends Component {
  render() {
    return (
      <div className="Title">
      <h1> <Link to="/">M C N </Link> </h1>
        <p>Mand Cashin News</p>
      </div>
    );
  }
}

export default Title;
