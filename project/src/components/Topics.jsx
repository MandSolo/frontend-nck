import React, { Component } from "react";
import "../styling/Topics.css";

class Topics extends Component {
  state = {
    topics: [
      {
        slug: "coding",
        description: "Code is love, code is life"
      },
    ]
  };

  render() {
    return (
      <div className="Topics">
     <p>   {this.state.topics[0].slug} </p>
     <p> {this.state.topics[0].description}</p>

      </div>
    );
  }
}

export default Topics;
