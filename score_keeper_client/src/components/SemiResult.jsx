import Court from "../Pictures/court.png";

function SemiResult() {
  let Title = sessionStorage.getItem("inputValue");
  let player1Name = sessionStorage.getItem("player1Name");
  let player2Name = sessionStorage.getItem("player2Name");

  const save=(e)=>{
    e.preventDefault();
    fetch(`http://localhost:4000/submitGameData`, {
     
    // Adding method type
    method: "POST",
     
    // Adding body or contents to send
    body: JSON.stringify({
      "title": Title,
      "player1": player1Name,
      "player2": player2Name,
      "score1": 21 ,
      "score2": 0 ,
      "winText": `${player1Name} wins the game with a score of “ 21 / 0“`
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
    window.location.href="/";
  }
//   console.log(Title);

  return (
    <div className="newgame-page">
        
      <h1 className="title-sr">{Title}</h1>

      <div className="main-part-up-sm">
        <div className="score-1">21</div>
        <div>
          <img className="b-court" src={Court} alt="Badminton-Court" />
        </div>
        <div className="score-2">0</div>
      </div>
      <div className="main-part-down-sm">
        <div className="p-details">
          <div className="p-1-details">
            <h2 className="p-1-details-name" label="Player 1">{player1Name}</h2>
            <div className="p-1-details-score">21</div>
          </div>
          <div className="p-2-details">
            <h2 className="p-2-details-name" label="Player 2">{player2Name}</h2>
            <div className="p-2-details-score">0</div>
          </div>
        </div>
        <div className="end">
          <h1 className="win-text">
            {player1Name} wins the game with a score of “ 21 / 0 “
          </h1>
          <button className="save-game" onClick={(e)=>save(e)}>Save Game</button>
        </div>
      </div>
    </div>
  );
}
export default SemiResult;
