import React, { useState } from "react";
import Court from "../Pictures/court.png";
// import Button from './Button';
import TextField from "@mui/material/TextField";

function SemiResult() {
  let Title = sessionStorage.getItem("inputValue");

//   console.log(Title);

  return (
    <div className="newgame-page">
        
      <h1>{Title}</h1>

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
            <TextField
              className="p-1-details-name"
              id="standard-basic"
              label="Player 1"
              variant="standard"
            />
            <div className="p-1-details-score">21</div>
          </div>
          <div className="p-2-details">
            <TextField
              className="p-2-details-name"
              id="standard-basic"
              label="Player 2"
              variant="standard"
            />
            <div className="p-2-details-score">0</div>
          </div>
        </div>
        <h1 className="win-text">
          "Player 1" wins the game with a score of “ 21 / 0 “
        </h1>
      </div>
    </div>
  );
}

export default SemiResult;
