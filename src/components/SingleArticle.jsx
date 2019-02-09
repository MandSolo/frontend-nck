import React, { Component } from "react";
import * as api from "../api";
import Loading from "./Loading";
import AddVote from "./AddVote";
import Comments from "./Comments";
import "../styling/SingleArticle.css";
import moment from "moment";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true
  };

  render() {
    if (this.state.isLoading) {
      return (
     
          <Loading path="/"  />

      );
    }

    return (
      <div className="SingleArticle">
        <div className="SingleArticle-view">
          <h1>
            <b>{this.state.article.title}</b>
          </h1>
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
        </div>

        <AddVote path="/" votes={this.state.article.votes} article_id={this.state.article.article_id}/>
        <Comments
          path="/"
            article_id={this.props.article_id} username={this.props.username} 
        />
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle = () => {
    api.getArticleById(this.props.article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  };
}

export default SingleArticle;
