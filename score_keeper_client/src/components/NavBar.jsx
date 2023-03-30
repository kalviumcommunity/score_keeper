import React from 'react'
import { Link } from 'react-router-dom'
import fevicon from './Pictures/Logo.png'
import LoginButton from './Login/LoginButton'


function NavBar() {
  return (
    <div className="navbar"> 
        <Link to={'/'} className='logo'><img className='logo' src={fevicon} alt="" /></Link>
        <div className='nav-content'>
          <Link className='link-home' to={'/'}><div className='nav-con'>Home</div></Link>
          <Link to={'/about'}><div className='nav-con'>About</div></Link>
          <Link to={'/rules'}><div className='nav-con'>Rules</div></Link>
        </div>
        <LoginButton>LogIn</LoginButton>
    </div>
  )
}

export default NavBar