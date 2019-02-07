import React, { Component } from "react";
import { Link } from "@reach/router";
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
                    Topic: <b>{topic.slug}</b>
                  </li>
                  <li>About: {topic.description}</li>
                  <li>
                    <Link to={`/topics/${topic.slug}`}>
                      View All Articles for {topic.slug}
                    </Link>
                  </li>
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
