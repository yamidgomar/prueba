const express = require('express')
const router = express.Router()
const response = require('../../network/response')

router.get('/', (req, res) => {
    console.log(req.headers)
    res.header({"nuevo-headers":"header nuevo", "Content-Type":"application/json"})
    res.send([{
        "mime":"application JSONn"
    }])
})

router.post('/', (req, res) => {
    console.log(JSON.stringify(req.body))
    console.log(req.query)
    response.sucess(req, res, '<h1>Hola desde post</h1>', 201)
})

router.delete('/', (req, res) => {
    if(req.query.error == 'ok'){
        response.error(req, res, 'error ocasionado.', '[response error] Este es un error provocado.')
    }else{
        response.sucess(req, res, 'mensaje borrado con exito.')
    } 
})

module.exports = router;
