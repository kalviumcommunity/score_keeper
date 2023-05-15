// Import required modules
import React, { useState, useEffect } from "react";
import Button from "../Button";
import { useNavigate } from "react-router-dom";

// Define a functional component
function NewGame() {

// State variables for game title, player names, game actions, and scores
const [inputValue, setInputValue] = useState("");
const [player1Name, setPlayer1Name] = useState("");
const [player2Name, setPlayer2Name] = useState("");
const [gameActions, setGameActions] = useState([]);
const [count1, setCount1] = useState(0);
const [count2, setCount2] = useState(0);

// Update session storage whenever the input value changes
useEffect(() => {
    sessionStorage.setItem("inputValue", inputValue);
}, [inputValue]);

// Update session storage whenever the player1 name changes
useEffect(() => {
    sessionStorage.setItem("player1Name", player1Name);
}, [player1Name]);

// Update session storage whenever the player2 name changes
useEffect(() => {
    sessionStorage.setItem("player2Name", player2Name);
}, [player2Name]);

// Update session storage whenever player1 score changes
useEffect(() => {
    sessionStorage.setItem("player1Score", count1);
}, [count1]);

// Update session storage whenever player2 score changes
useEffect(() => {
    sessionStorage.setItem("player2Score", count2);
}, [count2]);

// Update inputValue state variable whenever the input value changes
const handleInputChange = (event) => {
    setInputValue(event.target.value);
};

// Update player1Name state variable whenever the player1 name changes
const p1Change = (event) => {
    setPlayer1Name(event.target.value);
};

// Update player2Name state variable whenever the player2 name changes
const p2Change = (event) => {
    setPlayer2Name(event.target.value);
};

// Logic for incrementing player1's score
let incrementCountP1 = () => {
    const newActions = [...gameActions,{        action:'increment',        player:'player1'    }]
    setGameActions(newActions)
    setCount1(count1 + 1);
};

// Logic for incrementing player2's score
let incrementCountP2 = () => {
    const newActions = [...gameActions,{        action:'increment',        player:'player2'    }]
    setGameActions(newActions)
    setCount2(count2 + 1);
};

// Navigate to "/semiresult" page if either player's score is 21 and the difference between scores is at least 2
const navigate = useNavigate();
if (count1 >= 21 && Math.abs(count1-count2) >= 2) {    
    navigate("/semiresult");
} 
if (count2 >= 21 && Math.abs(count2-count1) >= 2) {    
    navigate("/semiresult");
}

// Logic for undoing the last action
let undo = () => {
    const newActions = [...gameActions]
    const latestAction = newActions.pop()
    setGameActions(newActions)
    if(latestAction.player === "player1"){
        setCount1(count1 - 1)
    }
    else{
        setCount2(count2 - 1)
    }
};

// Render the JSX for the component
return (
    // top level container div for the new game page
    <div className="newgame-page">

        {/* input field for game title */}
        <>
            <input
                id="gametitle-re"
                type="text"
                placeholder="This is the Game Title !!"
                value={inputValue}
                onChange={handleInputChange}
            />
        </>

        {/* container div for score display */}
        <div className="main-part-up">
            
            {/* score display for player 1 */}
            <div className="score-1">{count1}</div>
            
            {/* badminton court image */}
            <div>
                <img className="b-court" src='https://res.cloudinary.com/dmewxwr0i/image/upload/v1684125671/court.8d55b1d6ed87b462129c_vjcx7n.png' alt="Badminton-Court" />
            </div>
            
            {/* score display for player 2 */}
            <div className="score-2">{count2}</div>
        </div>

        {/* container div for score display (mobile version) */}
        <div className="main-part-up-2">
            
            {/* score display for player 1 (mobile version) */}
            <div className="score-1-mob">{count1}</div>
            
            {/* score display for player 2 (mobile version) */}
            <div className="score-2-mob">{count2}</div>
        </div>

        {/* container div for score update buttons (mobile version) */}
        <div className="functions-mobile">
            
            {/* button to increment player 1's score */}
            <Button className="p-1-add" title={"+1"} action={incrementCountP1} />
            
            {/* button to undo last score update */}
            <Button title={"undo"} action={undo} />
            
            {/* button to increment player 2's score */}
            <Button title={"+1"} action={incrementCountP2} />
        </div>

        {/* container div for player details and score update buttons */}
        <div className="main-part-down">
            
            {/* container div for player 1's details and score display */}
            <div className="p-1-details">
            
                {/* input field for player 1's name */}
                <input
                    className="p-1-details-name"
                    id="white-text"
                    placeholder="Player 1"
                    value={player1Name}
                    onChange={p1Change}
                />
            
                {/* score display for player 1 */}
                <div className="p-1-details-score">{count1}</div>
            </div>

            {/* container div for score update buttons */}
            <div className="functions">
            
                {/* button to increment player 1's score */}
                <Button className="p-1-add" title={"+1"} action={incrementCountP1} />
            
                {/* button to undo last score update */}
                <Button title={"undo"} action={undo} />
            
                {/* button to increment player 2's score */}
                <Button title={"+1"} action={incrementCountP2} />
            </div>

            {/* container div for player 2's details and score display */}
            <div className="p-2-details">
            
                {/* input field for player 2's name */}
                <input
                    className="p-2-details-name"
                    id="white-text"
                    placeholder="Player 2"
                    value={player2Name}
                    onChange={p2Change}
                />
            
                {/* score display for player 2 */}
                <div className="p-2-details-score">{count2}</div>
            </div>
        </div>
    </div>
);

}
export default NewGame;