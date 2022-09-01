import React from "react";
import LogoutButton from "../main/logoutButton";
import WeighbridgeNavbar from "./weighbridgeNavbar";
import Upload from "../images/upload.png";
import Log from "../images/log.png";
import { Link } from "react-router-dom";

function Weighbridge() {
  return (
    <>
      <WeighbridgeNavbar />
      <div className="fullContainer">
        <p className="WBHead">
          <strong>Welcome to Weigh Bridge's Page</strong>
        </p>
        <p className="navLeg">
          <strong>Directions</strong>
        </p>
        <div className="ulBox">
          <div className="imgText">
            <Link to="/weighbridge/upload">
              <img src={Upload} alt="" />
              <p>Upload Image</p>
            </Link>
          </div>
          <div className="imgText">
            <Link to="/weighbridge/log">
              <img src={Log} alt="" />
              <p>Check Log</p>
            </Link>
          </div>
        </div>
      </div>
      <LogoutButton />
    </>
  );
}

export default Weighbridge;