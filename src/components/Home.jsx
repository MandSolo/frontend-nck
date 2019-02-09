import React from "react";
import fakenews from "../images/fakenews.png";
import "../styling/Home.css";

const Home = () => {
  return (
    <div className="Home">
      <img src={fakenews} alt="Fake News" />
      <p>
        Welcome to M C News! Please remember to log in at the top of this page.
      </p>
      <p>Non-users can view and vote on existing articles only.</p>
      <p>
        Logged-in users are able to add new topics and articles. You can also
        view user comments and add or remove your own comments on existing articles.
      </p>
      <p>
        <i>
          {" "}
          "If it is on the internet then it must be true, and you can’t question
          it." - Abraham Lincoln
        </i>
      </p>
    </div>
  );
};

export default Home;
