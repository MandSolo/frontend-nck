import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api";
import Loading from "./Loading";
import NewArticle from "./NewArticle";
import "../styling/SingleTopic.css";
import moment from "moment";

class SingleTopic extends Component {
  state = {
    articles: [],
    isLoading: true,
    page: 1
  };

  render() {
    const { articles, page } = this.state;

    if (this.state.isLoading) {
      return <Loading path="/" />;
    }
    return (
      <div className="SingleTopic">
        <div className="Articles-by-topic-view">
          <h1>
            <b>{this.props.topic}</b>
          </h1>
          <p>
            {this.state.articles.map(article => {
              return (
                <div className="Individual-article-by-topic">
                  <ul>
                    <li>
                      <Link to={`/articles/${article.article_id}`}>
                        <b>{article.title}</b>
                      </Link>
                    </li>
                    <li>Written By: {article.author}</li>
                    <li>
                      Created:
                      {moment(article.created_at)
                        .startOf("hour")
                        .fromNow()}
                    </li>
                  </ul>
                </div>
              );
            })}
          </p>

          {page > 1 && (
          <button className="buttonDown" onClick={this.pageDown}>
            Previous Page
          </button>
        )}
        {articles.length === 10 && (
          <button className="buttonUp" onClick={this.pageUp}>
            Next Page
          </button>
        )}



        </div>
        {this.props.username && (
          <NewArticle path="/" className="New-article-by-topic" />
        )}{!this.props.username && <p>Only logged in users can add an article!</p>}
        <br />

      </div>
    );
  }

  componentDidMount() {
    this.state.page > 1 ? this.pagginate() : this.fetchArticlesByTopic();
  }

  fetchArticlesByTopic = () => {
    api.getArticlesByTopic(this.props.topic).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };

  pagginate = () => {
    api
      .changeArticlePage(this.state.page, this.props.topic)
      .then(articles => this.setState({ articles }));
  };

  pageDown = () => {
    this.setState({ page: this.state.page - 1 }, () => {
      this.pagginate();
    });
  };

  pageUp = () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.pagginate();
    });
  };
}

export default SingleTopic;
