import React, { Component } from "react";
import "../styling/Filter.css";
import "../App.css";

class Filter extends Component {
  render() {
    return <div className="Filter">
    <h1> Filter</h1>
    <p>
    SORT BY:
    - date created
    - comment_count
    - votes
      </p></div>;
  }
}

export default Filter;
