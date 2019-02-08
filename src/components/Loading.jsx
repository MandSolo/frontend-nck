import React, { Component } from "react";
import loading from "../images/loading.gif";
import "../styling/Loading.css";

class Loading extends Component {
  render() {
    return (
      <div className="Loading">
        <img src={loading} alt="Loading" width="300px" />
        <h1>Please wait... Loading!</h1>
      </div>
    );
  }
}
export default Loading;
