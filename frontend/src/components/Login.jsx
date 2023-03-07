import React from 'react'
import badminton from "../Pictures/pngegg.png"
import { Link } from 'react-router-dom'
// import TextField from '@mui/material/TextField'

function Login() {
  return (
    <div className="login-page">
        <div className='picture-login'>
            <img className='pic' src={badminton} alt="react-app" />
        </div>
        <div className="login-content">
            <h1 className='login-heading'>Log In</h1>
            <input className='email' type="text" placeholder='Enter your E-mail Id' />
            <input className='password' type="password" placeholder='Enter your Password' />
            <Link to={'/gamepage'}><button className='login'>Login</button></Link>
            {/* <TextField id="outlined-basic" label="Outlined" variant="outlined" /> */}
        </div>
    </div>
  )
}

export default Login