const mongoose = require('mongoose')
 

mongoose.connect(process.env.MONGO_CONNECT).then(() =>{console.log("Connect!")}).catch((error)=>{console.error("Erro de conexão: ",error)})

    