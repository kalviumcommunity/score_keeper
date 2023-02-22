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
            <Link className='record-game' to={'/newgame'}>Record Game</Link>
            <Link className='view-game' to={'/dvsdvsdvs'}>View Old Game</Link>
        </div>
    </div>
  )
}

export default GamePage