const express = require('express')
const router = express.Router()
const response = require('../../network/response')

router.get('/', (req, res) =>{
    const headers = req.headers
    console.log(headers)
    res.header({
        "nuevo_header":"Un header mas",
        "geolocalizacion":"Cienaga"
    })
    response.success(req,res,'hola desde get')
})

router.post('/', (req, res) => {
    console.log(req.body)
    console.log(req.query)
    response.success(req,res,'hola desde post',201)
})

module.exports = router
