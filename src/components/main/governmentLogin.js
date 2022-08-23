import React from "react";
import "./home.css";
import HomeNavbar from "./homeNavbar";
import URL from '../../config.js';

const GovernmentLogin = () => {
  const checkCredentials = () => {
    
  }
  return (
    <>
     <HomeNavbar />
    <div className="fullContainer">
      <div className="loginBox2">
        <h1 style={{ textAlign: "center" }}>Government Login</h1>
        <form onSubmit={checkCredentials}>
          <input className="Username" type="text" placeholder="Username" required></input>
          <input
            className="Password"
            type="password"
            placeholder="Password"
            required
          ></input>
          <div className="fp">
            <a href="/">Forgot Password?</a>
          </div>
          <button className="governmentSubmit">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
}

export default GovernmentLogin;
