// import React, { useEffect, useState } from "react";
// import "./fisherman.css";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import FishermanNavbar from "./fishermanNavbar";
// import FishImage from "../images/mackeral.png";
// import LogoutButton from "../main/logoutButton";
// import URL from "../../config.js";

// // import image from "../images/previmg.png";

// function FishermanUpload({ match }) {
//   const [selectedFile, setSelectedFile] = React.useState(null);
//   const [currentUser, setCurrentUser] = useState("");
//   const [fishList, setFishList] = React.useState([]);
//   // const [selectedImg, setSelectedImg] = useState([]);
//   const [image, setImage] = useState("");
//   const fileSelectedHandler = (event) => {
//     setSelectedFile(event.target.files[0]);
//     // console.log(event.target.files);
//     if (event.target.files) {
//     }
//   };

//   const [weight, setWeight] = useState();
//   const dataUpload = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append("selectedFile", selectedFile);
//     try {
//       const response = axios({
//         method: "POST",
//         url: URL.url + "/api/img_predict/" + weight,
//         data: formData,
//         body: JSON.stringify({
//           weight: weight,
//         }),
//         headers: { "Content-Type": "multipart/form-data" },
//       }).then((res) => {
//         if (
//           typeof res.data.result === "string" &&
//           res.data.result.startsWith("The")
//         ) {
//           // setFishList();
//           alert("Species not detected");
//         } else {
//           setFishList(res.data.result);
//         }
//         // console.log(res);
//       });
//     } catch (error) {
//       //  console.log(error)
//       alert("Error occurred");
//     }
//   };
//   // .then((res) => ((res.data.result).map((item) => {
//   //   setFishList([...fishList,item]);
//   //  })))
//   const [imageStatus, setImageStatus] = useState(false);
//   // handleUploadImage(ev) {
//   //   ev.preventDefault();
  
//   //   const data = new FormData();
//   //   for (let i = 0; i < this.uploadInput.files.length; i++) {
//   //     data.append("file", this.uploadInput.files[i]);
//   //   }
  
//   //   fetch("http://localhost:5000/upload", {
//   //     method: "POST",
//   //     body: data,
//   //   }).then((response) => {
//   //     response.json().then((res) => {
//   //       console.log(res);
//   //     });
//   //   });
//   // }

//   var loadFile = function (event) {
//     var reader = new FileReader();
//     reader.onload = function () {
//       var output = document.getElementById("output");
//       console.log(typeof output.src);
//       output.src = reader.result;
//       setImageStatus(true);
//     };
//     reader.readAsDataURL(event.target.files[0]);
//   };

//   const fishDataUpload = async (event) => {
//     event.preventDefault();
//     const finalData = [];
//     var date = new Date();
//     var dateStr =
//       date.getFullYear() +
//       "-" +
//       ("00" + (date.getMonth() + 1)).slice(-2) +
//       "-" +
//       ("00" + date.getDate()).slice(-2) +
//       " " +
//       ("00" + date.getHours()).slice(-2) +
//       ":" +
//       ("00" + date.getMinutes()).slice(-2) +
//       ":" +
//       ("00" + date.getSeconds()).slice(-2);
//     console.log(dateStr);

//     fishList.map((item) => {
//       finalData.push({
//         specie_name: item.name,
//         specie_weight: item.weight,
//         specie_proportion: item.proportion,
//       });
//     });

//     console.log(
//       JSON.stringify({
//         dateandtime: dateStr,
//         catch: finalData,
//         weight: weight,
//       })
//     );
//     try {
//       let res = await fetch(URL.url + "/api/catch_dbupdate/f", {
//         method: "POST",
//         body: JSON.stringify({
//           username: currentUser,
//           dateandtime: dateStr,
//           catch: finalData,
//           weight: weight,
//         }),
//       });
//       let resJson = await res.json();
//       if (res.status === 200) {
//         // setMessage("User created successfully");
//       } else {
//       }
//     } catch (err) {
//       console.log(err);
//     }

//     console.log(finalData);
//   };

//   useEffect(() => {
//     const loggedInUser = localStorage.getItem("user");
//     if (loggedInUser) {
//       setCurrentUser(loggedInUser);
//     }
//   }, []);

//   const [flag,setFlag] = useState(0);

//   const [popup,setPopup] = useState(false);

//   // if (currentUser.length <= 0) {
//   //   <Link to="/home/HomePage">Error occured...enkalki dengey</Link>;
//   // } else {
//     return (
//       <>
//         <FishermanNavbar />
//         <LogoutButton />
//         <div className="fullContainer">
//           <div className="form">
//             <div className={imageStatus ? "preview show" : "preview"}>
//               <img id="output" src={image}></img>
//             </div>

//             <div className="secondModule">
//               <input
//                 className="upload"
//                 type="file"
//                 onChange={(e) => {
//                   fileSelectedHandler(e);
//                   loadFile(e);
//                 }}
//                 accept="image/*"
//               />
//               <input
//                 type="text"
//                 className="weight"
//                 value={weight}
//                 placeholder="Estimated Catch Weight(in KG)"
//                 onChange={(e) => setWeight(e.target.value)}
//               />
//               <Link to="/fisherman/estimations">
//                 <button
//                   className="confirmSubmit"
//                   type="submit"
//                   onClick={dataUpload}
//                 >
//                   Submit
//                 </button>
//               </Link>
//             </div>
//           </div>

//           {fishList.length > 0 && (
//             <>
//               <h3>Estimations</h3>
//               <table>
//                 <thead>
//                   <td>S.No.</td>
//                   <td>Predicted Species</td>
//                   <td>Image</td>
//                   <td>Proportions</td>
//                   <td>Estimated Weight</td>
//                 </thead>
//                 <tbody>
//                   {fishList.map((item, idx) => {
//                     if(item.name === "turtle" && flag === 0)
//                     {
//                       setFlag(1);
//                       setPopup(true);
//                     }
//                     return (
//                       <>
//                         <tr
//                           key={idx}
//                           className={
//                             item.name == "turtle" ? "specie endangered" : "specie"
//                           }
//                         >
//                           <td>{idx + 1}</td>
//                           <td>{item.name}</td>
//                           <td>
//                             <img src={FishImage} width="100%"></img>
//                           </td>
//                           <td>{item.proportion}</td>
//                           <td>{item.weight}</td>
//                         </tr>
//                       </>
//                     );
                    
//                   })}
//                 </tbody>
//               </table>

//               <div className="confirmation">
//                 <Link to="/fisherman/upload" className="submit">
//                   <button>Cancel</button>
//                 </Link>
//                 <Link
//                   to="/fisherman/upload"
//                   className="submit"
//                   onClick={fishDataUpload}
//                 >
//                   <button>Submit</button>
//                 </Link>
//               </div>
//             </>
//           )}
          
//         </div>
//         {popup && flag === 1 &&(
//                   <Popup trigger={() => {
//                     alert("ఒక తాబేలు క్యాచ్‌లో చిక్కుకుంది. ఇది అంతరించిపోతున్న జాతి. దయచేసి ఈవెంట్‌ను నివేదించండి మరియు దానిని దాని సహజ వాతావరణంలో వదిలివేయండి.");
//                     setPopup(false);
//                     setFlag(2);
//                   }}>
//                   </Popup>
//               )}
//       </>
//     );
//   }
// // }

// export default FishermanUpload;

import React, { useEffect, useState } from "react";
import "./fisherman.css";
import axios from "axios";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { Link } from "react-router-dom";
import FishermanNavbar from "./fishermanNavbar";
import FishImage from "../images/mackeral.png";
import catlaImg from "../images/catla2.png";
import moriImg from "../images/mori2.png";
import rohuImg from "../images/rohu2.png";
import turtleImg from "../images/turtle.png";
import LogoutButton from "../main/logoutButton";
import URL from "../../config.js";
import { useHistory } from "react-router-dom";

function FishermanUpload({ match }) {
  const history = useHistory();
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [currentUser, setCurrentUser] = useState("");
  const [fishList, setFishList] = React.useState([]);
  // const [selectedImg, setSelectedImg] = useState([]);
  const [image, setImage] = useState("");
  const [srcFish, setSrcFish] = useState(FishImage);
  // const [formData, setFormData] = useState(new formData());

  const fileSelectedHandler = (event) => {
    console.log(event.target.files);
    setSelectedFile(event.target.files);
    // console.log(event.target.files);
    // if (event.target.files) {
    // }
  };

  const [imageStatus, setImageStatus] = useState(false);
  var loadFile = function (event) {
    var reader = new FileReader();
    reader.onload = function () {
      var output = document.getElementById("output");
      console.log(typeof output.src);
      output.src = reader.result;
      setImageStatus(true);
    };
    reader.readAsDataURL(event.target.files[0]);
  };

  const [weight, setWeight] = useState();
  const dataUpload = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    // const len = event.target.files.length;
    // console.log(len, "hello");
    console.log(selectedFile.length);
    for (let i = 0; i < selectedFile.length; i++)
      formData.append("selectedFile", selectedFile[i]);
    // console.log(formData);
    if (navigator.onLine) {
      try {
        const response = axios({
          method: "POST",
          url: URL.url + "/api/img_predict/" + weight,
          data: formData,
          body: JSON.stringify({
            weight: weight,
          }),
          headers: { "Content-Type": "multipart/form-data" },
        }).then((res) => {
          if (
            typeof res.data.result === "string" &&
            res.data.result.startsWith("The")
          ) {
            // setFishList();
            alert("Species not detected");
          } else {
            setFishList(res.data.result);
          }
          // console.log(res);
        });
      } catch (error) {
        //  console.log(error)
        alert("Error occurred");
      }
    } else {
      // console.log(selectedFile.length);
      // localStorage.setItem("files", selectedFile);
      for (let i = 0; i < selectedFile.length; i++) {
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = () => resolve(reader.result);
          reader.onerror = (error) => reject(error);
          reader.readAsDataURL(selectedFile[i]);
        }).then((base64) => {
          localStorage["fileBase64"] = base64;
          console.debug("file stored", base64);
        });
      }
      // setFormData(form Data);
    }
  };
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

    try {
      let res = await fetch(URL.url + "/api/catch_dbupdate/f", {
        method: "POST",
        body: JSON.stringify({
          username: currentUser,
          dateandtime: dateStr,
          catch: finalData,
          weight: weight,
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        history.push("/fisherman/home");
        // setMessage("User created successfully");
      } else {
      }
    } catch (err) {
      console.log(err);
    }

    // console.log(finalData);
  };

  const [images, setImages] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);


  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setCurrentUser(loggedInUser);
    }
  }, []);

  useEffect(() => {
  const images = [],
  fileReaders = [];
let isCancel = false;
if (imageFiles.length) {
  imageFiles.forEach((file) => {
    const fileReader = new FileReader();
    fileReaders.push(fileReader);
    fileReader.onload = (e) => {
      const { result } = e.target;
      if (result) {
        images.push(result);
      }
      if (images.length === imageFiles.length && !isCancel) {
        setImages(images);
      }
    };
    fileReader.readAsDataURL(file);
  });
}
return () => {
  isCancel = true;
  fileReaders.forEach((fileReader) => {
    if (fileReader.readyState === 1) {
      fileReader.abort();
    }
  });
};
}, [imageFiles]);

  const [flag,setFlag] = useState(0);
  const [popup,setPopup] = useState(false);
    return (
      <>
        <FishermanNavbar />
        <LogoutButton />
        <div className="fullContainer">
        {images.length > 0 ? (
            <div className="sudden">
              {images.map((image, idx) => {
                return (
                  <p key={idx}>
                    {" "}
                    <img src={image} alt="" />{" "}
                  </p>
                );
              })}
            </div>
          ) : null}
          <div className="form">
            <div className={imageStatus ? "preview show" : "preview"}>
              <img id="output" src={image}></img>
            </div>

            <div className="secondModule">
              <input
                className="upload"
                type="file"
                onChange={(e) => {
                  fileSelectedHandler(e);
                  loadFile(e);
                }}
                accept="image/*"
                multiple
              />
              <input
                type="text"
                className="weight"
                value={weight}
                placeholder="Estimated Catch Weight(in KG)"
                onChange={(e) => setWeight(e.target.value)}
              />
              <Link to="/fisherman/estimations">
                <button
                  className="confirmSubmit"
                  type="submit"
                  onClick={dataUpload}
                >
                  Submit
                </button>
              </Link>
            </div>
          </div>

          {fishList.length > 0 && (
            <>
              <h3>Estimations</h3>

              <table>
                <thead>
                  <td>S.No.</td>
                  <td>Predicted Species</td>
                  <td>Image</td>
                  {/* <td>Count</td> */}
                  <td>Proportions</td>
                  <td>Estimated Weight</td>
                </thead>
                <tbody>
                  {fishList.map((item, idx) => {
                    if(item.name === "turtle" && flag === 0)
                    {
                      setFlag(1);
                          // <Popup trigger={() =>{
                            window.confirm("एक कछुआ पकड़ में आ गया। यह एक लुप्तप्राय प्रजाति है। कृपया घटना की रिपोर्ट करें और इसे अपने प्राकृतिक वातावरण में वापस छोड़ दें।");
                            // }}>
                          // </Popup>
                    }
                    else{

                    return (
                      <tr
                        key={idx}
                        className={
                          item.name === "turtle" ? "endangered" : "species"
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
                        {/* <td>{item.count}</td> */}
                        <td>{item.proportion+"%"}</td>
                        <td>{item.weight+" kg"}</td>
                      </tr>
                    );
                  }})}
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
        {/* {popup && flag === 1 &&(
                  <Popup trigger={() =>{
                    alert("ఒక తాబేలు క్యాచ్‌లో చిక్కుకుంది. ఇది అంతరించిపోతున్న జాతి. దయచేసి ఈవెంట్‌ను నివేదించండి మరియు దానిని దాని సహజ వాతావరణంలో వదిలివేయండి.");

                    }}>
                  </Popup>
              )} */}
      </>
    );
  }

export default FishermanUpload;