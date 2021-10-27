/*const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router()
const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(router)

router.get('/', function(req, res){
    console.log(req.headers)
    res.header({
        "text-header":"header nuevo",
        "custom-header":"otro hesder mas"
    })
    res.send('<h1>Hola desde get</h1>')
})

router.post('/message', function(req, res){
    console.log(JSON.stringify(req.body))
    console.log(req.query)
    
    res.status(201).send('<h1>Hola desde post</h1>')
})

app.listen(3000)

console.log('Servidor funcionando en puerto 3000')
*/

const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const response = require('./network/response')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(router)

router.get('/', (req, res) =>{
    console.log(req.headers)
    res.header({
        "mi-header":"nuevo header",
        "otro-header":"otro header"
    })
    response.sucess(req, res ,'Lista de mensajes' )
})

router.post('/message', (req, res) =>{
    console.log(JSON.stringify(req.body))
    console.log(req.query)
    response.sucess(req, res, 'Mensaje añadido', 201)
})

app.listen(3000)
console.log('Servidor corriendo en puerto 3000')
