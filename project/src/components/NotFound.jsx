import React, {Component } from "react";
import { Link } from "@reach/router";
import ohdear from "../images/ohdear.png";
import "../styling/NotFound.css";

class NotFound extends Component {
  render() {
    return (
      <div className="NotFound">
        <img src={ohdear} alt="Oh Dear" width="300px" />
        <p>
          You appear to have gotten lost. You can return to the home page by
          clicking <Link to="/">here!</Link>
        </p>
      </div>
    );
  }
}
export default NotFound;
