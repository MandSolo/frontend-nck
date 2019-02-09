import React from "react";
import fakenews from "../images/fakenews.png";
import "../styling/Home.css";

const Home = () => {

    return (
      <div className="Home">
        <img src={fakenews} alt="Fake News" />
        <p>
          Welcome to M C News! Please remember to log in at the top of this
          page.
        </p>
        <p>
          Once you are logged in, you will be able to add new topics, articles
          and comments. You can also vote on existing articles and comments.
        </p>
        <p>
         <i> "If it is on the internet then it must be true, and you can’t question
          it." - Abraham Lincoln</i>
        </p>
      </div>
    );
  }


export default Home;
