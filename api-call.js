const express = require('express')
const axios = require('axios')
const app = express()
const port = 4000

app.get("/math", async (req, res) => {
    axios.get('http://numbersapi.com/random/math')
    .then(resp => res.send(resp.data))
    res.header('Access-Control-Allow-Origin', '*')
})

app.listen(port, () => {
    console.log(`Running on http://localhost:${port}`)
})