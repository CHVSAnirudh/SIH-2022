import React, { useEffect, useState } from 'react'
import './fisherman.css'
import axios from 'axios';
import { Link } from 'react-router-dom';
import FishermanNavbar from './fishermanNavbar';
import FishImage from '../images/mackeral.png'
import LogoutButton from '../main/logoutButton';
import URL from '../../config.js';

function FishermanUpload({match}) {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [currentUser, setCurrentUser] = useState("");
  const [fishList, setFishList] = React.useState([]);
  const fileSelectedHandler = (event) =>{
    setSelectedFile(event.target.files[0]);
}
  const [weight, setWeight] = useState(0);
  const dataUpload = async (event) => {
    event.preventDefault()
    const formData = new FormData();
    formData.append("selectedFile", selectedFile);
     try {
       const response = axios({
         method: "POST",
         url: URL.url+"/api/img_predict/"+weight,
         data: formData,
         body: JSON.stringify({
                 weight: weight,
               }),
         headers: { "Content-Type": "multipart/form-data" },
       })
       .then((res) => {setFishList(res.data.result)})
      //  .then((res) => ((res.data.result).map((item) => {
      //   setFishList([...fishList,item]);
      //  })))
      
     } catch(error) {
       console.log(error)
     }
  }

  const fishDataUpload = async(event) => {
    event.preventDefault();
    const finalData = [];
    var date = new Date();
    var dateStr =
      date.getFullYear() + "-" +
      ("00" + (date.getMonth() + 1)).slice(-2) + "-" +
      ("00" + date.getDate()).slice(-2) + " " +
      ("00" + date.getHours()).slice(-2) + ":" +
      ("00" + date.getMinutes()).slice(-2) + ":" +
      ("00" + date.getSeconds()).slice(-2);
    console.log(dateStr);

    fishList.map((item) => {
      finalData.push({
        specie_name:item.name,
        specie_weight:item.weight,
        specie_proportion:item.proportion,
      })
    })

    
    console.log(JSON.stringify({
            dateandtime:dateStr,
            catch:finalData,
            weight:weight,
          }));
    try {
      let res = await fetch(URL.url+"/api/catch_dbupdate/f", {
        method: "POST",
        body: JSON.stringify({
          "username":currentUser,
          "dateandtime":dateStr,
          "catch":finalData,
          "weight":weight
        }),
      });
      let resJson = await res.json();
      if (res.status === 200) {
        // setMessage("User created successfully");
      } else {
        
      }
    } catch (err) {
      console.log(err);
    }
    
    console.log(finalData);
    
    }

    useEffect(() => {
      const loggedInUser = localStorage.getItem("user");
      if (loggedInUser) {
        setCurrentUser(loggedInUser);
      }
    }, []);
    
  if(currentUser.length <= 0){
    <Link to="/home/HomePage">Error occured...enkalki dengey</Link>
  }
  else
  {
    return (
      <>
        <FishermanNavbar />
        <LogoutButton />
        <div className='fullContainer'>
              <form className='form'>
                    <input className="upload" type="file" onChange={fileSelectedHandler} />
                    <label>
                      <input
                        type="text"
                        className='weight'
                        value={weight}
                        placeholder="Estimated Catch Weight(in KG)"
                        onChange={(e) => setWeight(e.target.value)}
                      />
                    </label>
                    <Link to='/fisherman/estimations'><button className="confirmSubmit" type="submit" onClick={dataUpload}>SUBMIT</button></Link>  
              </form>

              {fishList.length > 0 && <>
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
                    return <tr key={idx} className={item.name == "turtle" ? "specie endangered" : "specie" }>
                              <td>{idx+1}</td>
                              <td>{item.name}</td>
                              <td><img src={FishImage} width="100%"></img></td>
                              <td>{item.proportion}</td>
                              <td>{item.weight}</td>
                            </tr>
                  })}
                </tbody>
              </table> 
              <div className='confirmation'>
                <Link to='/fisherman/upload' className='submit'><button>Cancel</button></Link>
                <Link to='/fisherman/upload' className='submit' onClick={fishDataUpload}><button>Submit</button></Link>
              </div>
              </>}
        </div>
      </>
    )
  }
}

export default FishermanUpload