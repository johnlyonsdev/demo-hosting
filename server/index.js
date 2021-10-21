const express = require('express')
const path = require('path')

const app = express()
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, "../index.html"))
})

const port = process.env.PORT || 4567

app.listen(port, () => console.log(`Take us to warp ${port}`))
app.listen(port, () => console.log('Heroku is much easier than digital ocean'))