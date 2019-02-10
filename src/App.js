import React, { Component } from "react";
import { Router } from "@reach/router";
import * as api from "./api";
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
        <Title />
        <Login login={this.login} username={this.state.user.username} />

        <Navbar />

        <Router className="App-router">
          <Home path="/" />
          <Articles path="/articles" username={this.state.user.username} />
          <SingleArticle
            path="/articles/:article_id"
            username={this.state.user.username}
          />
          <Topics path="/topics" username={this.state.user.username} />
          <SingleTopic
            path="/topics/:topic"
            username={this.state.user.username}
          />
          <Users path="/users" />
          <SingleUser path="/users/:username" />
          <NotFound path="/notfound" default />
        </Router>

        <Footer />
      </div>
    );
  }

  login = username => {
    api.getUserByUsername(username).then(user => this.setState({ user: user }));
  };
}
export default App;
