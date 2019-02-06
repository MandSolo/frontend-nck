import React, { Component } from "react";
import * as api from "../Api";
import "../styling/Login.css";

class Login extends Component {
  state = {
    username: " ",
    users: []
  };

  render() {
    const { users } = this.state;

    const { username } = this.props;
    const loggedIn = username;

    return loggedIn ? (
      <p>Hello {this.props.username}, welcome back! </p>
    ) : (
      <div className="Login">
        <p>Select your username:</p>
        <div className="Form">
          <form onSubmit={this.handleSubmit}>
            <select value={this.state.username} onChange={this.handleChange}>
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

  showUsers = () => {
    const { hidden } = this.state;
    this.setState({
      hidden: !hidden
    });
  };

  fetchUsers = () => {
    api
      .getUsers()
      .then(users => {
        this.setState(() => ({ users: users }));
      })
      .catch(err =>
        this.setState({
          hasError: err
        })
      );
  };
}

export default Login;