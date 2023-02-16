import React from 'react'
import badminton from "../Pictures/pngegg.png"

function SignUp() {
  return (
    <div className="signup-page">
        <div className='picture'>
            <img className='pic' src={badminton} alt="react-app" />
        </div>
        <div className="signup-content">
            <h1 className='signup-heading'>Sign Up</h1>
            <input className='email' type="text" placeholder='Enter your E-mail Id' />
            <input className='password' type="password" placeholder='Enter your Password' />
            <button className='signup'>Sign Up</button>
        </div>
    </div>
  )
}

export default SignUp