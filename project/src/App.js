import React, { Component } from "react";
import "./App.css";
import Title from "./components/Title";
import Profile from "./components/Profile";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Filter from "./components/Filter";
import NewArticle from "./components/NewArticle";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Title />
        </header>
        <header className="App-profile">
          <Profile />
        </header>
        <header className="App-profile">
          <Navbar />
        </header>
        <div className="App-home">
          <Home />
        </div>
        <div className="App-filter">
          <Filter />
        </div>
        <div className="App-newarticle">
        <NewArticle />
        </div>
        <div className="App-footer">
        <Footer />
        </div>
      </div>
    );
  }
}

export default App;
