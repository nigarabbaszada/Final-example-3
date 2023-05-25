import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <nav>
        <div className='navmainBox'> 
        <div className='navImg'>  <img src="https://preview.colorlib.com/theme/bizpro/images/logo/logo.png" alt="" /></div>
            <div className='navText'>
              
                <ul>
                    <Link to='/'>HOME</Link>
                    <Link to='/about'>ABOUT</Link>
                    <Link to='/services'>SERVICES</Link>
                 <Link to='/portfolio'>PORTFOLIO</Link>
                 <Link to='/team'>TEAM</Link>
                    <Link to='/skill'>SKILL</Link>
                    <Link to='/clients'>CLIENTS</Link>
                 <Link to='/pricing'>PRICING</Link>
                    <Link to='/blog'>BLOG</Link>
                    <Link to='/contact'>CONTACT</Link>
                    <Link to='/add'>ADD</Link>
                </ul>
            </div>
        </div>
    </nav>
    
    
    
    
    </>
  )
}

export default Navbar