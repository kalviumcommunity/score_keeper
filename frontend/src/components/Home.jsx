import React from 'react'
import badminton from "../Pictures/pngegg.png"
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="home">
        <div className='picture'>
            <img className='pic' src={badminton} alt="react-app" />
        </div>
        <div className='home-content'>
            <h1 className='heading'>Hey User,</h1>
            <h3 className='heading-content'>The beauty of the game is strength stamina and technique and when you shorten the game, technique goes for a toss and the quality of badminton will surely go down in this system.</h3>
            <div className='buttons'>
                <Link to={'/login'}><button className='login'>LogIn</button></Link>
                <Link to={'/signup'}><button className='signup'>SignUp</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Home