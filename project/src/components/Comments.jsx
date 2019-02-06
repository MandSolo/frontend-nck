import React, { Component } from "react";
import * as api from "../Api";
import "../styling/Comments.css";

class Comments extends Component {
  state = {
    comments: [],
  };

  render() {
    
    console.log(this.state.comments)
    return (
      <div className="Comments">
        <div className="Comments-view">
          <h1>Comments</h1>
          <p>
            {this.state.comments.map(comment => {
              return (
                <ul>
                  <li>
                    <b>{comment.body}</b>
                  </li>
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
    api.getArticleComments(this.props.comments).then(comments => {
      
      this.setState({ comments });
    });
  };
}

export default Comments;
