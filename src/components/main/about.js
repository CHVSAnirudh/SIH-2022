import React from "react";
import "./home.css";
import HomeNavbar from './homeNavbar.js';

export default function about() {
  return (
    <>
    <HomeNavbar />
    <div className="fsullContainer">
      <h1>Team members</h1>
      <ul>
        <li>Anirudh</li>
        <li>Kaushal</li>
        <li>Sripriya</li>
        <li>Naveen</li>
        <li>Aishwarya</li>
        <li>Abhiram</li>
      </ul>
    </div>
    </>
    
  );
}
