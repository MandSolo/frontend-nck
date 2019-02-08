import React, { Component } from "react";
import * as api from "../Api";
import "../styling/Comments.css";
import moment from "moment";

class Comments extends Component {
  state = {
    body: " ",
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
                <div className="Individual-comment">
                <ul>
                  <li>
                    Author: <b>{comment.author}</b>
                  </li>
                  <li>On: {moment(comment.created_at).format("llll")}</li>
                  <li>{comment.body}</li>
                </ul>
                </div>
              );
            })}
          </p>
          
        </div>

        <div className="New-comment">
          <h2>Add Your Comment</h2>
          <form onSubmit={this.handleSubmit}>
            <textarea
              className="New-body"
              id="body"
              type="text"
              placeholder="Write your comment here..."
              value={this.state.body}
              onChange={this.handleChange}
              required
            />
            <br />
            <button type="submit" className="commentButton">
              Add Comment
            </button>
          </form>
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

  handleChange = event => {
    const { id } = event.target;
    this.setState({
      [id]: event.target.value
    });
  };
  handleSubmit = event => {
    const { article_id } = this.props;
    event.preventDefault();
    this.addComment(article_id).then(() =>
      this.setState({
        body: ""
      })
    );
  };

  addComment = async article_id => {
    const { body, username } = this.state;
    api.addComment(article_id, username, body).then(comment => {
      alert("Thanks, your comment has been posted!");
      const postedComment = { ...comment, author: comment.username };
      this.setState({ comments: [...this.state.comments, postedComment] });
    });
  };
}

export default Comments;
