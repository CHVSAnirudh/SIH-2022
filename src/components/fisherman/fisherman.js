import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import FishermanNavbar from "./fishermanNavbar";
import LogoutButton from "../main/logoutButton";
import uploadImg from "../images/upload.png";
import adviceImg from "../images/chat.png";
import dataImg from "../images/user.png";

function Fisherman() {
  // const [currentUser, setCurrentUser] = useState("");
  // useEffect(() => {
  //   const loggedInUser = localStorage.getItem("user");
  //   if (loggedInUser) {
  //     setCurrentUser(loggedInUser);
  //   }
  // }, []);

  return (
    <>
      <FishermanNavbar />
      <div className="fullContainer">
        <p className="FishHead">
          <strong>Welcome to Fisherman's Page</strong>
        </p>
        <p className="navLeg">
          <strong>Directions</strong>
        </p>
        <div className="ulBox">
          <div className="imgText">
            <Link to="/fisherman/upload">
              <img src={uploadImg} alt="" />
              <p>Upload Image</p>
            </Link>
          </div>
          <div className="imgText">
            <Link to="/fisherman/advice">
              <img src={adviceImg} alt="" />
              <p>Advisory</p>
            </Link>
          </div>
          {/* <div className="imgText">
            <Link to="/fisherman/user">
              <img src={dataImg} alt="" />
              <p>Profile Data</p>
            </Link>
          </div> */}
        </div>
      </div>
      <LogoutButton />
    </>
  );
}

export default Fisherman;