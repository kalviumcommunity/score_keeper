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
            <h1 className='heading'>Hey User !!</h1>
            <h5 className='sub-heading'>Beyond<span className='s-h'>, Play </span>&  Court</h5>
            <h3 className='heading-content'>The beauty of the game is strength stamina and technique and when you shorten the game, technique goes for a toss and the quality of badminton will surely go down in this system.</h3>
            <div className='buttons'>
                <Link to={'/gamepage'}><button className='login' style={{padding:"10px 30px",boxShadow:"3px 3px 0px #000, 0px 0px 60px #858585"}}>Start</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Home