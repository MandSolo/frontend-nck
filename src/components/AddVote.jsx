import React, { Component } from "react";
import * as api from "../api";
import "../styling/AddVote.css";

class AddVote extends Component {
  state = {
    voteChange: 0
  };

  render() {
    const { votes } = this.props;
    const { voteChange } = this.state;

    return (
      <div className="AddVote">
        <h1>Scintillating read?</h1>
        <p>Let the world know how strongly you feel by getting your vote on.</p>
        <p>
          <b> Current Votes:</b> {votes + voteChange}
        </p>
        <button
          className="voteButton"
          onClick={() => this.vote(1)}
          disabled={voteChange === 1}
        >
          VOTE UP ⬆
        </button>
    
        <button
          className="voteButton"
          onClick={() => this.vote(-1)}
          disabled={voteChange === -1}
        >
          VOTE DOWN ⬇
        </button>
      </div>
    );
  }

  vote = inc => {
    const { article_id } = this.props;
    api.vote(article_id, inc).catch(err => {
      this.setState(state => ({ voteChange: state.voteChange - inc }));
    });
    this.setState(state => ({ voteChange: state.voteChange + inc }));
  };
}

export default AddVote;
