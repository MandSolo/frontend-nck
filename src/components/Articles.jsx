import React, { Component } from "react";
import { Link } from "@reach/router";
import * as api from "../api";
import Loading from "./Loading";
import Filter from "./Filter";
import NewArticle from "./NewArticle";
import "../styling/Articles.css";
import "../App.css";
import moment from "moment";
import _ from "lodash";

class Articles extends Component {
  state = {
    articles: [],
    isLoading: true,
    page: 1
  };

  render() {

    const { articles, page } = this.state;

    if (this.state.isLoading) {
      return <Loading path="/" />;
    }

    return (
      <div className="Articles">
        <Filter path="/" sortArticlesBy={this.sortArticlesBy} />
    {this.props.username && <NewArticle path="/" />} {<p>Only logged in users can add an article!</p>}
        <div className="Article-view">
          <h1>All Articles</h1>
          <p>
            {this.state.articles.map(article => {
              return (
                <div className="Individual-article">
                  <ul>
                    <li> <Link to={`/articles/${article.article_id}`}>
                      <b>{article.title}</b></Link>
                    </li>
                    <li>Written By:  <Link to={`/users/${article.author}`}>{article.author} </Link> </li>
                    <li>
                      Created:
                      {moment(article.created_at)
                        .startOf("hour")
                        .fromNow()}
                    </li>
                  
                  </ul>
                </div>


              );
            })}
       
          {page > 1 && (
            <button
              className="buttonDown"
              onClick={this.pageDown}
            >
              Previous Page
            </button>
          )}
          {articles.length === 10 && (
            <button
              className="buttonUp"
              onClick={this.pageUp}
            >
              Next Page
            </button>
          )}

</p>


        </div>


      </div>
    );
  }

  componentDidMount() {
    this.state.page > 1
    ? this.pagginate()
    :
    this.fetchArticles();
  }

  fetchArticles = () => {
    api.getArticles().then(articles => {
      this.setState({ articles, isLoading: false });
    })
  };

  sortArticlesBy = (filterType) => {
    switch(filterType) {
      case "MostComments":
        const sortedByComment = _.orderBy(this.state.articles, ['comment_count'],['desc'])
        this.setState({articles: sortedByComment})
        break;
      case "MostVotes":
        const sortedByVotes = _.orderBy(this.state.articles, ['votes'],['desc'])
        this.setState({articles: sortedByVotes})
        break; 
      case "Newest":
        const sortedByDate = _.orderBy(this.state.articles, ['created_at'],['desc'])
        this.setState({articles: sortedByDate})
        break; 
      default:
    }
  }

  pagginate = () => {
    api
      .changeArticlePage(this.state.page, this.props.topic)
      .then(articles => this.setState({ articles }));
  };

  pageDown = () => {
    this.setState({ page: this.state.page - 1 }, () => {
      this.pagginate();
    });
  };

  pageUp = () => {
    this.setState({ page: this.state.page + 1 }, () => {
      this.pagginate();
    });
  };



}

export default Articles;
