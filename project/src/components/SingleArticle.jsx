import React, { Component } from "react";
import "../styling/SingleArticle.css";

class SingleArticle extends Component {
    state = {
        article: {},
    }

  render() {
    return (
      <div className="SingleArticle">
        <p>single article </p>
      </div>
    );
  }
}

export default SingleArticle;
