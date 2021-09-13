const express = require('express')
const app = express()
const { Article } = require('./models')


app.use(express.json())


// GET all articles
app.get('/articles', (req, res) => {
    Article.findAll()
    .then(articles => {
    res.status(200).json(articles)
    })
})

// GET article by ID
app.get('/articles/:id', (req, res) => {
    Article.findOne({
    where: { id: req.params.id }
    })
    .then(article => {
    res.status(200).json(article)
    })
})

app.listen(3000, () => {
    console.log('server nyala di port 3000!');
});