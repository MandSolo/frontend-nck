import React, { Component } from "react";
import * as api from "../Api";
import Loading from "./Loading";
import "../styling/SingleTopic.css";

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
      this.setState({ articles, isLoading: false });
    });
  };
}

export default SingleTopic;
