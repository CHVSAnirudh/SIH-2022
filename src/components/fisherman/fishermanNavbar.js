import {React, Component } from 'react'
import Home from '../images/house.png'
import Upload from '../images/upload.png'
import Advice from '../images/chat.png'
import User from '../images/user.png'
import { Link } from 'react-router-dom'
import './fishermanNavbar.css'

class FishermanNavbar extends Component{
    render(){
        return (
            <>
                <div className='fishermanNavbar'>
                    <Link to="/fisherman/home">
                        <div className='navbarItem'>
                            <img src={Home}></img>
                        </div>
                    </Link>

                    <Link to="/fisherman/upload">
                        <div className='navbarItem'>
                            <img src={Upload}></img>
                        </div>
                    </Link>

                    <Link to="/fisherman/advice">
                        <div className='navbarItem'>
                            <img src={Advice}></img>
                        </div>
                    </Link>

                    {/* <Link to="/fisherman/user">
                        <div className='navbarItem'>
                            <img src={User}></img>
                        </div>
                    </Link> */}
                </div>
            </>
        )
    }
}

export default FishermanNavbar