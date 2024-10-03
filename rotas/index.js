const router = require('express').Router()
require('./mongoDB/mongoconnect')


const devices = require('./devices')
router.use('/devices',devices)



router.get('/',(req,res)=>{
    res.json({
        sucess:false,
        message:"Caminho reservado!"
    })
})



module.exports = router