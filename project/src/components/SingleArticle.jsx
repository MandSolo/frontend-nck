import React, { Component } from "react";
import * as api from "../Api";
import "../styling/SingleArticle.css";
import moment from "moment";

class SingleArticle extends Component {
  state = {
    article: {}
  };

  render() {
    return (
      <div className="SingleArticle">
        <h1>
          <b>{this.state.article.title}</b>
        </h1>
        <p>
          <b> Votes: {this.state.article.votes}</b>
        </p>
        <p> {this.state.article.body}</p>
        <ul>
          <li>Written By: {this.state.article.author}</li>
          <li>
            Created:
            {moment(this.state.article.created_at)
              .startOf("hour")
              .fromNow()}
          </li>
        </ul>
        ******************************************
        ******************************************
        ******************************************<br></br>
        COMMENTS WILL GO HERE!!!!!!!!!!!!
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle = () => {
    console.log(this.props);
    api.getArticleById(this.props.article_id).then(article => {
      console.log(article);
      this.setState({ article });
    });
  };
}

export default SingleArticle;
