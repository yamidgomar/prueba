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
