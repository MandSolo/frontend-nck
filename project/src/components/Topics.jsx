import React, { Component } from "react";
import NewTopic from "./NewTopic";
import * as api from "../Api";
import "../styling/Topics.css";

class Topics extends Component {
  state = {
    topics: []
  };

  render() {
    return (
      <div className="Topics">
        <NewTopic path="/" className="Topics-newtopic" />
        <div className="Topics-view">
          <h1> Topics </h1>
          <p>
            {this.state.topics.map(topic => {
              return (
                <ul>
                  <li>
                    <b>{topic.slug}</b>
                  </li>
                  <li>About: {topic.description}</li>
                </ul>
              );
            })}
          </p>
        </div>
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
