import React from "react";
import "./NotFound.css";
import MainNavbar from "../MainNavbar/MainNavbar";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="notfound">
      <MainNavbar />
      <div className="notfound-main">
      <h1><span>Opoos...</span>&nbsp;&nbsp;404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <p>Go To <Link to={"/"}><span className="home-span">Home</span></Link> Page</p>
      </div>
    </div>
  );
};

export default NotFound;
