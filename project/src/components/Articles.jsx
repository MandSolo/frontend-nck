import React, { Component } from "react";
import Filter from "./Filter";
import NewArticle from "./NewArticle";
import "../styling/Articles.css";
import "../App.css";

class Articles extends Component {
  render() {
    return (
      <div className="Articles">
        <h1> Articles</h1>
        <Filter path="/" className="Articles-filter" />
        <NewArticle path="/" className="Articles-newarticle" />
      </div>
    );
  }
}

export default Articles;
