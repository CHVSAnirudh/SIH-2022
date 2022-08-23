import HomeNavbar from "./homeNavbar";
import { React, Component } from "react";
// import "/Home/fishermanLogin";
// import "./govtLogin";
// import "./wbLogin";
import "./home.css";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div>
        <HomeNavbar />
        <div className="fullContainer">
          <div className="textHome">
            <h1>Welcome to Main Page</h1>
          </div>
          <div className="buttonDiv">
            <Link to="/Home/fishermanLogin">
              <button className="fishButton">Fisherman Login</button>
            </Link>
            <Link to="/Home/govtLogin">
              <button className="govtButton">Government Login</button>
            </Link>
            <Link to="/Home/wbLogin">
              <button className="wbButton">Weigh Bridge Login</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default HomePage;
