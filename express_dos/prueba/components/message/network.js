const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')
router.get('/', (req,res) => {
    console.log(req.headers)
    res.header({
        "header":"nuevo",
        "otro-header":"otro header mas"
    })

    response.sucess(req,res,'hola desde get')
})

router.post('/', (req,res) => {
    //console.log(req.body)
    //console.log(req.query)
    controller.addMessage(req.body.user, req.body.message)
        .then(() => {
            response.sucess(req,res,'hola desde post', 201)
        })
        .catch(e => {
            response.error(req,res, 'Error ocasionado', e)
        })
        
})


router.delete('/', (req,res) => {
    console.log(req.query)
    if(req.query.error === 'ok'){
        response.error(req,res, 'Error ocasionado', '[ERRO] Este es un error provocado')
    }else{
        response.sucess(req,res, 'elememto elimimado')
    }
})
module.exports = router;
