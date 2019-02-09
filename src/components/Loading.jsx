import React from "react";
import loading from "../images/loading.gif";
import "../styling/Loading.css";

const Loading = () => {

    return (
      <div className="Loading">
        <img src={loading} alt="Loading" width="40%" />
        <p>Sorry, the internet is doing a thing...</p>
      </div>
    );
  }

export default Loading;
