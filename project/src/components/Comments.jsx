import React, { Component } from "react";
import * as api from "../Api";
import "../styling/Comments.css";
import moment from "moment";

class Comments extends Component {
  state = {
    comments: []
  };

  render() {
    return (
      <div className="Comments">
        <div className="Comments-view">
          <h1>Comments</h1>
          <p>
            {this.state.comments.map(comment => {
              return (
                <ul>
                  <li>
                    Author: <b>{comment.author}</b>
                  </li>
                  <li>
                    On:{" "}
                    {moment(comment.created_at)
                     .format('llll')}
                  </li>
                  <li>{comment.body}</li>
                </ul>
              );
            })}
          </p>
        </div>

        <div className="New-comment">
          <h1>add new comment here!!!</h1>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.fetchComments();
  }

  fetchComments = () => {
    api.getArticleComments(this.props.article_id).then(comments => {
      this.setState({ comments });
    });
  };
}

export default Comments;
