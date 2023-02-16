import React from 'react'
import badminton from "../Pictures/pngegg.png"

function GamePage() {
  return (
    <div className="game-page">
        <div className='picture'>
            <img className='pic' src={badminton} alt="react-app" />
        </div>
        <div className="gamepage-content">
            <div className='record-game'>Record Game</div>
            <div className='view-game'>View Old Game</div>
        </div>
    </div>
  )
}

export default GamePage