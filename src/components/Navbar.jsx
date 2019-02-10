import React from "react";
import { Link } from "@reach/router";
import "../styling/Navbar.css";

const Navbar = () => {
  return (
    <nav className="Navbar">
      <Link to="/">Home</Link>
      {" / "}
      <Link to="/articles">Articles</Link>
      {" / "}
      <Link to="/topics">Topics</Link>
      {" / "}
      <Link to="/users">Users</Link>
    </nav>
  );
};

export default Navbar;
