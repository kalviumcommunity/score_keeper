import Court from "../Pictures/court.png";
import{useEffect, useState} from 'react'
import {useAuth0} from '@auth0/auth0-react'


function SemiResult() {
  const {user, isLoading, isAuthenticated} = useAuth0()
  const [winner, setWinner ] = useState('');
  const [winnerScore, setWinnerScore ] = useState('');
  const [looserScore, setLooserScore] =useState('');
  
  let Title = sessionStorage.getItem("inputValue");
  let player1Name = sessionStorage.getItem("player1Name");
  let player2Name = sessionStorage.getItem("player2Name");
  let player1Score = sessionStorage.getItem("player1Score");
  let player2Score = sessionStorage.getItem("player2Score");
  if(isLoading){
    console.log('Loading')
  }
  else if(isAuthenticated){
    console.log('Signed In')
    // console.log(user)
  }

  const funct = ()=>{
    if(player1Score>player2Score){
      setWinner(player1Name)
      setWinnerScore(player1Score)
      setLooserScore(player2Score)
    }
    else{
      setWinner(player2Name)
      setWinnerScore(player2Score)
      setLooserScore(player1Score)
    }
  }

  useEffect(() =>{
    funct();
    // eslint-disable-next-line
  },[winner]);


  const save=(e)=>{
    e.preventDefault();
    const authId = user.sub;
    
    console.log("Test Domain: ",process.env.REACT_APP_SUBMIT_URI)
    fetch(process.env.REACT_APP_SUBMIT_URI, {
      
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
      "authId": authId,
      "title": Title,
      "player1": player1Name,
      "player2": player2Name,
      "score1": player1Score ,
      "score2": player2Score,
      "winText": `${winner} wins the game with a score of ${winnerScore}/ ${looserScore}`
    }),
     
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
 
// Converting to JSON
.then(response => response.json())
 
// Displaying results to console
.then(json => console.log(json));
    window.location.href="/gamepage";
  }

  return (
    <div className="newgame-page">
        
      <h1 className="title-sr">{Title}</h1>

      <div className="main-part-up-sm">
        <div className="score-1">{player1Score}</div>
        <div>
          <img className="b-court" src={Court} alt="Badminton-Court" />
        </div>
        <div className="score-2">{player2Score}</div>
      </div>
      <div className="main-part-down-sm">
        <div className="p-details">
          <div className="p-1-details">
            <h2 className="p-1-details-name" style={{color:"black"}} label="Player 1">{player1Name}</h2>
            <div className="p-1-details-score">{player1Score}</div>
          </div>
          <div className="p-2-details">
            <h2 className="p-2-details-name" label="Player 2">{player2Name}</h2>
            <div className="p-2-details-score">{player2Score}</div>
          </div>
        </div>
        <div className="end">
          <h1 className="win-text">
            {winner} wins the game with a score of {winnerScore} / {looserScore}
          </h1>
          <button className="save-game" onClick={(e)=>save(e)}>Save Game</button>
        </div>
      </div>
    </div>
  );
}
export default SemiResult;
