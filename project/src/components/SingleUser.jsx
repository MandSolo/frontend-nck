import React, { Component } from "react";
import "../styling/SingleUser.css";

class SingleUser extends Component {
    state = {
        user: {},
    }

  render() {
    return (
      <div className="SingleUser">
        <p>single user </p>
      </div>
    );
  }
}

export default SingleUser;
