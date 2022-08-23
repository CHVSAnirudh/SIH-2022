import React, { useState } from "react";
import "./home.css";
import axios from "axios";
import HomeNavbar from "./homeNavbar";
import { useHistory } from "react-router-dom";
import URL from '../../config.js';

const FishermanRegister = () => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [landingCenter, setLandingCenter] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const Fdata = [
    {
			"landingcenterid":"1001",
			"landingcentername":"Konada",
			"landingcenterlat":"18.02",
			"landingcenterlon":"83.58",
			"landingcenterdistrict":"Vizianagaram",
			"landingcenterstate":"Andrapradesh"
		},
		{
			"landingcenterid":"1002",
			"landingcentername":"Chintapalli",
			"landingcenterlat":"18.07",
			"landingcenterlon":"83.66",
			"landingcenterdistrict":"Vizianagaram",
			"landingcenterstate":"Andrapradesh"
		},
		{
			"landingcenterid":"1003",
			"landingcentername":"Bandamurlanka",
			"landingcenterlat":"16.43",
			"landingcenterlon":"81.97",
			"landingcenterdistrict":"East Godavari",
			"landingcenterstate":"Andrapradesh"
		},
		{
			"landingcenterid":"1004",
			"landingcentername":"Vatturupallepalem",
			"landingcenterlat":"14.85",
			"landingcenterlon":"80.09",
			"landingcenterdistrict":"Sri potti Sriramulu Nello",
			"landingcenterstate":"Andrapradesh"
		},
		{
			"landingcenterid":"1005",
			"landingcentername":"Nachugunta",
			"landingcenterlat":"15.75",
			"landingcenterlon":"80.89",
			"landingcenterdistrict":"Krishna",
			"landingcenterstate":"Andrapradesh"
		},
		{
			"landingcenterid":"1006",
			"landingcentername":"Itamukkala",
			"landingcenterlat":"15.37",
			"landingcenterlon":"80.12",
			"landingcenterdistrict":"Prakasam",
			"landingcenterstate":"Andrapradesh"
		},
		{
			"landingcenterid":"1007",
			"landingcentername":"Nachugunta",
			"landingcenterlat":"15.75",
			"landingcenterlon":"80.89",
			"landingcenterdistrict":"Krishna",
			"landingcenterstate":"Andrapradesh"
		},
		{
			"landingcenterid":"1008",
			"landingcentername":"Perumallapuram",
			"landingcenterlat":"17.18",
			"landingcenterlon":"82.45",
			"landingcenterdistrict":"East Godavari",
			"landingcenterstate":"Andrapradesh" 
		},
		{
			"landingcenterid":"1009",
			"landingcentername":"Nachugunta",
			"landingcenterlat":"15.75",
			"landingcenterlon":"80.89",
			"landingcenterdistrict":"Krishna",
			"landingcenterstate":"Andrapradesh" 
		},
		{
			"landingcenterid":"1010",
			"landingcentername":"Konadapapeta",
			"landingcenterlat":"17.13",
			"landingcenterlon":"82.39",
			"landingcenterdistrict":"East Godavari",
			"landingcenterstate":"Andrapradesh" 
		},
		{
			"landingcenterid":"2001",
			"landingcentername":"Cheyyur",
			"landingcenterlat":"12.33",
			"landingcenterlon":"80.05",
			"landingcenterdistrict":"Kancheepuram",
			"landingcenterstate":"Tamil Nadu" 
		},
		{
			"landingcenterid":"2002",
			"landingcentername":"Pudhukuppam",
			"landingcenterlat":"12.05",
			"landingcenterlon":"79.88",
			"landingcenterdistrict":"Viluppuram",
			"landingcenterstate":"Tamil Nadu" 
		},
		{
			"landingcenterid":"2003",
			"landingcentername":"Cheyyur",
			"landingcenterlat":"12.33",
			"landingcenterlon":"80.05",
			"landingcenterdistrict":"Kancheepuram",
			"landingcenterstate":"Tamil Nadu" 
		},
		{
			"landingcenterid":"2004",
			"landingcentername":"Thazhanguda",
			"landingcenterlat":"11.77",
			"landingcenterlon":"79.79",
			"landingcenterdistrict":"Cuddalore",
			"landingcenterstate":"Tamil Nadu" 
		},
		{
			"landingcenterid":"2005",
			"landingcentername":"Rajappettai",
			"landingcenterlat":"11.68",
			"landingcenterlon":"79.79",
			"landingcenterdistrict":"Cuddalore",
			"landingcenterstate":"Tamil Nadu" 
		},
		{
			"landingcenterid":"2006",
			"landingcentername":"Ganapathichettikulam",
			"landingcenterlat":"12.04",
			"landingcenterlon":"79.87",
			"landingcenterdistrict":"Puducherry",
			"landingcenterstate":"Tamil Nadu" 
		},
		{
			"landingcenterid":"2007",
			"landingcentername":"Portonovo",
			"landingcenterlat":"11.50",
			"landingcenterlon":"79.77",
			"landingcenterdistrict":"Cuddalore",
			"landingcenterstate":"Tamil Nadu" 
		},
		{
			"landingcenterid":"2008",
			"landingcentername":"Chithiraipettai",
			"landingcenterlat":"11.64",
			"landingcenterlon":"79.79",
			"landingcenterdistrict":"Cuddalore",
			"landingcenterstate":"Tamil Nadu" 
		},
		{
			"landingcenterid":"2009",
			"landingcentername":"Kaippanikuppam",
			"landingcenterlat":"12.22",
			"landingcenterlon":"79.98",
			"landingcenterdistrict":"Viluppuram",
			"landingcenterstate":"Tamil Nadu" 
		},
		{
			"landingcenterid":"2010",
			"landingcentername":"Palagaithottikuppam",
			"landingcenterlat":"13.17",
			"landingcenterlon":"80.31",
			"landingcenterdistrict":"Thiruvallur",
			"landingcenterstate":"Tamil Nadu" 
		},
		{
			"landingcenterid":"3001",
			"landingcentername":"Varor",
			"landingcenterlat":"19.91",
			"landingcenterlon":"72.68",
			"landingcenterdistrict":"Thane",
			"landingcenterstate":"Maharastra" 
		},
		{
			"landingcenterid":"3002",
			"landingcentername":"Mahim Cr",
			"landingcenterlat":"19.60",
			"landingcenterlon":"72.74",
			"landingcenterdistrict":"Thane",
			"landingcenterstate":"Maharastra" 
		},
		{
			"landingcenterid":"3003",
			"landingcentername":"Arnalapada",
			"landingcenterlat":"19.45",
			"landingcenterlon":"72.75",
			"landingcenterdistrict":"Thane",
			"landingcenterstate":"Maharastra" 
		},
		{
			"landingcenterid":"3004",
			"landingcentername":"Kolthare",
			"landingcenterlat":"17.65",
			"landingcenterlon":"73.14",
			"landingcenterdistrict":"Ratnagiri",
			"landingcenterstate":"Maharastra" 
		},
		{
			"landingcenterid":"3005",
			"landingcentername":"Someshvar",
			"landingcenterlat":"19.96",
			"landingcenterlon":"73.32",
			"landingcenterdistrict":"Ratnagiri",
			"landingcenterstate":"Maharastra" 
		},
		{
			"landingcenterid":"3006",
			"landingcentername":"Mithabao",
			"landingcenterlat":"16.29",
			"landingcenterlon":"73.42",
			"landingcenterdistrict":"Sindhudurg",
			"landingcenterstate":"Maharastra" 
		},
		{
			"landingcenterid":"3007",
			"landingcentername":"Kelus",
			"landingcenterlat":"15.91",
			"landingcenterlon":"73.58",
			"landingcenterdistrict":"Sindhudurg",
			"landingcenterstate":"Maharastra" 
		},
		{
			"landingcenterid":"3008",
			"landingcentername":"Kochara-Nivati",
			"landingcenterlat":"15.94",
			"landingcenterlon":"73.53",
			"landingcenterdistrict":"Sindhudurg",
			"landingcenterstate":"Maharastra" 
		},
		{
			"landingcenterid":"3009",
			"landingcentername":"Anandwadi",
			"landingcenterlat":"16.38",
			"landingcenterlon":"73.38",
			"landingcenterdistrict":"Sindhudurg",
			"landingcenterstate":"Maharastra" 
		},
		{
			"landingcenterid":"3010",
			"landingcentername":"Jambhari",
			"landingcenterlat":"16.53",
			"landingcenterlon":"73.36",
			"landingcenterdistrict":"Ratnagiri",
			"landingcenterstate":"Maharastra" 
		},
		{
			"landingcenterid":"4001",
			"landingcentername":"Adakathabail",
			"landingcenterlat":"12.52",
			"landingcenterlon":"74.97",
			"landingcenterdistrict":"Kasaragod",
			"landingcenterstate":"Kerala" 
		},
		{
			"landingcenterid":"4002",
			"landingcentername":"Thaikadappuram",
			"landingcenterlat":"12.23",
			"landingcenterlon":"75.11",
			"landingcenterdistrict":"Kasaragod",
			"landingcenterstate":"Kerala" 
		},
		{
			"landingcenterid":"4003",
			"landingcentername":"Kavvayi",
			"landingcenterlat":"12.09",
			"landingcenterlon":"75.17",
			"landingcenterdistrict":"Kasaragod",
			"landingcenterstate":"Kerala" 
		},
		{
			"landingcenterid":"4004",
			"landingcentername":"AyikkaraFH",
			"landingcenterlat":"11.86",
			"landingcenterlon":"75.38",
			"landingcenterdistrict":"Kannur",
			"landingcenterstate":"Kerala" 
		},
		{
			"landingcenterid":"4005",
			"landingcentername":"Ramanattukara",
			"landingcenterlat":"11.14",
			"landingcenterlon":"75.82",
			"landingcenterdistrict":"Kozhikode",
			"landingcenterstate":"Kerala" 
		},
		{
			"landingcenterid":"4006",
			"landingcentername":"Beypore",
			"landingcenterlat":"11.15",
			"landingcenterlon":"75.81",
			"landingcenterdistrict":"Kozhikode",
			"landingcenterstate":"Kerala" 
		},
		{
			"landingcenterid":"4007",
			"landingcentername":"Thalikulam",
			"landingcenterlat":"10.44",
			"landingcenterlon":"76.07",
			"landingcenterdistrict":"Thrissur",
			"landingcenterstate":"Kerala" 
		},
		{
			"landingcenterid":"4008",
			"landingcentername":"Manakodam",
			"landingcenterlat":"10.19",
			"landingcenterlon":"76.22",
			"landingcenterdistrict":"Ernakulam",
			"landingcenterstate":"Kerala" 
		},
		{
			"landingcenterid":"4009",
			"landingcentername":"Thazampally",
			"landingcenterlat":"9.50",
			"landingcenterlon":"76.32",
			"landingcenterdistrict":"Alappuzha",
			"landingcenterstate":"Kerala" 
		},
		{
			"landingcenterid":"4010",
			"landingcentername":"Mariyanadu",
			"landingcenterlat":"8.36",
			"landingcenterlon":"77.01",
			"landingcenterdistrict":"Thiruvananthapuram",
			"landingcenterstate":"Kerala" 
		}
  ];

  const onSearch = (searchTerm) => {
    setLandingCenter(searchTerm);
      // our api to fetch the search result
    console.log("search ", searchTerm);
};


  const uploadDetails = async(event) => {
    event.preventDefault();

    try {
      let res = await fetch(URL.url+"/api/signup/fisherman", {
        method: "POST",
        body: JSON.stringify({
                  username: username,
                  password: password,
                  landing_center: landingCenter,
                  phone: phone,
                  email: email,
                }),
      });
      let resJson = await res.json();
      console.log(resJson);
      if (resJson.Status === "200") {
        history.push("/home/fisherman/login");
        // setMessage("User created successfully");
      } else {
        console.log("error");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
	 <HomeNavbar />
      <div className="fullContainer">
        <div className="register">
          <h1 style={{ textAlign: "center" }}>Fisherman Register</h1>
          <form onSubmit={uploadDetails}>
            <input
              className="Password"
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            ></input>

            <div className="landingDropdown">
            <input 
              className="Password"
              type="text" 
              value={landingCenter} 
              placeholder="Landing Center" 
              onChange={(e) => setLandingCenter(e.target.value)}
			  required>
				
            </input>
              <div className="Fdropdown">
                        {Fdata
                        .filter((item) => {
                            const searchTerm = landingCenter.toLowerCase();
                            const fullName = item.landingcentername.toLowerCase();
              
                            return (
                              searchTerm &&
                              fullName.startsWith(searchTerm) &&
                              fullName !== searchTerm
                            );
                          })
                          .map((item) =>(
                            <div
                            onClick={() => onSearch(item.landingcentername)}
                            className="Fdropdown-row"
                            key={item.landingcentername}
                          >
                            {item.landingcentername}
                          </div>
                        ))}
              </div> 
            </div>

            {/* <input
              className="type2"
              type="text"
              placeholder="Landing Centre"
              value={landingCenter}
              onChange={(e) => setLandingCenter(e.target.value)}
              required
            ></input> */}
            <input
              className="Password"
              type="tel"
              id="phone"
              name="phone"
              placeholder="Phone Number"
              value={phone}
              pattern="[6-9]{1}[0-9]{9}"
              onChange={(e) => setPhone(e.target.value)}
              required
            ></input>
            <input
              className="Password"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            ></input>
            <input
              className="Password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            ></input>
            <input
              className="Password"
              type="password"
              placeholder="Confirm password"
              required
            ></input>
            <button className="fishermanRegisterSubmit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FishermanRegister;