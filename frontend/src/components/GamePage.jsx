import React from 'react'
import badminton from "../Pictures/pngegg.png"
import { Link } from 'react-router-dom'

function GamePage() {
  return (
    <div className="game-page">
        <div className='picture'>
            <img className='pic' src={badminton} alt="react-app" />
        </div>
        <div className="gamepage-content">
            <Link to={'/newgame'}><div className='record-game'>Record Game</div></Link>
            <div className='view-game'>View Old Game</div>
        </div>
    </div>
  )
}

export default GamePage