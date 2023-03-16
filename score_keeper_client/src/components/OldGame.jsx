import React from 'react'
import badminton from "../Pictures/pngegg.png";

function OldGame() {

  // Get a reference to the element where you want to display the data
  const resultsDiv = document.getElementById('results');

  // Make a GET request to your backend API
  fetch('http://localhost:4000/getAllGameData')
    .then(response => response.json())
    .then(data => {
      // Loop through the data and create a table row for each result
      let resultsTable = '<table>';
      data.forEach(result => {
        resultsTable += `
          <tr>
            <td>${result.title}</td>
            <td>${result.player1Name}</td>
            <td>${result.player2Name}</td>
            <td>${result.player1Score}</td>
            <td>${result.player2Score}</td>
            <td>${result.winText}</td>
          </tr>
        `;
      });
      resultsTable += '</table>';

      // Display the results table on the webpage
      resultsDiv.innerHTML = resultsTable;
    })
    .catch(error => console.error(error));




  return (
    <div className="game-page">
        <div className='picture-gp'>
            <img className='pic' src={badminton} alt="react-app" />
        </div>
        <div className="old-gamepage-content">
        <h1 className='old-gamepage-heading'>Played Games</h1>
        </div>
    </div>
  )
}

export default OldGame