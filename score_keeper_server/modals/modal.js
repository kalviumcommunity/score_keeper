const mongoose = require('mongoose');

// Define a schema for the game data
const gameDataSchema = new mongoose.Schema({
    authId: String,
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

const newsSchema = new mongoose.Schema({
    status: String,
    totalResults: String,
    articles: [
        {
        source: {
            id: String,
            name: String
        },
        author: String,
        title: String,
        description: String,
        url: String,
        urlToImage: String,
        publishedAt: String,
        content: String
        }
    ]
})

const News = mongoose.model('News', newsSchema);

module.exports = News