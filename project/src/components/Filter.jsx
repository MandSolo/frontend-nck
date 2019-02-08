import React, { Component } from "react";
import "../styling/Filter.css";
import "../App.css";

class Filter extends Component {
  state = {
    sort_by: ""
  };

  render() {
    return (
      <div className="Filter">
        <h1> Filter Articles</h1>
        <div className="SortOptions">
          <form onSubmit={this.handleSubmit}>
            <select
              className="Select-filter"
              onChange={this.handleChange}
              required
            >
              <option value="Newest">Newest</option>
              <option value="MostVotes">Most Votes</option>
              <option value="MostComments">Most Comments</option>
            </select>
            <br />
            <button type="submit" className="articleButton">
              Sort Now
            </button>
          </form>
        </div>
      </div>
    );
  }

  handleChange = event => {
    const { id } = event.target;
    this.setState({
      [id]: event.target.value
    });
  };

  handleSubmit = event => {
    const { fetchArticles, topic } = this.props;
    const { name, value } = event.target;
    const filterValue = {
      Newest: "created_at",
      MostVotes: "votes",
      MostComments: "comment_count"
    };

    this.setState({ [name]: filterValue[value] }, () =>
      fetchArticles(topic, this.state.sort_by)
    );
  };
}

export default Filter;
