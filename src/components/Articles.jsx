import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api";
import Loading from "./Loading";
import Filter from "./Filter";
import NewArticle from "./NewArticle";
import "../styling/Articles.css";
import "../App.css";
import moment from "moment";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true
  };

  render() {
    if (this.state.isLoading) {
      return (
        <div className="Loading-page">
          <Loading path="/" className="Loading-gif" />
        </div>
      );
    }

    return (
      <div className="Articles">
        <Filter path="/" className="Articles-filter" />
        <NewArticle path="/" className="Articles-newarticle" />
        <div className="Article-view">
          <h1>All Articles</h1>
          <p>
            {this.state.articles.map(article => {
              return (
                <div className="Individual-article">
                <ul>
                  <li>
                    <b>{article.title}</b>
                  </li>
                  <li>Written By: {article.author}</li>
                  <li>
                    Created:
                    {moment(article.created_at)
                      .startOf("hour")
                      .fromNow()}
                  </li>
                  <li>
                    <Link to={`/articles/${article.article_id}`}>
                      Click here to read
                    </Link>
                  </li>
                </ul>
                </div>
              );
            })}
          </p>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticles();
  }

  fetchArticles = () => {
    api.getArticles(this.props.article).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default Articles;
