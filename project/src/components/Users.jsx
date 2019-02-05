import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../Api";
import "../styling/Users.css";

class Users extends Component {
  state = {
    users: []
  };

  render() {
    return (
      <div className="Users">
        <h1> Users </h1>
        <p>
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
                <li>Username: {user.username}</li>
                <li>Name: {user.name}</li>
                <li>
                  <Link to={`/users/${user.username}`}>View Profile Page</Link>
                </li>
              </ul>
            );
          })}
        </p>
      </div>
    );
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    api.getUsers().then(users => {
      this.setState({ users });
    });
  };
}

export default Users;
