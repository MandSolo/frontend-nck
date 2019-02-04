import React, { Component } from "react";
import Filter from "./Filter";
import NewArticle from "./NewArticle";
import "../styling/Home.css";
import "../App.css"

class Home extends Component {
  render() {
    return (
      <div className="Home">
      <p> Home </p>
        <Filter path="/" className="Home-filter" />
        <NewArticle path="/" className="Home-newarticle" />
      </div>
    );
  }
}

export default Home;
