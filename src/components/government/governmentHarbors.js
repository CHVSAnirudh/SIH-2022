import React from 'react'
import {Chart} from 'chart.js'
import {Bar, Line, Pie} from 'react-chartjs-2'
import './government.css'

const GovernmentHarbors = () => {
  return (
    <>
      <div className='fullContainer'>
        <div className='searchBar'>
            <input type="text" placeholder="Enter a State or Harbor name..."></input>
            <button type="submit">Search</button>
        </div>  
        <div className='fixedPart'>
          <div className='stateName'>
            <h3>Telangana</h3>
            <p>Total Available Landing Centers: 145</p>
            <p>Select a Landing center to view information:</p>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5</option>
            </select>
          </div>
          <div className='fishesAndEndangered'>
            <div className='fishDetails'>Local Species</div>
            <div className='endangeredDetails'>Endangered Species</div>
          </div>
          
        </div>
        
      </div>
    </>
  )
}

export default GovernmentHarbors