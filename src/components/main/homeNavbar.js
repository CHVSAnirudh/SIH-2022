import { React, Component } from "react";
import Home from "../images/house.png";
import About from "../images/chat.png";
import { Link } from "react-router-dom";
import "./homeNavbar.css";

class HomeNavbar extends Component {
  render() {
    return (
      <>
        <div className="homeNavbar">
          <Link to="/">
            <div className="navbarItem">
              <img src={Home} alt="" />
            </div>
          </Link>
          <Link to="/about">
            <div className="navbarItem">
              <img src={About} alt="" />
            </div>
          </Link>
        </div>
      </>
    );
  }
}

export default HomeNavbar;
