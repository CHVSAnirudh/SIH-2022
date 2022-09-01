import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './government.css'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import URL from '../../config.js';
import { Circle } from '@react-google-maps/api';
import FishImage from "../images/mackeral.png";
import catlaImg from "../images/catla2.png";
import moriImg from "../images/mori2.png";
import rohuImg from "../images/rohu2.png";
import { Marker, Fragment } from '@react-google-maps/api';
// import {
//     Chart as ChartJS,
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     PointElement,
//     LineElement,
//     Title,
//     Tooltip,
//     Legend,
//     TimeScale, 
//     TimeSeriesScale
//   } from 'chart.js';
  
// ChartJS.register(
//     CategoryScale,
//     LinearScale,
//     BarElement,
//     LineElement,
//     PointElement,
//     Title,
//     Tooltip,
//     Legend,
//     TimeScale, 
//     TimeSeriesScale
// );


import { Bar, Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import GovernmentNavbar from './governmentNavbar';
import LogoutButton from '../main/logoutButton';
// import {Bar} from 'chart.js';

const GovernmentFishes = () => {
    const landingCenterData = [
        {
          landingcenterid: "1001",
          landingcentername: "Konada",
          landingcenterlat: "18.02",
          landingcenterlon: "83.58",
          landingcenterdistrict: "Vizianagaram",
          landingcenterstate: "Andhra Pradesh",
          cumulativeweight:0
        },
        {
          landingcenterid: "1002",
          landingcentername: "Chintapalli",
          landingcenterlat: "18.07",
          landingcenterlon: "83.66",
          landingcenterdistrict: "Vizianagaram",
          landingcenterstate: "Andhra Pradesh",
          cumulativeweight:0
        },
        {
          landingcenterid: "1003",
          landingcentername: "Bandamurlanka",
          landingcenterlat: "16.43",
          landingcenterlon: "81.97",
          landingcenterdistrict: "East Godavari",
          landingcenterstate: "Andhra Pradesh",
          cumulativeweight:0
        },
        {
          landingcenterid: "1004",
          landingcentername: "Vatturupallepalem",
          landingcenterlat: "14.85",
          landingcenterlon: "80.09",
          landingcenterdistrict: "Sri potti Sriramulu Nello",
          landingcenterstate: "Andhra Pradesh",
          cumulativeweight:0
        },
        {
          landingcenterid: "1005",
          landingcentername: "Nachugunta",
          landingcenterlat: "15.75",
          landingcenterlon: "80.89",
          landingcenterdistrict: "Krishna",
          landingcenterstate: "Andhra Pradesh",
          cumulativeweight:0
        },
        {
          landingcenterid: "1006",
          landingcentername: "Itamukkala",
          landingcenterlat: "15.37",
          landingcenterlon: "80.12",
          landingcenterdistrict: "Prakasam",
          landingcenterstate: "Andhra Pradesh",
          cumulativeweight:0
        },
        {
          landingcenterid: "1007",
          landingcentername: "Nachugunta",
          landingcenterlat: "15.75",
          landingcenterlon: "80.89",
          landingcenterdistrict: "Krishna",
          landingcenterstate: "Andhra Pradesh",
          cumulativeweight:0
        },
        {
          landingcenterid: "1008",
          landingcentername: "Perumallapuram",
          landingcenterlat: "17.18",
          landingcenterlon: "82.45",
          landingcenterdistrict: "East Godavari",
          landingcenterstate: "Andhra Pradesh",
          cumulativeweight:0
        },
        {
          landingcenterid: "1009",
          landingcentername: "Nachugunta",
          landingcenterlat: "15.75",
          landingcenterlon: "80.89",
          landingcenterdistrict: "Krishna",
          landingcenterstate: "Andhra Pradesh",
          cumulativeweight:0
        },
        {
          landingcenterid: "1010",
          landingcentername: "Konadapapeta",
          landingcenterlat: "17.13",
          landingcenterlon: "82.39",
          landingcenterdistrict: "East Godavari",
          landingcenterstate: "Andhra Pradesh",
          cumulativeweight:0
        },
        {
          landingcenterid: "2001",
          landingcentername: "Cheyyur",
          landingcenterlat: "12.33",
          landingcenterlon: "80.05",
          landingcenterdistrict: "Kancheepuram",
          landingcenterstate: "Tamil Nadu",
          cumulativeweight:0
        },
        {
          landingcenterid: "2002",
          landingcentername: "Pudhukuppam",
          landingcenterlat: "12.05",
          landingcenterlon: "79.88",
          landingcenterdistrict: "Viluppuram",
          landingcenterstate: "Tamil Nadu",
          cumulativeweight:0
        },
        {
          landingcenterid: "2003",
          landingcentername: "Cheyyur",
          landingcenterlat: "12.33",
          landingcenterlon: "80.05",
          landingcenterdistrict: "Kancheepuram",
          landingcenterstate: "Tamil Nadu",
          cumulativeweight:0
        },
        {
          landingcenterid: "2004",
          landingcentername: "Thazhanguda",
          landingcenterlat: "11.77",
          landingcenterlon: "79.79",
          landingcenterdistrict: "Cuddalore",
          landingcenterstate: "Tamil Nadu",
          cumulativeweight:0
        },
        {
          landingcenterid: "2005",
          landingcentername: "Rajappettai",
          landingcenterlat: "11.68",
          landingcenterlon: "79.79",
          landingcenterdistrict: "Cuddalore",
          landingcenterstate: "Tamil Nadu",
          cumulativeweight:0
        },
        {
          landingcenterid: "2006",
          landingcentername: "Ganapathichettikulam",
          landingcenterlat: "12.04",
          landingcenterlon: "79.87",
          landingcenterdistrict: "Puducherry",
          landingcenterstate: "Tamil Nadu",
          cumulativeweight:0
        },
        {
          landingcenterid: "2007",
          landingcentername: "Portonovo",
          landingcenterlat: "11.50",
          landingcenterlon: "79.77",
          landingcenterdistrict: "Cuddalore",
          landingcenterstate: "Tamil Nadu",
          cumulativeweight:0
        },
        {
          landingcenterid: "2008",
          landingcentername: "Chithiraipettai",
          landingcenterlat: "11.64",
          landingcenterlon: "79.79",
          landingcenterdistrict: "Cuddalore",
          landingcenterstate: "Tamil Nadu",
          cumulativeweight:0
        },
        {
          landingcenterid: "2009",
          landingcentername: "Kaippanikuppam",
          landingcenterlat: "12.22",
          landingcenterlon: "79.98",
          landingcenterdistrict: "Viluppuram",
          landingcenterstate: "Tamil Nadu",
          cumulativeweight:0
        },
        {
          landingcenterid: "2010",
          landingcentername: "Palagaithottikuppam",
          landingcenterlat: "13.17",
          landingcenterlon: "80.31",
          landingcenterdistrict: "Thiruvallur",
          landingcenterstate: "Tamil Nadu",
          cumulativeweight:0
        },
        {
          landingcenterid: "3001",
          landingcentername: "Varor",
          landingcenterlat: "19.91",
          landingcenterlon: "72.68",
          landingcenterdistrict: "Thane",
          landingcenterstate: "Maharastra",
          cumulativeweight:0
        },
        {
          landingcenterid: "3002",
          landingcentername: "Mahim Cr",
          landingcenterlat: "19.60",
          landingcenterlon: "72.74",
          landingcenterdistrict: "Thane",
          landingcenterstate: "Maharastra",
          cumulativeweight:0
        },
        {
          landingcenterid: "3003",
          landingcentername: "Arnalapada",
          landingcenterlat: "19.45",
          landingcenterlon: "72.75",
          landingcenterdistrict: "Thane",
          landingcenterstate: "Maharastra",
          cumulativeweight:0
        },
        {
          landingcenterid: "3004",
          landingcentername: "Kolthare",
          landingcenterlat: "17.65",
          landingcenterlon: "73.14",
          landingcenterdistrict: "Ratnagiri",
          landingcenterstate: "Maharastra",
          cumulativeweight:0
        },
        {
          landingcenterid: "3005",
          landingcentername: "Someshvar",
          landingcenterlat: "19.96",
          landingcenterlon: "73.32",
          landingcenterdistrict: "Ratnagiri",
          landingcenterstate: "Maharastra",
          cumulativeweight:0
        },
        {
          landingcenterid: "3006",
          landingcentername: "Mithabao",
          landingcenterlat: "16.29",
          landingcenterlon: "73.42",
          landingcenterdistrict: "Sindhudurg",
          landingcenterstate: "Maharastra",
          cumulativeweight:0
        },
        {
          landingcenterid: "3007",
          landingcentername: "Kelus",
          landingcenterlat: "15.91",
          landingcenterlon: "73.58",
          landingcenterdistrict: "Sindhudurg",
          landingcenterstate: "Maharastra",
          cumulativeweight:0
        },
        {
          landingcenterid: "3008",
          landingcentername: "Kochara-Nivati",
          landingcenterlat: "15.94",
          landingcenterlon: "73.53",
          landingcenterdistrict: "Sindhudurg",
          landingcenterstate: "Maharastra",
          cumulativeweight:0
        },
        {
          landingcenterid: "3009",
          landingcentername: "Anandwadi",
          landingcenterlat: "16.38",
          landingcenterlon: "73.38",
          landingcenterdistrict: "Sindhudurg",
          landingcenterstate: "Maharastra",
          cumulativeweight:0
        },
        {
          landingcenterid: "3010",
          landingcentername: "Jambhari",
          landingcenterlat: "16.53",
          landingcenterlon: "73.36",
          landingcenterdistrict: "Ratnagiri",
          landingcenterstate: "Maharastra",
          cumulativeweight:0
        },
        {
          landingcenterid: "4001",
          landingcentername: "Adakathabail",
          landingcenterlat: "12.52",
          landingcenterlon: "74.97",
          landingcenterdistrict: "Kasaragod",
          landingcenterstate: "Kerala",
          cumulativeweight:0
        },
        {
          landingcenterid: "4002",
          landingcentername: "Thaikadappuram",
          landingcenterlat: "12.23",
          landingcenterlon: "75.11",
          landingcenterdistrict: "Kasaragod",
          landingcenterstate: "Kerala",
          cumulativeweight:0
        },
        {
          landingcenterid: "4003",
          landingcentername: "Kavvayi",
          landingcenterlat: "12.09",
          landingcenterlon: "75.17",
          landingcenterdistrict: "Kasaragod",
          landingcenterstate: "Kerala",
          cumulativeweight:0
        },
        {
          landingcenterid: "4004",
          landingcentername: "AyikkaraFH",
          landingcenterlat: "11.86",
          landingcenterlon: "75.38",
          landingcenterdistrict: "Kannur",
          landingcenterstate: "Kerala",
          cumulativeweight:0
        },
        {
          landingcenterid: "4005",
          landingcentername: "Ramanattukara",
          landingcenterlat: "11.14",
          landingcenterlon: "75.82",
          landingcenterdistrict: "Kozhikode",
          landingcenterstate: "Kerala",
          cumulativeweight:0
        },
        {
          landingcenterid: "4006",
          landingcentername: "Beypore",
          landingcenterlat: "11.15",
          landingcenterlon: "75.81",
          landingcenterdistrict: "Kozhikode",
          landingcenterstate: "Kerala",
          cumulativeweight:0
        },
        {
          landingcenterid: "4007",
          landingcentername: "Thalikulam",
          landingcenterlat: "10.44",
          landingcenterlon: "76.07",
          landingcenterdistrict: "Thrissur",
          landingcenterstate: "Kerala",
          cumulativeweight:0
        },
        {
          landingcenterid: "4008",
          landingcentername: "Manakodam",
          landingcenterlat: "10.19",
          landingcenterlon: "76.22",
          landingcenterdistrict: "Ernakulam",
          landingcenterstate: "Kerala",
          cumulativeweight:0
        },
        {
          landingcenterid: "4009",
          landingcentername: "Thazampally",
          landingcenterlat: "9.50",
          landingcenterlon: "76.32",
          landingcenterdistrict: "Alappuzha",
          landingcenterstate: "Kerala",
          cumulativeweight:0
        },
        {
          landingcenterid: "4010",
          landingcentername: "Mariyanadu",
          landingcenterlat: "8.36",
          landingcenterlon: "77.01",
          landingcenterdistrict: "Thiruvananthapuram",
          landingcenterstate: "Kerala",
          cumulativeweight:0
        },
      ];

      
    // landingCenterData.map

    const [labels, setLabels] = useState([]);
    const [dat,setData] = useState([]);
    const [lat,setLat] = useState();
    const [lon,setLon] = useState();
    // const labels = ['2020-01-11', '2020-01-11', '2020-01-11', '2020-01-11','2020-01-11','2020-01-11','2020-01-11','2020-01-11','2020-01-11','2020-01-11','2020-01-11','2020-01-11','2020-01-11','2020-01-11','2020-01-11','2020-01-11','2020-01-11','2020-01-11','2020-01-11','2020-01-11','2020-01-11','2020-01-11','2020-01-11','2020-01-11',];
    const data = {
        labels,
        datasets: [{
            label:"Data",
            // data: [5, 11, 3, 8, 7, 4, 15,5, 11, 3, 8, 7, 4, 15,5, 11, 7, 4, 15,5, 11, 3, 8, 7, 4, 15,5, 11, 3, 8, 7, 4, 15,5, 11, 3, 8, 7, 4, 15,5, 11, 3, 8, 7, 4, 15,5, 11, 3, 8, 7, 4, 15,5, 11, 3, 8, 7, 4, 15],
            data: dat,
            borderColor: 'rgba(0, 110, 157, 0.2)',
            backgroundColor: 'rgb(255, 99, 132)',
            tension:0.2,
            pointRadius:0.5,
            // borderWidth:2.2,
        }
        ],
      };

      const options = {
        onClick: (e) => {

          // const canvasPosition = Chart.helpers.getRelativePosition(e, chart);
      
          // // replace .x. and .y. with the id of your axes below
      
          // const dataX = chart.scales.x.getValueForPixel(canvasPosition.x);
          // const dataY = chart.scales.y.getValueForPixel(canvasPosition.y);

          // console.log(dataX);
          // console.log(dataY);
      },
      title:{
				text: "Time Series Analysis"
			},
			// axisX: {
			// 	title: "Weight in KG"
			// },
			// axisY: {
			// 	title: "Time",
			// 	titleFontColor: "#6D78AD",
			// 	lineColor: "#6D78AD",
			// 	labelFontColor: "#6D78AD",
			// 	tickColor: "#6D78AD"
			// },
        scales: {
            x: {
                type: 'time',
                time: {
                    unit:'day'
                }
            }
        }
    };
        const [chartOption, setChartOption] = useState(false);
        const change = () => {
            if(chartOption === false)
                setChartOption(true);
            else
                setChartOption(false);
            console.log(chartOption);
        };
    const [value, setValue] = useState("");

    const onChange = (event) => {
        setValue(event.target.value);
        console.log(URL);
    };

    const [fishes,setFishes] = useState([]);
    const [compareLabels,setCompareLabels] = useState([]);
    const fetchItems = async() => {
        try {
            let res = await fetch(URL.url+"/api/govt_catch/f", {
              method: "GET",
            });
            let resJson = await res.json();
            console.log(resJson);
            setFishes(resJson);

            // fishes.map((item) => {
            //   console.log(item.dateandtime);
            // })
            if (resJson.login === true) {
              console.log("yesss");
            } else {
              console.log("nooo");
            }
            console.log();
          } catch (err) {
            console.log(err);
          }
    };

    
    const [show, setShow] = useState(false);
    const [allFishData,setAllFishData] = useState([]);
    const [originalLabels,setOriginalLabels] = useState([]);
    const [landings, setLandings] = useState([]);
    const [centerDetails, setCenterDetails] = useState([])

    const [fishDetails, setFishDetails] = useState({
      "rohu":[
        {}
      ],
      "catla":[
        {}
      ],
      "mori":[],
    });

    var cumulative = new Array(40).fill(0);

    const [circleShow, setCircleShow] = useState(false);
    const [originalData, setOriginalData] = useState([]);
    const [originalLanding, setOriginalLanding] = useState([]);
    const [imgLink,setImgLink] = useState("");
    const onSearch = (searchTerm) => {

        
        setValue(searchTerm);
        setFishName(searchTerm);
        
        var mapVar = new Map();
        mapVar.set("Catla", "Catla catla");
        mapVar.set("Rohu", "Labeo Rohita");
        mapVar.set("Mori", "Rhizoprionodon Acutus");
        if(searchTerm === "")
        {
            setShow(false);
        }
        else{
            if(mapVar.has(searchTerm))
            {
              if(searchTerm === "catla")
                setImgLink(catlaImg);
              else if(searchTerm === "rohu")
                setImgLink(rohuImg);
              else if(searchTerm === "mori")
                setImgLink(moriImg);
                // console.log(searchTerm);
                fishes.map((item) => {
                  // console.log(item);
                  if(item.specie_name === searchTerm.toLowerCase())
                  {
                    // setObjects(item);
                    setOriginalLabels(originalLabels => [...originalLabels,item.dateandtime]); 
                    setOriginalData(originalData => [...originalData,item.specie_weight]);
                    setOriginalLanding(originalLanding => [...originalLanding, item.landing_centre]);
                    setCompareLabels(compareLabels => [...compareLabels,new Date(item.dateandtime)]);
                  }
                })
                // console.log("outtttt");
                  // fishes.map((item) =>{
                  //   // console.log(item);
                  //   originalLanding.map((item2, id) =>{
                  //     if(item2 === item.landing_centre){
                  //       console.log("adguaydbahbdujh");
                  //       cumulative[id] = cumulative[id] = item.specie_weight;
                  //       console.log(cumulative);
                  //     }
                  //   })
                  // })
              

                console.log(landingCenterData);
                // setLabels(originalLabels);
                setSciName(mapVar.get(searchTerm));
                setShow(true);
            }
            else
                setShow(false);
        }
        console.log("search ", searchTerm);

        setCenterDetails([]);
        // landingCenterData.map((item) => {
          
        //   setEachCenter([])5
        //   fishes.map((item2) =>{
        //     // console.log("eltundiii") /
        //     // console.log(searchTerm)
        //     if (item2.landing_centre === item.landingcentername && item2.specie_name === searchTerm){
        //         console.log("oyeee");
        //         setEachCenter([item.landingcentername , 1]);
        //     }
        //   })
        //   centerDetails.push(eachCenter);
        // })
        
        console.log(centerDetails);
    };

    useEffect(() => {
       fetchItems();
      }, []);

    const Fdata = [
        {
            "fishname":"Catla",
            "scientific_name":"Catla catla",
        },
        {
            "fishname":"Rohu",
            "scientific_name":"Labeo Rohita",
        },
        {
            "fishname":"Mori",
            "scientific_name":"Rhizoprionodon Acutus",
        },
    ];

    const containerStyle = {
        width: '90%',
        height: '90%'
      };
      
      const center = {
        lat: 21.16,
        lng: 79.08
      };
      
      const option = {
        strokeColor: '#FF0000',
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: '#FF0000',
        fillOpacity: 0.35,
        clickable: true,
        draggable: false,
        // editable: false,
        visible: true,
        radius: 2000,
        zIndex: 1,
        
      }
      const [centerName,setCenterName] = useState("");
      const [latitude, setLatitude]  = useState("");
      const [longitude, setLongitude]  = useState("");
      const [state, setState]  = useState("");
      const [district, setDistrict]  = useState("");
      const newLocation = (item) => {
        setCenterName(item.landingcentername);
        setLatitude(item.landingcenterlat);
        setLongitude(item.landingcenterlon);
        setState(item.landingcenterstate);
        setDistrict(item.landingcenterdistrict)
    }

    const [rad, setRad] = useState([]);
    const [all, setAll] = useState([]);
    const [fishName, setFishName] = useState("");
    const [sciName, setSciName] = useState("");
    const [limitDate, setLimitDate] = useState(new Date());
    const datesInRange = async (format, value) => {
      
      console.log(originalLanding);
      if(format === "date")
      {
        const date = new Date();
        const previous = new Date(date.getTime());
        previous.setDate(date.getDate() - value);
        // console.log(previous);
        for(let i = compareLabels.length-1 ; i >= 0 ; i--)
        {
          console.log(previous);
          console.log(compareLabels[i]);
          if(compareLabels[i] >= previous)
          {
            continue;
          }
          else
          {
            setLabels(originalLabels.slice(i+1));
            setData(originalData.slice(i+1));
            setLandings(originalLanding.slice(i+1));
            console.log(dat);
            console.log(labels);
            break;
          }
        }
      }
      else if(format === "month"){
        const getDaysInMonth = (year, month) => new Date(year, month, 0).getDate()
        const addMonths = (input, months) => {
          const date = new Date(input)
          date.setDate(1)
          date.setMonth(date.getMonth() + months)
          date.setDate(Math.min(input.getDate(), getDaysInMonth(date.getFullYear(), date.getMonth()+1)))
          return date
        }
        const previous = addMonths(new Date(), -value);
      
        for(let i = compareLabels.length-1 ; i >= 0 ; i--)
        { 
          // console.log(previous);
          // console.log(compareLabels[i]);
          if(compareLabels[i] > previous)
          {
            continue;
          }
          else
          {
            setLabels(originalLabels.slice(i+1));
            setData(originalData.slice(i+1));
            setLandings(originalLanding.slice(i+1));
            console.log(landings);
            break;
          }
        }
      }
      try {
        let res = await fetch(URL.url+"/api/radius/h", {
          method: "POST",
          body: JSON.stringify({
            landingcenters: landings,
            weights: dat,
            // allCenters:all
          }),
        });
        let resJson = await res.json();
        setRad(resJson.result);
        // if (resJson.login === true) {
        //   localStorage.setItem('user', username);
        //   localStorage.setItem('authentication', true);
        //   console.log("yesss");
        //   history.push("/weighbridge/home");
        // } else {
        //   console.log("nooo");
        // }
      } catch (err) {
        console.log(err);
      }
     


    }

    const [max, setMax] = useState();

    

    const setCumulative = () => {
      console.log(cumulative);
      // originalLanding((item) => {
        
      // })
    }
  return (
    <>
    <GovernmentNavbar />
    <LogoutButton />
            <div className='container'>
                <div className='searchBar'>
                    <input type="text" value={value} placeholder="Enter a Fish Name..." onChange={onChange}></input>
                    {/* <button onClick={() => onSearch(value)} type="submit">Search</button> */}
                </div>

                <div className="dropdown">
                        {Fdata
                        .filter((item) => {
                            const searchTerm = value.toLowerCase();
                            const fullName = item.fishname.toLowerCase();
              
                            return (
                              searchTerm &&
                              fullName.startsWith(searchTerm) &&
                              fullName !== searchTerm
                            );
                          })
                          .map((item) =>(
                            <div
                            onClick={() => onSearch(item.fishname)}
                            className="dropdown-row"
                            key={item.fishname}
                          >
                            {item.fishname}
                          </div>
                        ))}
                </div>

                {show && <>
                <div className='nameCardDetails'>
                    <div className='fishImage'>
                        {/* <img src={fishName === "Catla" ? {catlaImg} : (fishName === "Mori" ? {moriImg} : {rohuImg})}></img> */}
                        <img src={fishName === "Catla" ? catlaImg : (fishName === "Mori" ? moriImg : rohuImg)}></img>
                      </div>
                    
                    <div className='fishData'>
                        <h4>{fishName}</h4>
                        <p>{sciName}</p>
                    </div> 
                </div>
                
                <div className='analysisPeriod'>
                        <div className='periodOptions' onClick={() => datesInRange("date",1)}>1D</div>
                        <div className='periodOptions' onClick={() => datesInRange("date",7)}>7D</div>
                        <div className='periodOptions' onClick={() => datesInRange("month",1)}>1M</div>
                        <div className='periodOptions' onClick={() => datesInRange("month",6)}>6M</div>
                        <div className='periodOptions' onClick={() => datesInRange("month",12)}>1Y</div>
                </div>

                <div className='graphs'>
                    <label className="toggleOption" value="">
                        <input type="checkbox" name="toggle" className="checkbox" onClick={change}></input>
                        <span className="slider"></span>
                    </label>
                    <div className={chartOption ? "charts barchart" : "charts" }>
                        <Bar  data={data} />
                    </div>
                    <div className={chartOption ? "charts" : "charts linechart" }>
                        <Line  data={data} />
                    </div>
                </div>

                <div className='infoCards'>
                    <div className='card'>
                        <h4>{centerName}</h4>
                        <p>Latitude: {latitude}</p>
                        <p>Longitude: {longitude}</p>
                        <p>State: {state}</p>
                        <p>District: {district}</p>
                        {/* <p>Landing Center: {centerName}</p> */}
                    </div>
                    <div className='card'>
                        <h4>Current Stats</h4>
                        <p>Avg Daily Catch: 723 kg</p>
                        <p>Avg Monthly Catch: 23783 kg</p>
                    </div>
                    
                    <div className='card'>
                        <h4>Location</h4>
                        <p>Latitude: 89.2356762863</p>
                        <p>Longitude: 39.2356762863</p>
                    </div>

                    <div className='card'>
                        <h4>Current Stats</h4>
                        <p>Avg Daily Catch: 723 kg</p>
                        <p>Avg Monthly Catch: 23783 kg</p>
                    </div>
                    
                    <div className='card'>
                        <h4>Location</h4>
                        <p>Latitude: 89.2356762863</p>
                        <p>Longitude: 39.2356762863</p>
                    </div>
                </div>
                </>
                }
            </div>
            
            <div className='fixedDisplay'>
            <LoadScript googleMapsApiKey="AIzaSyDyB2y2VuABm-c4986ZjuLuFNxHjhSbbtg">
                <GoogleMap
                  onLoad={(map) => {
                    map.setMapTypeId('satellite');
                   }}
                mapContainerStyle={containerStyle}
                center={center}
                zoom={4.5}
                >
                 
                { /* Child components, such as markers, info windows, etc. */ }
                <>
                {landingCenterData.map((item, idx) => {
                    console.log(idx);
                    return <Circle
                                // onClick={() => newLocation(item)}
                                className="circle"
                                center={{
                                  lat : parseFloat(item.landingcenterlat),
                                  lng : parseFloat(item.landingcenterlon)
                                }}
                                options={option}
                                radius={rad[idx]}
                            /> 
                  })
                }
                </>
                </GoogleMap>
                
            </LoadScript>

            {/* <button onClick={() => setCumulative()}>clickkkkk</button> */}
            </div>
    </>
  )
}


export default GovernmentFishes
