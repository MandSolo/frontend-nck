import React, { Component } from "react";
import * as api from "../Api";
import "../styling/Users.css";

class Users extends Component {
  state = {
    Users: []
  };

  render() {
    return (
      <div className="Users">
        <h1> Users </h1>
        <p>
          {this.state.Users.map(User => {
            return (
              <ul>
                <li>
                  <img
                    className="image is-96x96"
                    src={User.avatar_url}
                    alt="User Avatar"
                  />
                </li>
                <li>Username: {User.username}</li>
                <li>Name: {User.name}</li>
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
    api.getUsers().then(Users => {
      this.setState({ Users });
    });
  };
}

export default Users;
