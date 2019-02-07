import React, { Component } from "react";
import * as api from "../Api";
import "../styling/SingleTopic.css";

class SingleTopic extends Component {
  state = {
    articles: []
  };

  render() {
    return (
      <div className="SingleTopic">
        <h1>
          <b>{this.props.topic}</b>
        </h1>
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticlesByTopic();
  }

  fetchArticlesByTopic = () => {
    api.getArticlesByTopic().then(articles => {
      this.setState({ articles });
    });
  };
}

export default SingleTopic;
