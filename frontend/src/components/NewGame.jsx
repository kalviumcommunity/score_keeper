import React from 'react'
import Court from '../Pictures/court.png'

function NewGame() {
  return (
    <div className='newgame-page'>
        <h1 className='gametitle'>This is the Game Title !!</h1>
        <div className='main-part-up'>
            <div className='score-1'>00</div>
            <div>
                <img className='b-court' src={Court} alt="Badminton-Court" />
            </div>
            <div className='score-2'>00</div>
        </div>
        <div className='main-part-down'>
            <div className='p-1-details'>
                <div className='p-1-details-name'>Player 1</div>
                <div className='p-1-details-score'>0</div>
            </div>
            <div className='functions'>
                <buttton className='p-1-add'>+1</buttton>
                <buttton className='undo'>Undo last move</buttton>
                <buttton className='swap'>swap sides</buttton>
                <buttton className='p-2-add'>+1</buttton>
            </div>
            <div className='p-2-details'>
                <div className='p-2-details-name'>Player 2</div>
                <div className='p-2-details-score'>0</div>
            </div>
        </div>
    </div>
  )
}

export default NewGame