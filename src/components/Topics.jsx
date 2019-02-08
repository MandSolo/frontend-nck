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
      return (
        <div className="Loading-page">
          <Loading path="/" className="Loading-gif" />
        </div>
      );
    }


    return (
      <div className="Topics">
        <NewTopic path="/" className="Topics-newtopic" />
        <div className="Topics-view">
          <h1>All Topics </h1>
          <p>
            {this.state.topics.map(topic => {
              return (
                <div className="Individual-topic">
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
                </ul></div>
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
