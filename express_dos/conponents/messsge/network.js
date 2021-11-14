const express = require('express')
const router = express.Router()
const response = require('../../network/response')
const controller = require('./controller')

router.get('/', (req, res) =>{
    console.log(req.headers)
    res.header({
        "My-headers":"nuevo header",
        "Otro-headers":"un header mas"
    })
    response.sucess(req, res, 'hola desde get')
})

router.post('/', (req, res) => {
    //console.log(JSON.stringify(req.body))
    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            //response.sucess(req, res, 'hola desde post', 201)
            response.sucess(req, res, fullMessage, 201)
        })
        .catch(e => {
            response.error(req, res, 'informacion invalida', 400, 'problemas para loggear')
        })
    //console.log(req.query)
})

module.exports = router
