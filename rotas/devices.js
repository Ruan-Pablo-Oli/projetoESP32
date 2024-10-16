const router = require('express').Router()
const Device = require('../model/modelDevices')


router.get('/',async (req,res)=>{
    try{
        const listaDevices = await Device.find()

        res.json({
            sucess:true,
            message:listaDevices
        })
    }catch(err){

    }
})



router.post('/', async (req,res)=>{
    const device = new Device({
        nome:req.body.nome,
        email:req.body.email,
        descricao:req.body.descricao,
        medidas:req.body.medidas,
        imagem:req.body.imagemno
    })
    try{
        const NovoDevice = await device.save()
        res.json({
            sucess:false,
            message:NovoDevice
        })
    }catch{
    res.json({
        sucess:false,
        message:"Não foi possível salvar o novo device"
    })
    }

})

router.put('/:id',async (req,res)=>{
    try{

        const updateDeviceId = await Device.updateOne(
            {_id : req.params.id},
            {kwh : req.body.kwh,
            corrente: req.body.corrente,
            voltagem : req.body.voltagem,
            fp : req.body.fp}
        )
        res.json({
            sucess:true,
            updated: updateDeviceId.nModified
        })

    }catch(err){
          res.json({
            sucess:false,
            message:"Não foi possível atualizar o device"
          })
    }

})



router.get('/:email', async (req,res) => {
    try{
        const listaMedidas = await Device.find(
            {email : req.params.email}
        )

        res.json({
            sucess:true,
            message:listaMedidas
        })
    }catch(err){
        res.json({
            sucess:true,
            message:err
        })
    }
})

router.get('/detalhes/:id', async (req,res) => {
    try{
        const device = await Device.findById(
            {_id : req.params.id}
        )

        res.json({
            sucess:true,
            message:device
        })
    }catch(err){
        res.json({
            sucess:true,
            message:err
        })
    }
})

router.delete('/:id', async (req,res) => {

    try{

        if (req && req.params && req.params.id) {
            const device = await Device.deleteOne({
                _id : req.params.id
            })

            res.json({
                sucess:true,
                message : device
            })
        }else{
            console.log("Parámetro undefined")
        }


    }catch(err){
        console.log(err)
    }
})



module.exports = router