import React, { useState, useEffect } from "react";
import { Chart } from "chart.js";
import { Bar, Line, Pie } from "react-chartjs-2";
import "./government.css";
import GovernmentNavbar from "./governmentNavbar";
import LogoutButton from "../main/logoutButton";
import URL from "../../config.js";

const GovernmentHarbors = () => {
  const Fdata = [
    {
      landingcenterid: "1001",
      landingcentername: "Konada",
      landingcenterlat: "18.02",
      landingcenterlon: "83.58",
      landingcenterdistrict: "Vizianagaram",
      landingcenterstate: "Andhra Pradesh",
    },
    {
      landingcenterid: "1002",
      landingcentername: "Chintapalli",
      landingcenterlat: "18.07",
      landingcenterlon: "83.66",
      landingcenterdistrict: "Vizianagaram",
      landingcenterstate: "Andhra Pradesh",
    },
    {
      landingcenterid: "1003",
      landingcentername: "Bandamurlanka",
      landingcenterlat: "16.43",
      landingcenterlon: "81.97",
      landingcenterdistrict: "East Godavari",
      landingcenterstate: "Andhra Pradesh",
    },
    {
      landingcenterid: "1004",
      landingcentername: "Vatturupallepalem",
      landingcenterlat: "14.85",
      landingcenterlon: "80.09",
      landingcenterdistrict: "Sri potti Sriramulu Nello",
      landingcenterstate: "Andhra Pradesh",
    },
    {
      landingcenterid: "1005",
      landingcentername: "Nachugunta",
      landingcenterlat: "15.75",
      landingcenterlon: "80.89",
      landingcenterdistrict: "Krishna",
      landingcenterstate: "Andhra Pradesh",
    },
    {
      landingcenterid: "1006",
      landingcentername: "Itamukkala",
      landingcenterlat: "15.37",
      landingcenterlon: "80.12",
      landingcenterdistrict: "Prakasam",
      landingcenterstate: "Andhra Pradesh",
    },
    {
      landingcenterid: "1007",
      landingcentername: "Nachugunta",
      landingcenterlat: "15.75",
      landingcenterlon: "80.89",
      landingcenterdistrict: "Krishna",
      landingcenterstate: "Andhra Pradesh",
    },
    {
      landingcenterid: "1008",
      landingcentername: "Perumallapuram",
      landingcenterlat: "17.18",
      landingcenterlon: "82.45",
      landingcenterdistrict: "East Godavari",
      landingcenterstate: "Andhra Pradesh",
    },
    {
      landingcenterid: "1009",
      landingcentername: "Nachugunta",
      landingcenterlat: "15.75",
      landingcenterlon: "80.89",
      landingcenterdistrict: "Krishna",
      landingcenterstate: "Andhra Pradesh",
    },
    {
      landingcenterid: "1010",
      landingcentername: "Konadapapeta",
      landingcenterlat: "17.13",
      landingcenterlon: "82.39",
      landingcenterdistrict: "East Godavari",
      landingcenterstate: "Andhra Pradesh",
    },
    {
      landingcenterid: "2001",
      landingcentername: "Cheyyur",
      landingcenterlat: "12.33",
      landingcenterlon: "80.05",
      landingcenterdistrict: "Kancheepuram",
      landingcenterstate: "Tamil Nadu",
    },
    {
      landingcenterid: "2002",
      landingcentername: "Pudhukuppam",
      landingcenterlat: "12.05",
      landingcenterlon: "79.88",
      landingcenterdistrict: "Viluppuram",
      landingcenterstate: "Tamil Nadu",
    },
    {
      landingcenterid: "2003",
      landingcentername: "Cheyyur",
      landingcenterlat: "12.33",
      landingcenterlon: "80.05",
      landingcenterdistrict: "Kancheepuram",
      landingcenterstate: "Tamil Nadu",
    },
    {
      landingcenterid: "2004",
      landingcentername: "Thazhanguda",
      landingcenterlat: "11.77",
      landingcenterlon: "79.79",
      landingcenterdistrict: "Cuddalore",
      landingcenterstate: "Tamil Nadu",
    },
    {
      landingcenterid: "2005",
      landingcentername: "Rajappettai",
      landingcenterlat: "11.68",
      landingcenterlon: "79.79",
      landingcenterdistrict: "Cuddalore",
      landingcenterstate: "Tamil Nadu",
    },
    {
      landingcenterid: "2006",
      landingcentername: "Ganapathichettikulam",
      landingcenterlat: "12.04",
      landingcenterlon: "79.87",
      landingcenterdistrict: "Puducherry",
      landingcenterstate: "Tamil Nadu",
    },
    {
      landingcenterid: "2007",
      landingcentername: "Portonovo",
      landingcenterlat: "11.50",
      landingcenterlon: "79.77",
      landingcenterdistrict: "Cuddalore",
      landingcenterstate: "Tamil Nadu",
    },
    {
      landingcenterid: "2008",
      landingcentername: "Chithiraipettai",
      landingcenterlat: "11.64",
      landingcenterlon: "79.79",
      landingcenterdistrict: "Cuddalore",
      landingcenterstate: "Tamil Nadu",
    },
    {
      landingcenterid: "2009",
      landingcentername: "Kaippanikuppam",
      landingcenterlat: "12.22",
      landingcenterlon: "79.98",
      landingcenterdistrict: "Viluppuram",
      landingcenterstate: "Tamil Nadu",
    },
    {
      landingcenterid: "2010",
      landingcentername: "Palagaithottikuppam",
      landingcenterlat: "13.17",
      landingcenterlon: "80.31",
      landingcenterdistrict: "Thiruvallur",
      landingcenterstate: "Tamil Nadu",
    },
    {
      landingcenterid: "3001",
      landingcentername: "Varor",
      landingcenterlat: "19.91",
      landingcenterlon: "72.68",
      landingcenterdistrict: "Thane",
      landingcenterstate: "Maharastra",
    },
    {
      landingcenterid: "3002",
      landingcentername: "Mahim Cr",
      landingcenterlat: "19.60",
      landingcenterlon: "72.74",
      landingcenterdistrict: "Thane",
      landingcenterstate: "Maharastra",
    },
    {
      landingcenterid: "3003",
      landingcentername: "Arnalapada",
      landingcenterlat: "19.45",
      landingcenterlon: "72.75",
      landingcenterdistrict: "Thane",
      landingcenterstate: "Maharastra",
    },
    {
      landingcenterid: "3004",
      landingcentername: "Kolthare",
      landingcenterlat: "17.65",
      landingcenterlon: "73.14",
      landingcenterdistrict: "Ratnagiri",
      landingcenterstate: "Maharastra",
    },
    {
      landingcenterid: "3005",
      landingcentername: "Someshvar",
      landingcenterlat: "19.96",
      landingcenterlon: "73.32",
      landingcenterdistrict: "Ratnagiri",
      landingcenterstate: "Maharastra",
    },
    {
      landingcenterid: "3006",
      landingcentername: "Mithabao",
      landingcenterlat: "16.29",
      landingcenterlon: "73.42",
      landingcenterdistrict: "Sindhudurg",
      landingcenterstate: "Maharastra",
    },
    {
      landingcenterid: "3007",
      landingcentername: "Kelus",
      landingcenterlat: "15.91",
      landingcenterlon: "73.58",
      landingcenterdistrict: "Sindhudurg",
      landingcenterstate: "Maharastra",
    },
    {
      landingcenterid: "3008",
      landingcentername: "Kochara-Nivati",
      landingcenterlat: "15.94",
      landingcenterlon: "73.53",
      landingcenterdistrict: "Sindhudurg",
      landingcenterstate: "Maharastra",
    },
    {
      landingcenterid: "3009",
      landingcentername: "Anandwadi",
      landingcenterlat: "16.38",
      landingcenterlon: "73.38",
      landingcenterdistrict: "Sindhudurg",
      landingcenterstate: "Maharastra",
    },
    {
      landingcenterid: "3010",
      landingcentername: "Jambhari",
      landingcenterlat: "16.53",
      landingcenterlon: "73.36",
      landingcenterdistrict: "Ratnagiri",
      landingcenterstate: "Maharastra",
    },
    {
      landingcenterid: "4001",
      landingcentername: "Adakathabail",
      landingcenterlat: "12.52",
      landingcenterlon: "74.97",
      landingcenterdistrict: "Kasaragod",
      landingcenterstate: "Kerala",
    },
    {
      landingcenterid: "4002",
      landingcentername: "Thaikadappuram",
      landingcenterlat: "12.23",
      landingcenterlon: "75.11",
      landingcenterdistrict: "Kasaragod",
      landingcenterstate: "Kerala",
    },
    {
      landingcenterid: "4003",
      landingcentername: "Kavvayi",
      landingcenterlat: "12.09",
      landingcenterlon: "75.17",
      landingcenterdistrict: "Kasaragod",
      landingcenterstate: "Kerala",
    },
    {
      landingcenterid: "4004",
      landingcentername: "AyikkaraFH",
      landingcenterlat: "11.86",
      landingcenterlon: "75.38",
      landingcenterdistrict: "Kannur",
      landingcenterstate: "Kerala",
    },
    {
      landingcenterid: "4005",
      landingcentername: "Ramanattukara",
      landingcenterlat: "11.14",
      landingcenterlon: "75.82",
      landingcenterdistrict: "Kozhikode",
      landingcenterstate: "Kerala",
    },
    {
      landingcenterid: "4006",
      landingcentername: "Beypore",
      landingcenterlat: "11.15",
      landingcenterlon: "75.81",
      landingcenterdistrict: "Kozhikode",
      landingcenterstate: "Kerala",
    },
    {
      landingcenterid: "4007",
      landingcentername: "Thalikulam",
      landingcenterlat: "10.44",
      landingcenterlon: "76.07",
      landingcenterdistrict: "Thrissur",
      landingcenterstate: "Kerala",
    },
    {
      landingcenterid: "4008",
      landingcentername: "Manakodam",
      landingcenterlat: "10.19",
      landingcenterlon: "76.22",
      landingcenterdistrict: "Ernakulam",
      landingcenterstate: "Kerala",
    },
    {
      landingcenterid: "4009",
      landingcentername: "Thazampally",
      landingcenterlat: "9.50",
      landingcenterlon: "76.32",
      landingcenterdistrict: "Alappuzha",
      landingcenterstate: "Kerala",
    },
    {
      landingcenterid: "4010",
      landingcentername: "Mariyanadu",
      landingcenterlat: "8.36",
      landingcenterlon: "77.01",
      landingcenterdistrict: "Thiruvananthapuram",
      landingcenterstate: "Kerala",
    },
  ];

  const stateNames = new Array();
  Fdata.map((item) => {
    if (!stateNames.includes(item.landingcenterstate)) {
      stateNames.push(item.landingcenterstate);
    }
  });

  const [landingCenterState, setLandingCenterState] = useState("");
  var [flag, setFlag] = useState(false);
  const [fetchedData, setFetchedData] = useState({});
  const [centerSpecies, setCenterSpecies] = useState({});
  const [details, setDetails] = useState([]);

  const fetchItems = async () => {
    try {
      let res = await fetch(URL.url + "/api/govt_catch/f", {
        method: "GET",
      });
      let resJson = await res.json();
      console.log(resJson);
      setFetchedData(resJson);

      if (resJson.login === true) {
        // localStorage.setItem('user', username);
        // localStorage.setItem('authentication', true);
        console.log("yesss");
        // history.push("/weighbridge/home");
      } else {
        console.log("nooo");
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchItems();
    console.log(stateNames);
  }, []);

  const [show, setShow] = useState(false);
  const [allFishData, setAllFishData] = useState([]);
  const onSearch = (searchTerm) => {
    setLandingCenterState(searchTerm);
    setStateName(searchTerm);
    // console.log(stateNames);
    setFlag(false);
    setLandingName([]);
    centerSpecies[landingName] = new Set(centerSpecies[landingName]);
    console.log(centerSpecies[landingName]);
    console.log("search ", searchTerm);
  };
  const [stateName, setStateName] = useState("");
  const [sciName, setSciName] = useState("");
  const [landingName, setLandingName] = useState([]);

  // const [value, setValue] = useState("");

  function setCenters() {
    if (!flag) {
      setFlag(true);
      if (stateNames.includes(stateName)) {
        Fdata.map((item) => {
          if (item.landingcenterstate === stateName) {
            landingName.push(item.landingcentername);
          }
        });
        console.log(landingName);
      }
    }
  }

  const getDetails = async (landingName) => {
    try {
      console.log("ncjwd");
      let res = await fetch(URL.url + "/api/endangered_catch/" + landingName, {
        method: "GET",
      });
      let resJson = await res.json();
      console.log(typeof resJson.result);
      setDetails(resJson.result);
      resJson.result.map((item) => {
        console.log(item);
        // setDetails((details) => [...details, item]);
        details.push(item);
      });
      console.log(details);
      details.map((item) => {
        console.log(item);
      });
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    console.log(event.target.value);
    getDetails(event.target.value);
  };

  return (
    <>
      <GovernmentNavbar />
      <LogoutButton />
      <div className="fullContainer">
        <div className="searchBar">
          <input
            type="text"
            value={landingCenterState}
            onChange={(e) => setLandingCenterState(e.target.value)}
            placeholder="Enter a State"
          ></input>
          <div className="Gdropdown">
            {stateNames
              .filter((item) => {
                const searchTerm = landingCenterState.toLowerCase();
                const fullName = item.toLowerCase();
                return (
                  searchTerm &&
                  fullName.startsWith(searchTerm) &&
                  fullName !== searchTerm
                );
              })
              .map((item) => (
                <div
                  onClick={() => onSearch(item)}
                  className="Gdropdown-row"
                  key={item}
                >
                  {item}
                </div>
              ))}
          </div>
          <button type="submit" onClick={() => setCenters()}>
            Search
          </button>
        </div>
        <div className="fixedPart">
          <div className="stateName">
            <h3>{stateName}</h3>
            <p>Total Available Landing Centers: 10</p>
            <p>Select a Landing center to view information:</p>
            <select onChange={handleChange}>
              {landingName.map((item) => {
                return <option>{item}</option>;
              })}
            </select>
          </div>
          <div className="fishesAndEndangered">
            <div className="endangeredDetails">Endangered Species</div>
          </div>
        </div>
        <div>
          <table>
            <thead>
              <td>S.No.</td>
              <td>Fisherman name</td>
              <td>Date and time</td>
              <td>Specie name</td>
            </thead>
            <tbody>
              {details.map((item, idx) => {
                return (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>{item.username}</td>
                    <td>
                      {new Date(item.dateandtime).toString().slice(0, 24)}
                    </td>
                    <td>Turtle</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default GovernmentHarbors;

// .filter((item) => {
//   const searchTerm = landingCenterState.toLowerCase();
//   const fullName = item.landingcenterstate.toLowerCase();

//   return (
//     searchTerm &&
//     fullName.startsWith(searchTerm) &&
//     fullName !== searchTerm
//   );
// })