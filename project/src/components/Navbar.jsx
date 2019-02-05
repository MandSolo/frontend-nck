import React, { Component } from "react";
import { Link } from "@reach/router";
import "../styling/Navbar.css";

class Navbar extends Component {
  render() {
    return (
      <div className="Navbar">
        <Link to="/">Home</Link>{"‣"}
        <Link to="/topics">Topics</Link>{"‣"}
        <Link to="/users">Users</Link>{"‣"}
      </div>
    );
  }
}

export default Navbar;
