import React, { Component } from "react";
import * as api from "../Api";
import { navigate } from "@reach/router";
import "../styling/NewArticle.css";
import "../App.css";

class NewArticle extends Component {
  state = {
    title: "",
    body: "",
    topic: "",
    topics: []
  };

  render() {
    const { topics } = this.state;

    return (
      <div className="NewArticle">
        <h2>Compose New Article</h2>
        <form onSubmit={this.handleSubmit}>
          Title:
          <input
            className="New-title"
            id="title"
            type="text"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
          <br />
          Topic:
          <select
            className="Select-topic"
            value={this.state.topic}
            onChange={this.handleTopicSelect}
            required
          >
            {topics.map(topic => (
              <option value={topic.slug}>{topic.slug}</option>
            ))}
          </select>
          <br />
          Article:
          <textarea
            className="New-body"
            id="body"
            type="text"
            value={this.state.body}
            onChange={this.handleChange}
            required
          />
          <br />
          <button type="submit" className="articleButton">
            Add Article
          </button>
        </form>
      </div>
    );
  }

  componentDidMount() {
    api.getTopics().then(topics => {
      this.setState({
        topics: topics
      });
    });
  }
  handleChange = event => {
    const { id } = event.target;
    this.setState({
      [id]: event.target.value
    });
  };
  handleSubmit = event => {
    const { title, body, username, topic } = this.state;
    event.preventDefault();
    api.addArticle(title, body, username, topic).then(() => {
      this.setState({
        title: "",
        body: "",
        topic: ""
      });
      navigate(`/topics/${topic}`);
    });
  };

  handleTopicSelect = event => {
    const { value } = event.target;
    this.setState({
      topic: value
    });
  };
}

export default NewArticle;
