import React from "react";
import { Link } from "@reach/router";
import ohdear from "../images/ohdear.png";
import "../styling/NotFound.css";

const NotFound = () => {
    return (
      <div className="NotFound">
        <img src={ohdear} alt="Oh Dear" />
        <p>
          You appear to have gotten lost. You can return to the home page by
          clicking <Link to="/">here!</Link>
        </p>
      </div>
    );
  }

export default NotFound;
