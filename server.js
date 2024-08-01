const express = require('express')

const app = express()



app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: "hello world changing update cd"
    })
})

app.listen(8082, () => {
    console.log('server running on port 8081 Hello test ci cd')
})