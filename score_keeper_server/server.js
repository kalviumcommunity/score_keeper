// Import necessary packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const GameData=require("./modals/modal")
require("dotenv").config();

// Create an Express app
const app = express(
  {cors:{origin:"*",
  methods: ["GET", "POST", "DELETE"],
  allowedHeaders: ["Content-Type"],
  credentials: true}}
);

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", false);

// Set up a database connection using Mongoose
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Mongo-db connected!");
  })

// Set up a route to handle game data submission
app.post("/submitGameData", async (req, res) => {
  try {
    // Extract game data from the request body
    const {authId, title, player1, player2, score1, score2, winText } = req.body;

    // Create a new game data document
    const gameData = new GameData({
      authId,
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

app.get("/getAllGameData", async (req, res) => {
  const gameData = await GameData.find()
  res.status(200).send(gameData)
})

///////////////////////////////////

app.get("/getAllGameData/:authId", (req, res) => {
  const { authId } = req.params;
  console.log(req.params);
  GameData
    .find({ authId })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

/////////////////////////////////

app.get("/singleGameData/:id", async (req, res) => {
  const { id } = req.params
  
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such Game Played'})
  }

  const gameData = await GameData.findById(id)

  if(!gameData) {
    return res.status(404).json({error: 'No such Game Played'})
  }

  res.status(200).json(gameData)
})

app.delete("/singleGameData/:id", async (req, res) => {
  const { id } = req.params
  
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such Game Played'})
  }

  const gameData = await GameData.findOneAndDelete({_id:id})

  if(!gameData) {
    return res.status(404).json({error: 'No such Game Played'})
  }

  res.status(200).json(gameData)
})

// Start the server
app.listen(process.env.PORT, () => {
  console.log("Server started on port", process.env.PORT);
});