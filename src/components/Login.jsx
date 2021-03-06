import React, { Component } from "react";
import * as api from "../api";
import "../styling/Login.css";

class Login extends Component {
  state = {
    username: "null",
    users: []
  };

  render() {
    const { users } = this.state;

    const { username } = this.props;
    const loggedIn = username;

    return loggedIn ? (
      <div className="Logged-in">
        <p>Hello {this.props.username},</p>
        <p> Welcome back to M C News! </p>
        <div className="logout">
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      </div>
    ) : (
      <div className="Login">
        <p>Login to experience all that M C News has to offer!</p>
        <div className="Form">
          <form onSubmit={this.handleSubmit}>
            <select className="Login-form" value={this.state.username} onChange={this.handleChange}>
            <option value="options">Choose your username:</option>
              {users.map(user => (
                <option value={user.username}>{user.username}</option>
              ))}
            </select>
            <br />
            <button>Login</button>
          </form>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.fetchUsers();
  }

  handleLogout = () => {
    window.location.reload();
  };

  handleChange = event => {
    const { value } = event.target;
    this.setState({
      username: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.username);
    this.setState({
      username: ""
    });
  };

  fetchUsers = () => {
    api.getUsers().then(users => {
      this.setState(() => ({ users: users }));
    });
  };
}

export default Login;
