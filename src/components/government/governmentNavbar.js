import {React, Component } from 'react'
import Home from '../images/house.png'
import Harbor from '../images/harbor.png'
import Fish from '../images/fish.png'
import Warning from '../images/warning.png'
import { Link } from 'react-router-dom'
import './governmentNavbar.css'

class GovernmentNavbar extends Component{
    render(){
        return (
            <>
                <div className='governmentNavbar'>
                    <Link to="/government">
                        <div className='navbarItem'>
                            <img src={Home}></img>
                        </div>
                    </Link>

                    <Link to="/government/harbors">
                        <div className='navbarItem'>
                            <img src={Harbor}></img>
                        </div>
                    </Link>

                    <Link to="/government/fishes">
                        <div className='navbarItem'>
                            <img src={Fish}></img>
                        </div>
                    </Link>

                    
                </div>
            </>
        )
    }
}

export default GovernmentNavbar