import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
import FishermanNavbar from './fishermanNavbar';
import LogoutButton from '../main/logoutButton';

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
          <LogoutButton />
      </>
    )
}

export default Fisherman