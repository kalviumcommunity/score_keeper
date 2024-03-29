import React from 'react'
import { Link } from 'react-router-dom'

function GamePage() {
  return (
    <div className="game-page">
        <div className='picture-gp'>
            <img className='pic' src='https://res.cloudinary.com/dmewxwr0i/image/upload/v1684125179/pngegg.61e13af42a8dafef9817_bjry7s.png' alt="react-app" />
        </div>
        <div className="gamepage-content">
            <Link className='record-game' to={'/newgame21'}>New Game</Link>
            <Link className='view-game' to={'/oldgames'}>Played Game</Link>
        </div>
    </div>
  )
}

export default GamePage