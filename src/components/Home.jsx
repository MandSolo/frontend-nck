import React, { Component } from "react";
import fakenews from "../images/fakenews.png";
import "../styling/Home.css";

class Home extends Component {
  render() {
    return (
      <div className="Home">
        <h1>Welcome to M C News</h1>
        <img src={fakenews} alt="Fake News" />
        <p>Please log in at the top of this page!</p>
      </div>
    );
  }
}

export default Home;
