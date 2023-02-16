import React from 'react'
import badminton from "../Pictures/pngegg.png"

function Login() {
  return (
    <div className="login-page">
        <div className='picture'>
            <img className='pic' src={badminton} alt="react-app" />
        </div>
        <div className="login-content">
            <h1 className='login-heading'>Log In</h1>
            <input className='email' type="text" placeholder='Enter your E-mail Id' />
            <input className='password' type="password" placeholder='Enter your Password' />
            <button className='login'>Login</button>
        </div>
    </div>
  )
}

export default Login