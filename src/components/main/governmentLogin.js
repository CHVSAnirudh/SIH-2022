import React, { useState } from "react";
import "./home.css";
import HomeNavbar from "./homeNavbar";
import URL from '../../config.js';
import { useHistory } from "react-router-dom";

const GovernmentLogin = () => {
  const history = useHistory();
  const checkCredentials = () => {
    if(username === "admin" && password === "admin")
    {
      history.push('/government/home');
    }
  }

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
     <HomeNavbar />
    <div className="fullContainer">
      <div className="loginBox2">
        <h1 style={{ textAlign: "center" }}>Government Login</h1>
        <form onSubmit={checkCredentials}>
        <input
              className="Username"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            ></input>
            <input
              className="Password"
              type="password"
              placeholder="Password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
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
