import React from 'react'
import { Link } from 'react-router-dom'
import fevicon from '../Pictures/Logo.png'


function NavBar() {
  return (
    <div className="navbar"> 
        <Link to={'/'} className='logo'><img className='logo' src={fevicon} alt="" /></Link>
        {/* <h1 className='app-name'> Sco<span>re</span> Kee<span>per</span></h1> */}
        <div className='nav-content'>
          <Link to={'/'}><div className='nav-con'>Home</div></Link>
          <Link to={'/about'}><div className='nav-con'>About</div></Link>
          <Link to={'/rules'}><div className='nav-con'>Rules</div></Link>
        </div>
        <Link to={'/login'}><button className='login'>LogIn</button></Link>
    </div>
  )
}

export default NavBar