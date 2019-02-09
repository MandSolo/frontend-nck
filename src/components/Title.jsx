import React from "react";
import { Link } from "@reach/router";
import "../styling/Title.css";

const Title = () => {
  return (
    <div className="Title">
      <h1>
        <Link to="/">Mand Cashin News </Link>{" "}
      </h1>
    </div>
  );
};

export default Title;
