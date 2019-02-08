import React, { Component } from "react";
import { Router } from "@reach/router";
import * as api from "./Api";
import "./App.css";
import Title from "./components/Title";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import Topics from "./components/Topics";
import SingleTopic from "./components/SingleTopic";
import Users from "./components/Users";
import SingleUser from "./components/SingleUser";
import NotFound from "./components/NotFound";
import Footer from "./components/Footer";

class App extends Component {
  state = { user: {} };

  render() {
    return (
      <div className="App-container">
        <div className="App-title">
          <Title />
        </div>
        <div className="App-login">
          <Login login={this.login} username={this.state.user.username} />
        </div>
        <div className="App-navbar">
          <Navbar />
        </div>

        <Router className="App-router">
          <Home path="/" className="Home" />
          <Articles path="/articles" className="Articles" />
          <SingleArticle
            path="/articles/:article_id"
            className="SingleArticle"
            username={this.state.user.username}
          />
          <Topics path="/topics" className="Topics" />
          <SingleTopic path="/topics/:topic" className="SingleTopic" />
          <Users path="/users" className="Users" />
          <SingleUser path="/users/:username" className="SingleUser" />
          <NotFound default />
        </Router>

        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }

  login = username => {
    api.getUserByUsername(username).then(user => this.setState({ user: user }));
  };
}
export default App;
