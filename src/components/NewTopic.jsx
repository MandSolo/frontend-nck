import React, { Component } from "react";
import * as api from "../api";
import { navigate } from "@reach/router";
import "../styling/NewTopic.css";
import "../App.css";

class NewTopic extends Component {
  state = {
    slug: "",
    description: ""
  };

  render() {
    return (
      <div className="NewTopic">
        <h1>Add A New Topic</h1>
        <form onSubmit={this.handleSubmit}>
          <input
            className="New-slug"
            id="slug"
            type="text"
            placeholder="New Topic Title"
            value={this.state.slug}
            onChange={this.handleChange}
            required
          />
          <br />
          <textarea
            className="New-description"
            id="description"
            type="text"
            placeholder="Please describe your topic..."
            value={this.state.description}
            onChange={this.handleChange}
            required
          />
          <br />
          <button type="submit" className="topicButton">
            Add Topic
          </button>
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    api.addTopic(this.state.slug, this.state.description).then(topic => {
      alert("Topic added successfully!");
      this.props.addTopic(topic);
      this.setState({ slug: "", description: "" });
      navigate(`/topics/${topic}`);
    });
  };

  handleChange = ({ target: { value, id } }) => {
    this.setState({
      [id]: value
    });
  };
}

export default NewTopic;
