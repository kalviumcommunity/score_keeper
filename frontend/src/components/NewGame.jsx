import React, { useState } from 'react'
import Court from '../Pictures/court.png'

function NewGame() {
  return (
    <div className='newgame-page'>
        <TextField className='gametitle' id="outlined-basic" label="This is the Game Title !!" variant="outlined" />
        <div className='main-part-up'>
            <div className='score-1'>{count1}</div>
            <div>
                <img className='b-court' src={Court} alt="Badminton-Court" />
            </div>
            <div className='score-2'>{count2}</div>
        </div>
        <div className='main-part-down'>
            <div className='p-1-details'>
                <div className='p-1-details-name'>Player 1</div>
                <div className='p-1-details-score'>0</div>
            </div>
            <div className='functions'>
                <Button className='p-1-add' title={'+1'} action={incrementCountP1}/>
                <Button title={'undo1'} action={undoCount1}/>
                <Button title={'undo2'} action={undoCount2}/>
                <Button title={'+1'} action={incrementCountP2}/>
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