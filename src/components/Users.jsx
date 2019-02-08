import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api";
import Loading from "./Loading";
import "../styling/Users.css";

class Users extends Component {
  state = {
    users: [],
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
      <div className="Users">
        <br />
        <h1>All Users </h1>
        <div className="Users-container">
          {this.state.users.map(user => {
            return (
              <ul>
                <li>
                  <img
                    className="image is-96x96"
                    src={user.avatar_url}
                    alt="User Avatar"
                  />
                </li>
                <li>
                  <b>{user.username}</b>
                </li>
                <li>
                  <Link to={`/users/${user.username}`}>View Profile</Link>
                </li>
              </ul>
            );
          })}
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    api.getUsers().then(users => {
      this.setState({ users, isLoading: false });
    });
  };
}

export default Users;
