import React from 'react'
import LogoutButton from '../main/logoutButton'
import FishermanNavbar from './fishermanNavbar'

function FishermanAdvice() {
  return (
    <>
      <FishermanNavbar />
      <LogoutButton />
      <div className='fullContainer'>
        <div className='searchBar'>
            <input type="text" placeholder="Enter a Fish Name..."></input>
            <button type="submit">Search</button>
        </div>
        <div className='mainDetails'>
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
        </div>
      </div>
    </>
  )
}

export default FishermanAdvice