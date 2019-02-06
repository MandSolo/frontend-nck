import React, { Component } from "react";
import "../styling/Filter.css";
import "../App.css";

class Filter extends Component {
  render() {
    return <div className="Filter">
    <h1> filter</h1>
    <p>
    As a user, I should be able to sort articles by: 
    - date created
    - comment_count
    - votes
      </p></div>;
  }
}

export default Filter;
