const express = require('express')
const app = express()
const bodyParser = require('body-parser')

require('dotenv').config()


app.use(bodyParser.json())
const api = require('./rotas/')
app.use('/api',api)

const PORT = 3080

if(process.env.NODE_ENV === 'production'){
    app.use(express.static('frontend/build'))

    const path = require('path')
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(__dirname ,'frontend', 'build','index.html'))
    })
}

app.listen(PORT)
