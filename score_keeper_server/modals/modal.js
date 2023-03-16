const mongoose = require('mongoose');

// Define a schema for the game data
const gameDataSchema = new mongoose.Schema({
    title: String,
    player1: String,
    player2: String,
    score1: Number,
    score2: Number,
    winText: String,
});
  
// Create a model for the game data
const GameData = mongoose.model('GameData', gameDataSchema);

module.exports = GameData
