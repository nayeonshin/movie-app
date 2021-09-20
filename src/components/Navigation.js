import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="nav">
      <Link to={"/movie-app"}>Home</Link>
      <Link to={"/movie-app/about"}>About</Link>
    </div>
  );
}

export default Navigation;
