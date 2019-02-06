import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Title from "./components/Title";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import Topics from "./components/Topics";
import Users from "./components/Users";
import SingleUser from "./components/SingleUser";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <div className="App-title">
          <Title />
        </div>
        <div className="App-login">
          <Login />
        </div>
        <div className="App-navbar">
          <Navbar />
        </div>

        <Router className="App-router">
        
          <Home path="/" className="Home" />
          <Articles path="/articles" className="Articles" />
          <SingleArticle path="/articles/:article_id" className="SingleArticle" />
          <Topics path="/topics" className="Topics" />
          <Users path="/users" className="Users" />
          <SingleUser path="/users/:username" className="SingleUser" />
        </Router>

        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
