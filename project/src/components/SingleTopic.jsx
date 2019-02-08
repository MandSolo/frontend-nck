import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../Api";
import Loading from "./Loading";
import "../styling/SingleTopic.css";
import moment from "moment";

class SingleTopic extends Component {
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
    this.fetchArticlesByTopic();
  }

  fetchArticlesByTopic = () => {
    api.getArticlesByTopic(this.props.topic).then(articles => {
      this.setState({ articles, isLoading: false });
    });
  };
}

export default SingleTopic;
