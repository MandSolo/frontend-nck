import React, { Component } from "react";
import * as api from "../Api";
import Filter from "./Filter";
import NewArticle from "./NewArticle";
import "../styling/Articles.css";
import "../App.css";

class Articles extends Component {
  state = {
    articles: []
  };

  render() {
    return (
      <div className="Articles">
      <div className="Article-view">
              <h1> Articles</h1>
        <p>
          {this.state.articles.map(article => {
            return (
              <ul>
                <li>{article.title}</li>
              </ul>
            );
          })}
        </p>
        </div>
        <Filter path="/" className="Articles-filter" />
        <NewArticle path="/" className="Articles-newarticle" />
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    api.getArticles(this.props.article).then(articles => {
      this.setState({ articles });
    });
  };
}

export default Articles;
