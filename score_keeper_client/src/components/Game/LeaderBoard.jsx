import React, { useState, useEffect } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom"

function LeaderBoard() {
  const [leaderboardData, setLeaderboardData] = useState([]);
  const { user } = useAuth0();

  useEffect(() => {
    if (user) {
      fetch(process.env.REACT_APP_FETCH_URI + `/${user.sub}`)
        .then((response) => response.json())
        .then((data) => {
          
          // Calculate leaderboard data
          const players = {};

          data.forEach(game => {
            const { player1, player2, score1, score2 } = game;

            // Update player statistics for player1
            players[player1] = players[player1] || { name: player1, gamesPlayed: 0, gamesWon: 0, gamesLost: 0 };
            players[player1].gamesPlayed++;
            if (score1 > score2) {
              players[player1].gamesWon++;
            } else {
              players[player1].gamesLost++;
            }

            // Update player statistics for player2
            players[player2] = players[player2] || { name: player2, gamesPlayed: 0, gamesWon: 0, gamesLost: 0 };
            players[player2].gamesPlayed++;
            if (score2 > score1) {
              players[player2].gamesWon++;
            } else {
              players[player2].gamesLost++;
            }
          });

          const sortedLeaderboard = Object.values(players).sort((a, b) => b.gamesWon - a.gamesWon);

          setLeaderboardData(sortedLeaderboard);
        })
        .catch((error) => console.log(error));
    }
  }, [user]);

  return (
    <div className="game-page">
        <div className="picture-gp">
          <img className="pic" src='https://res.cloudinary.com/dmewxwr0i/image/upload/v1684125179/pngegg.61e13af42a8dafef9817_bjry7s.png' alt="react-app" />
        </div>
      <div className='old-gamepage-content'>
          <div className="old-gamepage-heading-head">
            <Link to={"/oldgames"} className="old-gamepage-heading-l" style={{fontWeight:"300"}}>Played Games</Link>
            <h1 className="old-gamepage-heading">Leader Board</h1>
          </div>
        <table className='lbpage-data'>
          <thead className='lb-tale'>
            <tr className='lbpage-heading'>
              <th>Player Name</th>
              <th>Games Played</th>
              <th>Games Won</th>
              <th>Games Lost</th>
            </tr>
          </thead>
          <tbody className='lbpage-dataa'>
            {leaderboardData.map(player => (
              <tr className='lbpage-content' key={player.name}>
                <td>{player.name}</td>
                <td>{player.gamesPlayed}</td>
                <td>{player.gamesWon}</td>
                <td>{player.gamesLost}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default LeaderBoard;
