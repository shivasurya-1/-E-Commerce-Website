import React from "react";
import { Link } from "react-router-dom";

function Topnavigation() {
  return (
    <div>
      <div className="topNavigation">
        <div className="logo">
          <img alt="" src="./Images/logo.png"></img>
        </div>
        <div>
          <Link to={"/home"}>Home</Link>
        </div>
        <div className="searchBar">
          <input className="input-search" placeholder="Search"></input>
        </div>
        <div>
          <Link to={"/aboutUs"}>About Us</Link>
        </div>
        <div>
          <Link to={"/"}>Logout</Link>
        </div>
      </div>
    </div>
  );
}

export default Topnavigation;
