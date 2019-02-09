import React, { Component } from "react";
import "../styling/Filter.css";
import "../App.css";

class Filter extends Component {
  state = {
    filterType: "Newest"
  };

  render() {
    return (
      <div className="Filter">
        <h1>Sort Articles</h1>
        <p>Want to see only the latest articles? Want to know which articles are trending now?</p>
        <div className="SortOptions">
          <form onSubmit={this.handleSubmit}>
            <select
              className="Select-filter"
              onChange={this.handleChange}
              required
            >
              <option value="Newest">Newest Articles</option>
              <option value="MostVotes">Most Votes</option>
              <option value="MostComments">Most Comments</option>
            </select>
            <br />
            <button type="submit" className="articleButton">
              Click To Sort
            </button>
          </form>
        </div>
      </div>
    );
  }

  handleChange = event => {
    this.setState({
      filterType: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault()
    this.props.sortArticlesBy(this.state.filterType)
  };
}

export default Filter;
