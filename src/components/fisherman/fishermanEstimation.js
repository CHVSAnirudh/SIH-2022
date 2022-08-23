import React from 'react'
import './fisherman.css'
import FishImage from '../images/mackeral.png'
import { Link } from 'react-router-dom'
import FishermanNavbar from './fishermanNavbar'
import LogoutButton from '../main/logoutButton'

function FishermanEstimation() {
  
  return (
    <>
        <FishermanNavbar />
        <LogoutButton />
        <div className='results'>
            <h3>Estimations</h3>
            <table>
            
              <thead>
                <td>S.No.</td>
                <td>Predicted Species</td>
                <td>Image</td>
                <td>Proportions</td>
                <td>Estimated Weight</td>
              </thead>
              {/* <img src={FishImage} width="100%"></img> */}
              <tbody>
                {}
                <tr>
                  <td colSpan="1">1</td>
                  <td>Sci: askjdnakjsd<br></br>Loc: Mackeral</td>
                  <td><img src={FishImage} width="100%"></img></td>
                  <td>1</td>
                  <td>1</td>
                </tr>

                <tr>
                  <td colSpan="1">1</td>
                  <td>Sci: askjdnakjsd<br></br>Loc: Mackeral</td>
                  <td><img src={FishImage} width="100%"></img></td>
                  <td>1</td>
                  <td>1</td>
                </tr>

                <tr>
                  <td colSpan="1">1</td>
                  <td>Sci: askjdnakjsd<br></br>Loc: Mackeral</td>
                  <td><img src={FishImage} width="100%"></img></td>
                  <td>1</td>
                  <td>1</td>
                </tr>

                <tr>
                  <td colSpan="1">1</td>
                  <td>Sci: askjdnakjsd<br></br>Loc: Mackeral</td>
                  <td><img src={FishImage} width="100%"></img></td>
                  <td>1</td>
                  <td>1</td>
                </tr>

                <tr>
                  <td colSpan="1">1</td>
                  <td>Sci: askjdnakjsd<br></br>Loc: Mackeral</td>
                  <td><img src={FishImage} width="100%"></img></td>
                  <td>1</td>
                  <td>1</td>
                </tr>

                <tr>
                  <td colSpan="1">1</td>
                  <td>Sci: Ambuja<br></br>Loc: Mackeral</td>
                  <td><img src={FishImage} width="100%"></img></td>
                  <td>1</td>
                  <td>1</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className='confirmation'>
            <Link to='/fisherman/upload' className='submit'><button>Cancel</button></Link>
            <Link to='/fisherman/upload' className='submit'><button>Submit</button></Link>
          </div>
    </>
  )
}

export default FishermanEstimation