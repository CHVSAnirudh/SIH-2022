import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './government.css'
import { GoogleMap, LoadScript } from '@react-google-maps/api';
import URL from '../../config.js';
import FishImage from '../images/mackeral.png'
import { Circle } from '@react-google-maps/api';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    TimeScale, 
    TimeSeriesScale
  } from 'chart.js';
import { Bar, Line } from 'react-chartjs-2';
import 'chartjs-adapter-date-fns';
import GovernmentNavbar from './governmentNavbar';
import LogoutButton from '../main/logoutButton';
// import {Bar} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend,
    TimeScale, 
    TimeSeriesScale
);


const GovernmentFishes = () => {
    const labels = ['2020-08-01','2020-08-02','2020-08-03','2020-08-04','2020-08-05','2020-08-06','2020-08-07','2020-08-08','2021-08-09','2021-08-10', '2021-08-11','2021-08-12','2021-08-13','2021-08-14','2021-08-15','2021-08-16','2021-08-17','2021-08-18','2021-08-19','2022-08-20','2022-08-21','2022-08-22','2022-08-23','2022-08-24','2022-08-25','2022-08-26','2022-08-27','2022-08-28','2022-08-29','2022-08-30',
    '2022-09-01','2020-09-02','2020-09-03','2020-09-04','2020-09-05','2020-09-06','2020-09-07','2020-09-08','2021-09-09','2021-09-10', '2021-09-11','2021-09-12','2021-09-13','2021-09-14','2021-09-15','2021-09-16','2021-09-17','2021-09-18','2021-09-19','2021-09-20','2021-09-21','2020-09-22','2020-09-23','2022-09-24','2022-09-25','2022-09-26','2022-09-27','2022-09-28','2022-09-29','2022-09-30',
    '2020-10-01','2020-10-02','2020-10-03','2020-10-04','2020-10-05','2020-10-06','2020-10-07','2020-10-08','2020-10-09','2020-10-10', '2020-10-11','2021-10-12','2021-10-13','2021-10-14','2021-10-15','2021-10-16','2021-10-17','2021-10-18','2021-10-19','2021-10-20','2021-10-21','2021-10-22','2022-10-23','2022-10-24','2022-10-25','2022-10-26','2022-10-27','2022-10-28','2022-10-29','2022-10-30'];
    const data = {
        labels,
        datasets: [{
            label:"Data",
            data: [5, 11, 3, 8, 7, 4, 15,5, 11, 3, 8, 7, 4, 15,5, 11, 7, 4, 15,5, 11, 3, 8, 7, 4, 15,5, 11, 3, 8, 7, 4, 15,5, 11, 3, 8, 7, 4, 15,5, 11, 3, 8, 7, 4, 15,5, 11, 3, 8, 7, 4, 15,5, 11, 3, 8, 7, 4, 15],
            borderColor: 'rgba(0, 110, 157, 0.2)',
            backgroundColor: 'rgb(255, 99, 132)',
            tension: 0.2,
            pointRadius:0,
            borderWidth:2.2
        }
        ],
      };

      const options = {
        scales: {
            x: {
                type: 'time',
                time: {
                    unit:'year'
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

    const fetchItems = async() => {
        try {
            let res = await fetch(URL.url+"/api/govt_catch/f", {
              method: "GET",
            });
            let resJson = await res.json();
            console.log(resJson);
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

    const [show, setShow] = useState(false);
    const [allFishData,setAllFishData] = useState([]);
    const onSearch = (searchTerm) => {
        setValue(searchTerm);
        setFishName(searchTerm);
        const dict = {
            "Catla":"Catla catla",
            "Rohu":"Labeo Rohita",
            "Mori":"Rhizoprionodon Acutus"
        }
        setSciName(dict[searchTerm]);
        setShow(searchTerm === ""? false : true);
         
        
        console.log("search ", searchTerm);
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
        lat: 21.161712,
        lng: 79.085554
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
        radius: 30000,
        zIndex: 1,
        
      }

      const newLocation = (event) => {
        console.log(event);
    }

    const [fishName, setFishName] = useState("");
    const [sciName, setSciName] = useState("");
  return (
    <>
    <GovernmentNavbar />
    <LogoutButton />
            <div className='container'>
                <div className='searchBar'>
                    <input type="text" value={value} placeholder="Enter a Fish Name..." onChange={onChange}></input>
                    <button onClick={() => onSearch(value)} type="submit">Search</button>
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

                {show && <><div className='nameCardDetails'>
                    <div className='fishImage'>
                    <img src={FishImage}></img>
                    </div>
                    <div className='fishData'>
                        <h4>{fishName}</h4>
                        <p>{sciName}</p>
                    </div> 
                </div>
                

                <div className='analysisPeriod'>
                        <div className='periodOptions'>1D</div>
                        <div className='periodOptions'>7D</div>
                        <div className='periodOptions'>1M</div>
                        <div className='periodOptions'>6M</div>
                        <div className='periodOptions'>1Y</div>
                        <div className='periodOptions'>5Y</div>
                        <div className='periodOptions'>MAX</div>
                </div>

                <div className='graphs'>
                    <label className="toggleOption" value="">
                        <input type="checkbox" name="toggle" className="checkbox" onClick={change}></input>
                        <span className="slider"></span>
                    </label>
                    <div className={chartOption ? "charts barchart" : "charts"}>
                        <Bar options={options} data={data}/>
                    </div>
                    <div className={chartOption ? "charts" : "charts linechart"}>
                        <Line data={data} />
                    </div>
                </div>

                <div className='infoCards'>
                    <div className='card'>
                        <h4>Place Details</h4>
                        <p>Latitude: 89.2356762863</p>
                        <p>Longitude: 39.2356762863</p>
                        <p>State: Tamil Nadu</p>
                        <p>District: Knkmsodmam</p>
                        <p>Landing Center: Inthira Nagar</p>
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
                zoom={5}
               
                >
                { /* Child components, such as markers, info windows, etc. */ }
                <>
                    <Circle
                        onClick={newLocation}
                        className="circle"
                        center={center}
                        options={option}
                        radius={100000}
                    />
                </>
                </GoogleMap>
                
            </LoadScript>
            </div>
    </>
  )
}


export default GovernmentFishes

