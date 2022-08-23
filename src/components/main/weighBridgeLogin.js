import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./home.css";
import HomeNavbar from "./homeNavbar.js";
import URL from '../../config.js'
const WeighBridgeLogin = () => {
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
          type: "weighbridge"
        }),
      });
      let resJson = await res.json();
      console.log(resJson);
      if (resJson.login === true) {
        localStorage.setItem('user', username);
        localStorage.setItem('authentication', true);
        console.log("yesss");
        history.push("/weighbridge/home");
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
        <div className="loginBox3">
          <h1 style={{ textAlign: "center" }}>Weighbridge Login</h1>
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
              <button className="weighbridgeSubmit">Submit</button>
          </form>
        </div>
      </div>
      
    </>
  );
}

export default WeighBridgeLogin;
