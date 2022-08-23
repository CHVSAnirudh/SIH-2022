import HomeNavbar from "./homeNavbar.js";
import { React, Component } from "react";
// import "/Home/fishermanLogin";
// import "./govtLogin";
// import "./wbLogin";
import "./home.css";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    return (
      <div>
        <HomeNavbar />
        <div className="fullContainer">
          <div className="textHome">
            <h1>Welcome to Main Page</h1>
          </div>
          <div className="buttonDiv">
            <Link to="/home/fisherman/login">
              <button className="loginButton">Fisherman Login</button>
            </Link>
            <Link to="/home/government/login">
              <button className="loginButton">Government Login</button>
            </Link>
            <Link to="/home/weighbridge/login">
              <button className="loginButton">Weigh Bridge Login</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
