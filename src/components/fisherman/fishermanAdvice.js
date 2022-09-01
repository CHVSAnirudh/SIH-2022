import React from 'react'
import LogoutButton from '../main/logoutButton'
import FishermanNavbar from './fishermanNavbar'

function FishermanAdvice() {
  return (
    <>
      <FishermanNavbar />
      <LogoutButton />
      <div className='fullContainer'>
        {/* <div className='searchBar'>
            <input type="text" placeholder="Enter a Fish Name..."></input>
            <button type="submit">Search</button>
        </div> */}
        {/* <div className='mainDetails'>
          <h4>Forecast details for Vellapatti</h4>
          <p>Forecast Date: 14-Aug-2022</p>
          <p>Validity Date: 15-Aug-2022</p>
        </div>
        <div className='forecastDetails'>
  
          <div className='forecastCard'>
            <h1>Location</h1>
            <p>Latitude: </p>
            <p>Longitude: </p>
            <p>Landing Center: </p>
            <p>District: </p>
            <p>State: </p>
          </div>

          <div className='forecastCard'>
            <h1>Details</h1>
            <p>Distance: </p>
            <p>Depth: </p>
            <p>Bearing: </p>
            <p>Direction: </p>
          </div>
        </div> */}
        <div
        style={{
          margin:"10px 65% 10px 10%"
        }}><h1>Community Posts:</h1></div>
        <div
        style={{
          margin:"10px 65% 10px 10%"
        }}><b>for PFZ2 PFZ3 PFZ4</b></div>
        <div className='forecast'>
          <div>User: Ramana</div>
          <div>Landing Center: Vishakapatnam</div>
          <div>Latitude: 92.33</div>
          <div>Longitude: 87.32</div>
          <div>Date and Time: 24th Mon August 2022</div>
          <div>PFZ: 3</div>
          <div>
            Found Catla in abundance. 
          </div>
        </div>
      <div className='whole'>
        <div className='forecast'>
          <div>User: Ramana</div>
          <div>Landing Center: Vishakapatnam</div>
          <div>Latitude: 92.33</div>
          <div>Longitude: 87.32</div>
          <div>Date and Time: 23th Mon August 2022</div>
          <div>PFZ: 2</div>
          <div>
            Found Catla in abundance. 
          </div>
        </div>

        <div className='forecast'>
          <div>User: Ramana</div>
          <div>Landing Center: Vishakapatnam</div>
          <div>Latitude: 92.33</div>
          <div>Longitude: 87.32</div>
          <div>Date and Time: 22th Mon August 2022</div>
          <div>PFZ: 3</div>
          <div>
            Found Catla in abundance. 
          </div>
        </div>

        <div className='forecast'>
          <div>User: Ramana</div>
          <div>Landing Center: Vishakapatnam</div>
          <div>Latitude: 92.33</div>
          <div>Longitude: 87.32</div>
          <div>Date and Time: 21th Mon August 2022</div>
          <div>PFZ: 4</div>
          <div>
            Found Catla in abundance. 
          </div>
        </div>

        <div className='forecast'>
          <div>User: Ramana</div>
          <div>Landing Center: Vishakapatnam</div>
          <div>Latitude: 92.33</div>
          <div>Longitude: 87.32</div>
          <div>Date and Time: 20th Mon August 2022</div>
          <div>PFZ: 4</div>
          <div>
            Found Catla in abundance. 
          </div>
        </div>

        <div className='forecast'>
          <div>User: Ramana</div>
          <div>Landing Center: Vishakapatnam</div>
          <div>Latitude: 92.33</div>
          <div>Longitude: 87.32</div>
          <div>Date and Time: 19th Mon August 2022</div>
          <div>PFZ: 3</div>
          <div>
            Found Catla in abundance. 
          </div>
        </div>
        <div className='forecast'>
          <div>User: Ramana</div>
          <div>Landing Center: Vishakapatnam</div>
          <div>Latitude: 92.33</div>
          <div>Longitude: 87.32</div>
          <div>Date and Time: 18th Mon August 2022</div>
          <div>PFZ: 2</div>
          <div>
            Found Catla in abundance. 
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default FishermanAdvice