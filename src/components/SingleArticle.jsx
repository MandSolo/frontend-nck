import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api";
import Loading from "./Loading";
import AddVote from "./AddVote";
import Comments from "./Comments";
import "../styling/SingleArticle.css";
import moment from "moment";
import { navigate } from "@reach/router";

class SingleArticle extends Component {
  state = {
    article: {},
    isLoading: true
  };

  render() {
    if (this.state.isLoading) {
      return <Loading path="/" />;
    }

    return (
      <div className="SingleArticle">
        <div className="SingleArticle-view">
          <h1>
            <b>{this.state.article.title}</b>
          </h1>
          <ul>
            <li> {this.state.article.body}</li>
</ul><ul>
            <li>Written By:  <Link to={`/users/${this.state.article.author}`}>{this.state.article.author} </Link> </li>
            <li>
              Created:
              {moment(this.state.article.created_at)
                .startOf("hour")
                .fromNow()}
            </li>
          </ul>
        </div>

        <AddVote
          path="/"
          votes={this.state.article.votes}
          article_id={this.state.article.article_id}
        />
       {this.props.username && <Comments
          path="/"
          article_id={this.props.article_id}
          username={this.props.username}
        />} {<p>Only logged in users can view or add comments!</p>}
        
      </div>
    );
  }

  componentDidMount() {
    this.fetchArticle();
  }

  fetchArticle = () => {
    api.getArticleById(this.props.article_id).then(article => {
      this.setState({ article, isLoading: false });
    }).catch(err => {
      navigate('/notfound'); 
    });
  };
}

export default SingleArticle;
