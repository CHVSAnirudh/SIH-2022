import React from "react";
import LogoutButton from "../main/logoutButton";
import GovernmentNavbar from "./governmentNavbar";
import { Link } from "react-router-dom";
import Harbor from "../images/harbor.png";
import Fish from "../images/fish.png";

const Government = () => {
  return (
    <>
      <GovernmentNavbar />
      <div className="fullContainer">
        <p className="GovtHead">
          <strong>Welcome to Government's Page</strong>
        </p>
        <p className="navLeg">
          <strong>Directions</strong>
        </p>
        <div className="ulBox">
          <div className="imgText">
            <Link to="/government/harbors">
              <img src={Harbor} alt="" />
              <p>Harbor-wise Details</p>
            </Link>
          </div>
          <div className="imgText">
            <Link to="/government/fishes">
              <img src={Fish} alt="" />
              <p>Species-wise Details</p>
            </Link>
          </div>
        </div>
      </div>
      <LogoutButton />
    </>
  );
};

export default Government;