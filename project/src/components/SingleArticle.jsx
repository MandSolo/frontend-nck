import React, { Component } from "react";
import * as api from "../Api";
import AddVote from "./AddVote";
import Comments from "./Comments";
import "../styling/SingleArticle.css";
import moment from "moment";

class SingleArticle extends Component {
  state = {
    article: {}
  };

  render() {
    return (
      <div className="SingleArticle">
      <div className= "SingleArticle-view">
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


        <AddVote path="/" className="Article-vote" />
        <Comments path="/" className="Article-comments" article_id={this.props.article_id}/>

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
