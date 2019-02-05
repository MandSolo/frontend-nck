import React, { Component } from "react";
import * as api from "../Api";
import "../styling/Topics.css";

class Topics extends Component {
  state = {
    topics: []
  };

  render() {
    return (
      <div className="Topics">
        <h1> Topics </h1>
        <p>
          {this.state.topics.map(topic => {
            return (
              <ul>
                <li>Topic: {topic.slug}</li>
                <li>Description: {topic.description}</li>
              </ul>
            );
          })}
        </p>
      </div>
    );
  }

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    api.getTopics(this.props.topic).then(topics => {
      this.setState({ topics });
    });
  };
}

export default Topics;
