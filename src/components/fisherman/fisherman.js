import React from 'react'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import {AnimatePresence} from 'framer-motion';
import FishermanNavbar from './fishermanNavbar';


function Fisherman() {

  
  return (
    <>
        <FishermanNavbar />
    </>
  )
}

export default Fisherman