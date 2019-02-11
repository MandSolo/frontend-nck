import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api";
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
                      Author:{" "}
                      <Link to={`/users/${comment.author}`}>
                        {comment.author}{" "}
                      </Link>
                    </li>
                    <li>On: {moment(comment.created_at).format("llll")}</li>
                    <li>{comment.body}</li>
                    <li>
                      {this.state.username === comment.username && (
                        <button
                          className="delete-button"
                          onClick={() => this.handleDelete(comment.comment_id)}
                          hidden={this.props.username !== comment.author}
                        >
                          Delete Comment
                        </button>
                      )}
                    </li>
                  </ul>
                </div>
              );
            })}
          </p>
        </div>

        <div className="New-comment">
          <h2>Want to share your thoughts?</h2>
          <form onSubmit={this.handleSubmit}>
            <textarea
              className="New-comment-body"
              id="comment-body"
              type="text"
              placeholder="Keep it contraversial..."
              value={this.state.body}
              onChange={this.handleChange}
              required
            />
            <br />
            <button type="submit" className="commentButton">
              Add Comment
            </button>
          </form>
          <p />
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
    const { id, value } = event.target;
    this.setState({
      [id]: event.target.value,
      body: value
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

  handleDelete(comment_id) {
    const { article_id } = this.props;
    api.deleteComment(article_id, comment_id).then(() => {
      alert("Comment deleted!");
      this.setState(prevState => ({
        comments: prevState.comments.filter(
          comment => comment.comment_id !== comment_id
        )
      }));
    });
  }

  addComment = async article_id => {
    const { body } = this.state;
    const { username } = this.props;
    api.addComment(article_id, username, body).then(comment => {
      alert("Thanks, your comment has been posted!");
      const postedComment = { ...comment, author: comment.username };
      this.setState({ comments: [...this.state.comments, postedComment] });
    });
  };
}

export default Comments;
