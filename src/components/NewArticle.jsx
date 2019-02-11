import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api";
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
        <h2>Got News?</h2>
        <p>Compose your own article.</p>
        <form onSubmit={this.handleSubmit}>
          <input
            className="New-title"
            id="title"
            type="text"
            placeholder="Captivating Title..."
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
          <br />
          <select
            className="Select-topic"
            value={this.state.topic}
            onChange={this.handleTopicSelect}
            required
          >
            <option value="options">Choose a topic:</option>
            {topics.map(topic => (
              <option value={topic.slug}>{topic.slug}</option>
            ))}
          </select>
          <br />
          <textarea
            className="New-article-body"
            id="body"
            type="text"
            placeholder="Insightful and compelling article..."
            value={this.state.body}
            onChange={this.handleChange}
            required
          />
          <br />
          <button type="submit" className="articleButton">
            Add Article
          </button>
        </form>

        <p>
          If you want to write about anything else, please{" "}
          <Link to="/topics">click here</Link> to create a new topic first.
        </p>
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
      alert("Article added successfully!");
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
