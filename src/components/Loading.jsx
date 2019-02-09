import React from "react";
import loading from "../images/loading.gif";
import "../styling/Loading.css";

const Loading = () => {

    return (
      <div className="Loading">
        <img src={loading} alt="Loading" />
        <h1>Please wait... Loading!</h1>
      </div>
    );
  }

export default Loading;
