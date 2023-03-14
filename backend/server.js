// Import necessary packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const GameData=require("./modals/modal")

// Create an Express app
const app = express();

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);

// Set up a database connection using Mongoose
mongoose
  .connect(
    "mongodb+srv://chandangowda:Gowda$123@score-keeper.nuzfevx.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected!");
  });

// Set up a route to handle game data submission
app.post("/submitGameData", async (req, res) => {
  try {
    // Extract game data from the request body
    const { title, player1, player2, score1, score2, winText } = req.body;

    // Create a new game data document
    const gameData = new GameData({
      title,
      player1,
      player2,
      score1,
      score2,
      winText,
    });

    // Save the game data to the database
    await gameData.save();

    // Send a success response
    res.status(200).send("Game data saved successfully");
  } catch (err) {
    // Send an error response if something went wrong
    res.status(500).send("Error saving game data: " + err.message);
  }
});

// Start the server
app.listen(4000, () => {
  console.log("Server started on port 4000");
});
