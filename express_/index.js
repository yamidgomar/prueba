/*
const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const response = require('./network/response')
const app = express()

app.use(bodyParser.json())
app.use(router)
app.use('/app', express.static('public'))

router.get('/', (req, res) => {
    console.log(req.headers)
    res.header({
        "Mi-nuevo-header":"El header"
    })
    response.sucess(req, res, '<h1>Lista de mensajes.</h1>')
})

router.post('/mensajes', (req, res) => {
    console.log(JSON.stringify(req.body))
    console.log(req.query)
    response.sucess(req, res,'<h1>Mensaje añadido correctamente.</h1>', 201)
})

router.delete('/mensajes', (req, res) => {
    console.log(req.query)
    if(req.query.error == 'ok'){
        response.error(req, res, 'Error inesperado', 400)
    }else{
        response.sucess(req, res, 'mensaje eliminado correctamente', 201)
    }
})
app.listen(3000)

console.log('Servidor funcionando en puerto 3000')

*/

const express = require('express')
const bodyParser = require('body-parser')
const message= require('./components/message/network') 
const router = require('./network/routes')
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
//app.use(router)
app.use('/app', express.static('public'))
router(app)

app.listen(3000)
console.log('App corriendo en puerto 3000')
