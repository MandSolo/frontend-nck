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
      return <Loading path="/" />;
    }

    return (
      <div className="SingleUser">
        <br />
        <p>
          <h1>User Profile</h1>

          <ul>
           <br></br>
            <li>
              Username: <b>{this.state.user.username}</b>
            </li>
        <br></br>
            <li>
              <img
                className="avatar"
                src={this.state.user.avatar_url}
                alt="User Avatar"
              />
            </li>
           <br></br>
            <li>Full Name: {this.state.user.name}</li>
           <br></br>
          </ul>
        </p>
        <br />
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
