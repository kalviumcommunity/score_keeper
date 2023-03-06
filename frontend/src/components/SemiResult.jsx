import Court from "../Pictures/court.png";
// import Button from './Button';

function SemiResult() {
  let Title = sessionStorage.getItem("inputValue");
  let Player1Name = sessionStorage.getItem("Player1Name");
  let Player2Name = sessionStorage.getItem("Player2Name");

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
            <h2 className="p-1-details-name" label="Player 1">{Player1Name}</h2>
            <div className="p-1-details-score">21</div>
          </div>
          <div className="p-2-details">
            <h2 className="p-2-details-name" label="Player 2">{Player2Name}</h2>
            <div className="p-2-details-score">0</div>
          </div>
        </div>
        <h1 className="win-text">
          {Player1Name} wins the game with a score of “ 21 / 0 “
        </h1>
      </div>
    </div>
  );
}

export default SemiResult;
