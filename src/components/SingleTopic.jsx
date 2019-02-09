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
    isLoading: true
  };

  render() {
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
        </div>
        {this.props.username && (
          <NewArticle path="/" className="New-article-by-topic" />
        )}
        <br />
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
