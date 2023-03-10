import React, { useState, useEffect } from "react";
import Court from "../Pictures/court.png";
import Button from "./Button";
// import SemiResult from './SemiResult';
import { useNavigate } from "react-router-dom";
// import { useStackState } from "rooks"

function NewGame() {
    //title of game

    const [inputValue, setInputValue] = useState("");
    // console.log(inputValue);

    const [Player1Name, setPlayer1Name] = useState("");
    const [Player2Name, setPlayer2Name] = useState("");
    const [gameActions, setGameActions] = useState([]);

    // Update session storage whenever the input value changes
    useEffect(() => {
        sessionStorage.setItem("inputValue", inputValue);
    }, [inputValue]);

    useEffect(() => {
        sessionStorage.setItem("Player1Name", Player1Name);
    }, [Player1Name]);

    useEffect(() => {
        sessionStorage.setItem("Player2Name", Player2Name);
    }, [Player2Name]);



    // Update state whenever the input value changes
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const p1Change = (event) => {
        setPlayer1Name(event.target.value);
    };

    const p2Change = (event) => {
        setPlayer2Name(event.target.value);
    };

    // Logic

    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const navigate = useNavigate();

    let incrementCountP1 = () => {
            const newActions = [...gameActions,{
                action:'increment',
                player:'player1'
            }]
            setGameActions(newActions)
        setCount1(count1 + 1);
    };

    let incrementCountP2 = () => {
        const newActions = [...gameActions,{
            action:'increment',
            player:'player2'
        }]
        setGameActions(newActions)
        setCount2(count2 + 1);
    };

    if (count1 >= 21) {
        navigate("/semiresult");
    }

    if (count2 >= 21) {
        navigate("/semiresult");
    }

    // undo logic

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
        console.log(count1, count2)
    };

    



    return (
        <div className="newgame-page">
            <>
                <input
                    id="gametitle-re"
                    type="text"
                    placeholder="This is the Game Title !!"
                    value={inputValue}
                    onChange={handleInputChange}
                />
            </>
            <div className="main-part-up">
                <div className="score-1">{count1}</div>
                <div>
                    <img className="b-court" src={Court} alt="Badminton-Court" />
                </div>
                <div className="score-2">{count2}</div>
            </div>
            <div className="functions-mobile">
                    <Button className="p-1-add" title={"+1"} action={incrementCountP1} />
                    <Button title={"undo"} action={undo} />
                    <Button title={"+1"} action={incrementCountP2} />
                </div>
            <div className="main-part-down">
                <div className="p-1-details">
                    <input
                        className="p-1-details-name"
                        id="white-text"
                        placeholder="Player 1"
                        value={Player1Name}
                        onChange={p1Change}
                    />
                    <div className="p-1-details-score">{count1}</div>
                </div>
                <div className="functions">
                    <Button className="p-1-add" title={"+1"} action={incrementCountP1} />
                    <Button title={"undo"} action={undo} />
                    <Button title={"+1"} action={incrementCountP2} />
                </div>
                <div className="p-2-details">
                    <input
                        className="p-2-details-name"
                        id="white-text"
                        placeholder="Player 2"
                        value={Player2Name}
                        onChange={p2Change}
                    />
                    <div className="p-2-details-score">{count2}</div>
                </div>
            </div>
            
        </div>
    );
}
export default NewGame;
