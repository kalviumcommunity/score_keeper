const mongoose = require('mongoose');


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