import React, { Component, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import "./home.css";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import HomeNavbar from "./homeNavbar";
import FishermanUpload from "../fisherman/fishermanUpload";
import URL from '../../config.js';

const FishermanLogin = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const uploadCredentials = async(event) => {
    event.preventDefault();

    try {
      let res = await fetch(URL.url+"/api/login/h", {
        method: "POST",
        body: JSON.stringify({
          username: username,
          password: password,
          type: "fisherman"
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
      if (resJson.login === true) {
        localStorage.setItem('user', username);
        localStorage.setItem('authentication', true);
        console.log("yesss");
        history.push("/fisherman/home");
      } else {
        console.log("nooo");
      }
    } catch (err) {
      console.log(err);
    }
  };

    return (
      <>
      <HomeNavbar />
      <div className="fullContainer">
        <div className="loginBox1">
          <h1 style={{ textAlign: "center" }}>Fisherman Login</h1>
          <form onSubmit={uploadCredentials}>
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
              <button className="fishermanSubmit">Submit</button>
          </form>
          <p
            style={{
              display: "inline",
              marginTop: "2rem",
              fontSize: "0.8rem",
            }}
          >
            New user?{" "}
          </p>
          <Link to="/home/fisherman/register">Click here to register</Link>
        </div>
      </div>
      </>
    );
  }

export default FishermanLogin;
