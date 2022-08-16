import {React, Component } from 'react'
import Home from '../images/house.png'
import Video from '../images/video.png'
import Log from '../images/log.png'
import { Link } from 'react-router-dom'
import './weighbridgeNavbar.css'

class WeighbridgeNavbar extends Component{
    render(){
        return (
            <>
                <div className='weighbridgeNavbar'>
                    <Link to="/weighbridge/home">
                        <div className='navbarItem'>
                            <img src={Home}></img>
                        </div>
                    </Link>

                    <Link to="/weighbridge/video">
                        <div className='navbarItem'>
                            <img src={Video}></img>
                        </div>
                    </Link>

                    <Link to="/weighbridge/log">
                        <div className='navbarItem'>
                            <img src={Log}></img>
                        </div>
                    </Link>
                </div>
            </>
        )
    }
}

export default WeighbridgeNavbar