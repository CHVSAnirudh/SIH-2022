import React, { useEffect, useState } from 'react'
import LogoutButton from '../main/logoutButton'
import WeighbridgeNavbar from './weighbridgeNavbar'
import './weighbridge.css'
import 'reactjs-popup/dist/index.css';
import axios from "axios";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from "react-router-dom";
// import FishermanNavbar from "./fishermanNavbar";
import FishImage from "../images/mackeral.png";
import catlaImg from "../images/catla2.png";
import moriImg from "../images/mori2.png";
import rohuImg from "../images/rohu2.png";
import turtleImg from "../images/turtle.png";
import URL from "../../config.js";
import { useHistory } from "react-router-dom";
import {Buffer} from 'buffer';
Buffer.from('anything','base64');

function WeighbridgeUpload() {
  const history = useHistory();
  const [currentUser, setCurrentUser] = useState("");
  const [fishList, setFishList] = React.useState([]);
  const [image, setImage] = useState("");

  const [imageStatus, setImageStatus] = useState(false);
  // var loadFile = function (event) {
  //   var reader = new FileReader();
  //   reader.onload = function () {
  //     var output = document.getElementById("output");
  //     console.log(typeof output.src);
  //     output.src = reader.result;
  //     setImageStatus(true);
  //   };
  //   reader.readAsDataURL(event.target.files[0]);
  // };

  const [imageState,setImageState] = useState(null);
  // setImageState(d);
  
  const [weight, setWeight] = useState();
  const [message, setMessage] = useState("");
  const dataUpload = async (event) => {
    event.preventDefault();
    try {
      let res = await fetch(URL.url + "/api/weigh_detect/f", {
        method: "GET",
      });
      let resJson = await res.json();
      if (res.status === 200) {
        // history.push("/weighbridge/home");
        var image = resJson.image.slice(2,-2)
        var message = resJson.message;
        console.log(image);
        setImageState(image);
        setMessage(message);
        setImageStatus(!imageStatus);
      } else {
      }
    } catch (err) {
      console.log(err);
    }
    } 

    

  // .then((res) => ((res.data.result).map((item) => {
  //   setFishList([...fishList,item]);
  //  })))

  const fishDataUpload = async (event) => {
    event.preventDefault();
    const finalData = [];
    var date = new Date();
    var dateStr =
      date.getFullYear() +
      "-" +
      ("00" + (date.getMonth() + 1)).slice(-2) +
      "-" +
      ("00" + date.getDate()).slice(-2) +
      " " +
      ("00" + date.getHours()).slice(-2) +
      ":" +
      ("00" + date.getMinutes()).slice(-2) +
      ":" +
      ("00" + date.getSeconds()).slice(-2);
    console.log(dateStr);
    fishList.map((item) => {
      finalData.push({
        specie_name: item.name,
        specie_weight: item.weight,
        specie_proportion: item.proportion,
      });
    });

    console.log(
      JSON.stringify({
        dateandtime: dateStr,
        catch: finalData,
        weight: weight,
      })
    );
    try {
      let res = await fetch(URL.url + "/api/weigh_detect/f", {
        method: "GET",
        body: JSON.stringify({
          weight: weight,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        history.push("/weighbridge/home");
        // setMessage("User created successfully");
      } else {
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setCurrentUser(loggedInUser);
    }
  }, []);

  const [flag,setFlag] = useState(0);
  const [popup,setPopup] = useState(false);


  return (
    <>
    <WeighbridgeNavbar />
    <LogoutButton />
    <div className="fullContainer">
          <div className="form">
            <div className={true ? "preview show" : "preview"}>
              <img id="output" src={`data:image/jpeg;base64,${imageState}`}></img>
            </div>

            <div className="secondModule">
              {/* <input
                type="text"
                className="weight"
                value={weight}
                placeholder="Estimated Catch Weight(in KG)"
                onChange={(e) => setWeight(e.target.value)}
              /> */}
              <Link to="/fisherman/estimations">
                <button
                  className="confirmSubmit"
                  type="submit"
                  onClick={dataUpload}
                >
                  Calculate
                </button>
              </Link>
            </div>
          </div>

          <div style={{textAlign:"center" ,margin:"30px auto"}}>{message}</div>

          {fishList.length > 0 && (
            <>
              <h3>Estimations</h3>

              <table>
                <thead>
                  <td>S.No.</td>
                  <td>Predicted Species</td>
                  <td>Image</td>
                  <td>Proportions</td>
                  <td>Estimated Weight</td>
                </thead>
                <tbody>
                  {fishList.map((item, idx) => {
                    if(item.name === "turtle" && flag === 0)
                    {
                      setFlag(1);
                      setPopup(true);
                    }
                    return (
                      <tr
                        key={idx}
                        className={
                          item.name == "turtle" ? "Endangeered" : "species"
                        }
                      >
                        <td>{idx + 1}</td>
                        <td>{item.name}</td>
                        <td>
                          <img
                            src={
                              item.name === "turtle"
                                ? turtleImg
                                : item.name === "mori"
                                ? moriImg
                                : item.name === "catla"
                                ? catlaImg
                                : rohuImg
                            }
                            width="100%"
                          ></img>
                        </td>
                        <td>{item.proportion}</td>
                        <td>{item.weight}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <div className="confirmation">
                <Link to="/fisherman/upload" className="submit">
                  <button>Cancel</button>
                </Link>
                <button className="submit" onClick={fishDataUpload}>
                  Submit
                </button>
              </div>
            </>
          )}
        </div>
        {popup && flag === 1 &&(
                  <Popup trigger={() => {
                    alert("ఒక తాబేలు క్యాచ్‌లో చిక్కుకుంది. ఇది అంతరించిపోతున్న జాతి. దయచేసి ఈవెంట్‌ను నివేదించండి మరియు దానిని దాని సహజ వాతావరణంలో వదిలివేయండి.");
                    setPopup(false);
                    setFlag(2);
                  }}>
                  </Popup>
              )}
    </>
  )
};           

export default WeighbridgeUpload