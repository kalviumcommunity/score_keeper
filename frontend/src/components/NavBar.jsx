import React from 'react'
import { Link } from 'react-router-dom'


function NavBar() {
  return (
    <div className="navbar">
        <h1 className='app-name'>Sco<span>re</span> Kee<span>per</span></h1>
        <div className='nav-content'>
          <Link to={'/'}><div className='nav-con'>Home</div></Link>
          <div className='nav-con'>About</div>
          <div className='nav-con'>Rules</div>
        </div>
        <Link to={'/login'}><button className='login'>LogIn</button></Link>
    </div>
  )
}

export default NavBar