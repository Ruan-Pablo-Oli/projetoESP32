const express = require('express')
const app = express()
const bodyParser = require('body-parser')

require('dotenv').config()


app.use(bodyParser.json())
const api = require('./rotas/')
app.use('/api',api)

const PORT = process.env.PORT

console.log(process.env.MONGO_PASS)

app.get('/',(req,res)=>{
    res.json({
        sucess:true
    })
})


app.listen(PORT)
