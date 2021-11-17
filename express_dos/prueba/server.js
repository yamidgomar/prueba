const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const router = express.Router()
const response = require('./network/response')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(router)

router.get('/message', (req, res) => {
    console.log(req.headers)
    res.header({
        "Mi_nuevo":"_Header",
        "Otro": "_Header"
    })
    response.sucess(req,res,'<h1>Lista de mensajes</h1>', 200)
})

router.post('/message', (req, res) => {
    console.log(req.body)
    console.log(req.query)
    response.sucess(req,res,'<h1>Mensaje guardado con exito.</h1>', 201)
})

app.listen(3000)

console.log('servidor corriendo en puerto 3000')
