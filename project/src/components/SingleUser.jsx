import React, { Component } from "react";
import * as api from "../Api";
import "../styling/SingleUser.css";

class SingleUser extends Component {
  state = {
    user: {}
  };

  render() {
   
    return (
      <div className="SingleUser">
        <p>
          <h1><b>{this.state.user.username}</b></h1>

          <ul>
            <li>
              <img
                className="image is-96x96"
                src={this.state.user.avatar_url}
                alt="User Avatar"
              />
            </li>
            <li>Name: {this.state.user.name}</li>
          </ul>
        </p>
      </div>
    );
  }

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    api.getUserByUsername(this.props.username).then(user => {
      this.setState({ user });
    });
  };
}

export default SingleUser;
