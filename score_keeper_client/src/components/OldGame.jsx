import React from 'react'
import badminton from "../Pictures/pngegg.png";
import { useEffect, useState } from 'react';

function OldGame() {

  // Make a GET request to your backend API
  const [player1, setPlayer1] = useState('');
  const [player2, setPlayer2] = useState('');
  const [score1, setScore1] = useState(0);
  const [score2, setScore2] = useState(0);
  const [winText, setWinText] = useState('');

  useEffect(() => {
    fetch('http://localhost:4000/singleGameData/64145d0bb0a5c251d35886e5')
      .then(response => response.json())
      .then(data => {
        setPlayer1(data.player1);
        setPlayer2(data.player2);
        setScore1(data.score1);
        setScore2(data.score2);
        setWinText(data.winText);
      })
      .catch(error => console.log(error));
  }, []);


  return (
    <div className="game-page">
        <div className='picture-gp'>
            <img className='pic' src={badminton} alt="react-app" />
        </div>
        <div className="old-gamepage-content">
          <h1 className='old-gamepage-heading'>Played Games</h1>
          <div className='login' style={{marginRight:"0px"}}>
            <h1 style={{backgroundColor:"transparent", marginTop:"0px", marginBottom:"0px"}}>{player1} vs {player2}</h1>
            <h2 style={{backgroundColor:"transparent", marginTop:"0px", marginBottom:"0px"}}>Score: {score1} - {score2}</h2>
            <p style={{backgroundColor:"transparent", marginTop:"5px", marginBottom:"10px"}}>{winText}</p>
          </div>
        </div>
    </div>
  )
}

export default OldGame



