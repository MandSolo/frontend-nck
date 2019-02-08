import React, { Component } from "react";
import * as api from "../api";
import Loading from "./Loading";
import "../styling/SingleUser.css";

class SingleUser extends Component {
  state = {
    user: {},
    isLoading: true
  };

  render() {
   
    if (this.state.isLoading) {
      return (
        <div className="Loading-page">
          <Loading path="/" className="Loading-gif" />
        </div>
      );
    }

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
      this.setState({ user, isLoading: false });
    });
  };
}

export default SingleUser;
