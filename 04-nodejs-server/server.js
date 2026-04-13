const express = require('express')
const app = express()
const port = 5555;

app.get('/', (req, res) => {
    res.send('Hi from Express (Docker)')
})

app.listen(port, () => {
    console.log('Server run on http://localhost:' + port)
})
