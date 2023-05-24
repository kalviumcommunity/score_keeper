// Import necessary packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const GameData=require("./modals/modal")
require("dotenv").config();
const ProductData=require("./modals/productData")
const News = require("./modals/news");


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
      winText
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

app.post("/news", async (req, res) => {
  try {
    // Extract news data from the request body
    const { author, title, description, url, urlToImage, publishedAt, content } = req.body;

    const newsSchema = new News({
      author,
      title,
      description,
      url,
      urlToImage,
      publishedAt,
      content
    });

    // Save the news data to the database
    await newsSchema.save();

    // Send a success response
    res.status(200).send("News data saved successfully");
  } catch (err) {
    // Send an error response if something went wrong
    res.status(500).send("Error saving news data: " + err.message);
  }
});

app.get("/news", async (req, res) => {
  const newsData = await News.find()
  res.status(200).send(newsData)
})

// Set up a route to handle product data submission
app.post("/productData", async (req, res) => {
  try {
    // Extract product data from the request body
    const { productName, price, category, timeAdded, decription, rating, urlToImage, like, url } = req.body;

    // Create a new product data document
    const productData = new ProductData({
        productName,
        price,
        category,
        timeAdded,
        decription,
        rating,
        urlToImage,
        like,
        url
    });

    // Save the product data to the database
    await productData.save();

    // Send a success response
    res.status(200).send("Product data saved successfully");
  } catch (err) {
    // Send an error response if something went wrong
    res.status(500).send("Error saving Product data: " + err.message);
  }
});

app.get("/productData", async (req, res) => {
  const productData = await ProductData.find()
  res.status(200).send(productData)
})

///////////////////////////////////

app.get("/productData/:category", (req, res) => {
  const { category } = req.params;
  ProductData
    .find({ category })
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

/////////////////////////////////

app.get("/productData/:id", async (req, res) => {
  const { id } = req.params
  
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such Product Found'})
  }

  const productData = await ProductData.findById(id)

  if(!productData) {
    return res.status(404).json({error: 'No such Product Found'})
  }

  res.status(200).json(productData)
})

app.delete("/productData/:id", async (req, res) => {
  const { id } = req.params
  
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error: 'No such Product Found'})
  }

  const productData = await ProductData.findOneAndDelete({_id:id})

  if(!productData) {
    return res.status(404).json({error: 'No such Product Found'})
  }

  res.status(200).json(productData)
})

// Start the server
app.listen(process.env.PORT, () => {
  console.log("Server started on port", process.env.PORT);
});