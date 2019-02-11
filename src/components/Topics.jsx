import React, { Component } from "react";
import { Link } from "@reach/router";
import NewTopic from "./NewTopic";
import * as api from "../api";
import Loading from "./Loading";
import "../styling/Topics.css";

class Topics extends Component {
  state = {
    topics: [],
    isLoading: true
  };

  render() {
    if (this.state.isLoading) {
      return <Loading path="/" />;
    }

    return (
      <div className="Topics">
        {this.props.username && (
          <NewTopic path="/" className="Topics-newtopic" />
        )}
        {!this.props.username && <p>Only logged in users can add topics!</p>}
        <div className="Topics-view">
          <h1>All Topics </h1>
          <p>
            {this.state.topics.map(topic => {
              return (
                <div className="Individual-topic">
                  <ul>
                    <li>
                      <Link to={`/topics/${topic.slug}`}>
                        {" "}
                        <b>{topic.slug}</b>
                      </Link>
                    </li>
                    <li>About: {topic.description}</li>
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
    this.fetchTopics();
  }

  fetchTopics = () => {
    api.getTopics(this.props.topic).then(topics => {
      this.setState({ topics, isLoading: false });
    });
  };
}

export default Topics;
