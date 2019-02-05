import React, { Component } from "react";
import { Router } from "@reach/router";
import "./App.css";
import Title from "./components/Title";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Topics from "./components/Topics";
import Users from "./components/Users";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App-container">
        <div className="App-title">
          <Title />
        </div>
        <div className="App-profile">
          <Profile />
        </div>
        <div className="App-navbar">
          <Navbar />
        </div>

        <Router className="App-mainbox">
  
          <Home path="/" className="Home"  />
          <Topics path="/topics" className="Topics" />
          <Users path="/users" className="Users" />

        </Router>

        <div className="App-footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
