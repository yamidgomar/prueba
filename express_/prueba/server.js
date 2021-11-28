const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const router = express.Router()

app.use('/app', express.static('public'))
app.use(bodyParser.json())
app.use(router)

router.get('/message', (req,res) => {
    console.log(req.headers)
    res.header({
        "nuevo-head":"el header",
        "mas-header":"el ultimo",
    })
    res.send('hola desde get')
})

router.post('/message', (req,res) => {
    console.log(req.body)
    console.log(req.query)
    res.status(201).send('hola desde post')
})

app.listen(3000)
console.log('Servidor corriendo en puerto 3000')
